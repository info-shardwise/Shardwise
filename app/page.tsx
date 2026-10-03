import { TrustStrip } from '@/components/home/TrustStrip'
import { HomeHero } from '@/components/home/HomeHero'
import Link from 'next/link'
import { ArrowRight, Layers } from 'lucide-react'
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
      <div>
        <HomeHero />
        <TrustStrip stats={stats} />
      </div>

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
