'use client'
import { useState } from 'react'
import { Search, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { BlogPostMeta } from '@/lib/mdx'
import { EditorialBlogCard } from './EditorialBlogCard'
import styles from './BlogHub.module.css'
function categoryFor(post: BlogPostMeta) {
  const tags = post.tags.map((t) => t.toLowerCase())
  if (tags.some((t) => ['seo', 'aeo', 'geo', 'strategy'].includes(t))) return 'SEO & AEO'
  if (tags.some((t) => ['design', 'ux', 'ui', 'figma'].includes(t))) return 'Design'
  if (tags.some((t) => ['case study', 'case studies'].includes(t))) return 'Case Studies'
  if (tags.some((t) => ['company', 'news'].includes(t))) return 'Company News'
  return 'Engineering'
}
export function BlogExplorer({ posts }: { posts: BlogPostMeta[] }) {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('')
  const categories = ['All', ...new Set(posts.map(categoryFor))]
  const tags = [...new Set(posts.flatMap((p) => p.tags))]
  const filtered = posts.filter(
    (p) =>
      (category === 'All' || categoryFor(p) === category) &&
      (!tag || p.tags.includes(tag)) &&
      [p.title, p.description, p.author.name, ...p.tags]
        .join(' ')
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  )
  const reset = () => {
    setCategory('All')
    setQuery('')
    setTag('')
  }
  return (
    <section className={styles.explorer} aria-labelledby="articles-title">
      <div className={styles.titleRow}>
        <div>
          <span className={styles.eyebrow}>THE JOURNAL</span>
          <h2 id="articles-title">All articles</h2>
        </div>
        <span className={styles.count} role="status" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
        </span>
      </div>
      <div className={styles.controls}>
        <div className={styles.filters} aria-label="Filter articles by category">
          {categories.map((c) => (
            <button
              type="button"
              key={c}
              aria-pressed={category === c}
              onClick={() => {
                setCategory(c)
                setTag('')
              }}
            >
              {c}
            </button>
          ))}
        </div>
        <form role="search" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="blog-search">Search articles</label>
          <div>
            <Search aria-hidden="true" />
            <input
              id="blog-search"
              type="search"
              placeholder="Search topics or articles"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
            />
          </div>
        </form>
      </div>
      {tag && (
        <div className={styles.selectedTag}>
          Topic: {tag}
          <button
            type="button"
            onClick={() => {
              setTag('')
            }}
          >
            Remove topic filter
          </button>
        </div>
      )}
      {filtered.length > 0 ? (
        <div className={styles.layout}>
          <div>
            <div className={styles.postGrid}>
              {filtered.map((post) => (
                <EditorialBlogCard key={post.slug} post={post} idPrefix="listing" reveal={false} />
              ))}
            </div>
          </div>
          <aside className={styles.sidebar} aria-label="Reading guide">
            <div>
              <span className={styles.eyebrow}>EDITOR’S PICKS</span>
              <h2>Start here</h2>
              <p>A short reading list from our published articles.</p>
              {posts.slice(0, 3).map((p, i) => (
                <Link key={p.slug} href={'/blogs/' + p.slug + '/'} className={styles.pick}>
                  <span>0{i + 1}</span>
                  <div>
                    <strong>{p.title}</strong>
                    <small>{p.readingTime}</small>
                  </div>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div>
              <span className={styles.eyebrow}>FOLLOW YOUR CURIOSITY</span>
              <h2>Browse topics</h2>
              <div className={styles.tagList}>
                {tags.map((t) => (
                  <button
                    type="button"
                    key={t}
                    aria-pressed={tag === t}
                    onClick={() => {
                      setTag(tag === t ? '' : t)
                      setCategory('All')
                    }}
                  >
                    #{t}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      ) : (
        <div className={styles.empty}>
          <h3>No articles match your search.</h3>
          <p>Try another keyword or reset the filters to see the full journal.</p>
          <button type="button" onClick={reset}>
            Show all articles
          </button>
        </div>
      )}
      {filtered.length > 0 && (query || category !== 'All' || tag) && (
        <button type="button" className={styles.reset} onClick={reset}>
          Reset all filters
        </button>
      )}
      {filtered.length > 0 && (
        <p className={styles.endNote}>
          You’re up to date — all {filtered.length}{' '}
          {filtered.length === 1 ? 'matching article is' : 'matching articles are'} shown.
        </p>
      )}
    </section>
  )
}
