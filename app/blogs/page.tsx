import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import { BlogCard } from '@/components/blog/BlogCard'
import { TagBadge } from '@/components/blog/TagBadge'
import { ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Engineering & Digital Strategy Blogs',
  description:
    'Insights on Next.js, mobile architectures, modern SEO, and web engineering best practices from the Shardwise team.',
}

export default function BlogsPage() {
  const posts = getAllPosts()
  const featuredPost = posts.find((p) => p.featured) || posts[0]
  const regularPosts = posts.filter((p) => p.slug !== featuredPost?.slug)

  return (
    <div className="py-16 space-y-16">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#11C5F5] mb-2">
            Knowledge Base
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
            Engineering Insights &amp; Strategy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Deep dives into software architecture, frontend performance, search engine optimization,
            and digital scalability.
          </p>
        </div>
      </section>

      {/* Featured Post Hero */}
      {featuredPost && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#061A3A] to-[#08224d] p-8 sm:p-12 relative overflow-hidden group">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1 rounded-md bg-[#0878F9] px-2.5 py-0.5 text-xs font-semibold text-white">
                <Sparkles className="h-3 w-3" /> Featured Article
              </span>
              {featuredPost.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>

            <h2 className="font-display text-3xl sm:text-4xl uppercase text-white group-hover:text-[#11C5F5] transition-colors max-w-3xl leading-snug">
              <Link href={`/blogs/${featuredPost.slug}`}>{featuredPost.title}</Link>
            </h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              {featuredPost.description}
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span>By {featuredPost.author.name}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readingTime}</span>
              </div>
              <Link
                href={`/blogs/${featuredPost.slug}`}
                className="text-sm font-semibold text-[#11C5F5] group-hover:text-white inline-flex items-center gap-1.5"
              >
                Read Article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl uppercase text-white mb-8">All Articles</h2>
        {regularPosts.length === 0 ? (
          <p className="text-slate-400 text-sm">More articles coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
