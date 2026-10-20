// Read-only database probe. Credentials and contact data stay inside the Function.
export async function onRequest({ request, env }) {
  const reply = (status, ok) =>
    Response.json({ ok }, { status, headers: { 'Cache-Control': 'no-store' } })
  if (request.method !== 'GET') return reply(405, false)
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('supabase_health_failed', 'missing_configuration')
    return reply(503, false)
  }
  try {
    const url = new URL('/rest/v1/contact_submissions?select=id&limit=1', env.SUPABASE_URL)
    if (url.protocol !== 'https:') return reply(503, false)
    const response = await fetch(url, {
      headers: {
        apikey: env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        'Cache-Control': 'no-cache',
      },
      // Workers supports manual redirects; reject 3xx via response.ok below.
      redirect: 'manual',
      signal: AbortSignal.timeout(12000),
    })
    if (!response.ok) {
      console.error('supabase_health_failed', `database_http_${response.status}`)
      return reply(503, false)
    }
    const rows = await response.json()
    return reply(Array.isArray(rows) ? 200 : 503, Array.isArray(rows))
  } catch {
    console.error('supabase_health_failed', 'request_or_response_error')
    return reply(503, false)
  }
}
