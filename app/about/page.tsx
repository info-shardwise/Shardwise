import type { Metadata } from 'next'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shardwise — our philosophy, team, and modern engineering standards.',
}

export default function AboutPage() {
  const principles = [
    {
      title: 'Obsession With Performance',
      desc: 'Every millisecond counts. We engineer websites and apps with sub-second loads and near-perfect Core Web Vitals.',
    },
    {
      title: 'Maintainable, Modern Code',
      desc: 'No spaghetti code or fragile frameworks. We write clean, typed TypeScript and modular architectures.',
    },
    {
      title: 'Commercial Alignment',
      desc: 'Technology is a tool for business growth. We build solutions designed to directly drive leads and revenue.',
    },
    {
      title: 'Transparent Collaboration',
      desc: 'Weekly sprint demos, clear roadmaps, direct access to engineers, and zero vendor lock-in.',
    },
  ]

  return (
    <div className="flex flex-col gap-20 py-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#11C5F5] mb-2">
            About Shardwise
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
            We Build Modern Digital Engines For Ambitious Brands
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Shardwise is a digital technology studio dedicated to crafting high-performance
            websites, custom web and mobile applications, conversion-driven design systems, and
            authoritative search strategies.
          </p>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-display text-2xl sm:text-3xl uppercase text-white">
            Engineering Principles
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-[#061A3A] p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-5 w-5 text-[#11C5F5]" />
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Block */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#061A3A] to-[#0a2756] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase text-white">
              Want to work together?
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-md">
              Let&apos;s talk about your roadmap, timeline, and how Shardwise can accelerate your
              delivery.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="lg">
            Get In Touch
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
