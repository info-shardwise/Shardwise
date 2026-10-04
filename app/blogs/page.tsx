import type { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import { getAllPosts } from '@/lib/mdx'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import { EditorialBlogCard } from '@/components/blog/EditorialBlogCard'
import styles from '@/components/blog/BlogListing.module.css'

export const metadata: Metadata = {
  title: 'Engineering & Digital Strategy Blogs',
  description:
    'Insights on Next.js, mobile architectures, modern SEO, and web engineering best practices from the Shardwise team.',
}
export default function BlogsPage() {
  const posts = getAllPosts()
  const featuredPost = posts.find((post) => post.featured) || posts[0]
  const regularPosts = posts.filter((post) => post.slug !== featuredPost?.slug)
  return (
    <HomeMotion>
      <div className={styles.page}>
        <section className={styles.hero} aria-labelledby="blogs-title">
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow} data-reveal="up">
              <BookOpen aria-hidden="true" /> Knowledge Base
            </span>
            <RevealHeading
              as="h1"
              id="blogs-title"
              text="Engineering Insights & Strategy"
              className={styles.title}
            />
            <p className={styles.description} data-reveal="up">
              Deep dives into software architecture, frontend performance, search engine
              optimization, and digital scalability.
            </p>
          </div>
        </section>
        {featuredPost && (
          <section className={styles.featuredSection} aria-label="Featured article">
            <EditorialBlogCard post={featuredPost} featured />
          </section>
        )}
        <section className={styles.articles} aria-labelledby="articles-title">
          <div className={styles.sectionHeading}>
            <RevealHeading
              id="articles-title"
              text="All Articles"
              className={styles.sectionTitle}
            />
            <span className={styles.articleCount}>
              {regularPosts.length} {regularPosts.length === 1 ? 'article' : 'articles'}
            </span>
          </div>
          {regularPosts.length === 0 ? (
            <p className={styles.empty}>More articles coming soon.</p>
          ) : (
            <div className={styles.grid + (regularPosts.length === 1 ? ' ' + styles.single : '')}>
              {regularPosts.map((post) => (
                <EditorialBlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </div>
    </HomeMotion>
  )
}
