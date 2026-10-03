import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  FileText,
  Network,
  Sparkles,
  Check,
  ChevronRight,
} from 'lucide-react'
import type { ServiceItem } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import styles from './StrategyService.module.css'

const content = {
  eyebrow: 'Content & search strategy',
  heading: 'A clear direction for every search.',
  introduction: 'Connect the questions your audience asks with the content your business creates.',
  cards: [
    {
      icon: Search,
      title: 'Understand search intent',
      text: 'Organize search queries around audience needs, relevance, and the next action a visitor wants to take.',
    },
    {
      icon: Network,
      title: 'Build topical authority',
      text: 'Connect pillar pages and supporting topics into a coherent content structure, rather than isolated articles.',
    },
    {
      icon: FileText,
      title: 'Give content a purpose',
      text: 'Translate research into clear briefs and an editorial roadmap that supports your business goals.',
    },
  ],
  deliverables: [
    'Keyword research and search intent mapping',
    'Topic clusters and internal linking recommendations',
    'Content gap analysis and prioritized opportunities',
    'Editorial roadmap and actionable content briefs',
    'A measurement framework for visibility and conversion',
  ],
  diagramTitle: 'Content strategy map',
  diagramCaption: 'From audience intent to a connected content plan.',
  nodes: ['Audience intent', 'Keyword research', 'Topic clusters', 'Content briefs'],
}
const geo = {
  eyebrow: 'Generative Engine Optimization',
  heading: 'Help AI understand your expertise.',
  introduction:
    'Make your content clear, connected, and easy to interpret as discovery moves beyond traditional search.',
  cards: [
    {
      icon: Search,
      title: 'Understand AI discovery',
      text: 'Review how your subject area appears in generative search and identify questions your content can answer clearly.',
    },
    {
      icon: Network,
      title: 'Connect your expertise',
      text: 'Create consistent context around your business, services, and topics so their relationships are easier to understand.',
    },
    {
      icon: FileText,
      title: 'Create useful source material',
      text: 'Structure original, specific content with clear answers and supporting evidence that makes your expertise easier to interpret.',
    },
  ],
  deliverables: [
    'Generative discovery and content readiness review',
    'Entity consistency and topic structure recommendations',
    'Clear answer formats and evidence-led content briefs',
    'Structured data and crawlability recommendations',
    'A framework for monitoring AI visibility over time',
  ],
  diagramTitle: 'Generative discovery map',
  diagramCaption: 'Clear source material. Connected context. Discoverable expertise.',
  nodes: ['Your expertise', 'Clear answers', 'Connected context', 'AI discovery'],
}
export function StrategyService({ service }: { service: ServiceItem }) {
  const isGeo = service.slug === 'geo'
  const config = isGeo ? geo : content
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
              <div className={styles.copy}>
                <span className={styles.eyebrow} data-reveal="up">
                  <Sparkles aria-hidden="true" /> {config.eyebrow}
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
                className={styles.diagram}
                data-reveal="scale"
                aria-label={config.diagramTitle}
              >
                <div className={styles.diagramBar}>
                  <span className={styles.dots} aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>{config.diagramTitle}</span>
                  <Network aria-hidden="true" />
                </div>
                <div className={styles.diagramBody}>
                  <div className={styles.rootNode}>
                    <span className={styles.nodeIcon}>
                      <Sparkles aria-hidden="true" />
                    </span>
                    <strong>
                      {isGeo ? 'Your brand’s expertise' : 'Your audience’s questions'}
                    </strong>
                  </div>
                  <div className={styles.connector} aria-hidden="true" />
                  <div className={styles.nodes}>
                    {config.nodes.map((node, index) => (
                      <div className={styles.node} key={node}>
                        <span>0{index + 1}</span>
                        {node}
                        <Check aria-hidden="true" />
                      </div>
                    ))}
                  </div>
                  <figcaption>{config.diagramCaption}</figcaption>
                </div>
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
            <p data-reveal="up">{config.introduction}</p>
          </div>
          <div className={styles.cards}>
            {config.cards.map(({ icon: Icon, title, text }, index) => (
              <article className={styles.card} key={title} data-reveal="up">
                <div className={styles.cardTop}>
                  <span className={styles.cardIcon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <span>0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className={styles.deliverables} aria-labelledby="deliverables-title">
          <div className={styles.deliveryIntro}>
            <span className={styles.eyebrow} data-reveal="up">
              A practical roadmap
            </span>
            <RevealHeading
              id="deliverables-title"
              text="Key Deliverables & Standards"
              className={styles.sectionTitle}
            />
            <p data-reveal="up">
              {isGeo
                ? 'A structured foundation for generative discovery.'
                : 'Research, structure, and a plan your team can put to work.'}
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
