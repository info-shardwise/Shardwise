import test from 'node:test'
import assert from 'node:assert/strict'
import { onRequest } from '../functions/api/contact.js'
const env = Object.fromEntries(
  [
    'SUPABASE_URL',
    'SUPABASE_SERVICE_ROLE_KEY',
    'GMAIL_CLIENT_ID',
    'GMAIL_CLIENT_SECRET',
    'GMAIL_REFRESH_TOKEN',
    'TURNSTILE_SITE_KEY',
    'TURNSTILE_SECRET_KEY',
  ].map((k) => [k, 'test']),
)
env.SUPABASE_URL = 'https://test.supabase.co'
env.GMAIL_SENDER = env.GMAIL_RECIPIENT = 'owner@example.com'
const input = {
  name: 'Visitor',
  email: 'visitor@example.com',
  service: 'Web',
  message: 'Hello 世界',
  token: 'valid',
  id: '12345678-1234-4123-8123-123456789abc',
}
const request = (data = input, origin = 'https://shardwise.pages.dev') =>
  new Request('https://shardwise.pages.dev/api/contact', {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
const json = (data, status = 200) => Response.json(data, { status })
const valid = () => json({ success: true, hostname: 'shardwise.pages.dev', action: 'contact' })
async function run(sequence, data = input) {
  const calls = []
  const original = globalThis.fetch
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options })
    const next = sequence.shift()
    if (!next) throw Error('Unexpected fetch')
    return next(url, options)
  }
  try {
    return { response: await onRequest({ request: request(data), env }), calls }
  } finally {
    globalThis.fetch = original
  }
}
test('rejects requests from another origin', async () => {
  assert.equal(
    (await onRequest({ request: request(input, 'https://evil.example'), env })).status,
    403,
  )
})
test('rejects header injection and oversize messages', async () => {
  for (const data of [
    { ...input, email: 'visitor@example.com\r\nBcc: attacker@example.com' },
    { ...input, message: 'x'.repeat(5001) },
  ])
    assert.equal((await onRequest({ request: request(data), env })).status, 400)
})
test('rejects invalid challenge without touching storage', async () => {
  const { response, calls } = await run([() => json({ success: false })])
  assert.equal(response.status, 400)
  assert.equal(calls.length, 1)
})
test('storage failure never reports success or sends Gmail', async () => {
  const { response, calls } = await run([valid, () => json({}, 500)])
  assert.equal(response.status, 503)
  assert.equal(calls.length, 2)
})
test('stores inquiry before Gmail and sets visitor Reply-To', async () => {
  const { response, calls } = await run([
    valid,
    () => new Response(null, { status: 201 }),
    () => json({ access_token: 'test' }),
    (_url, options) => {
      const raw = Buffer.from(JSON.parse(options.body).raw, 'base64url').toString()
      assert.match(raw, /Reply-To: visitor@example.com/)
      assert.match(raw, /charset=UTF-8/)
      return json({ id: 'mail-id' })
    },
    () => new Response(null, { status: 204 }),
  ])
  assert.equal(response.status, 200)
  assert.match(calls[1].url, /contact_submissions$/)
  assert.equal(JSON.parse(calls[4].options.body).notification_status, 'sent')
})
test('Gmail failure preserves durable receipt and records failure', async () => {
  const { response, calls } = await run([
    valid,
    () => new Response(null, { status: 201 }),
    () => json({}, 400),
    () => new Response(null, { status: 204 }),
  ])
  assert.equal(response.status, 200)
  assert.equal(JSON.parse(calls[3].options.body).notification_status, 'failed')
})
test('retry of identical saved submission does not send another email', async () => {
  const { response, calls } = await run([valid, () => json({}, 409), () => json([input])])
  assert.equal(response.status, 200)
  assert.equal(calls.length, 3)
})
test('duplicate ID with changed details is rejected', async () => {
  const { response } = await run([
    valid,
    () => json({}, 409),
    () => json([{ ...input, message: 'Different' }]),
  ])
  assert.equal(response.status, 409)
})
