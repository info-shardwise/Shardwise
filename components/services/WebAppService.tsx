import Link from 'next/link'
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Globe,
  PanelLeft,
  Workflow,
  Cloud,
  Code2,
  Layers,
  Check,
  Accessibility,
} from 'lucide-react'
import type { ServiceItem } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import { SERVICE_PROFILES } from './serviceProfiles'
import styles from './WebAppService.module.css'
import { WebAppBuildOptions, WebAppContent, WebAppProjectCTA } from './WebAppContent'

export function WebAppService({ service }: { service: ServiceItem }) {
  const profile = SERVICE_PROFILES['web-app-development']
  if (!profile) return null
  const icons = [Workflow, Accessibility, Cloud]
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
                    Start your web app project
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
                aria-label="Illustrative web application workspace and connected workflows"
                data-reveal="scale"
              >
                <div className={styles.visualTop}>
                  <span>
                    <span className={styles.statusDot} /> {profile.visualTitle}
                  </span>
                  <Globe aria-hidden="true" />
                </div>
                <div className={styles.browserMock} aria-hidden="true">
                  <div className={styles.browserBar}>
                    <span className={styles.browserDots}>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className={styles.address}>your-product / workspace</span>
                    <PanelLeft />
                  </div>
                  <div className={styles.appShell}>
                    <aside className={styles.appSidebar}>
                      <span className={styles.appMark}>
                        <Layers />
                      </span>
                      <span className={styles.sidebarItem}>
                        <PanelLeft />
                        Workspace
                      </span>
                      <span className={styles.sidebarItem}>
                        <Workflow />
                        Workflows
                      </span>
                      <span className={styles.sidebarItem}>
                        <Code2 />
                        Integrations
                      </span>
                      <span className={styles.sidebarItem}>
                        <Cloud />
                        Delivery
                      </span>
                    </aside>
                    <div className={styles.appMain}>
                      <div className={styles.appHeading}>
                        <div>
                          <small>YOUR PRODUCT, CONNECTED</small>
                          <strong>A clearer workspace.</strong>
                        </div>
                        <span className={styles.avatar}>S</span>
                      </div>
                      <div className={styles.featurePanel}>
                        <Workflow />
                        <strong>
                          Useful features.
                          <br />
                          Connected experiences.
                        </strong>
                        <span>Designed around the way your team works.</span>
                      </div>
                      <div className={styles.workflowTiles}>
                        <div>
                          <Layers />
                          <span>Interface</span>
                        </div>
                        <span className={styles.connector}>→</span>
                        <div>
                          <Code2 />
                          <span>API & data</span>
                        </div>
                        <span className={styles.connector}>→</span>
                        <div>
                          <Cloud />
                          <span>Delivery</span>
                        </div>
                      </div>
                      <div className={styles.mockRows}>
                        <span>
                          <i />
                          Clear application states
                          <Check />
                        </span>
                        <span>
                          <i />
                          Responsive by design
                          <Check />
                        </span>
                      </div>
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
                <figcaption>Illustrative workspace · built around your workflows</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <WebAppBuildOptions />
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
        <WebAppProjectCTA />
        <WebAppContent />
      </div>
    </HomeMotion>
  )
}
