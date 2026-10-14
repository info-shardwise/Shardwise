import test from 'node:test'
import assert from 'node:assert/strict'
import realFs from 'node:fs/promises'
import crypto from 'node:crypto'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import matter from 'gray-matter'
import { createPublisher } from '../scripts/blog-automation/publish.mjs'
import { createSheetClient } from '../scripts/blog-automation/sheets.mjs'
import { createProviderRequest } from '../scripts/blog-automation/provider-request.mjs'
import { safeError } from '../scripts/blog-automation/validation.mjs'
import { choosePublication } from '../scripts/blog-automation/schedule.mjs'
import remarkGfm from 'remark-gfm'
import { compileMDX } from 'next-mdx-remote/rsc'
import { renderToStaticMarkup } from 'react-dom/server'
import { verifyRenderedTables } from '../scripts/blog-automation/table-check.mjs'
import { validateApprovedArticle } from '../scripts/blog-automation/validation.mjs'

const approvedPath = 'content/blog-automation/approved/blog-028'
const source = await realFs.readFile(`${approvedPath}.mdx`, 'utf8')
const approval = JSON.parse(await realFs.readFile(`${approvedPath}.json`, 'utf8'))
approval.editorial = {
  usefulness: 8,
  specificity: 8,
  clarity: 8,
  sourceSupport: 8,
  searchIntent: 8,
  blockingIssues: [],
}
const sha = 'a'.repeat(40)
const deploymentId = '12345678-1234-4123-8123-123456789abc'
const hash = (text) => crypto.createHash('sha256').update(text).digest('hex')
const copy = (value) => structuredClone(value)
const response = (body, status = 200, headers = {}) =>
  new Response(typeof body === 'string' ? body : JSON.stringify(body), { status, headers })

function fixture() {
  const files = new Map([
    [`${approvedPath}.mdx`, source],
    [`${approvedPath}.json`, JSON.stringify(approval)],
  ])
  let row = {
    id: 'blog-028',
    keyword: approval.keyword,
    status: 'pending',
    run_id: '',
    attempts: 0,
  }
  const calls = []
  const logs = []
  const writes = []
  const missing = () => Object.assign(new Error('Fixture file absent'), { code: 'ENOENT' })
  const fs = {
    async readFile(file) {
      file = file.replaceAll('\\', '/')
      if (!files.has(file)) throw missing()
      return files.get(file)
    },
    async writeFile(file, value) {
      files.set(file, value)
    },
    async access(file) {
      if (!files.has(file)) throw missing()
    },
    async mkdir() {},
    async readdir(dir) {
      return [...files.keys()]
        .filter((key) => key.startsWith(dir + '/'))
        .map((key) => key.slice(dir.length + 1))
        .filter((key) => !key.includes('/'))
    },
  }
  let completionFailures = 0
  const queue = {
    async read() {
      return { data: copy(row) }
    },
    async update(id, fields, statuses, owner, expected = {}) {
      assert.equal(id, row.id)
      if (statuses && !statuses.includes(row.status)) throw Error('Queue status changed')
      if (owner && row.run_id !== owner) throw Error('Queue claim belongs to another run')
      for (const [key, value] of Object.entries(expected)) assert.equal(row[key], value)
      if (fields.status === 'completed' && completionFailures > 0) {
        completionFailures--
        throw Error('Injected Sheet completion failure')
      }
      writes.push(copy(fields))
      row = { ...row, ...fields }
      return copy(row)
    },
  }
  let deploymentConclusion = 'success'
  let corruptLive = false
  let priorActive = false
  let imageUnavailable = false
  const git = (...args) => {
    calls.push(args)
    if (args[0] === 'log' || args[0] === 'rev-parse') return sha
    if (args[0] === 'diff')
      return `content/blog-automation/records/blog-028.json\ncontent/blog/${matter(source).data.slug}.mdx`
    return ''
  }
  const fetch = async (url) => {
    if (url.includes('/check-runs'))
      return response({
        check_runs: [
          {
            name: 'Cloudflare Pages',
            status: 'completed',
            conclusion: deploymentConclusion,
            details_url: `https://dash.cloudflare.com/pages/view/shardwise/${deploymentId}`,
          },
        ],
      })
    if (url.includes('/actions/runs/'))
      return response({ status: priorActive ? 'in_progress' : 'completed' })
    if (url.startsWith('https://images.unsplash.com'))
      return response('image', imageUnavailable ? 404 : 200, { 'content-type': 'image/jpeg' })
    if (url.includes('/sitemap.xml'))
      return response(`https://shardwise.pages.dev/blogs/${matter(source).data.slug}/`)
    if (url.endsWith('/blogs/'))
      return response(`<h3 id="listing-${matter(source).data.slug}"></h3>`)
    if (url.includes('/blogs/') && files.has('artifacts/blog-publication/state.json'))
      return response(corruptLive ? '<h1>Stale content</h1>' : html())
    return response('Verified reference')
  }
  const make = (run) =>
    createPublisher({
      fs,
      injectedGit: git,
      fetch,
      env: {
        BLOG_ROW_ID: 'blog-028',
        GITHUB_RUN_ID: run,
        GITHUB_REPOSITORY: 'fixture/repo',
        GITHUB_TOKEN: 'test-token',
      },
      sheets: async () => queue,
      delay: async () => {},
      logger: { log: (text) => logs.push(text) },
    })
  const state = () => JSON.parse(files.get('artifacts/blog-publication/state.json'))
  const esc = (value) =>
    value
      .replaceAll('&', '&amp;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#x27;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
  function html() {
    const s = state()
    const meta = matter(files.get(s.articlePath)).data
    return `<table><thead><tr><th>Area</th><th>Question</th><th>Evidence</th></tr></thead><tbody><tr><td>Scope</td><td>Check?</td><td>Report</td></tr></tbody></table><h1>${esc(meta.title)}</h1><link rel="canonical" href="${s.articleUrl}"/><meta name="description" content="${esc(meta.description)}"/><meta property="og:image" content="${esc(s.imageUrl)}"/>Photo by <a href="${esc(meta.imageCredit.photographerUrl)}">Photographer</a><script type="application/ld+json">${JSON.stringify({ '@type': 'BlogPosting', datePublished: s.publishDate, image: s.imageUrl })}</script>`
  }
  function build() {
    const s = state()
    files.set(`out/blogs/${s.slug}/index.html`, html())
    files.set('out/sitemap.xml', s.articleUrl)
    files.set('out/blogs/index.html', `<h3 id="listing-${s.slug}"></h3>`)
  }
  function replaceDraft(body) {
    files.set(`${approvedPath}.mdx`, body)
    files.set(`${approvedPath}.json`, JSON.stringify({ ...approval, draftHash: hash(body) }))
  }
  return {
    files,
    calls,
    logs,
    writes,
    make,
    build,
    state,
    replaceDraft,
    get row() {
      return copy(row)
    },
    setRow: (value) => {
      row = { ...row, ...value }
    },
    failCompletion: () => {
      completionFailures = 1
    },
    failDeployment: () => {
      deploymentConclusion = 'failure'
    },
    corruptLive: () => {
      corruptLive = true
    },
    priorActive: () => {
      priorActive = true
    },
    failImage: () => {
      imageUnavailable = true
    },
    fetch,
  }
}

test('duplicate slug does not claim a row or create a commit', async () => {
  const f = fixture()
  f.files.set(`content/blog/${matter(source).data.slug}.mdx`, source)
  await assert.rejects(f.make('1').prepare(), /slug already exists/)
  assert.equal(f.row.status, 'pending')
  assert.equal(f.calls.length, 0)
})

test('duplicate keyword with a different row record is rejected', async () => {
  const f = fixture()
  f.files.set(
    'content/blog-automation/records/blog-099.json',
    JSON.stringify({ keyword: approval.keyword.toUpperCase() }),
  )
  await assert.rejects(f.make('1').prepare(), /Keyword already/)
  assert.equal(f.writes.length, 0)
})

test('another publisher cannot claim the already processing row', async () => {
  const f = fixture()
  f.setRow({ status: 'processing', run_id: '1' })
  await assert.rejects(f.make('2').prepare(), /Only pending/)
  assert.equal(f.row.run_id, '1')
  assert.equal(f.calls.length, 0)
})

test('competing publishers admit only one owner of the pending row', async () => {
  const f = fixture()
  const attempts = await Promise.allSettled([f.make('1').prepare(), f.make('2').prepare()])
  assert.equal(attempts.filter((result) => result.status === 'fulfilled').length, 1)
  assert.equal(attempts.filter((result) => result.status === 'rejected').length, 1)
  assert.equal(f.writes.filter((write) => write.status === 'processing').length, 1)
  assert.ok(['1', '2'].includes(f.row.run_id))
})

test('changed validated draft hash fails before queue writes', async () => {
  const f = fixture()
  f.files.set(`${approvedPath}.mdx`, source + '\nChanged')
  await assert.rejects(f.make('1').prepare(), /Validated draft changed/)
  assert.equal(f.writes.length, 0)
})

test('executable MDX is rejected without evaluation or publication', async () => {
  const f = fixture()
  f.replaceDraft(source + '\n{globalThis.phase4Executed = true}\n')
  await assert.rejects(f.make('1').prepare(), /Executable MDX/)
  assert.equal(globalThis.phase4Executed, undefined)
  assert.equal(f.writes.length, 0)
})

test('broken external reference blocks preparation', async () => {
  const f = fixture()
  const original = f.fetch
  const publisher = createPublisher({
    fs: {
      ...Object.fromEntries([]),
      readFile: async (p) => {
        if (!f.files.has(p)) throw Object.assign(Error('missing'), { code: 'ENOENT' })
        return f.files.get(p)
      },
      readdir: async () => [],
    },
    injectedGit: () => '',
    fetch: async (url) => (url.includes('woocommerce.com') ? response('', 404) : original(url)),
    env: { BLOG_ROW_ID: 'blog-028', GITHUB_RUN_ID: '1' },
    sheets: async () => ({
      read: async () => ({ data: f.row }),
      update: async () => {
        throw Error('Must not claim invalid draft')
      },
    }),
    logger: { log() {} },
  })
  await assert.rejects(publisher.prepare(), /Article link unavailable/)
  assert.equal(f.row.status, 'pending')
})

test('a failed build cannot push main and leaves an actionable failure', async () => {
  const f = fixture()
  const publisher = f.make('1')
  await publisher.prepare()
  await assert.rejects(publisher.push(), /Fixture file absent/)
  await publisher.failure()
  assert.equal(f.row.status, 'failed')
  assert.ok(!f.calls.some((args) => args[0] === 'push'))
})

test('failed deployment never marks completed and retains recoverable publication', async () => {
  const f = fixture()
  const publisher = f.make('1')
  await publisher.prepare()
  f.build()
  await publisher.push()
  f.failDeployment()
  await assert.rejects(publisher.verify(), /Cloudflare deployment failed/)
  await publisher.failure()
  assert.equal(f.row.status, 'deploying')
  assert.ok(!f.writes.some((w) => w.status === 'completed'))
})

test('stale live content cannot be marked completed', async () => {
  const f = fixture()
  const publisher = f.make('1')
  await publisher.prepare()
  f.build()
  await publisher.push()
  f.corruptLive()
  await assert.rejects(publisher.verify())
  assert.equal(f.row.status, 'deploying')
})

test('missing live image prevents completion', async () => {
  const f = fixture()
  const publisher = f.make('1')
  await publisher.prepare()
  f.build()
  await publisher.push()
  f.failImage()
  await assert.rejects(publisher.verify())
  assert.equal(f.row.status, 'deploying')
})

test('failed Sheet completion reconciles without another push or generation', async () => {
  const f = fixture()
  const first = f.make('1')
  await first.prepare()
  f.build()
  await first.push()
  f.failCompletion()
  await assert.rejects(first.verify(), /Injected Sheet/)
  await first.failure()
  const second = f.make('2')
  await second.prepare()
  await second.push()
  await second.verify()
  assert.equal(f.row.status, 'completed')
  assert.equal(f.calls.filter((args) => args[0] === 'push').length, 1)
  assert.equal(f.state().resume, true)
})

test('recovery failure retains deploying rather than reporting an unpushed failure', async () => {
  const f = fixture()
  const first = f.make('1')
  await first.prepare()
  f.build()
  await first.push()
  const retry = f.make('2')
  await retry.prepare()
  f.setRow({ run_id: '2' })
  f.failDeployment()
  await assert.rejects(retry.verify())
  await retry.failure()
  assert.equal(f.row.status, 'deploying')
})

test('recovery will not overwrite a different active run', async () => {
  const f = fixture()
  const first = f.make('1')
  await first.prepare()
  f.build()
  await first.push()
  const second = f.make('2')
  await second.prepare()
  f.priorActive()
  await assert.rejects(second.verify(), /still active/)
  assert.equal(f.row.run_id, '1')
})

test('completed publication can be rerun without another commit', async () => {
  const f = fixture()
  const first = f.make('1')
  await first.prepare()
  f.build()
  await first.push()
  await first.verify()
  const second = f.make('2')
  await second.prepare()
  await second.push()
  await second.verify()
  assert.equal(f.calls.filter((args) => args.includes('commit')).length, 1)
  assert.equal(f.row.status, 'completed')
})

test('quota exhaustion uses bounded requests to the same provider only', async () => {
  const urls = []
  const waits = []
  const request = createProviderRequest({
    fetch: async (url) => {
      urls.push(url)
      return response('exhausted', 429)
    },
    sleep: async (ms) => waits.push(ms),
  })
  await assert.rejects(
    request('https://generativelanguage.googleapis.com/v1beta/models/free:generateContent'),
    /HTTP 429/,
  )
  assert.equal(urls.length, 3)
  assert.equal(new Set(urls).size, 1)
  assert.equal(waits.length, 2)
})

test('transient provider failure can recover within the retry allowance', async () => {
  let calls = 0
  const request = createProviderRequest({
    fetch: async () => (++calls < 3 ? response('', 503) : response('OK')),
    sleep: async () => {},
  })
  assert.equal(await (await request('https://generativelanguage.googleapis.com/test')).text(), 'OK')
})

function sheetFixture(changeOnSecondRead = false) {
  const headers = ['id', 'keyword', 'status', 'run_id', 'updated_at']
  let rows = [
    ['blog-029', 'Other keyword', 'pending', '', ''],
    ['blog-028', approval.keyword, 'pending', '', ''],
  ]
  let reads = 0
  const writes = []
  const client = createSheetClient(async (route, method, body) => {
    if (method === 'PUT') {
      writes.push({ route, body })
      const match = body.range.match(/A(\d+)/)
      rows[Number(match[1]) - 2] = body.values[0]
      return {}
    }
    reads++
    if (changeOnSecondRead && reads === 2) rows.reverse()
    return { values: [headers, ...copy(rows)] }
  })
  return { client, writes }
}

test('sorted rows are looked up by ID, not remembered row number', async () => {
  const f = sheetFixture()
  await f.client.update('blog-028', { status: 'processing', run_id: '1' }, ['pending'])
  assert.equal(f.writes[0].body.range, "'BlogQueue'!A3:S3")
  assert.equal(f.writes[0].body.values[0][0], 'blog-028')
})

test('movement between reads is detected before any write', async () => {
  const f = sheetFixture(true)
  await assert.rejects(
    f.client.update('blog-028', { status: 'processing' }, ['pending']),
    /moved or changed/,
  )
  assert.equal(f.writes.length, 0)
})

test('manual keyword edits and another run owner block a Sheet update', async () => {
  const f = sheetFixture()
  await assert.rejects(
    f.client.update('blog-028', {}, ['pending'], undefined, { keyword: 'Changed keyword' }),
    /data changed/,
  )
  await assert.rejects(f.client.update('blog-028', {}, ['pending'], 'another'), /another run/)
  assert.equal(f.writes.length, 0)
})

test('credential-bearing errors are redacted', () => {
  const env = { GEMINI_API_KEY: 'synthetic-api-secret', GITHUB_TOKEN: 'synthetic-git-secret' }
  const message = safeError(Error('Request synthetic-api-secret synthetic-git-secret'), env)
  assert.ok(!message.includes(env.GEMINI_API_KEY) && !message.includes(env.GITHUB_TOKEN))
  assert.equal(safeError(new SyntaxError('private JSON')), 'Invalid publication JSON')
})

test('tracked text files contain no private keys or recognizable API token values', async () => {
  const tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' })
    .split('\0')
    .filter(Boolean)
  const patterns = [
    /-----BEGIN (?:RSA )?PRIVATE KEY-----\r?\n[A-Za-z0-9+/=\r\n]+-----END/,
    /AIza[0-9A-Za-z_-]{35}/,
    /ghp_[0-9A-Za-z]{36}/,
    /github_pat_[0-9A-Za-z_]{60,}/,
  ]
  for (const file of tracked.filter((name) =>
    /\.(?:mjs|js|ts|tsx|json|md|mdx|yml|yaml|txt|env)$/.test(name),
  )) {
    const body = await realFs.readFile(file, 'utf8')
    assert.ok(
      !patterns.some((pattern) => pattern.test(body)),
      `Possible credential in ${file}; value withheld`,
    )
  }
})

test('workflow serializes publications and runs failure tests before preparing', async () => {
  const yaml = await realFs.readFile('.github/workflows/blog-publish.yml', 'utf8')
  assert.ok(
    yaml.includes('group: blog-automation-publish') && yaml.includes('cancel-in-progress: false'),
  )
  assert.ok(
    yaml.indexOf('node --test tests/blog-automation.test.mjs') <
      yaml.indexOf('publish.mjs prepare'),
  )
})

test('reverting a publication preserves an unrelated later commit', async () => {
  const dir = await realFs.mkdtemp(path.join(os.tmpdir(), 'shardwise-phase4-'))
  const git = (...args) =>
    execFileSync('git', args, {
      cwd: dir,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim()
  git('init')
  git('config', 'user.name', 'Phase 4 test')
  git('config', 'user.email', 'test@example.invalid')
  await realFs.writeFile(path.join(dir, 'baseline.txt'), 'baseline')
  git('add', '.')
  git('-c', 'core.hooksPath=/dev/null', 'commit', '-m', 'baseline')
  await realFs.writeFile(path.join(dir, 'article.mdx'), 'test article')
  git('add', 'article.mdx')
  git('-c', 'core.hooksPath=/dev/null', 'commit', '-m', 'publication')
  const publication = git('rev-parse', 'HEAD')
  await realFs.writeFile(path.join(dir, 'unrelated.txt'), 'keep this change')
  git('add', 'unrelated.txt')
  git('-c', 'core.hooksPath=/dev/null', 'commit', '-m', 'unrelated change')
  git('-c', 'core.hooksPath=/dev/null', 'revert', '--no-edit', publication)
  assert.equal(await realFs.readFile(path.join(dir, 'unrelated.txt'), 'utf8'), 'keep this change')
  await assert.rejects(realFs.access(path.join(dir, 'article.mdx')))
  assert.ok(git('log', '--format=%s').includes('unrelated change'))
})

function scheduleFixture() {
  return {
    rows: [
      {
        id: 'blog-029',
        keyword: 'WooCommerce support services',
        status: 'pending',
        scheduled_date: '',
      },
    ],
    records: [],
    approvals: {
      'blog-029': {
        approved: true,
        editorialScore: 8,
        keyword: 'WooCommerce support services',
        hashVerified: true,
      },
    },
    settings: {
      scheduledPublishingEnabled: true,
      automaticGenerationEnabled: true,
      dailyArticleLimit: 1,
    },
    today: '2026-10-15',
  }
}

test('scheduler selects a due keyword for automatic generation', () => {
  const decision = choosePublication(scheduleFixture())
  assert.equal(decision.ready, true)
  assert.equal(decision.rowId, 'blog-029')
})

test('scheduler generates the first due keyword without requiring approval', () => {
  const input = scheduleFixture()
  input.approvals = {}
  input.rows.push({ id: 'blog-030', keyword: 'Later topic', status: 'pending' })
  input.approvals['blog-030'] = {
    approved: true,
    editorialScore: 9,
    keyword: 'Later topic',
    hashVerified: true,
  }
  const decision = choosePublication(input)
  assert.equal(decision.ready, true)
  assert.equal(decision.generate, true)
  assert.equal(decision.rowId, 'blog-029')
})

test('scheduler enforces one new publication per India calendar date', () => {
  const input = scheduleFixture()
  input.records.push({ rowId: 'blog-028', publishDate: input.today })
  const decision = choosePublication(input)
  assert.equal(decision.ready, false)
  assert.match(decision.reason, /Daily/)
})

test('recovery can run without consuming another daily publication', () => {
  const input = scheduleFixture()
  input.rows[0].status = 'deploying'
  input.records.push({ rowId: 'blog-029', publishDate: input.today })
  const decision = choosePublication(input)
  assert.equal(decision.ready, true)
  assert.equal(decision.recovery, true)
})

test('future-dated keyword is not published early', () => {
  const input = scheduleFixture()
  input.rows[0].scheduled_date = '2026-10-16'
  assert.equal(choosePublication(input).ready, false)
  assert.equal(choosePublication({ ...input, requested: 'blog-029' }).ready, false)
})

test('disabled generation cannot fall back to manual approval', () => {
  const input = scheduleFixture()
  input.settings.automaticGenerationEnabled = false
  assert.equal(choosePublication(input).ready, false)
  assert.throws(() => choosePublication({ ...input, requested: 'blog-999' }), /missing/)
})

test('disabling schedule permits manual recovery but no automatic run', () => {
  const input = scheduleFixture()
  input.settings.scheduledPublishingEnabled = false
  input.rows[0].status = 'completed'
  input.records.push({ rowId: 'blog-029', publishDate: '2026-10-14' })
  assert.equal(choosePublication(input).ready, false)
  assert.equal(choosePublication({ ...input, requested: 'blog-029' }).recovery, true)
})

test('schedule uses 03:30 UTC for 09:00 Asia/Kolkata', async () => {
  const yaml = await realFs.readFile('.github/workflows/blog-publish.yml', 'utf8')
  assert.ok(yaml.includes("cron: '30 3 * * *'"))
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date('2026-10-15T03:30:00Z'))
  assert.equal(time, '09:00')
})

test('published comparison renders three headers and six evidence rows', async () => {
  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: true, mdxOptions: { remarkPlugins: [remarkGfm] } },
  })
  const html = renderToStaticMarkup(content)
  verifyRenderedTables(matter(source).content, html)
  assert.equal((html.match(/<th>/g) || []).length, 3)
  assert.equal((html.match(/<td>/g) || []).length, 18)
  assert.ok(!html.includes('| Area |'))
})

test('table cells retain escaped pipe text', async () => {
  const md = '| Area | Evidence |\n| --- | --- |\n| Theme \\| plugin | Tested |'
  const { content } = await compileMDX({
    source: md,
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  })
  const html = renderToStaticMarkup(content)
  verifyRenderedTables(md, html)
  assert.ok(html.includes('Theme | plugin'))
})

test('pipeline rejects missing HTML table conversion', () => {
  assert.throws(
    () => verifyRenderedTables('| A | B |\n| --- | --- |\n| X | Y |', '<p>| A | B |</p>'),
    /did not render/,
  )
})

test('pipeline rejects short table rows', async () => {
  await assert.rejects(
    validateApprovedArticle(matter(source).data, '| A | B | C |\n| --- | --- | --- |\n| X | Y |'),
    /match header columns/,
  )
})

test('publication rejects listing data without a visible article card', async () => {
  const f = fixture()
  const publisher = f.make('1')
  await publisher.prepare()
  f.build()
  f.files.set('out/blogs/index.html', f.state().slug)
  await assert.rejects(publisher.push(), /card missing/)
  assert.equal(f.calls.filter((args) => args[0] === 'push').length, 0)
})

test('automatic scheduling generates a due keyword without human approval', () => {
  const input = scheduleFixture()
  input.settings.automaticGenerationEnabled = true
  input.approvals = {}
  const decision = choosePublication(input)
  assert.equal(decision.ready, true)
  assert.equal(decision.generate, true)
  assert.equal(decision.rowId, 'blog-029')
  input.records.push({ rowId: 'blog-028', publishDate: input.today })
  assert.equal(choosePublication(input).ready, false)
})
test('automatic recovery does not regenerate a committed article', () => {
  const input = scheduleFixture()
  input.settings.automaticGenerationEnabled = true
  input.rows[0].status = 'deploying'
  input.records.push({ rowId: 'blog-029' })
  const decision = choosePublication(input)
  assert.equal(decision.recovery, true)
  assert.notEqual(decision.generate, true)
})
test('Node editorial gate enforces every dimension and blockers', async () => {
  const { enforceEditorialGate } = await import('../scripts/blog-automation/editorial-gate.mjs')
  const review = {
    usefulness: 8.5,
    specificity: 8.5,
    clarity: 8.5,
    sourceSupport: 8.5,
    searchIntent: 8.5,
    blockingIssues: [],
  }
  assert.equal(enforceEditorialGate(review), 8.5)
  assert.throws(() => enforceEditorialGate({ ...review, sourceSupport: 7 }))
  assert.throws(() =>
    enforceEditorialGate({ ...review, blockingIssues: ['Unsupported guarantee'] }),
  )
  assert.throws(() => enforceEditorialGate({ ...review, usefulness: NaN }))
  assert.throws(() =>
    enforceEditorialGate({
      ...review,
      usefulness: 7.5,
      specificity: 7.5,
      clarity: 7.5,
      sourceSupport: 7.5,
      searchIntent: 7.5,
    }),
  )
})
test('workflow generates and validates before preparing publication', async () => {
  const y = await realFs.readFile('.github/workflows/blog-publish.yml', 'utf8')
  assert.ok(
    y.indexOf('run: node scripts/blog-automation/dry-run.mjs') <
      y.indexOf('run: node scripts/blog-automation/publish.mjs prepare'),
  )
  assert.ok(y.includes("AUTOMATED_GENERATION: '1'"))
  assert.ok(y.includes('secrets.GEMINI_API_KEY'))
})

test('publisher needs no human approval flag when automated benchmark passes', async () => {
  const f = fixture()
  const report = { ...approval }
  delete report.approved
  f.files.set(approvedPath + '.json', JSON.stringify(report))
  await f.make('1').prepare()
  assert.equal(f.row.status, 'processing')
})
test('publisher rejects a human approval flag without automatic benchmark', async () => {
  const f = fixture()
  const report = { ...approval, approved: true }
  delete report.editorial
  f.files.set(approvedPath + '.json', JSON.stringify(report))
  await assert.rejects(f.make('1').prepare(), /Automated editorial report required/)
  assert.equal(f.writes.length, 0)
})

test('official W3C and Google Business references pass the source allowlist', async () => {
  const { data, content } = matter(source)
  await validateApprovedArticle(
    data,
    content +
      '\n\n[Accessible forms](https://www.w3.org/WAI/tutorials/forms/)\n\n[Local ranking guidance](https://support.google.com/business/answer/7091?hl=en)',
    async () => 200,
  )
})
