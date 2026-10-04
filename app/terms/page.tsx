import type { Metadata } from 'next'
import { LegalLayout } from '@/components/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
}

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      updated="October 2026"
      sections={[
        { id: 'section-1', label: '1. Intellectual Property' },
        { id: 'section-2', label: '2. Warranties & Disclaimers' },
      ]}
    >
      <h2 id="section-1" className="text-xl font-bold text-white pt-4">
        1. Intellectual Property
      </h2>
      <p>
        All bespoke software, designs, and deliverables created for clients are transferred
        according to individual master service agreements.
      </p>
      <h2 id="section-2" className="text-xl font-bold text-white pt-4">
        2. Warranties &amp; Disclaimers
      </h2>
      <p>
        All materials are provided as-is without warranties of continuous uninterrupted operations
        unless specified in a formal SLA.
      </p>
    </LegalLayout>
  )
}
