// Read-only database probe. Credentials and contact data stay inside the Function.
export async function onRequest({ request, env }) {
  const reply = (status, ok) =>
    Response.json({ ok }, { status, headers: { 'Cache-Control': 'no-store' } })
  if (request.method !== 'GET') return reply(405, false)
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) return reply(503, false)
  try {
    const url = new URL('/rest/v1/contact_submissions?select=id&limit=1', env.SUPABASE_URL)
    if (url.protocol !== 'https:') return reply(503, false)
    const response = await fetch(url, {
      headers: {
        apikey: env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        'Cache-Control': 'no-cache',
      },
      redirect: 'error',
      signal: AbortSignal.timeout(12000),
    })
    if (!response.ok) return reply(503, false)
    const rows = await response.json()
    return reply(Array.isArray(rows) ? 200 : 503, Array.isArray(rows))
  } catch {
    return reply(503, false)
  }
}
