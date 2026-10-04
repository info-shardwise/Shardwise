import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/seo'
import { SERVICE_CATEGORIES } from '@/lib/services'
import { getAllPosts } from '@/lib/mdx'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url
  const currentDate = new Date().toISOString()

  // 1. Core static marketing pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // 2. All 19 sub-service routes
  const serviceRoutes: MetadataRoute.Sitemap = []
  SERVICE_CATEGORIES.forEach((category) => {
    category.services.forEach((service) => {
      serviceRoutes.push({
        url: `${baseUrl}${service.href}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.85,
      })
    })
  })

  // 3. All MDX blog posts
  const posts = getAllPosts()
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.date || currentDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes]
}
