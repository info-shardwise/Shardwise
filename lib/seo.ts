import type { Metadata } from 'next'

export const SITE_CONFIG = {
  name: 'Shardwise',
  shortName: 'Shardwise',
  description:
    'Shardwise is an elite software engineering and digital agency crafting high-performance web applications, mobile platforms, design systems, and generative search solutions.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shardwise.com',
  ogImage: '/images/og-default.jpg',
  twitterHandle: '@shardwise',
  author: 'Shardwise Engineering Team',
}

interface MetadataProps {
  title: string
  description?: string
  path?: string
  ogImage?: string
  type?: 'website' | 'article'
}

export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  path = '',
  ogImage = SITE_CONFIG.ogImage,
  type = 'website',
}: MetadataProps): Metadata {
  const url = `${SITE_CONFIG.url}${path.startsWith('/') ? path : `/${path}`}`

  return {
    title: {
      default: `${title} | ${SITE_CONFIG.name}`,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: 'en_US',
      type,
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${SITE_CONFIG.url}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      creator: SITE_CONFIG.twitterHandle,
      images: [ogImage.startsWith('http') ? ogImage : `${SITE_CONFIG.url}${ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
