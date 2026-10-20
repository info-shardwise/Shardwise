import test from 'node:test'
import assert from 'node:assert/strict'
import { onRequest } from '../functions/api/health/supabase.js'

const env = { SUPABASE_URL: 'https://test.supabase.co', SUPABASE_SERVICE_ROLE_KEY: 'private-key' }
const request = new Request('https://shardwise.pages.dev/api/health/supabase')

test('probe performs a bounded private read and returns no contact data', async () => {
  const original = globalThis.fetch
  globalThis.fetch = async (url, options) => {
    assert.equal(url.href, 'https://test.supabase.co/rest/v1/contact_submissions?select=id&limit=1')
    assert.equal(options.headers.apikey, 'private-key')
    assert.equal(options.redirect, 'error')
    assert.ok(options.signal)
    return Response.json([{ id: 'private-contact-id' }])
  }
  try {
    const response = await onRequest({ request, env })
    assert.equal(response.status, 200)
    assert.equal(response.headers.get('Cache-Control'), 'no-store')
    assert.deepEqual(await response.json(), { ok: true })
  } finally {
    globalThis.fetch = original
  }
})

test('paused database, invalid credentials, malformed response and timeouts fail closed', async () => {
  const original = globalThis.fetch
  try {
    for (const result of [
      () => Response.json({ secret: 'private-key' }, { status: 503 }),
      () => new Response('unauthorized', { status: 401 }),
      () => Response.json({ error: 'unexpected' }),
      () => new Response('<html>not a database</html>'),
      () => {
        throw new DOMException('private-key', 'TimeoutError')
      },
    ]) {
      globalThis.fetch = async () => result()
      const response = await onRequest({ request, env })
      assert.equal(response.status, 503)
      assert.deepEqual(await response.json(), { ok: false })
    }
  } finally {
    globalThis.fetch = original
  }
})

test('missing configuration and unsupported methods make no database requests', async () => {
  const original = globalThis.fetch
  globalThis.fetch = async () => {
    assert.fail('Unexpected database request')
  }
  try {
    assert.equal((await onRequest({ request, env: {} })).status, 503)
    assert.equal(
      (await onRequest({ request: new Request(request, { method: 'POST' }), env })).status,
      405,
    )
  } finally {
    globalThis.fetch = original
  }
})

test('an empty contact table is healthy', async () => {
  const original = globalThis.fetch
  globalThis.fetch = async () => Response.json([])
  try {
    assert.equal((await onRequest({ request, env })).status, 200)
  } finally {
    globalThis.fetch = original
  }
})
