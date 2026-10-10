import Link from 'next/link'
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Globe,
  PenTool,
  Users,
  Route,
  LayoutGrid,
  Layers,
  Check,
} from 'lucide-react'
import type { ServiceItem } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import { SERVICE_PROFILES } from './serviceProfiles'
import {
  ProductDesignOptions,
  ProductDesignContent,
  ProductDesignProjectCTA,
} from './ProductDesignContent'
import styles from './ProductDesignService.module.css'

export function ProductDesignService({ service }: { service: ServiceItem }) {
  const profile = SERVICE_PROFILES['product-design']
  if (!profile) return null
  const icons = [Users, Route, LayoutGrid]
  return (
    <HomeMotion>
      <div className={styles.page}>
        <section className={styles.hero} aria-labelledby="service-title">
          <div className={styles.inner}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight aria-hidden="true" />
              <Link href="/services">Services</Link>
              <ChevronRight aria-hidden="true" />
              <span aria-current="page">{service.name}</span>
            </nav>
            <div className={styles.heroGrid}>
              <div className={styles.copy}>
                <span className={styles.eyebrow} data-reveal="up">
                  <Globe aria-hidden="true" />
                  {profile.eyebrow}
                </span>
                <RevealHeading
                  as="h1"
                  id="service-title"
                  text={service.name}
                  className={styles.title}
                />
                <p className={styles.description} data-reveal="up">
                  UX/UI design for software products, from user workflows and research to considered
                  screens, prototypes, and design systems. Connect the experience with engineering
                  constraints and an agreed handoff plan.
                </p>
                <div className={styles.actions} data-reveal="up">
                  <Link href="/contact" className={styles.primary}>
                    Start your product design project
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                  <Link href="/services" className={styles.secondary}>
                    All Services
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <figure
                className={styles.visual}
                aria-label="Illustrative product design exploration canvas"
                data-reveal="scale"
              >
                <div className={styles.visualTop}>
                  <span>
                    <span className={styles.statusDot} /> {profile.visualTitle}
                  </span>
                  <PenTool aria-hidden="true" />
                </div>
                <div className={styles.productCanvas} aria-hidden="true">
                  <div className={styles.flowRow}>
                    <span>
                      <Users /> Discover
                    </span>
                    <ArrowRight />
                    <span>
                      <Route /> Map
                    </span>
                    <ArrowRight />
                    <span>
                      <LayoutGrid /> Prototype
                    </span>
                  </div>
                  <div className={styles.workspace}>
                    <div className={styles.sideRail}>
                      <LayoutGrid />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className={styles.interface}>
                      <div className={styles.interfaceHeading}>
                        <div>
                          <small>EXPERIENCE EXPLORATION</small>
                          <strong>A clearer next step.</strong>
                        </div>
                        <span>01</span>
                      </div>
                      <div className={styles.featureTile}>
                        <div className={styles.orbit}>
                          <i />
                          <i />
                          <i />
                        </div>
                        <div>
                          <small>CORE EXPERIENCE</small>
                          <strong>Thoughtful by design</strong>
                          <span>Structure · clarity · interaction</span>
                        </div>
                      </div>
                      <div className={styles.componentRow}>
                        <div>
                          <span className={styles.pill}>Explore</span>
                          <i />
                          <i />
                        </div>
                        <div>
                          <span className={styles.toggle}>
                            <i />
                          </span>
                          <i />
                          <i />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.systemRow}>
                    <span>COMPONENT LIBRARY</span>
                    <div>
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <span>Consistent, together.</span>
                  </div>
                </div>
                <div className={styles.platformLabels}>
                  {profile.labels.map((label, index) => (
                    <span key={label}>
                      <small>0{index + 1}</small>
                      {label}
                    </span>
                  ))}
                </div>
                <figcaption>
                  Illustrative product canvas · journeys, interfaces, and components
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <ProductDesignOptions />
        <section className={styles.approach} aria-labelledby="approach-title">
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.kicker}>OUR APPROACH</span>
              <RevealHeading
                id="approach-title"
                text={profile.heading}
                className={styles.sectionTitle}
              />
            </div>
            <p data-reveal="up">{profile.intro}</p>
          </div>
          <div className={styles.cards}>
            {profile.cards.map((card, index) => {
              const Icon = icons[index] ?? Layers
              return (
                <article className={styles.card} key={card.title} data-reveal="up">
                  <div className={styles.cardTop}>
                    <span className={styles.cardIcon}>
                      <Icon aria-hidden="true" />
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
        <section className={styles.delivery} aria-labelledby="deliverables-title">
          <div className={styles.deliveryIntro}>
            <span className={styles.kicker}>A PRACTICAL HANDOVER</span>
            <RevealHeading
              id="deliverables-title"
              text="Key Deliverables & Standards"
              className={styles.sectionTitle}
            />
            <p>
              A clear scope, a considered implementation, and the information your team needs for
              the next step.
            </p>
            <span className={styles.deliveryMark} aria-hidden="true">
              <Layers />
            </span>
          </div>
          <ol className={styles.checklist}>
            {profile.deliverables.map((item, index) => (
              <li key={item} data-reveal="up">
                <span className={styles.itemNumber}>0{index + 1}</span>
                <span>{item}</span>
                <Check aria-hidden="true" />
              </li>
            ))}
          </ol>
        </section>
        <ProductDesignProjectCTA />
        <ProductDesignContent />
      </div>
    </HomeMotion>
  )
}
