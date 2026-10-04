import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  Globe,
  ShieldCheck,
  PenTool,
  ChartNoAxesCombined,
  Layers,
  Code2,
  Check,
  Sparkles,
} from 'lucide-react'
import { SERVICE_CATEGORIES } from '@/lib/services'
import { HomeMotion } from './HomeMotion'
import { RevealHeading } from './RevealHeading'
import {
  HomeProjectConcepts,
  HomeProblems,
  HomeAboutPreview,
  HomeTechnology,
  HomeInsights,
  HomeFaq,
} from './HomeContent'
import { ProcessSteps } from './ProcessSteps'
import { MetricValue } from './MetricValue'
import styles from './Homepage.module.css'

const metrics = [
  { value: '60+', label: 'Projects Delivered' },
  { value: '99.4%', label: 'Client Satisfaction' },
  { value: '95+', label: 'Average Performance Score' },
  { value: '12+ Countries', label: 'Global Reach' },
]
const icons = [Smartphone, Globe, ShieldCheck, PenTool, ChartNoAxesCombined]

function ServiceVisual({ index }: { index: number }) {
  if (index === 0)
    return (
      <div className={styles.appVisual} aria-hidden="true">
        <div className={styles.phone}>
          <span className={styles.phoneNotch} />
          <div className={styles.phoneIcon}>
            <Layers size={24} />
          </div>
          <i />
          <i />
          <div className={styles.phoneTiles}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.phoneButton} />
        </div>
        <div className={styles.miniCard}>
          <Check size={18} />
          <span>iOS &amp; Android</span>
        </div>
      </div>
    )
  if (index === 1)
    return (
      <div className={styles.browserVisual} aria-hidden="true">
        <div className={styles.browserDots}>
          <i />
          <i />
          <i />
          <span />
        </div>
        <div className={styles.browserContent}>
          <span className={styles.browserIcon}>
            <Globe size={24} />
          </span>
          <div>
            <i />
            <i />
          </div>
          <div className={styles.previewButton} />
          <div className={styles.previewColumns}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    )
  const Icon = icons[index] ?? Layers
  return (
    <div className={styles.orbitVisual} aria-hidden="true">
      <div className={styles.orbitRing} />
      <div className={styles.orbitRingSmall} />
      <span className={styles.orbitIcon}>
        <Icon size={34} />
      </span>
      <span className={styles.orbitDot} />
      <span className={styles.orbitDotTwo} />
    </div>
  )
}

export function Homepage() {
  return (
    <HomeMotion>
      <section className={styles.hero} aria-labelledby="homepage-title">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow} data-reveal="up">
            <i />
            Full-Cycle Digital Agency &amp; Software Engineering
          </span>
          <RevealHeading
            as="h1"
            text="We Engineer Digital Products That Scale"
            className={styles.heroTitle}
          />
          <p className={styles.heroDescription} data-reveal="up">
            From high-performance web platforms and bespoke mobile applications to technical SEO and
            ongoing maintenance. We turn complex requirements into clean, scalable software.
          </p>
          <div className={styles.actions} data-reveal="up">
            <Link href="/contact/" className={styles.primary}>
              Start a Project <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
            <Link href="/services/" className={styles.secondary}>
              View All Services <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className={styles.heroMedia} data-reveal="scale">
          <div className={styles.photoFrame}>
            <div className={styles.photoChrome} aria-hidden="true">
              <span />
              <span />
              <span />
              <i />
              <Layers size={18} />
            </div>
            <div className={styles.photoInner} data-parallax>
              <Image
                src="/images/home/unsplash/team-collaboration.jpg"
                width={1600}
                height={1067}
                alt="Developers collaborating around laptops in a shared workspace"
                priority
                sizes="(max-width: 767px) 94vw, 1050px"
              />
            </div>
            <div className={styles.photoCaption}>
              <Code2 size={18} aria-hidden="true" />
              <span>Shardwise</span>
              <span>Digital products. Built to scale.</span>
            </div>
          </div>
          <span className={styles.floatingBadge + ' ' + styles.badgeOne}>
            <span className={styles.purpleDot} />
            <Smartphone size={16} aria-hidden="true" />
            Application Development
          </span>
          <span className={styles.floatingBadge + ' ' + styles.badgeTwo}>
            <span className={styles.blueDot} />
            <Globe size={16} aria-hidden="true" />
            Website Development
          </span>
          <span className={styles.floatingBadge + ' ' + styles.badgeThree}>
            <span className={styles.orangeDot} />
            <PenTool size={16} aria-hidden="true" />
            Design
          </span>
          <span className={styles.floatingBadge + ' ' + styles.badgeFour}>
            <span className={styles.greenDot} />
            <ChartNoAxesCombined size={16} aria-hidden="true" />
            SEO
          </span>
        </div>
      </section>
      <section className={styles.trust} aria-labelledby="trust-title">
        <div className={styles.trustIntro} data-reveal="up">
          <span className={styles.kicker}>Trusted Globally</span>
          <h2 id="trust-title">
            Real Results.
            <br />
            Real Impact.
          </h2>
        </div>
        <dl className={styles.metrics}>
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              data-reveal="up"
              style={{ '--reveal-delay': index * 90 + 'ms' } as React.CSSProperties}
            >
              <dt>{metric.label}</dt>
              <dd>
                <MetricValue value={metric.value} />
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[0, 1].map((copy) => (
            <div key={copy} className={styles.tickerGroup}>
              {SERVICE_CATEGORIES.map((category) => (
                <span key={category.id}>
                  <span className={styles.tickerStar}>✦</span>
                  {category.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <HomeProblems />
      <section className={styles.services} aria-labelledby="services-title">
        <div className={styles.sectionIntro}>
          <span className={styles.kicker} data-reveal="up">
            Core Capabilities
          </span>
          <div id="services-title">
            <RevealHeading text="Our 5 Service Pillars" />
          </div>
          <p data-reveal="up">
            From high-performance web platforms and bespoke mobile applications to technical SEO and
            ongoing maintenance.
          </p>
          <Link href="/services/" className={styles.textLink} data-reveal="up">
            Explore complete catalog <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.serviceGrid}>
          {SERVICE_CATEGORIES.map((category, index) => {
            const Icon = icons[index] ?? Layers
            return (
              <article
                key={category.id}
                className={styles.serviceCard + ' ' + (index < 2 ? styles.wideCard : '')}
                data-reveal="up"
                style={{ '--reveal-delay': (index % 3) * 90 + 'ms' } as React.CSSProperties}
              >
                <div className={styles.cardHeading}>
                  <span className={styles.cardIcon}>
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className={styles.cardIndex}>0{index + 1}</span>
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <ServiceVisual index={index} />
                <ul>
                  {category.services.map((service) => (
                    <li key={service.slug}>
                      <Check size={14} aria-hidden="true" />
                      {service.name}
                    </li>
                  ))}
                </ul>
                <Link href={category.href} className={styles.cardLink}>
                  Learn more about {category.name}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </article>
            )
          })}
        </div>
      </section>
      <HomeProjectConcepts />
      <section className={styles.process} aria-labelledby="process-title">
        <div className={styles.sectionIntro}>
          <span className={styles.kicker} data-reveal="up">
            How We Work
          </span>
          <div id="process-title">
            <RevealHeading text="From Concept To Production" />
          </div>
          <p data-reveal="up">
            A transparent, agile execution process designed to minimize risk and accelerate
            time-to-market.
          </p>
        </div>
        <div className={styles.processGrid}>
          <div className={styles.processPhoto} data-reveal="scale">
            <div data-parallax>
              <Image
                src="/images/home/unsplash/creative-process.jpg"
                width={1200}
                height={800}
                alt="A team reviewing ideas together around a table with laptops"
                sizes="(max-width: 767px) 90vw, 600px"
              />
            </div>
            <span className={styles.processBadge}>
              <Sparkles size={19} aria-hidden="true" />
              From concept to production
            </span>
          </div>
          <div data-reveal="up">
            <ProcessSteps />
          </div>
        </div>
      </section>
      <HomeAboutPreview />
      <HomeTechnology />
      <HomeInsights />
      <HomeFaq />
    </HomeMotion>
  )
}
