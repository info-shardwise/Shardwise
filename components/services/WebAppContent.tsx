import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './WebAppContent.module.css'

const products = [
  [
    'SaaS platforms',
    'Subscription products with accounts, organization workspaces, and repeatable user journeys. Define tenant boundaries, onboarding, billing responsibilities, and administrative access before the first feature set becomes a release plan.',
  ],
  [
    'Customer portals',
    'Self-service spaces for customers to view information, manage requests, or collaborate with your team. Each role needs clear permissions, useful status information, and understandable recovery when something cannot be completed.',
  ],
  [
    'Internal tools',
    'Operations dashboards and administrative workflows built around how your team actually works. Start with the recurring task, the data it needs, and who can make changes rather than reproducing every spreadsheet screen.',
  ],
  [
    'Reporting dashboards',
    'Interactive views of business data with agreed definitions, filters, and access rules. Data freshness, empty states, export requirements, and expensive queries belong in the design discussion alongside visual presentation.',
  ],
  [
    'Booking and marketplace workflows',
    'Products connecting customers, providers, availability, and transactions. Conflicting requests, cancellations, moderation, and payment states require explicit rules and a contained first-release scope.',
  ],
  [
    'Connected business applications',
    'Custom workflows on top of existing APIs, CRM systems, or internal services. Clarify source-of-truth ownership, synchronization behavior, permissions, and failure recovery before estimating the complete product.',
  ],
]
const sections = [
  {
    id: 'web-stack',
    label: 'TECHNOLOGY DECISIONS',
    title: 'A stack matched to the product and the team.',
    intro:
      'React, Next.js, and TypeScript are familiar foundations in this project. A client application may need a different runtime, database, or deployment model. Those decisions should follow the requirements and the people maintaining it.',
    cards: [
      [
        'Interface and application state',
        'Plan reusable interface components, responsive layouts, and clear loading, empty, error, and success states. The rendering approach should fit authenticated workflows and any public pages that need discoverability.',
      ],
      [
        'Backend and persistence',
        'Choose APIs and storage around the data relationships, transactions, and operational needs. PostgreSQL or a managed platform may fit some products; existing infrastructure and team constraints should guide the final selection.',
      ],
      [
        'Hosting and delivery',
        'Assess runtime support, geographic needs, costs, and ownership before selecting hosting. A static marketing-site deployment does not establish the right model for an application with server-side permissions, jobs, or persistent data.',
      ],
    ],
  },
  {
    id: 'web-architecture',
    label: 'ARCHITECTURE & SCALING',
    title: 'Start with clear boundaries and a realistic workload.',
    intro:
      'Scalability is a set of design and operating decisions. Define expected traffic, data volumes, expensive operations, and acceptable behavior under load before adding infrastructure complexity.',
    cards: [
      [
        'Right-sized services',
        'A modular application can be the right starting point. Separate services, serverless functions, or background workers should address an identified need, with clear ownership and deployment boundaries.',
      ],
      [
        'Data and tenant boundaries',
        'Map entities, access rules, and transaction requirements. Tenant isolation must be enforced in trusted server-side code or database policies, with tests covering cross-account access and administrative operations.',
      ],
      [
        'Workload and growth planning',
        'Use measured queries, suitable indexes, pagination, and caching where appropriate. Queue slow tasks when needed and define retry behavior; scale the bottleneck based on evidence rather than a generic cloud label.',
      ],
    ],
  },
  {
    id: 'web-security',
    label: 'SECURITY & DATA RESPONSIBILITY',
    title: 'Make permissions part of the architecture.',
    intro:
      'Authentication identifies a user; authorization decides what that user can do. Both need explicit rules. The project should identify sensitive data, administrative actions, and responsibilities for operating the application.',
    cards: [
      [
        'Identity and access',
        'Define roles, session handling, account recovery, and privileged actions. SSO or multi-factor authentication can be scoped where needed. Check authorization on the server rather than relying on hidden buttons.',
      ],
      [
        'Protect the data flow',
        'Validate inputs, protect secrets, and use appropriate secure transport and storage. Plan logging so it supports troubleshooting without unnecessarily exposing personal information or credentials.',
      ],
      [
        'Review and acceptance',
        'Agree security review depth and tests for high-risk journeys. Specialist penetration testing, compliance assessment, or regulated-sector obligations need explicit scope and qualified review; no certification is implied here.',
      ],
    ],
  },
  {
    id: 'web-integrations',
    label: 'INTEGRATIONS & APIS',
    title: 'Connect systems with ownership and recovery in mind.',
    intro:
      'An integration is more than a successful API request. Agree access, quotas, provider costs, event handling, and operational ownership so external services do not become invisible dependencies.',
    cards: [
      [
        'Accounts, payments, and notifications',
        'Identity providers, payment services, and transactional messages can support core workflows. Define provider ownership, test environments, entitlement changes, and failed-payment or undelivered-message behavior.',
      ],
      [
        'CRM and business data',
        'Agree which system owns each record and how changes are synchronized. Plan retries, duplicate events, schema changes, and reconciliation so interrupted workflows can be recovered safely.',
      ],
      [
        'Automation and AI features',
        'Background automation and AI-assisted journeys need a defined purpose and appropriate data boundaries. Evaluate quality, human review, provider limits, privacy, and cost before adding them to the product scope.',
      ],
    ],
  },
  {
    id: 'web-performance',
    label: 'PERFORMANCE & RELIABILITY',
    title: 'Measure the journeys that matter to your users.',
    intro:
      'Performance work starts with meaningful criteria: how quickly a screen becomes usable, how an operation behaves under load, and whether the user can understand an interrupted task. Numeric targets are agreed for the project.',
    cards: [
      [
        'Representative workloads',
        'Test the agreed browsers, devices, network conditions, and data volumes. Profile slow requests and queries, and assess load against realistic scenarios rather than a single demonstration with empty data.',
      ],
      [
        'Useful observability',
        'Configure agreed error reporting, logs, metrics, and alerts with clear ownership. Signals should help investigate a failing journey and understand impact; installing a monitoring tool alone is not an operating plan.',
      ],
      [
        'Recovery and continuity',
        'Define backups where relevant, restoration checks, rollback procedures, and third-party failure behavior. Availability commitments and incident response are contract-specific rather than an assumed universal uptime promise.',
      ],
    ],
  },
  {
    id: 'web-support',
    label: 'DEPLOYMENT & POST-LAUNCH SUPPORT',
    title: 'Give the product an operating plan.',
    intro:
      'The handover should explain how to deploy, configure, monitor, and change the application. Support arrangements make the boundary between delivery and ongoing operations clear.',
    cards: [
      [
        'Controlled releases',
        'Agree staging and production environments, deployment checks, configuration ownership, and migration steps. Releases involving data changes need a recovery plan that goes beyond redeploying an older frontend.',
      ],
      [
        'Maintenance responsibilities',
        'Define dependency updates, bug triage, monitoring access, backups, and hosting ownership. Support hours, escalation, and response expectations are confirmed in the engagement rather than advertised without evidence.',
      ],
      [
        'Iteration and cost review',
        'Use prioritized feedback and measured usage to plan improvements. Review infrastructure and provider costs alongside technical bottlenecks, keeping future feature work separate from the original acceptance criteria.',
      ],
    ],
  },
  {
    id: 'web-engagement',
    label: 'ENGAGEMENT OPTIONS',
    title: 'Choose the next milestone your product needs.',
    intro:
      'A clear proposal sets out deliverables, dependencies, acceptance criteria, pricing, and review points. The engagement should reflect whether you are starting a product or improving an existing one.',
    cards: [
      [
        'A focused MVP',
        'Define a usable core journey with the necessary accounts, data, and integrations. Keep launch essentials distinct from a larger roadmap so the first release can answer a useful product question.',
      ],
      [
        'Existing application improvement',
        'Begin with a review of the current architecture and operational constraints. Scope work around an identified issue such as slow queries, difficult workflows, brittle integrations, or deployment risk.',
      ],
      [
        'Ongoing product development',
        'Agree a cadence for prioritized features and maintenance, with clear reporting and review responsibilities. Team availability, support coverage, and future deliverables are confirmed for the engagement.',
      ],
    ],
  },
]
const process = [
  [
    'Discover users and workflows',
    'Identify roles, essential journeys, dependencies, and the outcome the first release should support. Agree what is in scope and who supplies data, decisions, and access.',
  ],
  [
    'Design the system and experience',
    'Map navigation, entities, permissions, and API contracts together. Prototype important flows and define acceptance criteria before implementation.',
  ],
  [
    'Build in reviewable increments',
    'Implement the application in manageable feature groups. Use an agreed preview environment and feedback points to resolve questions while the product is taking shape.',
  ],
  [
    'Validate behavior and boundaries',
    'Test critical flows, browser behavior, authorization, and failure states. Add meaningful automated checks and any separately agreed security or load review.',
  ],
  [
    'Prepare production delivery',
    'Configure hosting, secrets, migrations, and deployment checks. Confirm operational owners, release prerequisites, and rollback or recovery steps.',
  ],
  [
    'Launch and observe',
    'Validate the released journeys and use configured monitoring to identify issues. Agree how feedback and defects are handled during the defined launch period.',
  ],
  [
    'Handover and improve',
    'Document architecture, deployment, and dependencies. Establish a prioritized roadmap and support scope for the work that follows the initial delivery.',
  ],
]
const faqs = [
  [
    'What is the difference between a web app and a website?',
    'A web app centers on interactive workflows and data: accounts, dashboards, tools, or customer portals. A marketing website centers on presenting content and helping visitors understand a business. Products can need both; the scope should identify each purpose.',
  ],
  [
    'How much does custom web app development cost?',
    'Cost depends on workflows, user roles, design, data complexity, integrations, migration, and operating requirements. A proposal can separate first-release essentials from later features once those dependencies are understood. No universal starting price is published here.',
  ],
  [
    'How long does development take?',
    'The schedule follows the agreed scope and dependencies. Existing systems, design decisions, feedback, data migration, and security review can influence delivery. Share your target date so a realistic plan can distinguish required launch work from later milestones.',
  ],
  [
    'Can you improve or scale an existing web application?',
    'An existing app should be reviewed before estimating changes. Architecture, deployment, data access, and monitoring can reveal whether the priority is a focused fix, a larger migration, or capacity work. Recommendations should follow evidence from the current system.',
  ],
  [
    'Which technology stack should my web app use?',
    'Choose based on workflows, team familiarity, existing infrastructure, data needs, and runtime constraints. React, Next.js, and TypeScript can be suitable foundations, but backend services, databases, and hosting are project decisions rather than a mandatory package.',
  ],
  [
    'Who owns the code and hosting accounts?',
    'Ownership, licensing, handover, and access arrangements are confirmed in the project agreement. The proposal should identify account owners, third-party costs, source access, deployment responsibilities, and documentation needed for ongoing maintenance.',
  ],
  [
    'Do you provide hosting and post-launch support?',
    'Deployment preparation and ongoing operations should be scoped explicitly. Define hosting ownership, monitoring, maintenance, incident handling, and response expectations. Future feature work and extended support are agreed separately from initial delivery.',
  ],
]
export function WebAppBuildOptions() {
  return (
    <section className={styles.section} aria-labelledby="web-build-title">
      <div className={styles.heading}>
        <span>WHAT WE BUILD</span>
        <h2 id="web-build-title">Software people use to get work done.</h2>
        <p>
          Web apps bring workflows, permissions, and data together in the browser. Scope the product
          around the jobs people need to complete and the systems behind them.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Need a marketing website?</strong>
        <p>
          For a public content-led presence, explore{' '}
          <Link href="/services/custom-website-development/">Custom Website Development</Link>. A
          product launch may need both an application and a separate marketing site.
        </p>
      </div>
      <div className={styles.grid}>
        {products.map(([title, text], i) => (
          <article className={styles.card} key={title} data-reveal="up">
            <span className={styles.number}>0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
export function WebAppContent() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(([name, text]) => ({
            '@type': 'Question',
            name,
            acceptedAnswer: { '@type': 'Answer', text },
          })),
        }}
      />
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`${styles.section} ${index % 2 ? styles.tint : ''}`}
          aria-labelledby={section.id}
        >
          <div className={styles.heading}>
            <span>{section.label}</span>
            <h2 id={section.id}>{section.title}</h2>
            <p>{section.intro}</p>
          </div>
          <div className={styles.stack}>
            {section.cards.map(([title, text]) => (
              <article key={title} data-reveal="up">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          {index === 0 && (
            <>
              <div className={styles.processHeading}>
                <span>FROM BRIEF TO PRODUCTION</span>
                <h2 id="web-process-title">A web application workflow with clear review points.</h2>
              </div>
              <ol className={styles.timeline}>
                {process.map(([title, text], i) => (
                  <li key={title} data-reveal="up">
                    <span className={styles.number}>0{i + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          )}
        </section>
      ))}
      <section className={styles.section} aria-labelledby="web-faq-title">
        <div className={styles.heading}>
          <span>WEB APP PROJECT QUESTIONS</span>
          <h2 id="web-faq-title">Before you start building.</h2>
        </div>
        <div className={styles.faq}>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <Plus aria-hidden="true" />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className={styles.section} aria-labelledby="web-related-title">
        <div className={styles.heading}>
          <span>THE WIDER PRODUCT</span>
          <h2 id="web-related-title">Connect the application with your next step.</h2>
        </div>
        <div className={styles.related}>
          {[
            ['iOS App Development', 'ios-app-development'],
            ['Android App Development', 'android-app-development'],
            ['App Design', 'app-design'],
            ['Custom Website Development', 'custom-website-development'],
            ['Website Maintenance', 'website-maintenance'],
            ['Technical & On-Page SEO', 'technical-onpage-seo'],
          ].map(([name, slug]) => (
            <Link key={slug} href={`/services/${slug}/`}>
              {name}
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export function WebAppProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="web-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="web-cta-title">Have a web app in mind? Let’s scope it.</h2>
      <p>
        Share your users, essential workflows, existing systems, and any launch constraints. We can
        start with the decisions that shape a useful first release.
      </p>
      <Link href="/contact/">
        Start your web app project <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
