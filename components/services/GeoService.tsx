import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ChevronRight, Search } from 'lucide-react'
import type { ServiceItem } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import styles from './StrategyService.module.css'
import visual from './GeoService.module.css'
import { GeoOptions, GeoContent } from './GeoContent'

export function GeoService({ service }: { service: ServiceItem }) {
  return (
    <HomeMotion>
      <div className={styles.page}>
        <section className={styles.hero} aria-labelledby="service-title">
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight aria-hidden="true" />
              <Link href="/services">Services</Link>
              <ChevronRight aria-hidden="true" />
              <span aria-current="page">{service.name}</span>
            </nav>
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.eyebrow} data-reveal="up">
                  <Search aria-hidden="true" />
                  Generative Engine Optimization
                </span>
                <RevealHeading
                  as="h1"
                  id="service-title"
                  text="Generative Engine Optimization (GEO)"
                  className={styles.title}
                />
                <p className={styles.description} data-reveal="up">
                  Generative Engine Optimization for clearer source content and informed AI
                  visibility decisions. Connect citation research, accurate brand information,
                  useful evidence, and a practical monitoring plan across agreed generative search
                  experiences.
                </p>
                <div className={styles.actions} data-reveal="up">
                  <Link href="/contact" className={styles.primary}>
                    Start your GEO project
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                  <Link href="/services" className={styles.secondary}>
                    All Services
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <figure
                className={visual.audit}
                data-reveal="scale"
                aria-label="Illustrative generative discovery research board"
              >
                <div className={visual.auditTop}>
                  <span>
                    <Search aria-hidden="true" /> Generative discovery study
                  </span>
                  <span>ILLUSTRATIVE</span>
                </div>
                <div className={visual.auditIntro}>
                  <span>QUESTION → SOURCE → CONTEXT</span>
                  <h2>
                    Understand the answer.
                    <br />
                    Strengthen the source.
                  </h2>
                  <p>A research frame for useful, verifiable information.</p>
                </div>
                <div className={visual.auditRows}>
                  {[
                    ['01', 'Audience question', 'What information helps a decision?'],
                    ['02', 'Linked source', 'Which page provides the evidence?'],
                    ['03', 'Brand context', 'Is the description accurate?'],
                    ['04', 'Next action', 'What should the team improve?'],
                  ].map(([n, title, text]) => (
                    <div key={n}>
                      <span>{n}</span>
                      <div>
                        <strong>{title}</strong>
                        <p>{text}</p>
                      </div>
                      <ArrowRight aria-hidden="true" />
                    </div>
                  ))}
                </div>
                <figcaption>
                  Illustrative research board · not a live AI answer or client result
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <GeoOptions />

        <GeoContent />
      </div>
    </HomeMotion>
  )
}
