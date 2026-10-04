import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './WooCommerceMaintenanceContent.module.css'
const builds = [
  [
    'WordPress and store updates',
    'Review WordPress, WooCommerce, themes, extensions, and runtime compatibility together. Use an agreed staging and release workflow with checks for the shopping journeys affected by each change.',
  ],
  [
    'Extensions and integrations',
    'Inventory payment, shipping, subscriptions, bookings, membership, and external-system dependencies. Review licensing and compatibility before updates, and coordinate vendor issues rather than assuming every integration can be repaired locally.',
  ],
  [
    'Store performance',
    'Investigate product-page loading, scripts, hosting, database behavior, and supported caching. Protect personalized cart, account, and checkout behavior when tuning delivery rather than caching every page in the same way.',
  ],
  [
    'Security and access',
    'Review accounts, permissions, available scanning and firewall controls, and dependency advisories. Define incident responsibilities and escalation. Security care reduces avoidable risk without promising that a store can never be compromised.',
  ],
  [
    'Backups and checkout checks',
    'Scope database and file backups with restore validation and an order-reconciliation plan. Define safe checks for cart, payment, shipping, tax, and confirmation without unintentionally creating live purchases or sending customer messages.',
  ],
  [
    'Products and reporting',
    'Discuss a defined allocation for product edits, category changes, campaign content, and routine requests. Share completed work, relevant measurements, and pending decisions at an agreed cadence so store owners can see what needs attention.',
  ],
]
const sections = [
  {
    id: 'woo-plans',
    label: 'WOOCOMMERCE CARE PLANNING',
    title: 'Choose coverage around the store’s dependencies.',
    intro:
      'These coverage options are a starting point for scoping, not pre-priced subscriptions. Review the hosting, custom code, extensions, order volume, and current issues before agreeing tasks, frequency, reporting, change allocation, and support commitments.',
    cards: [
      [
        'Core store care',
        'Discuss agreed updates, compatibility checks, backup preparation, and essential shopping-journey review. Identify what the host already provides and what the merchant or maintainer must configure so operational responsibilities remain clear.',
      ],
      [
        'Care and ongoing improvements',
        'Add a defined allocation for performance investigation, product changes, plugin review, or usability improvements. Prioritize requests and agree how larger work is estimated and approved instead of treating every enhancement as an included maintenance task.',
      ],
      [
        'Complex commerce operations',
        'Subscriptions, memberships, bookings, custom integrations, and multiple sites may require a broader review and escalation model. Dedicated capacity, emergency coverage, and an SLA require explicit agreement; they are not standard promises on this page.',
      ],
    ],
  },
  {
    id: 'woo-foundation',
    label: 'WORDPRESS, THEME & PLUGIN UPDATES',
    title: 'Maintain the foundation around the store.',
    intro:
      'A WooCommerce website depends on its WordPress installation, theme, runtime, and extensions. Review those layers together before updating. Inventory customizations and paid licenses so the release plan accounts for real compatibility and ownership constraints.',
    cards: [
      [
        'Compatibility review',
        'Check release notes, supported runtime requirements, theme overrides, and plugin compatibility before selecting an update set. An abandoned extension or incompatible host configuration may need replacement work beyond routine updates.',
      ],
      [
        'Staging and data safety',
        'Test on a suitable staging environment before production changes. Protect customer data and disable unintended payments, order emails, or scheduled integrations in test copies. A staging site should help verify behavior without affecting real customers.',
      ],
      [
        'Release and fallback',
        'Agree the update window, current backup, verification steps, and fallback decisions. Record the changes. Database updates can complicate reversal, so restoring the old plugin files alone is not assumed to reverse every change safely.',
      ],
    ],
  },
  {
    id: 'woo-updates',
    label: 'WOOCOMMERCE & EXTENSION CARE',
    title: 'Check the commerce workflows after a change.',
    intro:
      'WooCommerce-specific maintenance goes beyond a successful plugin update. Verify the functions that turn a cart into an order and deliver the correct information to staff and external services. The test scope depends on the extensions the store actually uses.',
    cards: [
      [
        'Checkout and gateway compatibility',
        'Review cart, supported payment methods, shipping, tax configuration, discounts, and order confirmation. Coordinate gateway updates and vendor dependencies. Merchant-approved commercial rules remain the source of truth; maintenance is not tax advice or authorization to change financial policies.',
      ],
      [
        'Subscriptions and scheduled work',
        'Where installed, review renewals, membership access, bookings, scheduled actions, and related notifications. Identify failing jobs or duplicate processing and define vendor escalation. Test recurring workflows with safe fixtures rather than triggering real customer charges.',
      ],
      [
        'Product and order integrity',
        'Check variants, attributes, stock behavior, and representative order records after changes. Review relevant database-update notices and failed scheduled actions. A major extension replacement or data migration requires its own plan and reconciliation criteria.',
      ],
    ],
  },
  {
    id: 'woo-performance',
    label: 'WOOCOMMERCE PERFORMANCE',
    title: 'Tune hosting, data, and storefront behavior together.',
    intro:
      'Performance depends on the implementation, hosting capacity, catalog, extensions, and visitor conditions. Measure representative journeys before changing configuration. No blanket comparison with Shopify or guaranteed speed score is needed to identify useful improvements.',
    cards: [
      [
        'Caching without stale carts',
        'Review supported page and object caching, session behavior, and personalized routes. Cart, checkout, and account pages need deliberate handling. Verify pricing, stock, and session behavior after changes instead of applying identical caching rules to every destination.',
      ],
      [
        'Database and background work',
        'Investigate slow queries, expensive extensions, scheduled tasks, and hosting resource limits where access allows. Cleanup must distinguish disposable data from orders, customer records, and operational history. Destructive data changes require a separate reviewed plan.',
      ],
      [
        'Media and scripts',
        'Review product image sizes, loading priority, fonts, and third-party assets. Compare repeatable lab measurements and available field data. Core Web Vitals guide investigation; no fixed mobile score, loading time, or revenue improvement is guaranteed.',
      ],
    ],
  },
  {
    id: 'woo-security',
    label: 'SECURITY & MALWARE RESPONSE',
    title: 'Keep access, patching, and incident ownership clear.',
    intro:
      'Review available controls around the actual hosting and application environment. Accounts, plugins, custom code, and external providers have different responsibilities. Monitoring and scanning need a defined configuration and response path rather than an implied universal protection package.',
    cards: [
      [
        'Account and dependency safeguards',
        'Review least-privilege administration, supported multi-factor authentication, provider access, and maintained components. Keep credentials out of public source and reports. Prioritize security advisories while checking compatibility with the store’s essential workflows.',
      ],
      [
        'Protective controls',
        'Evaluate scanning, firewall, login protection, and relevant hosting controls within scope. Confirm tools, subscription costs, and ownership before setup. A scanner result does not prove that every component is safe or replace an investigation when compromise is suspected.',
      ],
      [
        'Investigation and remediation',
        'Agree how access is secured and an incident is investigated. Cleanup, forensic work, or rebuilding may need a separate scope and specialist support. Recovery includes reviewing the entry point and affected accounts, not just deleting an unexpected file.',
      ],
    ],
  },
  {
    id: 'woo-checkout-security',
    label: 'CHECKOUT SECURITY & PCI RESPONSIBILITIES',
    title: 'Clarify the payment integration and merchant obligations.',
    intro:
      'The chosen gateway and checkout implementation affect the compliance scope. Using hosted payment fields or a redirect can change how payment data is handled, but does not automatically make merchant responsibilities disappear. Confirm requirements with the payment provider and a qualified assessor where needed.',
    cards: [
      [
        'Payment data boundaries',
        'Review where sensitive payment information is collected and handled. Keep card data out of application logs and avoid introducing custom handling without a defined requirement and assessment. Gateway configuration is reviewed around the supported integration model.',
      ],
      [
        'Checkout and transport',
        'Check relevant HTTPS configuration, checkout scripts, access controls, and provider requirements. Security headers and other controls need compatibility testing. A maintenance review is not a PCI certification or a guarantee that every compliance requirement has been independently validated.',
      ],
      [
        'Merchant decisions',
        'Fraud review, refunds, chargebacks, and order acceptance remain authorized merchant responsibilities. Scope technical support around those workflows without promising prevention of every loss. Compliance documents, assessments, and remediation ownership require a separate explicit agreement.',
      ],
    ],
  },
  {
    id: 'woo-recovery',
    label: 'BACKUPS & ORDER-SAFE RECOVERY',
    title: 'A restore must account for orders received since the backup.',
    intro:
      'Protect the database, uploaded media, code, and required configuration. Commerce recovery needs special care because restoring an older snapshot may lose or overwrite newer order and customer changes. Define the recovery objectives and decision owners before an incident.',
    cards: [
      [
        'Coverage and retention',
        'Agree backup resources, frequency, storage, retention, access, and encryption where applicable. Review host capabilities and whether independent storage is needed. No daily schedule or fixed retention period is assumed before the plan is agreed.',
      ],
      [
        'Restore validation',
        'Test representative recovery in an isolated environment and verify required store journeys. Record the last successful check and outstanding gaps. Protect customer information in test copies and prevent restored scheduled jobs from contacting real customers unexpectedly.',
      ],
      [
        'Reconciliation and cutover',
        'Define how newer orders, stock changes, subscriptions, and external fulfillment are reconciled before returning to service. Restoration may require vendor coordination. No instant recovery, zero data loss, or blanket zero-downtime guarantee is made.',
      ],
    ],
  },
  {
    id: 'woo-monitoring',
    label: 'UPTIME & CHECKOUT CHECKS',
    title: 'Monitor the buying journey, then define the response.',
    intro:
      'A homepage response is only one signal. Review the checks needed for cart, checkout, order processing, and important integrations. Automated detection and human support coverage are separate commitments and both need clear scope.',
    cards: [
      [
        'Safe test methods',
        'Define which checks can be automated and which require manual review. Use approved sandbox or non-purchasing checks where possible. Real payments, refunds, customer emails, and subscription charges must not be triggered as incidental monitoring activity.',
      ],
      [
        'Alerts and escalation',
        'Agree check intervals, thresholds, recipients, and severity definitions. Identify host, gateway, and extension support channels. External-provider failures may require their action rather than a local fix.',
      ],
      [
        'Incident follow-up',
        'Record impact, actions, resolution status, and remaining dependencies. Support hours and any response target belong in the agreement. This page does not promise a fifteen-minute emergency SLA, continuous human coverage, or a fixed resolution deadline.',
      ],
    ],
  },
  {
    id: 'woo-cro',
    label: 'CONVERSION & SHOPPING EXPERIENCE',
    title: 'Improve clarity with evidence, not revenue promises.',
    intro:
      'Review product information, navigation, mobile interactions, and checkout friction around observed problems. Approved descriptions, reviews, prices, and policies come from the merchant. A redesign or experiment should have a clear hypothesis and acceptance criteria.',
    cards: [
      [
        'Product and cart usability',
        'Check variations, availability, cart feedback, shipping explanations, and coupon behavior. Prioritize confusing or broken states before adding extra effects. Avoid artificial urgency or unsupported trust claims as a substitute for clear product information.',
      ],
      [
        'Measurement and experiments',
        'Where consent, measurement access, and sufficient traffic exist, agree baselines and a sound test design. Separate seasonal changes from the tested intervention. No conversion increase is guaranteed, and continuous A/B testing is not automatically included in maintenance.',
      ],
      [
        'Roadmap and scope',
        'Prioritize useful improvements against an agreed allocation. New features, integrations, or a checkout redesign may need a separate estimate and security review. Tracking or abandonment tools are not installed by this content update.',
      ],
    ],
  },
  {
    id: 'woo-content',
    label: 'PRODUCT MANAGEMENT & REPORTING',
    title: 'Coordinate content changes and keep work visible.',
    intro:
      'Discuss routine product, category, media, and campaign requests within a defined allocation. Agree approvals, reporting frequency, and the source of commercial information. A monthly summary can show completed work and pending decisions using the tools actually configured.',
    cards: [
      [
        'Catalog and campaign changes',
        'Review representative products, variations, categories, and images before bulk edits. Plan banners, coupons, and landing content around approved dates and rules. Large imports or seasonal development may require a separate scope rather than an unlimited task allowance.',
      ],
      [
        'Maintenance evidence',
        'Summarize updates, checks, incidents, backup status, available performance trends, and request allocation. Identify access, licensing, or vendor blockers. Reports should distinguish available measurements from checks that have not been configured.',
      ],
      [
        'Why ongoing care matters',
        'Hosting, themes, extensions, and external APIs evolve after launch. An inventory, tested release process, and recovery plan make those changes easier to manage. Maintenance supports continuity and useful decisions without claiming that every failure can be prevented.',
      ],
    ],
  },
]
const process = [
  [
    'Store review and onboarding',
    'Inventory WordPress, WooCommerce, hosting, extensions, access, and important order workflows. Agree scope and known issues.',
  ],
  [
    'Stabilization',
    'Review current faults, compatibility gaps, and failed integrations. Estimate substantial remediation separately before routine care.',
  ],
  [
    'Monitoring and recovery preparation',
    'Configure agreed checks and backup procedures. Validate alert routing, recovery limits, and merchant responsibilities.',
  ],
  [
    'Scheduled maintenance',
    'Test the agreed update set and store journeys before release. Record changes and verify the affected live behavior.',
  ],
  [
    'Reporting and priorities',
    'Share completed work, available measurements, incidents, and pending decisions. Review allocation and priorities with the owner.',
  ],
  [
    'Ongoing improvement',
    'Prioritize usability, performance, or integration work. Scope experiments and larger changes separately with approval.',
  ],
]
const faqs = [
  [
    'How much does WooCommerce maintenance cost?',
    'The estimate depends on hosting, plugins, custom code, current issues, change allocation, and support coverage. Paid extensions and remediation may be separate. Share your store for a scoped proposal; no fixed prices or starting ranges are published here.',
  ],
  [
    'What is included in a WooCommerce maintenance plan?',
    'The agreement defines WordPress and WooCommerce updates, extension review, store checks, recovery preparation, performance, reporting, and any routine changes. Frequency, tools, access, and exclusions are confirmed during onboarding. Coverage shown here is not an unlimited package.',
  ],
  [
    'Do I need a contract, or can I cancel anytime?',
    'Duration, renewal, cancellation, notice, and handover terms are confirmed in the proposal and agreement. No cancel-anytime policy or minimum term is assumed. Clarify ownership of licenses, backups, documentation, and access before beginning recurring care.',
  ],
  [
    'Can you maintain a store you did not build?',
    'Review source access, hosting, customizations, plugins, licensing, and current problems first. Unsupported components or missing access may need remediation. The review establishes the care that can be accepted and which work needs a separate project.',
  ],
  [
    'Do you handle Subscriptions, Memberships, or Bookings?',
    'Those extensions can be assessed around the installed versions, gateways, licensing, and custom behavior. Scope renewal jobs, access rules, bookings, notifications, and vendor support explicitly. Test recurring workflows safely without causing live charges or customer messages.',
  ],
  [
    'Can you help migrate our WooCommerce store to Shopify?',
    'A migration is a separate project that reviews catalog, customers, order history, URLs, integrations, and account behavior. Subscription or payment data may need provider coordination. Use Shopify Development to discuss feasibility; unchanged rankings, zero downtime, and complete automatic transfer are not guaranteed.',
  ],
  [
    'Are emergency support, backups, and PCI certification included?',
    'Support windows, backup resources, retention, and restore checks are agreed explicitly. No fixed emergency deadline or instant recovery is implied. Technical maintenance is not PCI certification, and a payment gateway does not automatically remove the merchant’s compliance obligations.',
  ],
]
export function WooCommerceMaintenanceCoverage() {
  return (
    <section className={styles.section} aria-labelledby="woo-build-title">
      <div className={styles.heading}>
        <span>WHAT MAINTENANCE CAN COVER</span>
        <h2 id="woo-build-title">WooCommerce care with a clearly defined scope.</h2>
        <p>
          Connect WordPress, WooCommerce, extensions, checkout, and hosting care with your store
          operations. Agree tasks, frequency, access, and recovery responsibilities before starting
          an engagement.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which maintenance service fits your platform?</strong>
        <p>
          For non-commerce sites, explore{' '}
          <Link href="/services/website-maintenance/">Website Maintenance</Link>. For Shopify
          commerce, see{' '}
          <Link href="/services/shopify-store-maintenance/">Shopify Store Maintenance</Link>. This
          page covers WooCommerce on WordPress.
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
export function WooCommerceMaintenanceContent() {
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
                <span>FROM ONBOARDING TO ONGOING CARE</span>
                <h2 id="woo-process-title">Six steps to a maintainable care workflow.</h2>
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
      <section className={styles.section} aria-labelledby="woo-faq-title">
        <div className={styles.heading}>
          <span>WOOCOMMERCE CARE QUESTIONS</span>
          <h2 id="woo-faq-title">Before you choose WooCommerce care.</h2>
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
      <section className={styles.section} aria-labelledby="woo-related-title">
        <div className={styles.heading}>
          <span>THE WEBSITE LIFECYCLE</span>
          <h2 id="woo-related-title">Find the right service for your platform.</h2>
        </div>
        <div className={styles.related}>
          {[
            ['Website Maintenance', 'website-maintenance'],
            ['Shopify Development', 'shopify-development'],
            ['WordPress Development', 'wordpress-development'],
            ['Custom Website Development', 'custom-website-development'],
            ['Shopify Store Maintenance', 'shopify-store-maintenance'],
            ['Technical & On-Page SEO', 'technical-onpage-seo'],
          ].map(([name, slug]) => (
            <Link key={slug} href={`/services/${slug}/`}>
              {name}
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.cta}`} aria-labelledby="woo-cta-title">
        <span>YOUR NEXT STEP</span>
        <h2 id="woo-cta-title">Start with the care your WooCommerce store needs.</h2>
        <p>
          Share your store URL, hosting, plugins, customizations, and current concerns. Let’s define
          practical coverage, recovery responsibilities, and the first priorities.
        </p>
        <Link href="/contact/">
          Discuss your WooCommerce care plan <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </>
  )
}
