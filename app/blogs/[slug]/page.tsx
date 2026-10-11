import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { mdxComponents } from '@/components/blog/MDXComponents'
import { HomeMotion } from '@/components/home/HomeMotion'
import styles from '@/components/blog/ArticleLayout.module.css'
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User } from 'lucide-react'
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'
import { SITE_CONFIG } from '@/lib/seo'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return { title: 'Article Not Found' }

  return {
    title: { absolute: `${post.meta.title} | Shardwise` },
    description: post.meta.description,
    alternates: { canonical: `${SITE_CONFIG.url}/blogs/${post.meta.slug}/` },
    openGraph: {
      type: 'article',
      title: post.meta.title,
      description: post.meta.description,
      url: `${SITE_CONFIG.url}/blogs/${post.meta.slug}/`,
      publishedTime: post.meta.date,
      images: post.meta.image
        ? [
            {
              url: `${SITE_CONFIG.url}${post.meta.image}`,
              alt: post.meta.imageAlt || post.meta.title,
            },
          ]
        : undefined,
      authors: [post.meta.author.name],
    },
    twitter: {
      card: post.meta.image ? 'summary_large_image' : 'summary',
      title: post.meta.title,
      description: post.meta.description,
      images: post.meta.image ? [`${SITE_CONFIG.url}${post.meta.image}`] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const fullUrl = `${SITE_CONFIG.url}/blogs/${post.meta.slug}/`
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Blogs', url: `${SITE_CONFIG.url}/blogs` },
    { name: post.meta.title, url: fullUrl },
  ]

  const related = getAllPosts()
    .filter((item) => item.slug !== post.meta.slug)
    .slice(0, 2)
  return (
    <>
      <ArticleSchema
        title={post.meta.title}
        description={post.meta.description}
        url={fullUrl}
        datePublished={post.meta.date}
        image={post.meta.image ? `${SITE_CONFIG.url}${post.meta.image}` : undefined}
        authorName={post.meta.author.name}
        authorType={post.meta.author.name.startsWith('Shardwise') ? 'Organization' : 'Person'}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <HomeMotion>
        <article className={styles.page}>
          <header className={styles.hero}>
            <div className={styles.headerInner}>
              <Link href="/blogs/" className={styles.back}>
                <ArrowLeft aria-hidden="true" />
                Back to all articles
              </Link>
              <div className={styles.tags}>
                {post.meta.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h1 className={styles.title}>{post.meta.title}</h1>
              <p className={styles.description}>{post.meta.description}</p>
              <div className={styles.meta}>
                <div className={styles.author}>
                  <span className={styles.avatar}>
                    <User aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{post.meta.author.name}</strong>
                    <small>{post.meta.author.role}</small>
                  </div>
                </div>
                <div className={styles.time}>
                  <span>
                    <Calendar aria-hidden="true" />
                    <time dateTime={post.meta.date}>{post.meta.date}</time>
                  </span>
                  <span>
                    <Clock aria-hidden="true" />
                    {post.meta.readingTime}
                  </span>
                </div>
              </div>
            </div>
          </header>
          <div className={styles.reading}>
            <div className={styles.body}>
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>
            <nav className={styles.end} aria-label="Article navigation">
              <Link href="/blogs/">
                Explore more insights
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </nav>
          </div>
          {related.length > 0 && (
            <section className={styles.related} aria-labelledby="related-title">
              <h2 id="related-title">Keep exploring</h2>
              <div className={styles.relatedGrid}>
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    className={styles.relatedCard}
                    href={'/blogs/' + item.slug + '/'}
                  >
                    <span>
                      {item.tags[0] || 'Insights'} · {item.readingTime}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <strong>
                      Read article
                      <ArrowUpRight aria-hidden="true" />
                    </strong>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </HomeMotion>
    </>
  )
}
