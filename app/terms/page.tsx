import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
}

export default function TermsPage() {
  return (
    <div className="py-16 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 text-slate-300">
      <h1 className="font-display text-4xl uppercase text-white mb-8">Terms &amp; Conditions</h1>
      <p>Last updated: October 2026</p>
      <h2 className="text-xl font-bold text-white pt-4">1. Intellectual Property</h2>
      <p>
        All bespoke software, designs, and deliverables created for clients are transferred
        according to individual master service agreements.
      </p>
      <h2 className="text-xl font-bold text-white pt-4">2. Warranties &amp; Disclaimers</h2>
      <p>
        All materials are provided as-is without warranties of continuous uninterrupted operations
        unless specified in a formal SLA.
      </p>
    </div>
  )
}
