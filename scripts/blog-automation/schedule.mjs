import fs from 'node:fs/promises'
import crypto from 'node:crypto'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { sheets } from './sheets.mjs'
import { safeError } from './validation.mjs'

export function choosePublication({
  rows,
  records,
  approvals,
  settings,
  today,
  requested = 'auto',
}) {
  if (requested !== 'auto') {
    if (!/^blog-\d{3}$/.test(requested)) throw new Error('Invalid requested row ID')
    const row = rows.find((row) => row.id === requested)
    if (!row) throw new Error('Requested queue row missing')
    if (records.some((record) => record.rowId === row.id))
      return { ready: true, rowId: row.id, reason: 'Resume existing publication', recovery: true }
    return eligible(row)
  }
  if (!settings.scheduledPublishingEnabled)
    return { ready: false, reason: 'Scheduled publication disabled' }
  const interrupted = rows.find(
    (row) =>
      ['deploying', 'failed', 'processing'].includes(row.status) &&
      records.some((record) => record.rowId === row.id),
  )
  if (interrupted)
    return {
      ready: true,
      rowId: interrupted.id,
      reason: 'Recover committed publication',
      recovery: true,
    }
  const row = rows.find(
    (row) => row.status === 'pending' && (!row.scheduled_date || row.scheduled_date <= today),
  )
  if (!row) return { ready: false, reason: 'No due pending keyword' }
  return eligible(row)

  function eligible(row) {
    if (row.status !== 'pending')
      return { ready: false, rowId: row.id, reason: 'Row needs manual status review' }
    if (row.scheduled_date && row.scheduled_date > today)
      return { ready: false, rowId: row.id, reason: 'Keyword scheduled for a future date' }
    const approval = approvals[row.id]
    if (
      !approval?.approved ||
      approval.editorialScore < 8 ||
      approval.keyword !== row.keyword ||
      !approval.hashVerified
    )
      return {
        ready: false,
        rowId: row.id,
        reason: 'Next keyword needs a reviewed draft and matching approval',
      }
    if (
      records.filter((record) => record.publishDate === today).length >= settings.dailyArticleLimit
    )
      return { ready: false, rowId: row.id, reason: 'Daily publication limit reached' }
    return {
      ready: true,
      rowId: row.id,
      reason: 'Reviewed draft ready for publication',
      recovery: false,
    }
  }
}

async function readJson(file) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'))
  } catch (error) {
    if (error.code === 'ENOENT') return null
    throw error
  }
}

async function run() {
  const settings = await readJson('content/blog-automation/settings.json')
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: settings.timezone }).format(new Date())
  const queue = await sheets()
  const rows = await queue.list()
  const records = []
  for (const name of await fs.readdir('content/blog-automation/records')) {
    if (name.endsWith('.json'))
      records.push(await readJson(`content/blog-automation/records/${name}`))
  }
  const approvals = {}
  for (const row of rows) {
    if (!/^blog-\d{3}$/.test(row.id)) throw new Error('Invalid queue ID')
    const approval = await readJson(`content/blog-automation/approved/${row.id}.json`)
    if (approval) {
      const body = await fs.readFile(`content/blog-automation/approved/${row.id}.mdx`, 'utf8')
      approvals[row.id] = {
        ...approval,
        hashVerified: crypto.createHash('sha256').update(body).digest('hex') === approval.draftHash,
      }
    }
  }
  const decision = choosePublication({
    rows,
    records,
    approvals,
    settings,
    today,
    requested: process.env.REQUESTED_ROW_ID || 'auto',
  })
  await fs.mkdir('artifacts/blog-publication', { recursive: true })
  await fs.writeFile(
    'artifacts/blog-publication/schedule-decision.json',
    JSON.stringify(
      {
        ...decision,
        date: today,
        timezone: settings.timezone,
        queueRows: rows.length,
        pendingRows: rows.filter((row) => row.status === 'pending').length,
        selectedAt: new Date().toISOString(),
      },
      null,
      2,
    ),
  )
  if (process.env.GITHUB_OUTPUT)
    await fs.appendFile(
      process.env.GITHUB_OUTPUT,
      `ready=${decision.ready}\nrow_id=${decision.ready ? decision.rowId : ''}\n`,
    )
  if (process.env.GITHUB_STEP_SUMMARY)
    await fs.appendFile(
      process.env.GITHUB_STEP_SUMMARY,
      `## Blog schedule\n\nDate: ${today} (${settings.timezone}).\n\n${decision.reason}. ${decision.rowId || ''}\n\nSchedule: ${settings.scheduleCronUtc} UTC (${settings.timezone}); at most one new publication per day. No unreviewed article is published.\n`,
    )
  console.log(JSON.stringify(decision))
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    await run()
  } catch (error) {
    console.error(safeError(error, process.env))
    process.exitCode = 1
  }
}
