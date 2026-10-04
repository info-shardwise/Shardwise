import Link from 'next/link'
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Globe,
  PenTool,
  Palette,
  Layers,
  Check,
} from 'lucide-react'
import type { ServiceItem } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import { SERVICE_PROFILES } from './serviceProfiles'
import styles from './LogoDesignService.module.css'

export function LogoDesignService({ service }: { service: ServiceItem }) {
  const profile = SERVICE_PROFILES['logo-design']
  if (!profile) return null
  const icons = [Palette, PenTool, Layers]
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
                className={styles.visual}
                aria-label="Illustrative brand identity exploration board"
                data-reveal="scale"
              >
                <div className={styles.visualTop}>
                  <span>
                    <span className={styles.statusDot} /> {profile.visualTitle}
                  </span>
                  <PenTool aria-hidden="true" />
                </div>
                <div className={styles.identityBoard} aria-hidden="true">
                  <div className={styles.markStudy}>
                    <span>FORM · BALANCE · CHARACTER</span>
                    <div className={styles.gridLines} />
                    <div className={styles.conceptMark}>
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <small>Illustrative mark exploration</small>
                  </div>
                  <div className={styles.boardDetails}>
                    <div className={styles.wordStudy}>
                      <small>TYPOGRAPHIC DIRECTION</small>
                      <strong>Aa</strong>
                      <span>Clear. Distinctive. Adaptable.</span>
                    </div>
                    <div className={styles.colorStudy}>
                      <small>COLOR EXPLORATION</small>
                      <div>
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                  <div className={styles.variantRow}>
                    <div>
                      <span className={styles.miniMark}>
                        <i />
                        <i />
                      </span>
                      <small>Primary</small>
                    </div>
                    <div>
                      <span className={styles.miniMark}>
                        <i />
                        <i />
                      </span>
                      <small>Monochrome</small>
                    </div>
                    <div>
                      <span className={styles.miniMark}>
                        <i />
                        <i />
                      </span>
                      <small>Compact</small>
                    </div>
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
                <figcaption>Illustrative identity study · form, typography, and color</figcaption>
              </figure>
            </div>
          </div>
        </section>
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
      </div>
    </HomeMotion>
  )
}
