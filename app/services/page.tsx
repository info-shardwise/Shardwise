import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICE_CATEGORIES } from '@/lib/services'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Services Catalog',
  description:
    'Browse all development, maintenance, design, and search optimization services by Shardwise.',
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-20 py-16">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#11C5F5] mb-2">
            Capabilities
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
            Comprehensive Digital &amp; Software Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            End-to-end technology solutions tailored to your operational goals and growth targets.
          </p>
        </div>
      </section>

      {/* Categories & Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICE_CATEGORIES.map((category) => (
          <div
            key={category.id}
            id={category.slug}
            className="rounded-3xl border border-white/10 bg-[#061A3A]/70 p-8 sm:p-10 backdrop-blur-md"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-8">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl uppercase text-white">
                  {category.name}
                </h2>
                <p className="text-sm text-slate-300 mt-1 max-w-xl">{category.description}</p>
              </div>
              <Button href="/contact" variant="secondary" size="sm">
                Discuss {category.name}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-[#0878F9]/50 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white group-hover:text-[#11C5F5] transition-colors">
                      {service.name}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
