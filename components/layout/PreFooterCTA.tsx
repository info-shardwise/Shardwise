import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function PreFooterCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#061A3A] to-[#040e20] py-20 border-t border-white/10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0878F9]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#11C5F5] mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Ready to innovate?</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-white max-w-3xl mx-auto leading-tight">
          Have a project <span className="text-[#11C5F5]">in mind?</span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
          Let&apos;s build software and digital experiences designed to scale.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  )
}
