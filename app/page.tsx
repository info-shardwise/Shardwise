import Link from 'next/link'
import { ArrowRight, Layers, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SERVICE_CATEGORIES } from '@/lib/services'

export default function HomePage() {
  const stats = [
    { label: 'Projects Delivered', value: '60+' },
    { label: 'Client Satisfaction', value: '99.4%' },
    { label: 'Average Performance Score', value: '95+' },
    { label: 'Global Reach', value: '12+ Countries' },
  ]

  const steps = [
    {
      num: '01',
      title: 'Discovery & Blueprint',
      desc: 'Deep dive into your product requirements, architecture, user journeys, and target KPIs.',
    },
    {
      num: '02',
      title: 'Design System & UX',
      desc: 'High-fidelity interactive prototypes, design tokens, and user-tested conversion flows.',
    },
    {
      num: '03',
      title: 'Full-Stack Development',
      desc: 'Clean Next.js, TypeScript, and cloud-native backend implementation built for speed and scale.',
    },
    {
      num: '04',
      title: 'QA, Deploy & Scale',
      desc: 'Edge deployment, rigorous Lighthouse auditing, automated CI/CD, and 24/7 proactive monitoring.',
    },
  ]

  return (
    <div className="flex flex-col gap-24 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-36 bg-[#061A3A] border-b border-white/5">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#0878F9]/20 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-[#11C5F5]/15 blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#11C5F5] mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Full-Cycle Digital Agency & Software Engineering</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[1.08]">
              We Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#11C5F5] to-[#0878F9]">
                Digital Products
              </span>{' '}
              That Scale
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              From high-performance web platforms and bespoke mobile applications to technical SEO
              and ongoing maintenance. We turn complex requirements into clean, scalable software.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-xl shadow-[#0878F9]/30"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-white/10 bg-[#061A3A]/90 backdrop-blur-md p-6 shadow-2xl">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-3">
              <div className="font-display text-3xl sm:text-4xl text-white tracking-wide">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Services Overview Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#11C5F5]">
              Core Capabilities
            </div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-white mt-2">
              Our 5 Service Pillars
            </h2>
          </div>
          <Link
            href="/services"
            className="mt-4 md:mt-0 text-sm font-semibold text-[#11C5F5] hover:underline inline-flex items-center gap-1.5"
          >
            Explore complete catalog &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[#0878F9]/50 hover:bg-white/[0.05] hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="h-12 w-12 rounded-xl bg-[#0878F9]/10 text-[#0878F9] flex items-center justify-center mb-6 group-hover:bg-[#0878F9] group-hover:text-white transition-colors">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{cat.description}</p>
                <ul className="space-y-2 border-t border-white/5 pt-4">
                  {cat.services.map((s) => (
                    <li key={s.slug} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#11C5F5]" />
                      <span>{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5">
                <Link
                  href={cat.href}
                  className="text-xs font-semibold text-[#11C5F5] group-hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  Learn more about {cat.name}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Process Workflow */}
      <section className="bg-white/[0.015] border-y border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#11C5F5]">
              How We Work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-white mt-2">
              From Concept To Production
            </h2>
            <p className="text-sm text-slate-400 mt-3">
              A transparent, agile execution process designed to minimize risk and accelerate
              time-to-market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="rounded-2xl border border-white/10 bg-[#061A3A] p-6 relative"
              >
                <span className="font-display text-3xl text-white/20">{st.num}</span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">{st.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
