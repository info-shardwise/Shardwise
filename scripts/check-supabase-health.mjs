const url = 'https://shardwise.pages.dev/api/health/supabase'
let healthy = false
for (let attempt = 1; attempt <= 3; attempt++) {
  try {
    const response = await fetch(url, {
      cache: 'no-store',
      redirect: 'error',
      signal: AbortSignal.timeout(20000),
    })
    if (response.ok && (await response.json()).ok === true) {
      healthy = true
      console.log('Supabase database read succeeded.')
      break
    }
  } catch {
    // Never log upstream bodies, keys, or contact details.
  }
  console.error(`Supabase database check failed (${attempt}/3).`)
  if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, 10000))
}
if (!healthy) {
  console.error(
    'Check the Supabase dashboard: resume the project if paused, or review database configuration.',
  )
  process.exitCode = 1
}
