import type { ReactNode } from 'react'
import { Calendar, Scale, ShieldCheck, ArrowUpRight } from 'lucide-react'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import styles from './LegalLayout.module.css'
export function LegalLayout({
  title,
  updated,
  sections,
  children,
}: {
  title: string
  updated: string
  sections: { id: string; label: string }[]
  children: ReactNode
}) {
  const Icon = title === 'Privacy Policy' ? ShieldCheck : Scale
  return (
    <HomeMotion>
      <div className={styles.page}>
        <section className={styles.hero} aria-labelledby="legal-title">
          <span className={styles.eyebrow} data-reveal="up">
            <Icon aria-hidden="true" />
            Shardwise
          </span>
          <RevealHeading as="h1" id="legal-title" text={title} className={styles.title} />
          <p className={styles.updated}>
            <Calendar aria-hidden="true" />
            Last updated: {updated}
          </p>
        </section>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <nav aria-label="On this page">
              <h2>On this page</h2>
              {sections.map((section) => (
                <a href={'#' + section.id} key={section.id}>
                  {section.label}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </nav>
          </aside>
          <article className={styles.body} aria-label={title}>
            {children}
          </article>
        </div>
      </div>
    </HomeMotion>
  )
}
