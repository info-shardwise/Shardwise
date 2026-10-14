import crypto from 'node:crypto'

async function checked(url, options, label) {
  const response = await fetch(url, { ...options, signal: AbortSignal.timeout(30000) })
  if (!response.ok) {
    const detail = await response.json().catch(() => ({}))
    let message = String(detail.error?.message || 'No API error detail').slice(0, 1500)
    for (const name of ['GEMINI_API_KEY', 'UNSPLASH_ACCESS_KEY']) {
      if (process.env[name]) message = message.split(process.env[name]).join('[redacted]')
    }
    throw new Error(`${label}: HTTP ${response.status}: ${message}`)
  }
  return response.json()
}

try {
  for (const name of ['GEMINI_API_KEY', 'UNSPLASH_ACCESS_KEY', 'GOOGLE_SERVICE_ACCOUNT_JSON', 'BLOG_SHEET_ID']) {
    if (!process.env[name]) throw new Error(`Missing secret: ${name}`)
  }
  const account = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON)
  const now = Math.floor(Date.now() / 1000)
  const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url')
  const unsigned = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({
    iss: account.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600,
  })}`
  const assertion = `${unsigned}.${crypto.sign('RSA-SHA256', Buffer.from(unsigned), account.private_key).toString('base64url')}`
  const token = await checked('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
  }, 'Google authentication')
  const sheet = await checked(`https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(process.env.BLOG_SHEET_ID)}/values/${encodeURIComponent("'BlogQueue'!A1:S20")}?valueRenderOption=UNFORMATTED_VALUE`, {
    headers: { Authorization: `Bearer ${token.access_token}` },
  }, 'Google Sheet read')
  if (sheet.values?.length !== 20 || sheet.values[0][0] !== 'id') throw new Error('Expected header and 19 queue rows')
  console.log('PASS: GitHub service-account secret reads the 19-row queue')
  let geminiError
  try {
  const gemini = await checked('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent', {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY },
    body: JSON.stringify({ contents: [{ parts: [{ text: 'Reply with OK.' }] }], generationConfig: { maxOutputTokens: 2048 } }),
  }, 'Gemini model access')
  if (!gemini.candidates?.some((c) => c.content?.parts?.some((p) => p.text))) throw new Error('Gemini returned no text')
  console.log('PASS: Gemini 3.8 Flash generates text; billing plan remains dashboard/user-confirmed')
  } catch (error) {
    geminiError = error
    console.log(error.message)
    const models = await checked('https://generativelanguage.googleapis.com/v1beta/models', { headers: { 'x-goog-api-key': process.env.GEMINI_API_KEY } }, 'Gemini model listing')
    console.log('Available text models: ' + models.models?.filter(m => m.supportedGenerationMethods?.includes('generateContent')).map(m => m.name).join(', '))
  }
  const photos = await checked('https://api.unsplash.com/search/photos?query=website&per_page=1', {
    headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`, 'Accept-Version': 'v1' },
  }, 'Unsplash search')
  if (!photos.results?.[0]?.urls?.regular || !photos.results[0]?.user?.links?.html || !photos.results[0]?.links?.download_location) throw new Error('Unsplash image or attribution fields missing')
  console.log('PASS: Unsplash search returns image, photographer and download tracking information')
  if (geminiError) throw geminiError
} catch (error) {
  console.error(error instanceof SyntaxError ? 'Invalid service-account JSON' : error.message)
  process.exitCode = 1
}
