import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { parseImageCredit, type BlogImageCredit } from './blog-images'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPostMeta {
  title: string
  description: string
  image?: string
  imageAlt?: string
  imageCredit?: BlogImageCredit
  slug: string
  date: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  tags: string[]
  readingTime: string
  featured?: boolean
  published: boolean
}

export interface BlogPost {
  meta: BlogPostMeta
  content: string
}

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200
  const wordCount = text.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'))

  const posts = files
    .map((filename) => {
      const filePath = path.join(BLOG_DIR, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      const slug = data.slug || filename.replace(/\.mdx$/, '')

      return {
        title: data.title || 'Untitled Post',
        description: data.description || '',
        image: typeof data.image === 'string' ? data.image : undefined,
        imageAlt: typeof data.imageAlt === 'string' ? data.imageAlt : undefined,
        imageCredit: parseImageCredit(data.imageCredit),
        slug,
        date: data.date ? (new Date(data.date).toISOString().split('T')[0] ?? '') : '',
        author: data.author || {
          name: 'Shardwise Engineering',
          role: 'Technical Team',
        },
        tags: Array.isArray(data.tags) ? data.tags : [],
        readingTime: calculateReadingTime(content),
        featured: Boolean(data.featured),
        published: data.published !== false,
      } as BlogPostMeta
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    meta: {
      title: data.title || 'Untitled Post',
      description: data.description || '',
      image: typeof data.image === 'string' ? data.image : undefined,
      imageAlt: typeof data.imageAlt === 'string' ? data.imageAlt : undefined,
      imageCredit: parseImageCredit(data.imageCredit),
      slug,
      date: data.date ? (new Date(data.date).toISOString().split('T')[0] ?? '') : '',
      author: data.author || {
        name: 'Shardwise Engineering',
        role: 'Technical Team',
      },
      tags: Array.isArray(data.tags) ? data.tags : [],
      readingTime: calculateReadingTime(content),
      featured: Boolean(data.featured),
      published: data.published !== false,
    },
    content,
  }
}
