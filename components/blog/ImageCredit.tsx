import type { BlogImageCredit } from '@/lib/blog-images'

export function ImageCredit({ credit }: { credit?: BlogImageCredit }) {
  if (!credit) return null
  return (
    <p style={{ fontSize: '12px', lineHeight: 1.6, marginTop: '8px', color: 'var(--muted)' }}>
      Photo by <a href={credit.photographerUrl}> {credit.photographer}</a> on{' '}
      <a href={credit.sourceUrl}>Unsplash</a>
    </p>
  )
}
