export function createProviderRequest({
  fetch = globalThis.fetch,
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
} = {}) {
  return async function request(url, options = {}, attempt = 0) {
    const response = await fetch(url, { ...options, signal: AbortSignal.timeout(45000) })
    if ([429, 503].includes(response.status) && attempt < 2) {
      await response.text()
      await sleep(5000 * (attempt + 1))
      return request(url, options, attempt + 1)
    }
    if (!response.ok)
      throw new Error(`Request failed: HTTP ${response.status} at ${new URL(url).hostname}`)
    return response
  }
}
