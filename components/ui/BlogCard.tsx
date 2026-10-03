import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
  author: string
  featuredImage?: string
  tags?: string[]
}

export function BlogCard({
  title,
  excerpt,
  slug,
  date,
  author,
  featuredImage,
  tags,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link
      href={`/blogs/${slug}/`}
      className="group flex flex-col rounded-xl border border-[--color-border-light] overflow-hidden hover:shadow-card transition-shadow duration-200"
    >
      {featuredImage && (
        <div className="relative aspect-[16/9] overflow-hidden bg-[--color-bg-light]">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
        <h3 className="font-semibold text-lg text-[--color-text-dark] group-hover:text-[--color-primary] transition-colors line-clamp-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[--color-text-muted] line-clamp-3 flex-1">{excerpt}</p>
        <div className="flex items-center justify-between pt-2 border-t border-[--color-border-light]">
          <div className="text-xs text-[--color-text-light]">
            <span>{author}</span>
            <span className="mx-1">·</span>
            <time dateTime={date}>{formattedDate}</time>
          </div>
          <ArrowRight
            size={16}
            className="text-[--color-primary] group-hover:translate-x-1 transition-transform duration-150"
          />
        </div>
      </div>
    </Link>
  )
}
