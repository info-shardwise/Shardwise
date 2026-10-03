export interface ServiceItem {
  name: string
  slug: string
  href: string
  description: string
  iconName: string
}

export interface ServiceCategory {
  id: string
  name: string
  slug: string
  href: string
  description: string
  services: ServiceItem[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'app-dev',
    name: 'Application Development',
    slug: 'application-development',
    href: '/services#application-development',
    description: 'Custom native, hybrid, and cross-platform apps built for scale.',
    services: [
      {
        name: 'iOS App Development',
        slug: 'ios-app-development',
        href: '/services/ios-app-development',
        description: 'Native Swift & SwiftUI apps for Apple ecosystem.',
        iconName: 'Smartphone',
      },
      {
        name: 'Android App Development',
        slug: 'android-app-development',
        href: '/services/android-app-development',
        description: 'Modern Kotlin apps for high performance on Android.',
        iconName: 'TabletSmartphone',
      },
      {
        name: 'Web App Development',
        slug: 'web-app-development',
        href: '/services/web-app-development',
        description: 'Scalable SaaS, portals, and cloud-native web apps.',
        iconName: 'Globe',
      },
    ],
  },
  {
    id: 'web-dev',
    name: 'Website Development',
    slug: 'website-development',
    href: '/services#website-development',
    description: 'High-performance websites and headless e-commerce builds.',
    services: [
      {
        name: 'WordPress Development',
        slug: 'wordpress-development',
        href: '/services/wordpress-development',
        description: 'Custom Gutenberg and headless WordPress platforms.',
        iconName: 'Code2',
      },
      {
        name: 'Shopify Development',
        slug: 'shopify-development',
        href: '/services/shopify-development',
        description: 'Conversion-optimized stores and custom Liquid themes.',
        iconName: 'ShoppingBag',
      },
      {
        name: 'Custom Website Development',
        slug: 'custom-website-development',
        href: '/services/custom-website-development',
        description: 'Bespoke Next.js & React digital web experiences.',
        iconName: 'Layout',
      },
    ],
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    slug: 'maintenance',
    href: '/services#maintenance',
    description: 'Continuous proactive support, security, and optimization.',
    services: [
      {
        name: 'Website Maintenance',
        slug: 'website-maintenance',
        href: '/services/website-maintenance',
        description: '24/7 uptime monitoring, security updates, and fixes.',
        iconName: 'ShieldCheck',
      },
      {
        name: 'Shopify Store Maintenance',
        slug: 'shopify-store-maintenance',
        href: '/services/shopify-store-maintenance',
        description: 'Catalog sync, checkout speed, app updates, and audit.',
        iconName: 'Store',
      },
      {
        name: 'WooCommerce Maintenance',
        slug: 'woocommerce-maintenance',
        href: '/services/woocommerce-maintenance',
        description: 'Database tuning, gateway checks, and core patches.',
        iconName: 'RefreshCw',
      },
    ],
  },
  {
    id: 'design',
    name: 'Design',
    slug: 'design',
    href: '/services#design',
    description: 'User-centric UI/UX and brand identities that convert.',
    services: [
      {
        name: 'Logo Design',
        slug: 'logo-design',
        href: '/services/logo-design',
        description: 'Memorable brand marks, iconography, and identity kits.',
        iconName: 'Sparkles',
      },
      {
        name: 'Product Design',
        slug: 'product-design',
        href: '/services/product-design',
        description: 'End-to-end UX research, wireframes, and design systems.',
        iconName: 'PenTool',
      },
      {
        name: 'Website Design',
        slug: 'website-design',
        href: '/services/website-design',
        description: 'Engaging, responsive interface layouts and visual polish.',
        iconName: 'Monitor',
      },
      {
        name: 'App Design',
        slug: 'app-design',
        href: '/services/app-design',
        description: 'Pixel-perfect mobile and tablet interface prototypes.',
        iconName: 'Layers',
      },
    ],
  },
  {
    id: 'seo',
    name: 'SEO',
    slug: 'seo',
    href: '/services#seo',
    description: 'Search, AI answer engine, and generative optimization.',
    services: [
      {
        name: 'Technical & On-Page SEO',
        slug: 'technical-onpage-seo',
        href: '/services/technical-onpage-seo',
        description: 'Crawlability, Core Web Vitals, and semantic schema.',
        iconName: 'TrendingUp',
      },
      {
        name: 'Local & Google Business SEO',
        slug: 'local-google-business-seo',
        href: '/services/local-google-business-seo',
        description: 'Map rankings, reviews, and high-intent local visibility.',
        iconName: 'MapPin',
      },
      {
        name: 'Content & Keyword Strategy',
        slug: 'content-keyword-strategy',
        href: '/services/content-keyword-strategy',
        description: 'Topical authority clusters and conversion search queries.',
        iconName: 'FileText',
      },
      {
        name: 'App Store Optimization (ASO)',
        slug: 'app-store-optimization',
        href: '/services/app-store-optimization',
        description: 'Keyword ranking and conversion for iOS & Google Play.',
        iconName: 'DownloadCloud',
      },
      {
        name: 'AEO',
        slug: 'aeo',
        href: '/services/aeo',
        description: 'Answer Engine Optimization for Perplexity, Siri & Gemini.',
        iconName: 'HelpCircle',
      },
      {
        name: 'GEO',
        slug: 'geo',
        href: '/services/geo',
        description: 'Generative Engine Optimization for LLM discovery.',
        iconName: 'Cpu',
      },
    ],
  },
]
