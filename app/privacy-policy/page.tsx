import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 text-slate-300">
      <h1 className="font-display text-4xl uppercase text-white mb-8">Privacy Policy</h1>
      <p>Last updated: October 2026</p>
      <h2 className="text-xl font-bold text-white pt-4">1. Information We Collect</h2>
      <p>
        We collect information directly from you when you submit a project inquiry or contact form
        on our website.
      </p>
      <h2 className="text-xl font-bold text-white pt-4">2. How We Use Information</h2>
      <p>
        Your information is used solely to respond to project requests, evaluate technical
        requirements, and deliver requested agency services.
      </p>
      <h2 className="text-xl font-bold text-white pt-4">3. Security</h2>
      <p>We employ encryption in transit and rest across our platforms to safeguard your data.</p>
    </div>
  )
}
