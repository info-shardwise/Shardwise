const reply = (status, success, message) =>
  Response.json({ success, message }, { status, headers: { 'Cache-Control': 'no-store' } })
const success = () =>
  reply(200, true, 'Thank you! Your inquiry has been received. We will get in touch soon.')
const emailPattern = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const required = [
  'SUPABASE_URL',
  'SUPABASE_SERVICE_ROLE_KEY',
  'GMAIL_CLIENT_ID',
  'GMAIL_CLIENT_SECRET',
  'GMAIL_REFRESH_TOKEN',
  'GMAIL_SENDER',
  'GMAIL_RECIPIENT',
  'TURNSTILE_SITE_KEY',
  'TURNSTILE_SECRET_KEY',
]
const requestWithTimeout = (url, options = {}) =>
  fetch(url, { ...options, signal: AbortSignal.timeout(12000) })
const encode = (text) => {
  const bytes = new TextEncoder().encode(text)
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary)
}

export async function onRequest({ request, env }) {
  const url = new URL(request.url)
  if (request.method === 'GET') {
    return Response.json(
      { siteKey: env.TURNSTILE_SITE_KEY || '' },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  }
  if (request.method !== 'POST') return reply(405, false, 'Method not allowed.')
  if (request.headers.get('Origin') !== url.origin)
    return reply(403, false, 'Please submit from our contact page.')
  if (
    !required.every((key) => env[key]) ||
    !emailPattern.test(env.GMAIL_SENDER) ||
    !emailPattern.test(env.GMAIL_RECIPIENT)
  ) {
    return reply(503, false, 'The contact form is temporarily unavailable. Please try again later.')
  }
  if (!request.headers.get('Content-Type')?.includes('application/json'))
    return reply(415, false, 'Invalid submission format.')
  const reader = request.body?.getReader()
  if (!reader) return reply(400, false, 'Empty submission.')
  let size = 0
  const chunks = []
  while (true) {
    const { value, done } = await reader.read()
    if (done) break
    size += value.length
    if (size > 24000) {
      await reader.cancel()
      return reply(413, false, 'Your message is too long.')
    }
    chunks.push(value)
  }
  let input
  try {
    const bytes = new Uint8Array(size)
    let offset = 0
    for (const chunk of chunks) {
      bytes.set(chunk, offset)
      offset += chunk.length
    }
    input = JSON.parse(new TextDecoder().decode(bytes))
  } catch {
    return reply(400, false, 'Invalid submission.')
  }
  if (!input || typeof input !== 'object') return reply(400, false, 'Invalid submission.')
  const fields = ['name', 'email', 'service', 'message', 'token', 'id']
  if (!fields.every((key) => typeof input[key] === 'string'))
    return reply(400, false, 'Please complete all required fields.')
  const { name, email, service, message, token, id } = Object.fromEntries(
    fields.map((key) => [key, input[key].trim()]),
  )
  if (
    !name ||
    name.length > 120 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    service.length > 120 ||
    !message ||
    message.length > 5000 ||
    token.length > 2048 ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)
  ) {
    return reply(
      400,
      false,
      'Please enter a valid name, email and message (up to 5,000 characters).',
    )
  }
  if (input.website) return reply(400, false, 'Unable to accept this submission.')
  const dbHeaders = {
    apikey: env.SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
    'Content-Type': 'application/json',
  }
  const table = `${env.SUPABASE_URL.replace(/\/$/, '')}/rest/v1/contact_submissions`
  try {
    const check = await requestWithTimeout(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: env.TURNSTILE_SECRET_KEY,
          response: token,
          remoteip: request.headers.get('CF-Connecting-IP') || undefined,
        }),
      },
    )
    const verification = await check.json()
    if (
      !check.ok ||
      !verification.success ||
      verification.hostname !== url.hostname ||
      verification.action !== 'contact'
    )
      return reply(400, false, 'Please complete the security check again.')
    const saved = await requestWithTimeout(table, {
      method: 'POST',
      headers: dbHeaders,
      body: JSON.stringify({ id, name, email, service, message }),
    })
    if (saved.status === 409) {
      const existing = await requestWithTimeout(
        `${table}?id=eq.${id}&select=name,email,service,message`,
        { headers: dbHeaders },
      )
      if (!existing.ok) throw new Error('storage')
      const rows = await existing.json()
      if (
        rows[0] &&
        ['name', 'email', 'service', 'message'].every(
          (key) => rows[0][key] === { name, email, service, message }[key],
        )
      )
        return success()
      return reply(409, false, 'Please reload the page and submit again.')
    }
    if (!saved.ok) throw new Error('storage')
  } catch {
    return reply(503, false, 'We could not save your inquiry. Please try again in a moment.')
  }
  // Receipt is confirmed by durable storage. Gmail failure must not invite duplicate submissions.
  let notificationStatus = 'failed'
  let gmailMessageId = null
  try {
    const refresh = await requestWithTimeout('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: env.GMAIL_CLIENT_ID,
        client_secret: env.GMAIL_CLIENT_SECRET,
        refresh_token: env.GMAIL_REFRESH_TOKEN,
        grant_type: 'refresh_token',
      }),
    })
    const credentials = await refresh.json()
    if (!refresh.ok || !credentials.access_token) throw new Error('oauth')
    const body = `Inquiry ID: ${id}\nName: ${name}\nEmail: ${email}\nService: ${service || 'General Inquiry'}\n\nMessage:\n${message}`
    const raw = [
      `From: Shardwise <${env.GMAIL_SENDER}>`,
      `To: ${env.GMAIL_RECIPIENT}`,
      `Reply-To: ${email}`,
      `Subject: New Shardwise inquiry (${id})`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: base64',
      '',
      encode(body)
        .match(/.{1,76}/g)
        .join('\r\n'),
    ].join('\r\n')
    const sent = await requestWithTimeout(
      'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${credentials.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          raw: encode(raw).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''),
        }),
      },
    )
    const result = await sent.json()
    if (!sent.ok || !result.id) throw new Error('gmail')
    notificationStatus = 'sent'
    gmailMessageId = result.id
  } catch {
    console.error('contact_notification_failed', id)
  }
  try {
    const updated = await requestWithTimeout(`${table}?id=eq.${id}`, {
      method: 'PATCH',
      headers: dbHeaders,
      body: JSON.stringify({
        notification_status: notificationStatus,
        gmail_message_id: gmailMessageId,
      }),
    })
    if (!updated.ok) console.error('contact_notification_status_failed', id)
  } catch {
    console.error('contact_notification_status_failed', id)
  }
  return success()
}
