import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogExplorer } from '@/components/blog/BlogExplorer'
import hub from '@/components/blog/BlogHub.module.css'
import { BookOpen, ArrowUpRight } from 'lucide-react'
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
  const authors = [...new Map(posts.map((post) => [post.author.name, post.author])).values()]
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
        <BlogExplorer posts={posts} />
        <div className={hub.lower}>
          <section className={hub.authors} aria-labelledby="authors-title">
            <span className={hub.eyebrow}>BEHIND THE ARTICLES</span>
            <h2 id="authors-title">Written by our teams.</h2>
            <p>
              Our articles connect engineering and search strategy with practical decisions for
              digital products. Author names and roles below come from each published article.
            </p>
            <div className={hub.authorGrid}>
              {authors.map((author) => (
                <article className={hub.author} key={author.name}>
                  <span aria-hidden="true">
                    {author.name
                      .split(' ')
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join('')}
                  </span>
                  <div>
                    <h3>{author.name}</h3>
                    <p>{author.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className={hub.cta} aria-labelledby="blog-next-title">
            <span className={hub.eyebrow}>PUT IDEAS INTO PRACTICE</span>
            <h2 id="blog-next-title">
              Reading about it is one thing.
              <br />
              Let’s build it.
            </h2>
            <p>
              Explore our <Link href="/services/">development, design, and search services</Link>,
              or share the challenge you are working through. We can discuss the next step for your
              project.
            </p>
            <Link href="/contact/">
              Start a project
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </section>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Home',
                      item: 'https://shardwise.pages.dev/',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'Blogs',
                      item: 'https://shardwise.pages.dev/blogs/',
                    },
                  ],
                },
                {
                  '@type': 'Blog',
                  name: 'Shardwise Journal',
                  url: 'https://shardwise.pages.dev/blogs/',
                  blogPost: posts.map((post) => ({
                    '@type': 'BlogPosting',
                    headline: post.title,
                    description: post.description,
                    url: 'https://shardwise.pages.dev/blogs/' + post.slug + '/',
                    datePublished: post.date,
                    author: { '@type': 'Organization', name: post.author.name },
                  })),
                },
              ],
            }).replace(/</g, '\u003c'),
          }}
        />
      </div>
    </HomeMotion>
  )
}
