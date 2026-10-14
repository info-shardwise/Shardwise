import crypto from 'node:crypto'

export async function sheets() {
  const account = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON || '{}')
  const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url')
  const now = Math.floor(Date.now() / 1000)
  const unsigned = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({ iss: account.client_email, scope: 'https://www.googleapis.com/auth/spreadsheets', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })}`
  const assertion = `${unsigned}.${crypto.sign('RSA-SHA256', Buffer.from(unsigned), account.private_key).toString('base64url')}`
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
    signal: AbortSignal.timeout(30000),
  })
  if (!response.ok) throw new Error(`Sheet authentication HTTP ${response.status}`)
  const auth = await response.json()
  const base = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(process.env.BLOG_SHEET_ID)}`
  async function api(route, method = 'GET', body, attempt = 0) {
    const r = await fetch(base + route, {
      method,
      headers: { Authorization: `Bearer ${auth.access_token}`, 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
      signal: AbortSignal.timeout(30000),
    })
    if ([429, 503].includes(r.status) && attempt < 2) {
      await r.text()
      await new Promise((resolve) => setTimeout(resolve, 2000 * (attempt + 1)))
      return api(route, method, body, attempt + 1)
    }
    if (!r.ok) throw new Error(`Sheets request HTTP ${r.status}`)
    return r.json()
  }
  return createSheetClient(api)
}

export function createSheetClient(api) {
  async function read(id) {
    const result = await api(
      `/values/${encodeURIComponent("'BlogQueue'!A:S")}?valueRenderOption=UNFORMATTED_VALUE`,
    )
    const [headers, ...rows] = result.values || []
    if (!headers?.includes('status') || !headers.includes('id'))
      throw new Error('Queue headers missing')
    const matches = rows
      .map((values, i) => ({ values, number: i + 2 }))
      .filter((row) => row.values[headers.indexOf('id')] === id)
    if (matches.length !== 1) throw new Error('Queue ID missing or duplicated')
    return {
      headers,
      number: matches[0].number,
      data: Object.fromEntries(headers.map((name, i) => [name, matches[0].values[i] ?? ''])),
    }
  }
  async function update(id, fields, allowedStatuses, runId, expected = {}) {
    const current = await read(id)
    if (allowedStatuses && !allowedStatuses.includes(current.data.status))
      throw new Error('Queue status changed; refusing update')
    if (runId && current.data.run_id !== runId)
      throw new Error('Queue claim belongs to another run')
    for (const [field, value] of Object.entries(expected)) {
      if (String(current.data[field]) !== String(value))
        throw new Error('Queue data changed; refusing update')
    }
    const confirmed = await read(id)
    if (
      confirmed.number !== current.number ||
      JSON.stringify(confirmed.data) !== JSON.stringify(current.data)
    )
      throw new Error('Queue moved or changed during update; retry after review')
    const data = { ...current.data, ...fields, updated_at: new Date().toISOString() }
    const range = `'BlogQueue'!A${current.number}:S${current.number}`
    await api(`/values/${encodeURIComponent(range)}?valueInputOption=RAW`, 'PUT', {
      range,
      values: [current.headers.map((name) => data[name] ?? '')],
    })
    const check = await read(id)
    for (const [key, value] of Object.entries(fields))
      if (String(check.data[key]) !== String(value))
        throw new Error(`Sheet read-back failed for ${key}`)
    return check.data
  }
  return { read, update }
}
