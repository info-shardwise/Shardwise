import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/seo'
import { fontJakarta, fontAnton, fontInter } from '@/lib/fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { OrganizationSchema } from '@/components/seo/JsonLd'
import { WebVitalsObserver } from '@/components/analytics/WebVitalsObserver'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Shardwise — Software & Digital Agency',
    template: '%s | Shardwise',
  },
  description:
    'Shardwise builds websites, applications, digital experiences, and growth-focused solutions for modern businesses.',
  metadataBase: new URL(SITE_CONFIG.url),
  verification: {
    google: 'SSYYS10DDu_wipUXt4LEbHiIP5TINV8bZ7Gc0A0xAKQ',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: 'Shardwise',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fontJakarta.variable} ${fontAnton.variable} ${fontInter.variable}`}
    >
      <head>
        <OrganizationSchema />
      </head>
      <body className="min-h-screen bg-black text-white font-body antialiased flex flex-col justify-between selection:bg-[#0878F9] selection:text-white">
        <WebVitalsObserver />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
