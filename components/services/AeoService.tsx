import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Check,
  Layers,
  Code2,
  ShieldCheck,
  PenTool,
  Search,
  Smartphone,
  ShoppingBag,
  Globe,
} from 'lucide-react'
import type { ServiceItem } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import { SERVICE_PROFILES } from './serviceProfiles'
import styles from './StrategyService.module.css'
import visual from './AeoService.module.css'
import { AeoOptions, AeoContent, AeoProjectCTA } from './AeoContent'

export function AeoService({ service }: { service: ServiceItem }) {
  const config = SERVICE_PROFILES[service.slug]
  if (!config) return null
  const Icon =
    config.kind === 'mobile'
      ? Smartphone
      : config.kind === 'store'
        ? ShoppingBag
        : config.kind === 'maintenance'
          ? ShieldCheck
          : config.kind === 'design'
            ? PenTool
            : config.kind === 'search'
              ? Search
              : Globe
  const cardIcons = [Layers, Code2, Check]
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
                  <Icon aria-hidden="true" />
                  {config.eyebrow}
                </span>
                <RevealHeading
                  as="h1"
                  id="service-title"
                  text="Answer Engine Optimization (AEO)"
                  className={styles.title}
                />
                <p className={styles.description} data-reveal="up">
                  Answer Engine Optimization for useful, well-supported answers. Connect question
                  research, featured snippet opportunities, People Also Ask, conversational content,
                  and appropriate structured data with a practical editorial plan.
                </p>
                <div className={styles.actions} data-reveal="up">
                  <Link href="/contact" className={styles.primary}>
                    Start your AEO project
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
                aria-label="Illustrative question and answer content layout"
              >
                <div className={visual.auditTop}>
                  <span>
                    <Search aria-hidden="true" /> Answer content study
                  </span>
                  <span>ILLUSTRATIVE</span>
                </div>
                <div className={visual.auditIntro}>
                  <span>QUESTION → ANSWER → CONTEXT</span>
                  <h2>What makes a useful answer?</h2>
                  <p>A clear response, credible support, and a helpful next step.</p>
                </div>
                <div className={visual.auditRows}>
                  {[
                    ['01', 'Lead with the answer', 'Explain the main point clearly'],
                    ['02', 'Show the supporting evidence', 'Add context and relevant examples'],
                    ['03', 'Connect related questions', 'Help readers explore the topic'],
                    ['04', 'Review and refine', 'Keep information accurate and current'],
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
                  Illustrative content structure · not a search result or client outcome
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <AeoOptions />

        <section className={styles.approach} aria-labelledby="approach-title">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow} data-reveal="up">
              Our approach
            </span>
            <RevealHeading
              id="approach-title"
              text={config.heading}
              className={styles.sectionTitle}
            />
            <p data-reveal="up">{config.intro}</p>
          </div>
          <div className={styles.cards}>
            {config.cards.map((card, index) => {
              const CardIcon = cardIcons[index] ?? Layers
              return (
                <article className={styles.card} key={card.title} data-reveal="up">
                  <div className={styles.cardTop}>
                    <span className={styles.cardIcon}>
                      <CardIcon aria-hidden="true" />
                    </span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              )
            })}
          </div>
        </section>
        <section className={styles.deliverables} aria-labelledby="deliverables-title">
          <div className={styles.deliveryIntro}>
            <span className={styles.eyebrow} data-reveal="up">
              A practical handover
            </span>
            <RevealHeading
              id="deliverables-title"
              text="Key Deliverables & Standards"
              className={styles.sectionTitle}
            />
            <p data-reveal="up">
              A clear scope, a considered implementation, and the information your team needs for
              the next step.
            </p>
          </div>
          <ul className={styles.checklist}>
            {config.deliverables.map((item, index) => (
              <li key={item} data-reveal="up">
                <span className={styles.check}>
                  <Check aria-hidden="true" />
                </span>
                <span>{item}</span>
                <span className={styles.itemNumber}>0{index + 1}</span>
              </li>
            ))}
          </ul>
        </section>
        <AeoProjectCTA />
        <AeoContent />
      </div>
    </HomeMotion>
  )
}
