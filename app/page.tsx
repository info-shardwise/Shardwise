import type { Metadata } from 'next'
import { SeoHomepage } from '@/components/home/SeoHomepage'
const title = 'Web & App Development for UK & US Businesses | Shardwise'
const description =
  'Shardwise offers website and app development, design, maintenance and SEO for UK and US businesses. Tell us about your project and explore your options.'
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: 'https://shardwise.pages.dev/' },
  openGraph: {
    title,
    description,
    url: 'https://shardwise.pages.dev/',
    images: ['/images/home/unsplash/team-collaboration.jpg'],
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    images: ['/images/home/unsplash/team-collaboration.jpg'],
  },
}
export default function HomePage() {
  return <SeoHomepage />
}
