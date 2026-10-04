import Link from 'next/link'
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Globe,
  Monitor,
  Cloud,
  Code2,
  Layers,
  Check,
} from 'lucide-react'
import type { ServiceItem } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import { SERVICE_PROFILES } from './serviceProfiles'
import styles from './CustomWebsiteService.module.css'

export function CustomWebsiteService({ service }: { service: ServiceItem }) {
  const profile = SERVICE_PROFILES['custom-website-development']
  if (!profile) return null
  const icons = [Layers, Code2, Cloud]
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
                aria-label="Illustrative custom website and reusable responsive component system"
                data-reveal="scale"
              >
                <div className={styles.visualTop}>
                  <span>
                    <span className={styles.statusDot} /> {profile.visualTitle}
                  </span>
                  <Code2 aria-hidden="true" />
                </div>
                <div className={styles.websiteCanvas} aria-hidden="true">
                  <div className={styles.websiteMock}>
                    <div className={styles.browserBar}>
                      <span className={styles.dots}>
                        <i />
                        <i />
                        <i />
                      </span>
                      <span>your-brand / your-website</span>
                      <Monitor />
                    </div>
                    <div className={styles.brandNav}>
                      <strong>YOUR BRAND</strong>
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className={styles.brandHero}>
                      <div>
                        <small>BUILT FOR YOUR VISION</small>
                        <strong>
                          A website.
                          <br />
                          Entirely yours.
                        </strong>
                        <span className={styles.mockButton}>
                          Explore what&apos;s possible <ArrowRight />
                        </span>
                      </div>
                      <div className={styles.abstractArt}>
                        <div />
                        <div />
                        <div />
                      </div>
                    </div>
                    <div className={styles.componentStrip}>
                      <span>
                        <Layers />
                        Reusable sections
                      </span>
                      <span>
                        <Code2 />
                        Considered code
                      </span>
                    </div>
                    <div className={styles.previewCards}>
                      <div>
                        <i />
                        <i />
                        <i />
                      </div>
                      <div>
                        <i />
                        <i />
                        <i />
                      </div>
                      <div>
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                  <div className={styles.mobileMock}>
                    <div className={styles.mobileSpeaker} />
                    <span className={styles.mobileBrand}>YOUR BRAND</span>
                    <div className={styles.mobileHero}>
                      <small>YOUR NEXT CHAPTER</small>
                      <strong>
                        Entirely
                        <br />
                        yours.
                      </strong>
                      <i />
                    </div>
                    <div className={styles.mobileCards}>
                      <i />
                      <i />
                    </div>
                    <span className={styles.mobileIndicator} />
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
                <figcaption>Illustrative website · one system across screen sizes</figcaption>
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
