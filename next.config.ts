import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static HTML export to Cloudflare Pages
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
