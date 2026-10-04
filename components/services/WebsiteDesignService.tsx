import Link from 'next/link'
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Globe,
  PenTool,
  Monitor,
  Smartphone,
  LayoutGrid,
  Layers,
  Check,
} from 'lucide-react'
import type { ServiceItem } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import { SERVICE_PROFILES } from './serviceProfiles'
import styles from './WebsiteDesignService.module.css'
import { WebsiteDesignOptions, WebsiteDesignContent } from './WebsiteDesignContent'

export function WebsiteDesignService({ service }: { service: ServiceItem }) {
  const profile = SERVICE_PROFILES['website-design']
  if (!profile) return null
  const icons = [LayoutGrid, PenTool, Smartphone]
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
                  Responsive website UX and visual design for marketing, content, and ecommerce
                  journeys. Connect your brand with clear navigation, useful page layouts, and a
                  practical developer handoff.
                </p>
                <div className={styles.actions} data-reveal="up">
                  <Link href="/contact" className={styles.primary}>
                    Start your website design project
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
                aria-label="Illustrative desktop and mobile website design canvas"
                data-reveal="scale"
              >
                <div className={styles.visualTop}>
                  <span>
                    <span className={styles.statusDot} /> {profile.visualTitle}
                  </span>
                  <PenTool aria-hidden="true" />
                </div>
                <div className={styles.webCanvas} aria-hidden="true">
                  <div className={styles.canvasCaption}>
                    <span>
                      <Monitor /> Desktop canvas
                    </span>
                    <span>
                      <Smartphone /> Mobile layout
                    </span>
                  </div>
                  <div className={styles.deviceStage}>
                    <div className={styles.desktopFrame}>
                      <div className={styles.browserBar}>
                        <span>
                          <i />
                          <i />
                          <i />
                        </span>
                        <small>Website exploration</small>
                        <i />
                      </div>
                      <div className={styles.siteNav}>
                        <span className={styles.siteMark} />
                        <div>
                          <i />
                          <i />
                          <i />
                        </div>
                        <span />
                      </div>
                      <div className={styles.siteHero}>
                        <small>SPACE FOR YOUR NEXT IDEA</small>
                        <strong>
                          Make a<br />
                          lasting impression.
                        </strong>
                        <div className={styles.copyLines}>
                          <i />
                          <i />
                        </div>
                        <span className={styles.mockCta}>
                          Explore the experience <ArrowRight />
                        </span>
                        <div className={styles.abstractArt}>
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                      <div className={styles.siteCards}>
                        <div>
                          <span />
                          <i />
                          <i />
                        </div>
                        <div>
                          <span />
                          <i />
                          <i />
                        </div>
                        <div>
                          <span />
                          <i />
                          <i />
                        </div>
                      </div>
                    </div>
                    <div className={styles.phoneFrame}>
                      <div className={styles.phoneSpeaker} />
                      <div className={styles.phoneNav}>
                        <span className={styles.siteMark} />
                        <i />
                      </div>
                      <div className={styles.phoneHero}>
                        <small>SPACE FOR YOUR NEXT IDEA</small>
                        <strong>Make a lasting impression.</strong>
                        <div className={styles.copyLines}>
                          <i />
                          <i />
                        </div>
                        <span className={styles.mockCta}>
                          Explore <ArrowRight />
                        </span>
                        <div className={styles.phoneArt}>
                          <i />
                          <i />
                        </div>
                      </div>
                      <div className={styles.phoneCard}>
                        <span />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                  <div className={styles.designTools}>
                    <span>LAYOUT</span>
                    <span>TYPOGRAPHY</span>
                    <span>INTERACTION</span>
                    <div>
                      <i />
                      <i />
                      <i />
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
                <figcaption>
                  Illustrative website study · one visual direction, multiple screen sizes
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <WebsiteDesignOptions />
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
              A clear design scope, documented layouts, and the information your team needs for the
              next step.
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
        <WebsiteDesignContent />
      </div>
    </HomeMotion>
  )
}
