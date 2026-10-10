'use client'

import { useState, useTransition } from 'react'
import { submitContactForm, type ContactState } from './actions'
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import { SERVICE_CATEGORIES } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import styles from './Contact.module.css'
import { ContactNextSteps, ContactResources } from './ContactContent'

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
    <HomeMotion>
      <div className={styles.page}>
        <section className={styles.hero} aria-labelledby="contact-title">
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow} data-reveal="up">
              Get In Touch
            </div>
            <RevealHeading
              as="h1"
              id="contact-title"
              text="Let’s Start Building"
              className={styles.title}
            />
            <p className={styles.description} data-reveal="up">
              Have a new application, web platform, or redesign in mind? Tell us about your
              timeline, scope, and goals.
            </p>
          </div>
        </section>
        <div className={styles.container}>
          <div className={styles.layout}>
            <ContactNextSteps />

            {/* Right Column: Form */}
            <div className={styles.formColumn} data-reveal="up">
              <div className={styles.formPanel}>
                <h2 className={styles.panelTitle}>Tell us about your project</h2>
                <p className={styles.formIntro}>
                  Start with your goals and what you need help with. Required fields are marked with
                  an asterisk.
                </p>
                {state.success ? (
                  <div className={styles.success} role="status" aria-live="polite">
                    <div className="h-16 w-16 bg-[#11C5F5]/10 text-[#11C5F5] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl uppercase text-white">Message Received</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">{state.message}</p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className={styles.form}
                    aria-label="Project inquiry"
                    aria-busy={isPending}
                  >
                    {state.message && (
                      <div className={styles.error} role="alert">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{state.message}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={styles.label}>
                          Your Name *
                        </label>
                        <input
                          id="name"
                          autoComplete="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Doe"
                          className={styles.field}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className={styles.label}>
                          Email Address *
                        </label>
                        <input
                          id="email"
                          autoComplete="email"
                          name="email"
                          type="email"
                          required
                          placeholder="jane@company.com"
                          className={styles.field}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className={styles.label}>
                        Interested Service
                      </label>
                      <select id="service" name="service" className={styles.field}>
                        <option value="General Inquiry">Select a service category...</option>
                        {SERVICE_CATEGORIES.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className={styles.label}>
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell us about your project scope, timeline, and goals..."
                        className={styles.field}
                        aria-describedby="brief-help"
                      />
                      <p id="brief-help" className={styles.help}>
                        Include your current website or app, intended audience, priorities, and any
                        budget or launch-date constraints you already know.
                      </p>
                    </div>

                    <button type="submit" disabled={isPending} className={styles.submit}>
                      {isPending ? 'Sending...' : 'Start the conversation'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className={styles.help}>
                      Share only the details needed to discuss your project. Please do not include
                      passwords, payment information, or confidential files. Read our{' '}
                      <a href="/privacy-policy/">privacy policy</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
          <ContactResources />
        </div>
      </div>
    </HomeMotion>
  )
}
