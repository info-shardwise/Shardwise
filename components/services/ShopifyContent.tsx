import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './ShopifyContent.module.css'
const builds = [
  [
    'Custom Shopify themes',
    'A storefront built around your brand, catalog, and customer journeys. Reusable sections and product templates give your team practical editing controls, while responsive layouts make browsing and buying comfortable on smaller screens.',
  ],
  [
    'Shopify Plus projects',
    'Scope more complex commerce operations, checkout extension requirements, and integrations around the capabilities available to your store. Confirm plan eligibility and dependencies before selecting features or committing to a rollout.',
  ],
  [
    'Custom apps and integrations',
    'Connect the store to business systems when an existing app cannot meet a defined requirement. Map catalog, inventory, order, or customer data ownership and plan the permissions, retries, and operational support involved.',
  ],
  [
    'Headless storefronts',
    'Explore a separate frontend when the experience needs justify the additional complexity. Compare a Shopify theme with Hydrogen or another Storefront API implementation, including content preview, hosting, analytics, and maintenance responsibilities.',
  ],
  [
    'Store migrations',
    'Move from WooCommerce, Magento, or another platform with a documented data and URL mapping. Establish what can be imported, what needs rebuilding, and how the team will validate the transition before customers use the new store.',
  ],
  [
    'Theme upgrades and rebuilds',
    'Review an older theme against current editing and shopping needs. Preserve useful functionality while replacing fragile customizations, checking app compatibility, and documenting the changes merchants need to understand after handover.',
  ],
  [
    'Subscriptions and repeat purchasing',
    'Evaluate subscription apps, recurring-payment eligibility, customer account flows, and fulfillment requirements. Treat renewal behavior, cancellation, pricing, and support responsibilities as part of the customer experience rather than an isolated checkout feature.',
  ],
  [
    'B2B and international selling',
    'Discuss company purchasing, customer-specific catalogs, market requirements, currencies, languages, and regional operations. Availability depends on the Shopify plan, region, and chosen integrations; the scope should make those limits clear.',
  ],
]
const sections = [
  {
    id: 'shopify-stack',
    label: 'TECHNOLOGY & STORE OPERATIONS',
    title: 'Choose the architecture around your store.',
    intro:
      'The right setup connects the shopping experience with how your team manages products, promotions, and orders. Start with operational needs and the existing app ecosystem before deciding how much custom development is useful.',
    cards: [
      [
        'Theme foundation',
        'Liquid, JSON templates, sections, and blocks support a Shopify theme storefront. CSS and JavaScript handle presentation and interactions. Plan reusable components and merchant settings so routine content updates remain practical inside the theme editor.',
      ],
      [
        'Development and data',
        'Shopify CLI can support theme development and review. Product metafields and metaobjects can organize additional content where useful. Agree the data model, naming, and editing guidance before filling the catalog with one-off workarounds.',
      ],
      [
        'APIs and extensions',
        'Storefront API, Admin API, webhooks, and eligible extensions serve different purposes. Select only what the project needs, document API versions and permissions, and keep server-side credentials separate from public storefront code.',
      ],
    ],
  },
  {
    id: 'shopify-themes',
    label: 'CUSTOM THEME DEVELOPMENT',
    title: 'Make product discovery feel like your brand.',
    intro:
      'A custom theme should help customers understand products and give merchants useful tools to maintain the experience. Review real catalog content early so product variations, long titles, and different media formats do not become late surprises.',
    cards: [
      [
        'Flexible sections and templates',
        'Create reusable landing, collection, and product layouts with meaningful merchant controls. Use metafields for structured specifications or product-specific content, and keep layout constraints clear enough to preserve consistency during everyday editing.',
      ],
      [
        'Product and collection journeys',
        'Consider filters, search, variant selection, availability, size or specification information, and useful product media. Review empty results and unavailable options alongside the ideal shopping path, especially where products require additional explanation.',
      ],
      [
        'Mobile cart and accessibility',
        'Check touch targets, navigation, keyboard operation, form labels, and cart feedback. Agree the required browsers and accessibility criteria. Custom cart behavior must remain compatible with the store’s discounts, subscription apps, and checkout handoff.',
      ],
    ],
  },
  {
    id: 'shopify-plus',
    label: 'SHOPIFY PLUS DEVELOPMENT',
    title: 'Plan advanced commerce with clear boundaries.',
    intro:
      'Larger catalogs and operational complexity need more than a different visual theme. Review the commercial plan, regional availability, and extension model against the actual requirements before committing to a Plus-specific implementation.',
    cards: [
      [
        'Checkout requirements',
        'Identify the changes needed in the buying journey and which supported checkout extensions are available. Confirm eligibility and third-party dependencies; avoid assuming that every checkout screen can be freely rewritten or that legacy customization methods remain suitable.',
      ],
      [
        'B2B and operational workflows',
        'Map company accounts, catalogs, purchasing rules, and downstream fulfillment needs. Confirm current feature availability for the chosen plan and markets, and decide where Shopify configuration is sufficient versus where an integration or custom app is required.',
      ],
      [
        'Phased rollout',
        'Prioritize the features required for launch, then plan additional markets or business workflows separately. Document acceptance criteria, staff permissions, training, and the operational owner of each integration so expansion remains manageable.',
      ],
    ],
  },
  {
    id: 'shopify-apps',
    label: 'CUSTOM APPS & INTEGRATIONS',
    title: 'Connect commerce with the systems behind it.',
    intro:
      'A successful integration needs an agreed source of truth. Define whether Shopify or another system owns each field, when updates should happen, and how staff will detect and resolve failures without manually comparing every order.',
    cards: [
      [
        'Inventory, orders, and customers',
        'Discuss ERP, CRM, fulfillment, accounting, or reporting connections around a specific business workflow. Review provider APIs, quotas, licensing, and field mappings before estimating the implementation or promising a real-time synchronization model.',
      ],
      [
        'Reliable event handling',
        'Webhooks and background processing need validation, duplicate handling, retries, and monitoring suited to the deployment. Design recovery for missed or rejected updates and document what happens when an external provider is unavailable.',
      ],
      [
        'Access and ownership',
        'Request the minimum permissions needed, protect credentials, and define who controls app configuration and hosting. App distribution, privacy requirements, and ongoing compatibility work depend on the intended use and are part of the scope.',
      ],
    ],
  },
  {
    id: 'shopify-headless',
    label: 'HEADLESS SHOPIFY',
    title: 'Separate the frontend when there is a clear reason.',
    intro:
      'A headless approach can serve a specialized experience, but introduces additional responsibilities. Compare it with a well-designed Shopify theme before deciding that a separate application is the best use of the project budget.',
    cards: [
      [
        'Hydrogen or another frontend',
        'Hydrogen is Shopify’s headless framework; a different frontend can use the Storefront API where appropriate. Choose around the team’s skills, required customer journeys, hosting needs, and integration constraints rather than treating one stack as mandatory.',
      ],
      [
        'The full shopping journey',
        'Scope product discovery, cart state, customer accounts, localization, and the supported checkout handoff together. Confirm compatibility with existing apps and analytics because a theme-based feature may not automatically work in a separate storefront.',
      ],
      [
        'Editing and maintenance tradeoffs',
        'Plan content management, previews, deployments, caching, and operational monitoring. Headless is an architectural choice, not a guaranteed speed or conversion improvement. Agree who will maintain both the commerce configuration and the frontend after launch.',
      ],
    ],
  },
  {
    id: 'shopify-migration',
    label: 'MIGRATIONS TO SHOPIFY',
    title: 'Move the store with a tested transition plan.',
    intro:
      'Migration starts with an inventory of the current platform and integrations. Use representative products and customer journeys to test the proposed mapping before treating a full import as a finished migration.',
    cards: [
      [
        'Catalog and historical data',
        'Map products, variants, images, collections, metafields, customers, and order history where supported. Customer passwords, subscriptions, and payment details may require different handling or provider cooperation; confirm feasibility before promising that everything transfers unchanged.',
      ],
      [
        'URLs and discovery',
        'Review existing indexed URLs, redirects, metadata, navigation, and internal links. Shopify’s route conventions can differ from the source platform. Verify important destinations and monitor after launch without guaranteeing unchanged rankings or uninterrupted traffic.',
      ],
      [
        'Cutover and validation',
        'Agree a content freeze or final synchronization window, DNS responsibility, inventory checks, and fallback decisions. Reconcile sample and total records, validate checkout and fulfillment, and explain any customer account changes before switching the live experience.',
      ],
    ],
  },
  {
    id: 'shopify-cro',
    label: 'CONVERSION RATE OPTIMIZATION',
    title: 'Improve the buying journey with evidence.',
    intro:
      'Start with observed friction and a clear hypothesis. Useful improvements can include clearer product information, easier navigation, or fewer cart surprises. Measurement should distinguish a plausible idea from a demonstrated result.',
    cards: [
      [
        'Product and collection clarity',
        'Review product descriptions, comparison information, variant selection, and merchandising. Help customers answer their questions before reaching checkout, while keeping shipping, returns, and availability information accurate and supplied by the merchant.',
      ],
      [
        'Cart and checkout friction',
        'Investigate confusing discounts, unexpected costs, difficult mobile interactions, and missing feedback. Evaluate changes within Shopify’s supported checkout model and test against the store’s payment, shipping, and subscription setup.',
      ],
      [
        'Measurement and experiments',
        'Agree the measurement tools, consent requirements, baseline, and success criteria. A/B tests require adequate traffic and a sound experiment design. Avoid promising a conversion lift or attributing seasonal changes to a redesign without sufficient evidence.',
      ],
    ],
  },
  {
    id: 'shopify-performance',
    label: 'PERFORMANCE & TECHNICAL SEO',
    title: 'Keep the storefront useful, fast, and discoverable.',
    intro:
      'Performance and search work should consider the actual theme, apps, content, and platform constraints. Set project-specific targets, test important templates, and prioritize changes that affect real customer journeys.',
    cards: [
      [
        'Theme and app performance',
        'Review media dimensions, image delivery, loading priorities, JavaScript, and third-party scripts. Remove redundant functionality only after checking operational dependencies. Assess Core Web Vitals with available field data and repeatable lab tests instead of publishing a guaranteed score.',
      ],
      [
        'Search foundations',
        'Review titles, descriptions, canonical behavior, product structured data, redirects, and internal links. Check collection and product URL behavior before making changes. International language and market signals need validation against the chosen Shopify configuration.',
      ],
      [
        'Platform constraints',
        'Shopify manages hosting and parts of URL and sitemap behavior. Plan within those boundaries rather than promising unrestricted server changes. Search outcomes depend on content, competition, and ongoing work as well as the technical storefront implementation.',
      ],
    ],
  },
  {
    id: 'shopify-support',
    label: 'POST-LAUNCH SUPPORT',
    title: 'Make ongoing store responsibilities explicit.',
    intro:
      'Launch is followed by merchandising, app updates, and changing customer needs. A useful handover documents the theme, settings, integrations, and release process so future changes can be reviewed without relying on undocumented knowledge.',
    cards: [
      [
        'Theme and app care',
        'Scope updates, compatibility checks, app review, and issue investigation. Document backups or theme copies and a rollback approach for changes where applicable. Support coverage and response expectations are agreed rather than assumed to be unlimited.',
      ],
      [
        'Seasonal readiness',
        'Plan campaign content, merchandising changes, and key journey checks ahead of important trading periods. Coordinate dependencies with the merchant and app providers. Traffic readiness is a review process, not a promise that no incident can occur.',
      ],
      [
        'Account and integration safeguards',
        'Review staff access and app permissions, and identify who handles suspicious activity or failed integrations. Store configuration, merchant operations, payment-provider controls, and application maintenance have different owners; make those responsibilities clear in the support plan.',
      ],
    ],
  },
  {
    id: 'shopify-engagement',
    label: 'PROJECT SCOPE & ENGAGEMENT',
    title: 'Choose a scope that fits the next business step.',
    intro:
      'Project fees and timing depend on the catalog, design requirements, migration, integrations, and review process. Separate build work from Shopify subscriptions, paid themes, third-party apps, hosting where relevant, and ongoing support costs.',
    cards: [
      [
        'Defined store build',
        'A scoped project can cover design, theme implementation, catalog preparation, integration work, validation, and launch. Confirm the content and access the merchant provides, review milestones, and acceptance criteria before setting delivery dates.',
      ],
      [
        'Existing store improvements',
        'Start with a focused review of the current theme and operational problems. Prioritize a manageable set of changes, such as product templates, a migration, integration reliability, or mobile usability, and distinguish required work from later enhancements.',
      ],
      [
        'Ongoing store evolution',
        'Discuss a separate maintenance or iteration engagement for recurring improvements. Agree the work allocation, reporting, release process, exclusions, and commercial terms. Dedicated development capacity can be discussed where the volume and responsibilities justify it.',
      ],
    ],
  },
]
const process = [
  [
    'Discovery and catalog review',
    'Review brand goals, products, audiences, markets, existing apps, and operational needs. Agree the launch scope, access requirements, and what content your team supplies.',
  ],
  [
    'UX and storefront design',
    'Map collection, product, and cart journeys. Review mobile layouts, important product information, and representative catalog examples before approving reusable templates.',
  ],
  [
    'Theme or headless implementation',
    'Build the agreed architecture with merchant editing needs in mind. Review progress on a development environment and document the configuration behind important storefront behavior.',
  ],
  [
    'Apps and integrations',
    'Configure or implement the required connections, permissions, and data mappings. Test failures and recovery as well as successful updates before depending on them for live operations.',
  ],
  [
    'Commerce quality assurance',
    'Validate variants, cart, checkout, payments, shipping, discounts, and relevant account flows. Review performance, accessibility criteria, and responsive behavior on the agreed test matrix.',
  ],
  [
    'Migration and launch',
    'Coordinate imports, redirects, domain changes, and the final operational checks. Establish cutover ownership and fallback decisions, then validate the live storefront and downstream order handling.',
  ],
  [
    'Handover and iteration',
    'Explain editing, configuration, and integration ownership. Review feedback and agreed measurements, then prioritize additional changes under a defined support or improvement scope.',
  ],
]
const faqs = [
  [
    'How much does a custom Shopify store cost?',
    'The estimate depends on design, catalog complexity, theme or headless architecture, migrations, integrations, and validation. Shopify subscriptions and third-party app or theme fees are separate considerations. Share your requirements for a scoped proposal; there is no universal starting price published here.',
  ],
  [
    'How long does it take to build a Shopify store?',
    'Timing follows the agreed scope, content readiness, access, review cycles, and integration dependencies. A migration or custom app can add work beyond theme implementation. Share any launch deadline early so required launch features can be separated from later improvements.',
  ],
  [
    'Do you build custom themes or use templates?',
    'Both approaches can be discussed. A suitable existing theme may support a focused scope, while custom sections or a custom theme can address particular branding and catalog requirements. The proposal should explain editing controls, licensing, compatibility, and maintenance implications of the chosen approach.',
  ],
  [
    'Can you migrate my WooCommerce or Magento store to Shopify?',
    'Migration feasibility depends on source access, catalog structure, integrations, and the data involved. Review products, customers, order history, subscriptions, URLs, and account behavior before committing to a transfer. Passwords or payment data may not migrate directly, and uninterrupted availability or preserved rankings cannot be guaranteed.',
  ],
  [
    'Do you work with Shopify Plus requirements?',
    'Plus-related storefront and integration requirements can be reviewed within a defined scope. Confirm the store’s plan, market, and feature eligibility before selecting checkout or B2B capabilities. This page does not claim Shopify Partner certification or promise every requested platform customization.',
  ],
  [
    'When should we choose headless Shopify?',
    'Consider headless when a specialized frontend or multi-channel experience has a clear business purpose. Compare the required integrations, editing experience, hosting, and maintenance with a Shopify theme. A separate frontend adds responsibilities and is not automatically faster or better for conversion.',
  ],
  [
    'Do you offer maintenance and CRO after launch?',
    'Ongoing work is a separate engagement. Shopify Store Maintenance covers support discussions, while improvement work can focus on agreed usability, performance, or conversion hypotheses. Scope, reporting, response expectations, and measurement access must be confirmed; conversion results are not guaranteed.',
  ],
]
export function ShopifyBuildOptions() {
  return (
    <section className={styles.section} aria-labelledby="shopify-build-title">
      <div className={styles.heading}>
        <span>WHAT WE BUILD</span>
        <h2 id="shopify-build-title">A Shopify store shaped around your customers.</h2>
        <p>
          Connect storefront design with catalog management, checkout requirements, and the
          operations behind every order. Start with the commerce journeys your business needs.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which platform fits your project?</strong>
        <p>
          Discuss Shopify for a managed commerce platform,{' '}
          <Link href="/services/wordpress-development/">WordPress</Link> for content-led websites,
          or <Link href="/services/custom-website-development/">Custom Website Development</Link>{' '}
          for a bespoke experience. Existing WooCommerce stores can be assessed before choosing a
          migration.
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
export function ShopifyContent() {
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
                <span>FROM CATALOG REVIEW TO LAUNCH</span>
                <h2 id="shopify-process-title">
                  Seven steps from commerce requirements to launch.
                </h2>
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
          {section.id === 'shopify-stack' && (
            <p className={styles.source}>
              Platform reference:{' '}
              <a
                href="https://shopify.dev/docs/storefronts/themes/architecture"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shopify theme architecture
              </a>
              . Review the architecture against the store’s requirements.
            </p>
          )}
        </section>
      ))}
      <section className={styles.section} aria-labelledby="shopify-faq-title">
        <div className={styles.heading}>
          <span>SHOPIFY PROJECT QUESTIONS</span>
          <h2 id="shopify-faq-title">Before you start building.</h2>
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
      <section className={styles.section} aria-labelledby="shopify-related-title">
        <div className={styles.heading}>
          <span>THE COMMERCE LIFECYCLE</span>
          <h2 id="shopify-related-title">Connect the build with the right next step.</h2>
          <p>
            Plan your ongoing store care with our{' '}
            <Link href="/blogs/shopify-maintenance-checklist/">Shopify maintenance checklist</Link>,
            covering checkout, themes, apps and recovery responsibilities.
          </p>
        </div>
        <div className={styles.related}>
          <Link href="/blogs/choosing-shopify-development-agency/">
            Choosing a Shopify development agency
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/blogs/shopify-theme-development-services-guide/">
            Shopify theme development services guide
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/blogs/shopify-website-design-shopping-journey/">
            Shopify website design guide
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/blogs/ecommerce-website-development-services-scope/">
            Ecommerce development scope guide
            <ArrowRight aria-hidden="true" />
          </Link>
          {[
            ['WordPress Development', 'wordpress-development'],
            ['Custom Website Development', 'custom-website-development'],
            ['Website Design', 'website-design'],
            ['Shopify Store Maintenance', 'shopify-store-maintenance'],
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

export function ShopifyProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="shopify-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="shopify-cta-title">Ready to build your next Shopify storefront?</h2>
      <p>
        Share your current store, catalog, target markets, important integrations, and launch
        constraints. Start with a scope that connects the customer experience with the operations
        behind it.
      </p>
      <Link href="/contact/">
        Start your Shopify project <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
