import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react'
import type { BlogPostMeta } from '@/lib/mdx'
import styles from './BlogListing.module.css'

function photoFor(post: BlogPostMeta) {
  const search = post.tags.some((tag) => ['seo', 'geo', 'strategy'].includes(tag.toLowerCase()))
  return search
    ? {
        src: '/images/blog/unsplash/search-strategy.jpg',
        alt: 'A laptop displaying an analytics dashboard',
      }
    : {
        src: '/images/blog/unsplash/software-engineering.jpg',
        alt: 'A close-up of programming code on a laptop screen',
      }
}
function formatDate(date: string) {
  if (!date) return ''
  const value = new Date(date)
  return Number.isNaN(value.getTime())
    ? date
    : new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
      }).format(value)
}
export function EditorialBlogCard({
  post,
  featured = false,
}: {
  post: BlogPostMeta
  featured?: boolean
}) {
  const photo = photoFor(post)
  const Heading = featured ? 'h2' : 'h3'
  const initials = post.author.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
  return (
    <article
      className={styles.card + (featured ? ' ' + styles.featured : '')}
      aria-labelledby={'post-' + post.slug}
      data-reveal="up"
    >
      <div className={styles.media}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={featured}
          sizes={featured ? '(max-width: 700px) 90vw, 50vw' : '(max-width: 700px) 90vw, 45vw'}
        />
        {featured && (
          <span className={styles.featuredBadge}>
            <Sparkles aria-hidden="true" /> Featured Article
          </span>
        )}
        <div className={styles.mediaAccent} aria-hidden="true" />
      </div>
      <div className={styles.cardCopy}>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Heading id={'post-' + post.slug}>
          <Link href={'/blogs/' + post.slug}>{post.title}</Link>
        </Heading>
        <p className={styles.excerpt}>{post.description}</p>
        <div className={styles.meta}>
          {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
          <span>
            <Clock aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.author}>
            <span className={styles.avatar} aria-hidden="true">
              {initials}
            </span>
            <span>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </span>
          </div>
          <Link
            className={styles.read}
            href={'/blogs/' + post.slug}
            aria-label={'Read ' + post.title}
          >
            <span>{featured ? 'Read Article' : 'Read'}</span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
