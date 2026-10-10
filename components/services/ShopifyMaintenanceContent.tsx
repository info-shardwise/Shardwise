import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './ShopifyMaintenanceContent.module.css'
const builds = [
  [
    'Theme and storefront care',
    'Review Liquid templates, reusable sections, product layouts, and customizations. Scope theme updates and editing improvements around the existing implementation, with checks for app embeds and important mobile journeys before publishing.',
  ],
  [
    'App inventory and compatibility',
    'Document installed apps, owners, permissions, subscriptions, and the functionality each provides. Review overlap and conflicts before proposing removal or replacement so useful operational behavior is not lost during an app cleanup.',
  ],
  [
    'Performance review',
    'Measure representative product, collection, and cart pages. Investigate image delivery, theme assets, and app scripts within Shopify’s supported environment. Agree useful targets and review frequency instead of promising a universal speed score.',
  ],
  [
    'Account and data safeguards',
    'Review staff access, app permissions, and ownership of domains and provider accounts. Define recovery preparation and available security controls. Merchant decisions, payment-provider processes, and Shopify infrastructure have separate responsibilities.',
  ],
  [
    'Checkout and shopping journeys',
    'Scope checks for variants, cart behavior, discounts, shipping, and supported payment flows. Define safe test methods and authorization so routine maintenance does not accidentally place live orders or change customer-facing policies.',
  ],
  [
    'Merchandising and reporting',
    'Discuss a defined allowance for products, collections, banners, and campaign content. Summarize completed work, known issues, and next priorities at an agreed cadence. Approved content and commercial rules remain the merchant’s responsibility.',
  ],
]
const sections = [
  {
    id: 'store-plans',
    label: 'SHOPIFY CARE PLANNING',
    title: 'Choose store coverage around your operations.',
    intro:
      'These options help scope an engagement; they are not pre-priced subscription tiers. Confirm tasks, frequency, request allocation, support windows, reporting, and exclusions after reviewing the store, apps, and current problems.',
    cards: [
      [
        'Core storefront care',
        'Discuss theme review, agreed shopping-journey checks, app compatibility, and recovery preparation. Clarify what Shopify manages and what the merchant or maintainer controls, including access and third-party subscriptions.',
      ],
      [
        'Care with ongoing improvements',
        'Add a defined allocation for app audits, performance work, or merchandising requests. Prioritize the work and agree how additional tasks are estimated and approved. Routine care does not imply unlimited development or campaign production.',
      ],
      [
        'Complex and Plus requirements',
        'Review custom apps, multiple markets, B2B, or eligible checkout extensions against the store’s plan and configuration. Confirm dependencies and escalation responsibilities before accepting coverage; dedicated staffing and a fixed SLA need an explicit agreement.',
      ],
    ],
  },
  {
    id: 'store-themes',
    label: 'THEME UPDATES & ONLINE STORE 2.0',
    title: 'Keep customizations visible through theme changes.',
    intro:
      'A theme update can affect custom code, settings, and app integrations. Review the current theme and release notes before deciding between an update, a migration, or a larger rebuild. Theme care is different from maintaining Shopify’s underlying infrastructure.',
    cards: [
      [
        'Draft theme review',
        'Prepare changes in an appropriate draft theme and review important templates before publication. Save customized code and identify changes that need manual transfer. Not every theme supports the same update mechanism, so the implementation determines the workflow.',
      ],
      [
        'Sections and content models',
        'Review JSON templates, sections, blocks, and metafields around editing needs. An older theme migration requires mapping layouts and functionality, not simply toggling a setting. Preserve representative content and verify that merchants understand the new controls.',
      ],
      [
        'Compatibility and release',
        'Check navigation, product options, cart behavior, app embeds, and responsive layouts. Document publication and fallback decisions. A theme change is not a guarantee of zero downtime, unchanged rankings, or automatic preservation of every customization.',
      ],
    ],
  },
  {
    id: 'store-apps',
    label: 'SHOPIFY APP AUDITS',
    title: 'Understand the purpose and cost of every app.',
    intro:
      'An app review connects storefront behavior with the operations behind it. Before removing something, identify which journeys, data, or automations depend on it and who owns the subscription and configuration.',
    cards: [
      [
        'Inventory and overlap',
        'Record what each app does, its permissions, recurring cost, and owner. Review underused or overlapping functionality with the merchant. A replacement needs a clear reason and a migration plan for data or workflows, not just a shorter installed-app list.',
      ],
      [
        'Scripts and conflicts',
        'Investigate storefront scripts, app embeds, and interactions with the theme. Test affected journeys and work with the app vendor when a fix is outside merchant control. Avoid claiming every app can be optimized or independently updated by an agency.',
      ],
      [
        'New app evaluation',
        'Check eligibility, licensing, data handling, support, and compatibility before adoption. App installation and expanded access require merchant approval. Document removal steps, export options, and operational dependencies so the decision remains understandable later.',
      ],
    ],
  },
  {
    id: 'store-performance',
    label: 'SHOPIFY SPEED OPTIMIZATION',
    title: 'Measure the storefront customers actually use.',
    intro:
      'Performance depends on the theme, media, app scripts, content, and visitor conditions. Review representative templates and changes over time rather than treating a single laboratory result as evidence that every customer receives the same experience.',
    cards: [
      [
        'Media and theme assets',
        'Review image sizing, loading priorities, layout stability, fonts, and unnecessary JavaScript or CSS. Preserve functionality when simplifying assets and check product media on smaller screens. Shopify-managed delivery imposes different constraints from a self-hosted website.',
      ],
      [
        'App and third-party cost',
        'Identify which scripts are necessary and when they need to load. Coordinate changes with marketing and operations owners before removal. Consent and measurement configuration are agreed separately; analytics are not enabled by this page update.',
      ],
      [
        'Useful targets',
        'Agree a measurement approach for Core Web Vitals and repeatable lab tests. Prioritize regressions and document limitations of available field data. No fixed score, loading time, or conversion improvement is guaranteed from performance work.',
      ],
    ],
  },
  {
    id: 'store-cro',
    label: 'CONVERSION & CUSTOMER EXPERIENCE',
    title: 'Improve shopping journeys with evidence.',
    intro:
      'A store improvement should begin with observed friction and a testable hypothesis. Review product information, navigation, and cart feedback while keeping commercial claims, reviews, and policies accurate and supplied by the merchant.',
    cards: [
      [
        'Product and cart clarity',
        'Check variant selection, availability, useful specifications, shipping information, and cart feedback. Prioritize mobile interactions and confusing states. Avoid adding artificial urgency or unsupported trust claims as a substitute for clear information.',
      ],
      [
        'Checkout boundaries',
        'Evaluate changes within the checkout capabilities available to the store. Confirm compatibility with payments, subscriptions, shipping, and discounts before release. Some changes depend on Shopify plan eligibility or an app vendor rather than theme code.',
      ],
      [
        'Experiment design',
        'Where measurement access and sufficient traffic exist, agree baselines and success criteria before an experiment. Separate seasonal effects from the tested change. CRO iterations are a defined scope, not a promise of increased revenue or continuous testing on every store.',
      ],
    ],
  },
  {
    id: 'store-security',
    label: 'ACCOUNT SECURITY & FRAUD WORKFLOWS',
    title: 'Clarify merchant and provider responsibilities.',
    intro:
      'Review supported account safeguards, staff access, and app permissions. Shopify manages platform infrastructure, while merchants still make decisions about access, order handling, and third-party services. Maintenance should make those responsibilities explicit.',
    cards: [
      [
        'Access and domains',
        'Review least-privilege staff access, supported multi-factor authentication, app access, and domain ownership. Agree who approves configuration changes and controls credentials. Protect sensitive information and keep secrets out of source code and shared reports.',
      ],
      [
        'Fraud-related configuration',
        'Review available risk tools and workflows with the merchant. Tool eligibility, settings, and actions depend on the store and providers. Order acceptance, refunds, chargeback responses, and financial decisions remain authorized merchant responsibilities; fraud losses cannot be eliminated by maintenance.',
      ],
      [
        'Incident escalation',
        'Define how suspected compromise, payment-provider issues, or suspicious app behavior are reported and investigated. Recovery may require Shopify or vendor assistance. Coverage and response commitments are agreed explicitly rather than assuming round-the-clock human support.',
      ],
    ],
  },
  {
    id: 'store-backups',
    label: 'BACKUPS & DATA PROTECTION',
    title: 'Know what can be recovered and how.',
    intro:
      'Theme copies, data exports, and backup tools protect different things. Review products, collections, customer data, order history, and app-specific information separately. An export is not automatically a complete point-in-time restore of a store.',
    cards: [
      [
        'Coverage and retention',
        'Define the resources included, export or backup method, frequency, storage access, and retention. Minimize unnecessary copies of customer information. Review provider limitations before promising that every setting, app record, or historical transaction can be restored.',
      ],
      [
        'Theme and app recovery',
        'Keep appropriate theme versions and document custom code. App data may need a vendor-specific export or recovery procedure. Confirm dependency ownership and what happens if a subscription or provider becomes unavailable.',
      ],
      [
        'Recovery validation',
        'Agree how representative recovery is tested safely and who authorizes restoration. Document reconciliation work and limitations. Daily backups, thirty-day retention, instant restoration, or zero data loss are not implied without a defined and tested commitment.',
      ],
    ],
  },
  {
    id: 'store-monitoring',
    label: 'STOREFRONT & CHECKOUT MONITORING',
    title: 'A working homepage is only one check.',
    intro:
      'Define meaningful checks for the storefront and buying journey, then connect alerts with an agreed response path. Automated detection and human support coverage are different services, and both need clear boundaries.',
    cards: [
      [
        'Shopping-journey checks',
        'Review product selection, cart, discounts, shipping, and relevant checkout paths. Use approved test methods; payment testing must avoid unintended live purchases. Document what can be checked automatically and what needs manual review.',
      ],
      [
        'Alerts and dependencies',
        'Agree check frequency, thresholds, recipients, and escalation channels. Third-party payment, shipping, and app failures may require vendor action. Do not imply that all provider internals can be monitored from the storefront.',
      ],
      [
        'Incident handling',
        'Define severity, access needs, support hours, and any contractual response target. Record impact, actions, and unresolved dependencies after an incident. This page does not promise a fifteen-minute SLA or a guaranteed resolution deadline.',
      ],
    ],
  },
  {
    id: 'store-content',
    label: 'MERCHANDISING & CAMPAIGN SUPPORT',
    title: 'Keep store updates coordinated.',
    intro:
      'Discuss a defined request allocation for catalog and campaign changes. The merchant provides approved content, prices, inventory decisions, and policies. Larger landing pages or custom functionality may need a separate development scope.',
    cards: [
      [
        'Catalog and collections',
        'Scope product uploads, variants, images, descriptions, and collection changes. Review representative records before bulk changes and define approval and reconciliation steps so errors do not spread across the catalog.',
      ],
      [
        'Seasonal readiness',
        'Plan banners, promotion dates, collection links, and key journey checks ahead of launches or trading events. Review app and checkout dependencies with the merchant. Campaign preparation does not guarantee uninterrupted service during peak traffic.',
      ],
      [
        'Request allocation',
        'Agree the channel, authorization, priorities, and any included hours or tasks. Turnaround and rollover rules belong in the agreement. New integrations, redesigns, and extensive catalog cleanup are not automatically routine maintenance.',
      ],
    ],
  },
  {
    id: 'store-reporting',
    label: 'REPORTING & ONGOING REVIEW',
    title: 'Show what changed and what needs attention.',
    intro:
      'Agree a reporting cadence and format suited to store operations. A monthly summary can include the work and measurements actually available, without presenting unconfigured checks or unavailable data as active monitoring.',
    cards: [
      [
        'Work and operational status',
        'Summarize theme changes, app decisions, catalog requests, incidents, and outstanding actions. Identify missing access, license issues, or vendor blockers and explain which merchant decisions are needed.',
      ],
      [
        'Measurements and evidence',
        'Include available performance trends, check results, backup status, and experiment findings with their limitations. Distinguish observations from proven outcomes and avoid exposing unnecessary customer or payment information in reports.',
      ],
      [
        'Why ongoing care matters',
        'Themes, apps, campaigns, and provider behavior can change after launch. Regular review helps identify compatibility and usability gaps, while a clear inventory and change history support future decisions. Maintenance reduces uncertainty without removing every operational risk.',
      ],
    ],
  },
]
const process = [
  [
    'Store onboarding',
    'Review the theme, apps, markets, access owners, and important shopping journeys. Agree scope and current priorities.',
  ],
  [
    'Stabilization',
    'Assess existing conflicts and storefront faults. Estimate substantial remediation separately before starting routine care.',
  ],
  [
    'Checks and recovery setup',
    'Configure agreed monitoring, alert routing, and recovery preparation. Validate tool coverage and merchant responsibilities.',
  ],
  [
    'Scheduled store care',
    'Review updates, app behavior, performance, and approved merchandising requests through the release workflow.',
  ],
  [
    'Reporting and review',
    'Share completed work, available measurements, incidents, and decisions needed. Review the agreed allocation and next priorities.',
  ],
  [
    'Continuous improvement',
    'Prioritize useful performance, usability, or integration work. Scope experiments and larger changes separately with merchant approval.',
  ],
]
const faqs = [
  [
    'How much does Shopify store maintenance cost?',
    'The estimate depends on theme complexity, apps, integrations, markets, change allocation, and support coverage. Shopify and app subscriptions may be separate. Share your store and concerns for a scoped proposal; no fixed prices or starting ranges are published here.',
  ],
  [
    'What is included in a Shopify maintenance plan?',
    'The agreement defines theme work, app reviews, shopping-journey checks, performance, recovery preparation, merchandising, and reporting. Frequency and exclusions are confirmed during onboarding. The coverage shown here is a planning framework, not an unlimited package.',
  ],
  [
    'Do I need a contract, or can I cancel anytime?',
    'Term, renewal, cancellation, notice, and handover arrangements are confirmed in the proposal and agreement. No cancel-anytime policy or minimum term is assumed. Discuss ownership of configuration and documentation before beginning recurring care.',
  ],
  [
    'Can you maintain a Shopify store you did not build?',
    'An existing store can be reviewed for theme access, customizations, apps, licensing, and current problems. Unsupported dependencies or missing information may require remediation first. The review determines which work can be accepted and what needs a separate project.',
  ],
  [
    'Do you handle Shopify Plus maintenance requirements?',
    'Plus-related requirements can be scoped around the store’s current configuration and eligible features. Custom apps, B2B, and checkout extensions may need additional review and vendor coordination. Dedicated staffing, partner certification, and an SLA are not claimed on this page.',
  ],
  [
    'Can you migrate our theme to Online Store 2.0?',
    'Assess the existing theme, templates, custom code, and apps before planning a migration. Rebuilding or manual transfer may be required. Test representative pages and editing behavior before publication; unchanged rankings, zero downtime, and automatic preservation of every customization cannot be guaranteed.',
  ],
  [
    'Are emergency support and backups automatically included?',
    'Support windows, response expectations, backup resources, retention, and restore checks are agreed explicitly. Theme copies and exports have limits, especially for app data. No round-the-clock human coverage, instant restore, or fixed emergency deadline is implied.',
  ],
]
export function ShopifyMaintenanceCoverage() {
  return (
    <section className={styles.section} aria-labelledby="store-build-title">
      <div className={styles.heading}>
        <span>WHAT MAINTENANCE CAN COVER</span>
        <h2 id="store-build-title">Shopify store care with a clearly defined scope.</h2>
        <p>
          Connect theme, app, checkout, and merchandising care with your store operations. Agree
          tasks, frequency, access, and responsibilities before starting a recurring engagement.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which maintenance service fits your platform?</strong>
        <p>
          For WordPress and custom websites, explore{' '}
          <Link href="/services/website-maintenance/">Website Maintenance</Link>. For WordPress
          commerce, see{' '}
          <Link href="/services/woocommerce-maintenance/">WooCommerce Maintenance</Link>. This page
          focuses on Shopify stores.
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
export function ShopifyMaintenanceContent() {
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
                <h2 id="store-process-title">Six steps to a maintainable care workflow.</h2>
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
      <section className={styles.section} aria-labelledby="store-faq-title">
        <div className={styles.heading}>
          <span>SHOPIFY STORE CARE QUESTIONS</span>
          <h2 id="store-faq-title">Before you choose Shopify store care.</h2>
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
      <section className={styles.section} aria-labelledby="store-related-title">
        <div className={styles.heading}>
          <span>THE WEBSITE LIFECYCLE</span>
          <h2 id="store-related-title">Find the right service for your platform.</h2>
        </div>
        <div className={styles.related}>
          {[
            ['Website Maintenance', 'website-maintenance'],
            ['Shopify Development', 'shopify-development'],
            ['Website Design', 'website-design'],
            ['Custom Website Development', 'custom-website-development'],
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

export function ShopifyMaintenanceProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="store-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="store-cta-title">Start with the care your Shopify store needs.</h2>
      <p>
        Share your store URL, theme, apps, markets, current issues, and important campaign dates.
        Let’s define practical coverage and the first priorities.
      </p>
      <Link href="/contact/">
        Discuss your Shopify care plan <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
