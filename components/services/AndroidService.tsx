import Link from 'next/link'
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Smartphone,
  Code2,
  Layers,
  Check,
  MoveUpRight,
  Accessibility,
  Zap,
} from 'lucide-react'
import type { ServiceItem } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import { SERVICE_PROFILES } from './serviceProfiles'
import styles from './AndroidService.module.css'
import { AndroidBuildOptions, AndroidContent } from './AndroidContent'

export function AndroidService({ service }: { service: ServiceItem }) {
  const profile = SERVICE_PROFILES['android-app-development']
  if (!profile) return null
  const icons = [Code2, Accessibility, Zap]
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
                  <Smartphone aria-hidden="true" />
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
                    Start your Android project
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
                aria-label="Illustrative Android interface and adaptive Kotlin development workflow"
                data-reveal="scale"
              >
                <div className={styles.visualTop}>
                  <span>
                    <span className={styles.statusDot} /> {profile.visualTitle}
                  </span>
                  <Code2 aria-hidden="true" />
                </div>
                <div className={styles.workspace}>
                  <div className={styles.phone} aria-hidden="true">
                    <div className={styles.island} />
                    <div className={styles.phoneHeader}>
                      <span className={styles.appIcon}>
                        <Layers />
                      </span>
                      <span>
                        YOUR NEXT IDEA<small>Made for Android</small>
                      </span>
                    </div>
                    <div className={styles.phoneFeature}>
                      <MoveUpRight />
                      <span>
                        Built to
                        <br />
                        adapt.
                      </span>
                    </div>
                    <div className={styles.phoneTiles}>
                      <div>
                        <Accessibility />
                        <span>Accessible</span>
                      </div>
                      <div>
                        <Zap />
                        <span>Responsive</span>
                      </div>
                    </div>
                    <div className={styles.adaptiveBanner}>
                      <span>Flexible layouts</span>
                      <span>Mobile · Tablet</span>
                    </div>
                    <div className={styles.phoneRows}>
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className={styles.phoneNav}>
                      <Layers />
                      <Smartphone />
                      <Check />
                    </div>
                    <div className={styles.homeIndicator} />
                  </div>
                  <div className={styles.buildNotes}>
                    <span className={styles.noteLabel}>ADAPTIVE BY DESIGN</span>
                    {profile.labels.map((label, index) => (
                      <div className={styles.buildNote} key={label}>
                        <span>0{index + 1}</span>
                        <strong>{label}</strong>
                        <Check aria-hidden="true" />
                      </div>
                    ))}
                    <div className={styles.codeNote}>
                      <Code2 aria-hidden="true" />
                      <span>Kotlin foundation</span>
                      <small>Built around your devices.</small>
                    </div>
                  </div>
                </div>
                <figcaption>Illustrative interface · built around your product</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <AndroidBuildOptions />
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
        <AndroidContent />
      </div>
    </HomeMotion>
  )
}
