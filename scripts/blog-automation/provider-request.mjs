export function createProviderRequest({
  fetch = globalThis.fetch,
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  timeoutSignal = (ms) => AbortSignal.timeout(ms),
} = {}) {
  return async function request(url, options = {}, attempt = 0) {
    const host = new URL(url).hostname
    // Generation and editorial review can legitimately take longer than a minute.
    const timeoutMs = host === 'generativelanguage.googleapis.com' ? 90000 : 45000
    let response
    try {
      response = await fetch(url, { ...options, signal: timeoutSignal(timeoutMs) })
    } catch (error) {
      if (error.name !== 'TimeoutError') throw error
      if (attempt < 2) {
        await sleep(5000 * (attempt + 1))
        return request(url, options, attempt + 1)
      }
      throw new Error(`Request timed out after 3 attempts (${timeoutMs}ms each) at ${host}`)
    }
    if ([429, 503].includes(response.status) && attempt < 2) {
      await response.text()
      await sleep(5000 * (attempt + 1))
      return request(url, options, attempt + 1)
    }
    if (!response.ok) throw new Error(`Request failed: HTTP ${response.status} at ${host}`)
    return response
  }
}
