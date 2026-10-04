import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react'
import { SERVICE_CATEGORIES, type ServiceItem, type ServiceCategory } from '@/lib/services'
import { Button } from '@/components/ui/Button'
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'
import { SITE_CONFIG } from '@/lib/seo'
import { StrategyService } from '@/components/services/StrategyService'
import { ServiceExperience } from '@/components/services/ServiceExperience'
import { IosService } from '@/components/services/IosService'
import { AndroidService } from '@/components/services/AndroidService'
import { WebAppService } from '@/components/services/WebAppService'
import { WordPressService } from '@/components/services/WordPressService'
import { ShopifyService } from '@/components/services/ShopifyService'
import { CustomWebsiteService } from '@/components/services/CustomWebsiteService'
import { SERVICE_PROFILES } from '@/components/services/serviceProfiles'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Statically generate all 19 service paths at build time
export async function generateStaticParams() {
  const allServices: { slug: string }[] = []
  SERVICE_CATEGORIES.forEach((category) => {
    category.services.forEach((service) => {
      allServices.push({ slug: service.slug })
    })
  })
  return allServices
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  let currentService: ServiceItem | undefined

  for (const cat of SERVICE_CATEGORIES) {
    const found = cat.services.find((s) => s.slug === slug)
    if (found) {
      currentService = found
      break
    }
  }

  if (!currentService) return { title: 'Service Not Found' }

  return {
    title: `${currentService.name} | Shardwise`,
    description: currentService.description,
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params

  let currentCategory: ServiceCategory | undefined
  let service: ServiceItem | undefined

  for (const cat of SERVICE_CATEGORIES) {
    const found = cat.services.find((s) => s.slug === slug)
    if (found) {
      currentCategory = cat
      service = found
      break
    }
  }

  if (!service || !currentCategory) {
    notFound()
  }

  const deliverables = [
    'Enterprise-grade, scalable codebase and architectural specification',
    'Continuous performance audits with >95 Core Web Vitals target',
    'Comprehensive QA, browser testing, and automated test coverage',
    'Seamless deployment to Cloudflare or modern cloud infrastructure',
    'Full handover documentation and developer onboarding walkthrough',
  ]

  const fullUrl = `${SITE_CONFIG.url}/services/${service.slug}`
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Services', url: `${SITE_CONFIG.url}/services` },
    { name: service.name, url: fullUrl },
  ]

  if (slug === 'content-keyword-strategy' || slug === 'geo') {
    return (
      <>
        <ServiceSchema
          name={service.name}
          description={service.description}
          category={currentCategory.name}
          url={fullUrl}
        />
        <BreadcrumbSchema items={breadcrumbs} />
        <StrategyService service={service} />
      </>
    )
  }

  if (SERVICE_PROFILES[slug]) {
    return (
      <>
        <ServiceSchema
          name={service.name}
          description={service.description}
          category={currentCategory.name}
          url={fullUrl}
        />
        <BreadcrumbSchema items={breadcrumbs} />
        {slug === 'ios-app-development' ? (
          <IosService service={service} />
        ) : slug === 'android-app-development' ? (
          <AndroidService service={service} />
        ) : slug === 'web-app-development' ? (
          <WebAppService service={service} />
        ) : slug === 'wordpress-development' ? (
          <WordPressService service={service} />
        ) : slug === 'shopify-development' ? (
          <ShopifyService service={service} />
        ) : slug === 'custom-website-development' ? (
          <CustomWebsiteService service={service} />
        ) : (
          <ServiceExperience service={service} category={currentCategory} />
        )}
      </>
    )
  }

  return (
    <>
      <ServiceSchema
        name={service.name}
        description={service.description}
        category={currentCategory.name}
        url={fullUrl}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="flex flex-col gap-16 py-16">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#11C5F5]">{service.name}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#11C5F5] mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{currentCategory.name}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
              {service.name}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.description} Built with precision, top-tier performance standards, and
              designed to generate measurable business results.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Inquire About {service.name}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Deliverables Checklist */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="rounded-3xl border border-white/10 bg-[#061A3A] p-8 sm:p-12">
            <h2 className="font-display text-2xl sm:text-3xl uppercase text-white mb-6">
              Key Deliverables &amp; Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl bg-white/[0.02] p-4 border border-white/5"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#11C5F5] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
