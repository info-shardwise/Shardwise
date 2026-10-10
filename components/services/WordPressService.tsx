import Link from 'next/link'
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Globe,
  PanelLeft,
  Code2,
  Layers,
  Check,
} from 'lucide-react'
import type { ServiceItem } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import { SERVICE_PROFILES } from './serviceProfiles'
import styles from './WordPressService.module.css'
import { WordPressBuildOptions, WordPressContent, WordPressProjectCTA } from './WordPressContent'

export function WordPressService({ service }: { service: ServiceItem }) {
  const profile = SERVICE_PROFILES['wordpress-development']
  if (!profile) return null
  const icons = [Layers, Code2, Check]
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
                    Start your WordPress project
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
                aria-label="Illustrative WordPress block editor and publishing workflow"
                data-reveal="scale"
              >
                <div className={styles.visualTop}>
                  <span>
                    <span className={styles.statusDot} /> {profile.visualTitle}
                  </span>
                  <Code2 aria-hidden="true" />
                </div>
                <div className={styles.editor} aria-hidden="true">
                  <div className={styles.editorToolbar}>
                    <span className={styles.wpMark}>W</span>
                    <span>Your next website</span>
                    <span className={styles.publishTag}>Publish</span>
                  </div>
                  <div className={styles.editorGrid}>
                    <div className={styles.blockRail}>
                      <Layers />
                      <span>Blocks</span>
                      <div className={styles.blockTile}>T</div>
                      <div className={styles.blockTile}>
                        <PanelLeft />
                      </div>
                      <div className={styles.blockTile}>
                        <Globe />
                      </div>
                      <div className={styles.blockTile}>
                        <Code2 />
                      </div>
                    </div>
                    <div className={styles.pagePreview}>
                      <div className={styles.previewNav}>
                        <span>YOUR BRAND</span>
                        <i />
                        <i />
                      </div>
                      <div className={styles.previewFeature}>
                        <small>BUILT AROUND YOUR CONTENT</small>
                        <strong>
                          A story
                          <br />
                          worth sharing.
                        </strong>
                        <span className={styles.previewButton}>
                          Explore the possibilities <ArrowRight />
                        </span>
                      </div>
                      <div className={styles.selectedBlock}>
                        <span className={styles.blockCaption}>Reusable content block</span>
                        <div className={styles.contentTiles}>
                          <div>
                            <Layers />
                            <i />
                            <i />
                          </div>
                          <div>
                            <Globe />
                            <i />
                            <i />
                          </div>
                        </div>
                      </div>
                      <div className={styles.previewLines}>
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                  <div className={styles.editorFooter}>
                    <span>
                      <Check />
                      Reusable layouts
                    </span>
                    <span>Content → Preview → Publish</span>
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
                <figcaption>Illustrative editor · shaped around your publishing needs</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <WordPressBuildOptions />
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
        <WordPressProjectCTA />
        <WordPressContent />
      </div>
    </HomeMotion>
  )
}
