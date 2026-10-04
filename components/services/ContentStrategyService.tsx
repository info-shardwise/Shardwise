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
import styles from './StrategyService.module.css'
import visual from './ContentStrategyService.module.css'
import { ContentStrategyOptions, ContentStrategyContent } from './ContentStrategyContent'

export function ContentStrategyService({ service }: { service: ServiceItem }) {
  const config = {
    kind: 'search',
    eyebrow: 'Research, direction, and useful content',
    heading: 'Give every piece a purpose.',
    intro:
      'Connect the questions your audience asks with a practical editorial plan and clearly defined publishing work.',
    cards: [
      {
        title: 'Understand the audience',
        text: 'Use research, existing evidence, and real business insight to prioritize questions worth answering.',
      },
      {
        title: 'Connect the topics',
        text: 'Give pages clear purposes and useful relationships instead of publishing isolated articles.',
      },
      {
        title: 'Plan the delivery',
        text: 'Agree briefs, owners, reviews, and publishing responsibilities around available capacity.',
      },
    ],
    deliverables: [
      'Keyword research and audience intent mapping',
      'Topic clusters and page-level recommendations',
      'Content inventory and prioritized opportunities',
      'Editorial roadmap and actionable briefs',
      'Agreed production and review responsibilities',
      'Measurement and content improvement framework',
    ],
  }
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
                  Content and keyword strategy that connects audience questions with useful pages,
                  clear briefs, and a workable editorial plan. Define the research, production, and
                  improvement work around your business goals.
                </p>
                <div className={styles.actions} data-reveal="up">
                  <Link href="/contact" className={styles.primary}>
                    Start your content project
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
                aria-label="Illustrative editorial planning board"
              >
                <div className={visual.auditTop}>
                  <span>
                    <Search aria-hidden="true" /> Editorial direction
                  </span>
                  <span>ILLUSTRATIVE</span>
                </div>
                <div className={visual.auditIntro}>
                  <span>FROM QUESTIONS TO USEFUL CONTENT</span>
                  <h2>
                    A clear plan.
                    <br />A connected story.
                  </h2>
                  <p>Research, organize, create, and improve.</p>
                </div>
                <div className={visual.board}>
                  {[
                    ['Research', 'Audience questions', 'Search intent'],
                    ['Plan', 'Topic relationships', 'Content briefs'],
                    ['Create', 'Draft and review', 'Publish and learn'],
                  ].map(([stage, a, b], i) => (
                    <div key={stage}>
                      <span>
                        0{i + 1} · {stage}
                      </span>
                      <article>
                        <strong>{a}</strong>
                        <div className={visual.lines}>
                          <i />
                          <i />
                          <i />
                        </div>
                      </article>
                      <article>
                        <strong>{b}</strong>
                        <div className={visual.lines}>
                          <i />
                          <i />
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
                <figcaption>
                  Illustrative planning board · not a client calendar or measured result
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <ContentStrategyOptions />
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
        <ContentStrategyContent />
      </div>
    </HomeMotion>
  )
}
