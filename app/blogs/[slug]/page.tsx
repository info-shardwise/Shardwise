import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { mdxComponents } from '@/components/blog/MDXComponents'
import { TagBadge } from '@/components/blog/TagBadge'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
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
    title: `${post.meta.title} | Shardwise Blog`,
    description: post.meta.description,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const fullUrl = `${SITE_CONFIG.url}/blogs/${post.meta.slug}`
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Blogs', url: `${SITE_CONFIG.url}/blogs` },
    { name: post.meta.title, url: fullUrl },
  ]

  return (
    <>
      <ArticleSchema
        title={post.meta.title}
        description={post.meta.description}
        url={fullUrl}
        datePublished={post.meta.date}
        authorName={post.meta.author.name}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <article className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back navigation */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#11C5F5] hover:underline mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all articles
          </Link>

          {/* Post Header */}
          <header className="border-b border-white/10 pb-8 mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.meta.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              {post.meta.title}
            </h1>

            <p className="mt-4 text-lg text-slate-300 leading-relaxed">{post.meta.description}</p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-[#11C5F5]" />
                <span className="font-medium text-white">{post.meta.author.name}</span>
                <span>•</span>
                <span>{post.meta.author.role}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {post.meta.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {post.meta.readingTime}
                </span>
              </div>
            </div>
          </header>

          {/* Rendered MDX Body */}
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </article>
    </>
  )
}
