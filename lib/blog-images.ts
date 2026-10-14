import { SITE_CONFIG } from './seo'

export interface BlogImageCredit {
  photographer: string
  photographerUrl: string
  sourceUrl: string
}

function unsplashLink(value: unknown): value is string {
  if (typeof value !== 'string') return false
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && url.hostname === 'unsplash.com'
  } catch {
    return false
  }
}

export function parseImageCredit(value: unknown): BlogImageCredit | undefined {
  if (!value || typeof value !== 'object') return undefined
  const credit = value as Record<string, unknown>
  if (
    typeof credit.photographer !== 'string' ||
    !unsplashLink(credit.photographerUrl) ||
    !unsplashLink(credit.sourceUrl)
  )
    return undefined
  return {
    photographer: credit.photographer,
    photographerUrl: credit.photographerUrl,
    sourceUrl: credit.sourceUrl,
  }
}

export function absoluteBlogImage(image: string): string {
  if (image.startsWith('/') && !image.startsWith('//')) return `${SITE_CONFIG.url}${image}`
  const url = new URL(image)
  if (url.protocol !== 'https:') throw new Error('Blog images must use HTTPS')
  return url.href
}
