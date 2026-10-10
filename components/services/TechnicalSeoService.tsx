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
import visual from './TechnicalSeoService.module.css'
import {
  TechnicalSeoOptions,
  TechnicalSeoContent,
  TechnicalSeoProjectCTA,
} from './TechnicalSeoContent'

export function TechnicalSeoService({ service }: { service: ServiceItem }) {
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
                  text={service.name}
                  className={styles.title}
                />
                <p className={styles.description} data-reveal="up">
                  Technical and on-page SEO for crawlability, indexation, performance, and clearer
                  page signals. Get an evidence-based audit and a prioritized roadmap your
                  development and content teams can act on.
                </p>
                <div className={styles.actions} data-reveal="up">
                  <Link href="/contact" className={styles.primary}>
                    Start your technical SEO project
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
                aria-label="Illustrative technical SEO audit roadmap"
              >
                <div className={visual.auditTop}>
                  <span>
                    <Search aria-hidden="true" /> Technical audit roadmap
                  </span>
                  <span>ILLUSTRATIVE</span>
                </div>
                <div className={visual.auditIntro}>
                  <span>UNDERSTAND THE FOUNDATION</span>
                  <h2>
                    Find the issue.
                    <br />
                    Plan the next step.
                  </h2>
                  <p>A clear route from evidence to implementation.</p>
                </div>
                <div className={visual.auditRows}>
                  {[
                    ['01', 'Discovery and crawl access', 'Map the routes that matter'],
                    ['02', 'Indexing and page signals', 'Review the intended content'],
                    ['03', 'Performance and rendering', 'Investigate real bottlenecks'],
                    ['04', 'Priorities and validation', 'Agree owners and next steps'],
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
                  Illustrative workflow · not a client dashboard or measured result
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <TechnicalSeoOptions />
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
        <TechnicalSeoProjectCTA />
        <TechnicalSeoContent />
      </div>
    </HomeMotion>
  )
}
