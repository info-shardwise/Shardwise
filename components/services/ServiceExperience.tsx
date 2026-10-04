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
import type { ServiceItem, ServiceCategory } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import { SERVICE_PROFILES } from './serviceProfiles'
import styles from './StrategyService.module.css'
import visual from './ServiceExperience.module.css'

export function ServiceExperience({
  service,
  category,
}: {
  service: ServiceItem
  category: ServiceCategory
}) {
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
                  {service.description}
                </p>
                <div className={styles.actions} data-reveal="up">
                  <Link href="/contact" className={styles.primary}>
                    Inquire About {service.name}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                  <Link href="/services" className={styles.secondary}>
                    All Services
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <figure
                className={visual.canvas}
                data-kind={config.kind}
                data-reveal="scale"
                aria-label={config.visualTitle}
              >
                <div className={visual.canvasBar}>
                  <span className={visual.dotGroup} aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>{config.visualTitle}</span>
                  <Icon aria-hidden="true" />
                </div>
                <div className={visual.canvasContent}>
                  <div className={visual.mock}>
                    <div className={visual.mockTop}>
                      <span className={visual.mark}>
                        <Icon aria-hidden="true" />
                      </span>
                      <span className={visual.mockLines} aria-hidden="true">
                        <i />
                        <i />
                      </span>
                      <span className={visual.status}>
                        <Check aria-hidden="true" />
                      </span>
                    </div>
                    <div className={visual.preview} aria-hidden="true">
                      <div className={visual.previewHero} />
                      <div className={visual.tiles}>
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className={visual.previewLines}>
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                    <div className={visual.mockFooter}>
                      <span>{category.name}</span>
                      <ArrowUpRight aria-hidden="true" />
                    </div>
                  </div>
                  <div className={visual.labels}>
                    {config.labels.map((label, index) => (
                      <div key={label}>
                        <span>0{index + 1}</span>
                        <strong>{label}</strong>
                        <Check aria-hidden="true" />
                      </div>
                    ))}
                  </div>
                </div>
                <figcaption>{service.name}</figcaption>
              </figure>
            </div>
          </div>
        </section>
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
      </div>
    </HomeMotion>
  )
}
