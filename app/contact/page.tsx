'use client'

import { useState, useTransition } from 'react'
import { submitContactForm, type ContactState } from './actions'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import { SERVICE_CATEGORIES } from '@/lib/services'

const initialFormState: ContactState = {
  success: false,
  message: '',
}

export default function ContactPage() {
  const [state, setState] = useState<ContactState>(initialFormState)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      const result = await submitContactForm(state, formData)
      setState(result)
    })
  }

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#11C5F5] mb-2">
                Get In Touch
              </div>
              <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                Let&apos;s Start Building
              </h1>
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                Have a new application, web platform, or redesign in mind? Tell us about your
                timeline, scope, and goals.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <Mail className="h-5 w-5 text-[#11C5F5] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Direct Email</div>
                  <a href="mailto:contact@shardwise.com" className="hover:underline text-slate-400">
                    contact@shardwise.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <Phone className="h-5 w-5 text-[#11C5F5] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Phone Support</div>
                  <div className="text-slate-400">+1 (800) SHARDWISE</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <MapPin className="h-5 w-5 text-[#11C5F5] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Headquarters</div>
                  <div className="text-slate-400">San Francisco, California</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#061A3A] p-8 sm:p-10 shadow-2xl">
              {state.success ? (
                <div className="text-center py-12 space-y-4">
                  <div className="h-16 w-16 bg-[#11C5F5]/10 text-[#11C5F5] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl uppercase text-white">Message Received</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">{state.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {state.message && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-xs text-red-400">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{state.message}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase text-slate-300 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#0878F9] focus:outline-none focus:ring-1 focus:ring-[#0878F9]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase text-slate-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#0878F9] focus:outline-none focus:ring-1 focus:ring-[#0878F9]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold uppercase text-slate-300 mb-2"
                    >
                      Interested Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-white/10 bg-[#061A3A] px-4 py-3 text-sm text-white focus:border-[#0878F9] focus:outline-none focus:ring-1 focus:ring-[#0878F9]"
                    >
                      <option value="General Inquiry">Select a service category...</option>
                      {SERVICE_CATEGORIES.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase text-slate-300 mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your project scope, timeline, and goals..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#0878F9] focus:outline-none focus:ring-1 focus:ring-[#0878F9]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full rounded-xl bg-[#0878F9] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0878F9]/30 hover:bg-[#0754D8] transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isPending ? 'Sending...' : 'Submit Inquiry'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
