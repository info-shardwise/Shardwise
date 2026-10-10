import Link from 'next/link'
import { ArrowUpRight, Check, Plus, Layers, RefreshCw, Users } from 'lucide-react'
import { PROCESS_STEPS } from '@/components/home/ProcessSteps'
import { RevealHeading } from '@/components/home/RevealHeading'
import styles from './ServicesContent.module.css'
export const CATEGORY_TOOLS: Record<string, string[]> = {
  'app-dev': ['Swift & SwiftUI', 'Kotlin', 'Web applications', 'API integration'],
  'web-dev': ['WordPress', 'Shopify & Liquid', 'Next.js & React', 'Responsive development'],
  maintenance: ['Website updates', 'Shopify', 'WooCommerce', 'Performance & security reviews'],
  design: ['Brand identity', 'UI / UX', 'Design systems', 'Responsive prototypes'],
  seo: ['Technical & on-page SEO', 'Local search', 'Content strategy', 'ASO · AEO · GEO'],
}
export const SERVICES_FAQS = [
  {
    q: 'Can I hire you for just one service?',
    a: 'Yes. Start with the service that addresses your immediate need, whether that is an app, a website, design, maintenance, or search optimization. During discovery we identify any dependencies and agree on a focused scope. You do not need to commission every discipline to start a conversation.',
  },
  {
    q: 'Do you work with existing websites and codebases?',
    a: 'We can discuss improving an existing product as well as building from scratch. Share the platform, current issues, and available documentation. An initial review helps establish what can be retained, what needs attention, and whether a rebuild would make sense before a delivery plan is agreed.',
  },
  {
    q: 'What is your minimum engagement size?',
    a: 'Scope and pricing are discussed for each project rather than assumed from the service category. Tell us your goals, budget range, timeline, and constraints. We can then explore an appropriate starting point and confirm deliverables, commercial terms, and availability before work begins.',
  },
  {
    q: 'How do you handle handoff after delivery?',
    a: 'Handover is planned as part of the agreed scope. This may include source files, design assets, deployment instructions, account access, and documentation needed to run the product. Ownership, licensing, training requirements, and any third-party dependencies should be confirmed in the project agreement.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Website, Shopify, and WooCommerce maintenance are available service areas. We can also discuss follow-up improvements and a longer-term roadmap. Support coverage, response expectations, review frequency, and billing are agreed separately so you know what is included after the initial delivery.',
  },
]
const models = [
  {
    title: 'Fixed-scope project',
    icon: Layers,
    intro: 'A clear brief. A defined outcome.',
    body: 'A useful starting point for a new website, an app release, a brand identity, or a focused redesign. We work through the requirements first so the deliverables and boundaries are understood before implementation.',
    items: [
      'Defined deliverables and acceptance criteria',
      'An agreed timeline and review points',
      'Milestones and payment terms confirmed in the proposal',
    ],
  },
  {
    title: 'Ongoing partnership',
    icon: RefreshCw,
    intro: 'Keep improving after launch.',
    body: 'For maintenance, search optimization, and iterative improvements that benefit from continuity. We can discuss a prioritized backlog and a review rhythm around your product needs rather than treating every update as a separate build.',
    items: [
      'A prioritized maintenance or improvement scope',
      'Support coverage agreed before work begins',
      'Retainer terms and capacity discussed during scoping',
    ],
  },
  {
    title: 'Long-term product collaboration',
    icon: Users,
    intro: 'Plan beyond the next release.',
    body: 'For a product roadmap spanning several releases or disciplines. Start by discussing the capabilities you need, the team you already have, and how design and development should connect with your internal workflow.',
    items: [
      'Roadmap planning across relevant disciplines',
      'Clear responsibilities and collaboration points',
      'Team availability and engagement structure confirmed together',
    ],
  },
]
export function ServicesContent() {
  return (
    <div className={styles.content}>
      <section className={styles.cta} aria-labelledby="services-next-title">
        <span className={styles.eyebrow}>LET’S FIND YOUR NEXT STEP</span>
        <h2 id="services-next-title">
          Not sure which service fits?
          <br />
          Let’s scope it together.
        </h2>
        <p>
          Share what you are building, what is getting in the way, and what a good outcome looks
          like. We will use that brief to discuss the right combination of services.
        </p>
        <Link href="/contact/">
          Start a conversation
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>
      <section className={styles.section} aria-labelledby="engagement-title">
        <span className={styles.eyebrow}>WAYS TO WORK TOGETHER</span>
        <RevealHeading
          id="engagement-title"
          text="The right shape for your project."
          className={styles.heading}
        />
        <p className={styles.lead}>
          A focused deliverable or an evolving product: the engagement should fit your goals. These
          are starting points for a conversation; scope, availability, and commercial terms are
          confirmed in your proposal.
        </p>
        <div className={styles.grid}>
          {models.map((model) => (
            <article key={model.title} className={styles.card} data-reveal="up">
              <model.icon aria-hidden="true" className={styles.icon} />
              <h3>{model.title}</h3>
              <strong>{model.intro}</strong>
              <p>{model.body}</p>
              <ul>
                {model.items.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.process} aria-labelledby="service-process-title">
        <div>
          <span className={styles.eyebrow}>FROM BRIEF TO BEYOND</span>
          <RevealHeading
            id="service-process-title"
            text="A clear path through the work."
            className={styles.heading}
          />
          <p className={styles.lead}>
            We connect discovery, design, implementation, and handover. Review points and
            responsibilities are agreed around the project, so the next step stays clear.
          </p>
          <Link href="/contact/" className={styles.textLink}>
            Talk through your brief <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <ol>
          {PROCESS_STEPS.map((step) => (
            <li key={step.num} data-reveal="up">
              <span>{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section
        hidden
        style={{ display: 'none' }}
        className={styles.section}
        aria-labelledby="service-examples-title"
      >
        <span className={styles.eyebrow}>CONNECT THE DISCIPLINES</span>
        <RevealHeading
          id="service-examples-title"
          text="One goal. The services to support it."
          className={styles.heading}
        />
        <p className={styles.lead}>
          Illustrative project scenarios, not client case studies. Approved project stories and
          outcomes will replace these examples when supplied.
        </p>
        <div className={styles.grid}>
          {[
            {
              title: 'Bring a product idea to its first release',
              text: 'Start with product design to map the user journey, then choose the application platform that fits your audience. Plan testing, launch preparation, and the next iteration together.',
              href: '/services/product-design/',
              label: 'Explore product design',
            },
            {
              title: 'Build a store that can keep evolving',
              text: 'Connect a Shopify build with a clear content structure and a maintenance plan. Establish the initial storefront requirements, then prioritize improvements as the business changes.',
              href: '/services/shopify-development/',
              label: 'Explore Shopify development',
            },
            {
              title: 'Make your expertise easier to discover',
              text: 'Combine technical search reviews with content and keyword planning. Understand the audience, address site issues, and build useful pages around the questions people ask.',
              href: '/services/content-keyword-strategy/',
              label: 'Explore content strategy',
            },
          ].map((item) => (
            <article className={styles.example} key={item.title} data-reveal="up">
              <span>EXAMPLE SCENARIO</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link href={item.href} className={styles.textLink}>
                {item.label}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <aside
        hidden
        style={{ display: 'none' }}
        className={styles.proofNote}
        aria-label="Client feedback publication status"
      >
        <div>
          <span className={styles.eyebrow}>CLIENT PERSPECTIVES</span>
          <h2>Real feedback belongs here.</h2>
        </div>
        <p>
          Approved client testimonials will be added here alongside their relevant service and
          attribution. In the meantime, tell us what matters to your project and we can discuss how
          to assess the fit.
        </p>
        <Link href="/contact/" className={styles.textLink}>
          Discuss your requirements
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </aside>
      <section className={styles.faq} aria-labelledby="services-faq-title">
        <div>
          <span className={styles.eyebrow}>BEFORE WE START</span>
          <RevealHeading
            id="services-faq-title"
            text="A few helpful answers."
            className={styles.heading}
          />
          <p className={styles.lead}>
            Have a question about your specific platform or scope? Include it with your project
            enquiry.
          </p>
        </div>
        <div>
          {SERVICES_FAQS.map((item) => (
            <details key={item.q}>
              <summary>
                {item.q}
                <Plus aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
