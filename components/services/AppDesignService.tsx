import Link from 'next/link'
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Globe,
  PenTool,
  Route,
  Smartphone,
  LayoutGrid,
  Layers,
  Check,
} from 'lucide-react'
import type { ServiceItem } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import { SERVICE_PROFILES } from './serviceProfiles'
import styles from './AppDesignService.module.css'
import { AppDesignOptions, AppDesignContent, AppDesignProjectCTA } from './AppDesignContent'

export function AppDesignService({ service }: { service: ServiceItem }) {
  const profile = SERVICE_PROFILES['app-design']
  if (!profile) return null
  const icons = [Route, PenTool, Smartphone]
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
                  Mobile app UX and UI design for iOS, Android, and cross-platform experiences.
                  Connect user research, platform-aware interaction patterns, reusable components,
                  and a practical handoff to your development team.
                </p>
                <div className={styles.actions} data-reveal="up">
                  <Link href="/contact" className={styles.primary}>
                    Start your app design project
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
                aria-label="Illustrative mobile app interface and interaction study"
                data-reveal="scale"
              >
                <div className={styles.visualTop}>
                  <span>
                    <span className={styles.statusDot} /> {profile.visualTitle}
                  </span>
                  <PenTool aria-hidden="true" />
                </div>
                <div className={styles.appCanvas} aria-hidden="true">
                  <div className={styles.canvasCaption}>
                    <span>INTERFACE EXPLORATION</span>
                    <span>
                      <Smartphone /> Mobile first
                    </span>
                  </div>
                  <div className={styles.screenPair}>
                    <div className={styles.appScreen}>
                      <div className={styles.screenTop}>
                        <span>9:41</span>
                        <i />
                      </div>
                      <div className={styles.screenContent}>
                        <span className={styles.appMark}>
                          <LayoutGrid />
                        </span>
                        <small>YOUR NEXT CHAPTER</small>
                        <strong>
                          A little clarity.
                          <br />A lot of possibility.
                        </strong>
                        <div className={styles.artwork}>
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className={styles.textLines}>
                          <i />
                          <i />
                        </div>
                        <span className={styles.mockButton}>
                          Get started <ArrowRight />
                        </span>
                        <div className={styles.pageDots}>
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                    </div>
                    <div className={styles.appScreen}>
                      <div className={styles.screenTop}>
                        <span>9:41</span>
                        <i />
                      </div>
                      <div className={styles.screenContent}>
                        <div className={styles.appNav}>
                          <LayoutGrid />
                          <span />
                        </div>
                        <small>GOOD TO SEE YOU</small>
                        <strong>Find your focus.</strong>
                        <div className={styles.searchField}>
                          <i /> Explore what’s next
                        </div>
                        <div className={styles.featureCard}>
                          <span>MADE FOR YOU</span>
                          <strong>Space to grow</strong>
                          <div className={styles.miniArt}>
                            <i />
                            <i />
                          </div>
                        </div>
                        <div className={styles.listItem}>
                          <span />
                          <div>
                            <i />
                            <i />
                          </div>
                          <ArrowRight />
                        </div>
                        <div className={styles.listItem}>
                          <span />
                          <div>
                            <i />
                            <i />
                          </div>
                          <ArrowRight />
                        </div>
                        <div className={styles.bottomNav}>
                          <LayoutGrid />
                          <Route />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.interactionRow}>
                    <span>
                      <Route /> Clear journeys
                    </span>
                    <span>
                      <Layers /> Consistent patterns
                    </span>
                    <span>
                      <Check /> Considered states
                    </span>
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
                  Illustrative app study · onboarding, navigation, and interface patterns
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <AppDesignOptions />
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
              A clear design scope, documented mobile interfaces, and the information your team
              needs for the next step.
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
        <AppDesignProjectCTA />
        <AppDesignContent />
      </div>
    </HomeMotion>
  )
}
