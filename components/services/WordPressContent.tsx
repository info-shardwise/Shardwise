import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './WordPressContent.module.css'

const builds = [
  [
    'Business and marketing websites',
    'Reusable page templates and structured content for the information your customers need. Define the sitemap, content ownership, and common page sections so editors can keep the site useful after launch.',
  ],
  [
    'Publishing and editorial sites',
    'Article templates, taxonomy, archives, and an editing workflow that reflects how your team publishes. Plan search, media handling, author responsibilities, and review requirements around the actual content volume.',
  ],
  [
    'Custom blocks and functionality',
    'Gutenberg blocks, content models, and scoped integrations can support requirements beyond a standard page. The implementation should remain understandable to editors and maintainers rather than depending on undocumented settings.',
  ],
  [
    'Commerce and headless options',
    'WooCommerce or a decoupled frontend may fit particular needs. Catalog operations, payment responsibilities, preview behavior, hosting, and ongoing maintenance should be discussed before selecting the architecture.',
  ],
]
const sections = [
  {
    id: 'wp-stack',
    label: 'TECHNOLOGY & EDITOR WORKFLOW',
    title: 'A WordPress setup your team can maintain.',
    intro:
      'Choose the theme approach, content model, plugins, and hosting around editorial needs and the existing environment. The goal is a useful publishing system, with clear ownership of licenses, configuration, and future updates.',
    cards: [
      [
        'Core and content',
        'WordPress, PHP, and its database form the CMS foundation. Plan content types, reusable fields, taxonomy, and roles before building templates. Use custom fields or additional tooling only where the content structure benefits.',
      ],
      [
        'Themes and block editing',
        'Gutenberg blocks and patterns can give editors reusable building elements. An existing page builder may be retained or reviewed where required, with its licensing, compatibility, and editing constraints considered in the scope.',
      ],
      [
        'Hosting and integrations',
        'Choose hosting that supports the required WordPress runtime and operational needs. Caching, backups, staging, email delivery, and deployment ownership need explicit decisions; plugin brands are not a mandatory bundle for every site.',
      ],
    ],
  },
  {
    id: 'wp-themes',
    label: 'CUSTOM THEME DEVELOPMENT',
    title: 'Design the website and the editing experience together.',
    intro:
      'A custom WordPress implementation should connect the brand system with the content your team changes regularly. Useful defaults and predictable templates matter as much as the first finished page.',
    cards: [
      [
        'Reusable page structures',
        'Build templates and patterns for recurring content instead of making each page a separate design problem. Agree what editors can change and where layout controls should preserve consistency.',
      ],
      [
        'Considered blocks',
        'Custom blocks can package common sections with clear fields and meaningful preview states. Instructions and constraints should help editors publish content without needing to understand the underlying code.',
      ],
      [
        'Responsive and accessible states',
        'Review navigation, forms, typography, and key layouts across the agreed browsers and screen sizes. Accessibility acceptance criteria and any formal audit requirements are defined in the project scope.',
      ],
    ],
  },
  {
    id: 'wp-plugins',
    label: 'CUSTOM PLUGINS & INTEGRATIONS',
    title: 'Extend the CMS with a clear purpose.',
    intro:
      'Keep business-specific behavior distinct from visual presentation where appropriate. Before adding another plugin, identify what it must do, what information it handles, and who will maintain it.',
    cards: [
      [
        'Scoped functionality',
        'Custom post types, workflow rules, or administrative tools can support a particular publishing or business need. Define roles, input validation, and acceptance criteria alongside the feature request.',
      ],
      [
        'External systems',
        'CRM, forms, reporting, or other APIs need clear data ownership and failure handling. Agree provider access, quotas, costs, and retries so an integration remains understandable after handover.',
      ],
      [
        'Dependency review',
        'Evaluate existing extensions for compatibility, active maintenance, and licensing. An established plugin can be appropriate; custom code should solve a defined requirement rather than recreate functionality without a reason.',
      ],
    ],
  },
  {
    id: 'wp-commerce',
    label: 'WOOCOMMERCE SCOPING',
    title: 'Treat the storefront and store operations as one project.',
    intro:
      'A WordPress commerce brief includes more than product pages. Catalog data, checkout, fulfillment, customer communications, and ongoing maintenance all affect a workable store.',
    cards: [
      [
        'Catalog and storefront',
        'Plan product types, variations, attributes, navigation, and useful filtering. Agree import quality and content responsibilities before assuming that a large catalog can be moved without preparation.',
      ],
      [
        'Checkout and operations',
        'Payment gateways, shipping rules, tax configuration, and order messages require owner input and suitable test access. Subscription or membership behavior needs additional scoping and provider-policy review.',
      ],
      [
        'Testing and maintenance',
        'Validate key purchase and account journeys, including failed payments and inventory changes where relevant. Ongoing updates and operational support can be discussed through the WooCommerce Maintenance service.',
      ],
    ],
  },
  {
    id: 'wp-headless',
    label: 'HEADLESS WORDPRESS',
    title: 'Separate publishing from presentation when it helps.',
    intro:
      'WordPress can provide content to a separate frontend. A headless approach should answer a concrete requirement, such as a specialized interface or shared content delivery, and include the extra operating responsibilities.',
    cards: [
      [
        'Content delivery',
        'Plan a suitable content API and the models the frontend needs. React or Next.js can be evaluated for presentation, with rendering and caching selected for the publishing and hosting requirements.',
      ],
      [
        'Editorial preview',
        'Editors need to understand how drafts, media, and updates appear before publication. Preview access, cache invalidation, and the route from a saved change to a visible page belong in the delivery plan.',
      ],
      [
        'Architectural tradeoffs',
        'A separate frontend introduces another deployment and integration boundary. Forms, search, commerce plugins, and other features may need dedicated integration; headless is not automatically the simplest option.',
      ],
    ],
  },
  {
    id: 'wp-performance',
    label: 'PERFORMANCE & SECURITY',
    title: 'Reduce avoidable weight and operational risk.',
    intro:
      'Assess the actual site: content, images, plugins, hosting, and important visitor journeys. Performance goals, review depth, and security responsibilities are agreed for the project rather than represented by an unsupported universal score.',
    cards: [
      [
        'Performance review',
        'Measure representative pages and interactions. Review image delivery, frontend assets, plugin overhead, caching, and database behavior where relevant. Optimize identified bottlenecks and record the conditions used for validation.',
      ],
      [
        'Access and updates',
        'Use appropriate administrative access, trusted software sources, and an agreed update approach. Core, theme, plugin, and host responsibilities should be clear so critical changes are not left without an owner.',
      ],
      [
        'Recovery planning',
        'Agree backup coverage, retention, restoration checks, and incident responsibilities. Security controls reduce risk; a plugin installation or a launch review does not guarantee a permanently secure site.',
      ],
    ],
  },
  {
    id: 'wp-migration',
    label: 'MIGRATIONS & REBUILDS',
    title: 'Move content with a checked transition plan.',
    intro:
      'A migration starts with an inventory of pages, media, URLs, metadata, and functionality. Source access and content quality affect scope, so the plan should distinguish transferable material from items needing review or rebuilding.',
    cards: [
      [
        'Content and URL mapping',
        'Map old content to new templates and preserve useful URL relationships. Plan redirects, metadata, and internal links so important paths are accounted for before launch.',
      ],
      [
        'Staging validation',
        'Review imported content, images, forms, navigation, and any commerce or account flows in a suitable preview environment. Define how updates made to the old site during the build will be reconciled.',
      ],
      [
        'Launch and fallback',
        'Agree DNS or hosting changes, backups, and rollback responsibilities. Check the live site after cutover. Search rankings and zero downtime cannot be guaranteed simply by completing a migration.',
      ],
    ],
  },
  {
    id: 'wp-support',
    label: 'MAINTENANCE & ENGAGEMENT',
    title: 'Keep publishing and maintenance responsibilities clear.',
    intro:
      'A useful handover includes editor guidance, technical documentation, and an agreed next step. Hosting, licenses, ongoing changes, and support coverage should have explicit owners.',
    cards: [
      [
        'Defined website project',
        'Scope design, implementation, content work, validation, and launch. Confirm review milestones and what your team supplies before setting fees and delivery dates.',
      ],
      [
        'Existing site improvement',
        'Begin with enough review to understand the current theme, extensions, and hosting. Focus work on agreed issues, such as editing friction, performance, migration, or difficult integrations.',
      ],
      [
        'Ongoing maintenance',
        'Plan updates, backups, monitoring where configured, and routine changes as a separate support scope. Response expectations, maintenance frequency, reporting, and exclusions are agreed in project terms.',
      ],
    ],
  },
]
const process = [
  [
    'Audit content and requirements',
    'Review the sitemap, editing needs, existing site, and integrations. Define scope, ownership, and the content your team needs to provide.',
  ],
  [
    'Design templates and patterns',
    'Map the brand system to reusable layouts and editorial controls. Prototype important page types and agree what should be editable.',
  ],
  [
    'Build on a staging environment',
    'Implement the agreed theme, blocks, and functionality. Review progress with representative content rather than empty demonstration pages.',
  ],
  [
    'Prepare and migrate content',
    'Map content, URLs, media, and metadata. Review imports and redirects, and agree how last-minute content changes will be handled.',
  ],
  [
    'Validate site and editor behavior',
    'Test key pages, responsive layouts, forms, plugin interactions, and publishing tasks. Complete the agreed performance and security review.',
  ],
  [
    'Launch with a transition plan',
    'Coordinate hosting or DNS changes, backups, and operational access. Validate critical journeys on the live site and document fallback responsibilities.',
  ],
  [
    'Train and hand over',
    'Explain publishing, configuration, and dependencies. Confirm the support scope for future updates and changes instead of assuming indefinite coverage.',
  ],
]
const faqs = [
  [
    'How much does custom WordPress development cost?',
    'Cost depends on design, page types, editing needs, integrations, content migration, and validation. A proposal should separate the initial build from hosting, third-party licenses, and ongoing support. No universal starting price is published here.',
  ],
  [
    'How long does a WordPress website take to build?',
    'The schedule follows the agreed scope and dependencies. Content readiness, feedback, current-site access, integrations, and migration can affect delivery. Share your target date so required launch work can be distinguished from later improvements.',
  ],
  [
    'Do you use page builders such as Elementor or Divi?',
    'The existing service includes reusable Gutenberg blocks and headless options. Builder requirements can be reviewed around your existing workflow, licensing, and maintenance needs. The proposal should explain the chosen approach rather than assume one tool suits every site.',
  ],
  [
    'Can you migrate my existing website to WordPress?',
    'Migration feasibility depends on source access, content structure, and functionality. A review can establish the import, rebuilding, redirect, and validation work required. Preserving rankings or eliminating all downtime cannot be guaranteed.',
  ],
  [
    'Can we discuss a WooCommerce store?',
    'WooCommerce requirements can be scoped around the catalog, checkout, payments, shipping, and operational responsibilities. Share any subscription or membership requirements early. Ongoing store support is covered by the related WooCommerce Maintenance service.',
  ],
  [
    'Will you maintain updates and security after launch?',
    'Maintenance is an explicit engagement. Agree responsibility for core, theme, and plugin updates, backups, monitoring, and incident handling. Support hours, reporting, and response expectations are confirmed in the project terms.',
  ],
  [
    'When should we consider headless WordPress?',
    'Consider it when separate content delivery or a specialized frontend serves a clear need. Evaluate editorial preview, publishing behavior, plugin integration, and the additional deployment responsibilities before choosing a decoupled architecture.',
  ],
]
export function WordPressBuildOptions() {
  return (
    <section className={styles.section} aria-labelledby="wp-build-title">
      <div className={styles.heading}>
        <span>WHAT WE BUILD</span>
        <h2 id="wp-build-title">WordPress shaped around your content team.</h2>
        <p>
          A considered content model and editing experience make the website useful beyond launch.
          Start with the pages, publishing tasks, and functionality your organization needs.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which platform fits your project?</strong>
        <p>
          Discuss WordPress for editorial control,{' '}
          <Link href="/services/shopify-development/">Shopify</Link> for a Shopify commerce setup,
          or <Link href="/services/custom-website-development/">Custom Website Development</Link>{' '}
          for a bespoke build. Your content and operational needs guide the choice.
        </p>
      </div>
      <div className={styles.grid}>
        {builds.map(([title, text], i) => (
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
export function WordPressContent() {
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
                <span>FROM CONTENT PLAN TO LAUNCH</span>
                <h2 id="wp-process-title">A WordPress workflow with clear review points.</h2>
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
          {section.id === 'wp-performance' && (
            <p className={styles.source}>
              Platform reference:{' '}
              <a
                href="https://developer.wordpress.org/advanced-administration/security/hardening/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WordPress security guidance
              </a>
              . Review safeguards for the actual installation and hosting setup.
            </p>
          )}
        </section>
      ))}
      <section className={styles.section} aria-labelledby="wp-faq-title">
        <div className={styles.heading}>
          <span>WORDPRESS PROJECT QUESTIONS</span>
          <h2 id="wp-faq-title">Before you start building.</h2>
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
      <section className={styles.section} aria-labelledby="wp-related-title">
        <div className={styles.heading}>
          <span>THE WEBSITE LIFECYCLE</span>
          <h2 id="wp-related-title">Connect the build with the right next step.</h2>
          <p>
            Review your store releases with our{' '}
            <Link href="/blogs/woocommerce-checkout-testing-checklist/">
              WooCommerce checkout testing checklist
            </Link>
            , covering totals, payment outcomes and order records.
          </p>
          <p>
            Preparing an update or launch? Use our{' '}
            <Link href="/blogs/wordpress-staging-site-checklist/">
              WordPress staging site checklist
            </Link>{' '}
            to plan tests, deployment scope and live verification.
          </p>
          <p>
            After launch, use our{' '}
            <Link href="/blogs/website-maintenance-checklist-small-business/">
              small business website maintenance checklist
            </Link>{' '}
            to plan regular checks and assign responsibilities.
          </p>
        </div>
        <div className={styles.related}>
          {[
            ['Shopify Development', 'shopify-development'],
            ['Custom Website Development', 'custom-website-development'],
            ['Website Design', 'website-design'],
            ['Website Maintenance', 'website-maintenance'],
            ['WooCommerce Maintenance', 'woocommerce-maintenance'],
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

export function WordPressProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="wp-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="wp-cta-title">Have a WordPress project in mind? Let’s scope it.</h2>
      <p>
        Share your current website, publishing needs, important integrations, and any launch
        constraints. Start with the decisions that make the site easier to use and maintain.
      </p>
      <Link href="/contact/">
        Start your WordPress project <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
