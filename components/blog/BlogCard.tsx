import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import type { BlogPostMeta } from '@/lib/mdx'
import { TagBadge } from './TagBadge'

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#061A3A] p-6 transition-all hover:border-[#0878F9]/50 hover:shadow-xl">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>

        <h3 className="font-display text-2xl uppercase tracking-wide text-white group-hover:text-[#11C5F5] transition-colors leading-snug">
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="mt-3 text-sm text-slate-400 line-clamp-3 leading-relaxed">
          {post.description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            {post.readingTime}
          </span>
        </div>

        <Link
          href={`/blogs/${post.slug}`}
          className="text-white group-hover:text-[#11C5F5] inline-flex items-center gap-1 font-semibold"
        >
          Read <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}
