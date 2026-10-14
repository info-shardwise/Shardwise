import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { execFileSync } from 'node:child_process'
import assert from 'node:assert/strict'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import { sheets } from './sheets.mjs'

const id = process.env.BLOG_ROW_ID
assert.match(id || '', /^blog-\d{3}$/)
const recordPath = `content/blog-automation/records/${id}.json`
const statePath = 'artifacts/blog-publication/state.json'
const runId = process.env.GITHUB_RUN_ID || 'local'
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim()
const hash = (text) => crypto.createHash('sha256').update(text).digest('hex')
const origin = 'https://shardwise.pages.dev'
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
async function load(file) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'))
  } catch (error) {
    if (error.code === 'ENOENT') return null
    throw error
  }
}
async function save(state) {
  await fs.mkdir(path.dirname(statePath), { recursive: true })
  await fs.writeFile(statePath, JSON.stringify(state, null, 2))
}

async function prepare() {
  const queue = await sheets()
  const row = await queue.read(id)
  const existing = await load(recordPath)
  if (existing) {
    const source = await fs.readFile(existing.articlePath, 'utf8')
    assert.equal(
      hash(source),
      existing.contentHash,
      'Published article differs from record; reconcile manually',
    )
    assert.equal(existing.rowId, id)
    assert.equal(existing.keyword, row.data.keyword, 'Queue keyword changed')
    const commit = git('log', '-1', '--format=%H', '--', recordPath)
    assert.ok(commit)
    await save({ ...existing, commit, resume: true })
    console.log('Existing publication found; resume verification without regenerating or pushing')
    return
  }
  assert.equal(row.data.status, 'pending', 'Only pending rows may create a new publication')
  const approved = await load(`content/blog-automation/approved/${id}.json`)
  assert.ok(approved?.approved && approved.editorialScore >= 8, 'Reviewed draft approval required')
  assert.equal(approved.keyword, row.data.keyword)
  const source = await fs.readFile(`content/blog-automation/approved/${id}.mdx`, 'utf8')
  assert.equal(hash(source), approved.draftHash, 'Approved draft changed')
  const { data, content } = matter(source)
  assert.match(data.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  assert.equal(data.published, false)
  assert.ok(data.image.startsWith('https://images.unsplash.com/'))
  const articlePath = `content/blog/${data.slug}.mdx`
  try {
    await fs.access(articlePath)
    throw new Error('Article slug already exists without a matching publication record')
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
  const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date())
  const article = matter.stringify(content, { ...data, date, published: true })
  await compileMDX({ source: article, options: { parseFrontmatter: true } })
  await queue.update(
    id,
    {
      status: 'processing',
      run_id: runId,
      started_at: new Date().toISOString(),
      attempts: Number(row.data.attempts || 0) + 1,
      error: '',
    },
    ['pending'],
  )
  const record = {
    rowId: id,
    keyword: row.data.keyword,
    slug: data.slug,
    articlePath,
    articleUrl: `${origin}/blogs/${data.slug}/`,
    publishDate: date,
    imageUrl: data.image,
    contentHash: hash(article),
    approvalHash: approved.draftHash,
    approvedScore: approved.editorialScore,
    createdAt: new Date().toISOString(),
  }
  await fs.writeFile(articlePath, article)
  await fs.mkdir(path.dirname(recordPath), { recursive: true })
  await fs.writeFile(recordPath, JSON.stringify(record, null, 2) + '\n')
  await save({ ...record, resume: false })
  console.log(`Prepared approved article ${id}; publication date ${date}`)
}

async function verifyHtml(read, state) {
  const article = matter(await fs.readFile(state.articlePath, 'utf8')).data
  const html = await read(`blogs/${state.slug}/index.html`)
  const escape = (value) =>
    value
      .replaceAll('&', '&amp;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#x27;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
  assert.ok(html.includes(`<h1`) && html.includes(escape(article.title)))
  assert.ok(html.includes(`rel="canonical" href="${state.articleUrl}"`))
  assert.ok(html.includes(`name="description" content="${escape(article.description)}"`))
  assert.ok(html.includes(`property="og:image" content="${escape(state.imageUrl)}"`))
  assert.ok(html.includes('Photo by') && html.includes(escape(article.imageCredit.photographerUrl)))
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(
    (m) => JSON.parse(m[1]),
  )
  const schema = schemas
    .flatMap((s) => s['@graph'] || [s])
    .find((s) => s['@type'] === 'BlogPosting')
  assert.equal(schema?.datePublished, state.publishDate)
  assert.equal(schema?.image, state.imageUrl)
  assert.ok((await read('sitemap.xml')).includes(`/blogs/${state.slug}`))
  assert.ok((await read('blogs/index.html')).includes(state.slug))
}

async function push() {
  const state = await load(statePath)
  if (state.resume) return
  await verifyHtml((file) => fs.readFile(path.join('out', file), 'utf8'), state)
  const queue = await sheets()
  const current = await queue.read(id)
  assert.equal(current.data.keyword, state.keyword)
  assert.equal(current.data.status, 'processing')
  assert.equal(current.data.run_id, runId)
  await queue.update(
    id,
    {
      status: 'deploying',
      slug: state.slug,
      publish_date: state.publishDate,
      article_url: state.articleUrl,
      image_url: state.imageUrl,
    },
    ['processing'],
    runId,
  )
  git('config', 'user.name', 'Shardwise Blog Automation')
  git('config', 'user.email', '41898282+github-actions[bot]@users.noreply.github.com')
  git('add', '--', state.articlePath, recordPath)
  const staged = git('diff', '--cached', '--name-only').split('\n').sort()
  assert.deepEqual(staged, [state.articlePath, recordPath].sort(), 'Unexpected staged changes')
  git(
    '-c',
    'core.hooksPath=/dev/null',
    'commit',
    '-m',
    `Publish reviewed blog ${id}: ${state.slug}`,
  )
  state.commit = git('rev-parse', 'HEAD')
  await save(state)
  git('push', 'origin', 'HEAD:main')
  state.pushed = true
  await save(state)
  await queue.update(id, { commit_sha: state.commit }, ['deploying'], runId)
  console.log(`Pushed ${id} at ${state.commit}`)
}

async function verify() {
  const state = await load(statePath)
  assert.ok(state.commit)
  let deployment
  for (let attempt = 0; attempt < 45; attempt++) {
    const response = await fetch(
      `https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/commits/${state.commit}/check-runs`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
        },
        signal: AbortSignal.timeout(30000),
      },
    )
    if (!response.ok) throw new Error(`GitHub deployment status HTTP ${response.status}`)
    const result = await response.json()
    const check = result.check_runs?.find((c) => c.name === 'Cloudflare Pages')
    if (check?.status === 'completed') {
      assert.equal(check.conclusion, 'success', 'Cloudflare deployment failed')
      const deploymentId = check.details_url?.match(/shardwise\/([a-f0-9-]{36})/)?.[1]
      assert.ok(deploymentId, 'Cloudflare deployment ID missing')
      deployment = {
        deploymentId,
        deploymentUrl: `https://${deploymentId.slice(0, 8)}.shardwise.pages.dev`,
      }
      break
    }
    await sleep(10000)
  }
  assert.ok(deployment, 'Deployment verification timed out; resume this row later')
  const readLive = (base) => async (file) => {
    const route = file.replace(/index\.html$/, '')
    const response = await fetch(`${base}/${route}`, { signal: AbortSignal.timeout(30000) })
    assert.equal(response.status, 200, `Live route unavailable: ${route}`)
    return response.text()
  }
  await verifyHtml(readLive(deployment.deploymentUrl), state)
  await verifyHtml(readLive(origin), state)
  const image = await fetch(state.imageUrl, { signal: AbortSignal.timeout(30000) })
  assert.equal(image.status, 200)
  assert.ok(image.headers.get('content-type')?.startsWith('image/'))
  const queue = await sheets()
  const current = await queue.read(id)
  assert.equal(current.data.keyword, state.keyword)
  assert.ok(
    ['pending', 'failed', 'deploying', 'processing', 'completed'].includes(current.data.status),
  )
  // A committed record is authoritative for recovery, but never override another active run.
  if (
    ['processing', 'deploying'].includes(current.data.status) &&
    current.data.run_id &&
    current.data.run_id !== runId
  ) {
    const prior = await fetch(
      `https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/actions/runs/${current.data.run_id}`,
      { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } },
    )
    assert.equal(prior.status, 200, 'Previous run cannot be reconciled')
    assert.equal((await prior.json()).status, 'completed', 'Previous publication run still active')
  }
  await queue.update(id, {
    status: 'completed',
    slug: state.slug,
    publish_date: state.publishDate,
    article_url: state.articleUrl,
    image_url: state.imageUrl,
    commit_sha: state.commit,
    deployment_id: deployment.deploymentId,
    error: '',
    run_id: runId,
  })
  await save({ ...state, ...deployment, verifiedAt: new Date().toISOString(), completed: true })
  console.log(`PASS: exact commit deployment and production verified; ${id} completed`)
}

async function failure() {
  const queue = await sheets()
  const current = await queue.read(id)
  if (current.data.run_id !== runId || current.data.status === 'completed') return
  const state = await load(statePath)
  await queue.update(
    id,
    {
      status: state?.pushed ? 'deploying' : 'failed',
      error: state?.pushed
        ? 'Publication pushed; resume manual workflow to verify deployment'
        : 'Preparation/build/push failed; inspect workflow before retrying',
    },
    ['processing', 'deploying'],
    runId,
  )
}

const operations = { prepare, push, verify, failure }
try {
  assert.ok(operations[process.argv[2]], 'Invalid publication operation')
  await operations[process.argv[2]]()
} catch (error) {
  console.error(error instanceof SyntaxError ? 'Invalid publication JSON' : error.message)
  process.exitCode = 1
}
