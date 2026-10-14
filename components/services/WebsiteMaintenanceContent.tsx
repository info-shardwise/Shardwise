import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './WebsiteMaintenanceContent.module.css'
const builds = [
  [
    'Security review and safeguards',
    'Review the platform, administrative access, extensions, and available security controls. Agree the scanning, patching, and incident-handling scope before onboarding. Security work reduces avoidable risk but does not make a website immune to compromise.',
  ],
  [
    'Platform and dependency updates',
    'Plan core, theme, plugin, framework, or runtime updates according to the website’s architecture. Check compatibility and important user journeys before release, and define a fallback approach where the hosting and deployment setup support it.',
  ],
  [
    'Backups and recovery preparation',
    'Identify the files, content, database, and configuration needed to recover the site. Agree backup frequency, retention, storage, access, and restore checks. A backup job completing is different from verifying that the website can actually be restored.',
  ],
  [
    'Performance checks',
    'Review representative pages, loading behavior, media, and third-party scripts. Prioritize regressions and useful improvements within the agreed scope. Set measurements around the actual site rather than promising the same performance score on every device.',
  ],
  [
    'Content and functionality care',
    'Scope routine text edits, image changes, link checks, and form or navigation checks. Define the request process, approval responsibilities, and any time allocation. New features, redesigns, or substantial content work may need a separate estimate.',
  ],
  [
    'Maintenance reporting',
    'Summarize completed work, known issues, relevant measurements, and next recommendations. Reporting frequency and format are agreed during onboarding. Reports should make outstanding risks and dependencies visible rather than imply that every item has already been resolved.',
  ],
]
const sections = [
  {
    id: 'care-plans',
    label: 'MAINTENANCE PLANNING',
    title: 'Choose the coverage your website needs.',
    intro:
      'These coverage options are a starting point for discussion, not pre-priced subscriptions. The proposal confirms tasks, frequency, request allocation, reporting, response coverage, exclusions, and costs after reviewing the platform and current condition.',
    cards: [
      [
        'Core website care',
        'Discuss routine compatibility review, agreed updates, recovery preparation, and essential checks. Identify which safeguards already belong to the hosting provider and which require additional configuration or maintenance so responsibility is not duplicated or left unclear.',
      ],
      [
        'Care with ongoing improvements',
        'Add a defined allocation for content changes, performance investigation, or usability improvements where needed. Prioritize requests against that allocation and agree how extra work is estimated, approved, and scheduled instead of assuming unlimited changes are included.',
      ],
      [
        'Complex or multi-site support',
        'For multiple sites or custom integrations, define a broader operating model with named responsibilities and escalation paths. Support windows and any service-level commitments require agreement; dedicated staffing and continuous human coverage are not standard promises on this page.',
      ],
    ],
  },
  {
    id: 'care-security',
    label: 'SECURITY & MALWARE RESPONSE',
    title: 'Keep safeguards and recovery responsibilities clear.',
    intro:
      'Maintenance starts with understanding the platform and who controls access. Hosting, application code, CMS configuration, and external services have different security responsibilities. The agreed plan should address the website’s real exposure and available controls.',
    cards: [
      [
        'Accounts and permissions',
        'Review administrative users, least-privilege access, authentication options, and ownership of provider accounts. Use supported multi-factor authentication where appropriate and agree who can approve changes. Credentials should be stored securely and kept out of public code and reports.',
      ],
      [
        'Vulnerabilities and protective controls',
        'Review maintained dependencies, available advisories, and security settings. Scanning or firewall configuration depends on the environment, tools, and subscription. Prioritize fixes with compatibility in mind and document issues that need action from a host, vendor, or website owner.',
      ],
      [
        'Suspected compromise',
        'Agree how an incident is reported, access is secured, and investigation is authorized. Cleanup, forensic work, or rebuilding may need a separate scope. Recovery can involve more than removing a suspicious file, including affected accounts, vulnerable components, and the integrity of available backups.',
      ],
    ],
  },
  {
    id: 'care-performance',
    label: 'PERFORMANCE MONITORING & OPTIMIZATION',
    title: 'Investigate slowdowns with useful measurements.',
    intro:
      'A maintenance review can identify regressions as content, dependencies, and third-party services change. Define the pages and journeys to measure and whether field data is available. Performance work should focus on practical causes and the agreed priorities.',
    cards: [
      [
        'Loading and layout behavior',
        'Review image sizes, font loading, layout shifts, and unnecessary assets on representative templates. Compare repeatable measurements over time. Network conditions, visitor devices, and external services affect results, so a single laboratory score is not a universal service guarantee.',
      ],
      [
        'Caching and delivery',
        'Check caching and CDN behavior where supported by the platform. CMS sites may also need database or object-cache review; static and custom applications have different needs. Verify dynamic pages and forms after configuration changes rather than caching every response indiscriminately.',
      ],
      [
        'Third-party dependencies',
        'Review scripts, embeds, plugins, and integrations for cost and business purpose. Coordinate changes with their owners before removal. Analytics or real-user monitoring require an agreed configuration and relevant privacy decisions; this service page does not enable tracking.',
      ],
    ],
  },
  {
    id: 'care-recovery',
    label: 'BACKUPS & DISASTER RECOVERY',
    title: 'Plan a restore before it becomes urgent.',
    intro:
      'Recovery preparation identifies what must be protected and what can be rebuilt. Source code alone may not include content, uploaded media, database records, or provider configuration. Agree the recovery objectives around the website’s business needs and available infrastructure.',
    cards: [
      [
        'Backup coverage and retention',
        'Document the assets included, backup schedule, storage location, retention period, and access owner. Review whether a provider backup is enough or additional independent storage is needed. Frequency and retention are set in the plan; daily backups and a fixed retention period are not assumed.',
      ],
      [
        'Restore validation',
        'Agree how restores are checked in an isolated environment and what journeys need verification. Confirm that required credentials and dependencies can be recovered too. Record the last successful test and any limitations instead of treating a successful upload as proof of recoverability.',
      ],
      [
        'Recovery and migration decisions',
        'Define who authorizes restoration, how current data is reconciled, and when a host or specialist needs involvement. Recovery time and acceptable data loss depend on the environment and agreed objectives. No instant restore or zero-data-loss promise is made without an explicit commitment.',
      ],
    ],
  },
  {
    id: 'care-updates',
    label: 'CORE, THEME & DEPENDENCY UPDATES',
    title: 'Review changes before they reach visitors.',
    intro:
      'A useful update process connects security and compatibility with the site’s actual functionality. Inventory the components, licenses, customizations, and hosting constraints so update decisions account for more than a list of available version numbers.',
    cards: [
      [
        'CMS and runtime compatibility',
        'For WordPress, review core, theme, plugins, and supported runtime requirements together. Custom websites need framework and dependency review instead. An abandoned extension or incompatible runtime may require replacement work beyond a routine update.',
      ],
      [
        'Staging and critical checks',
        'Use an appropriate preview or staging workflow where available and define what must be tested. Navigation, forms, search, integrations, and responsive layouts can be affected by updates. Sensitive production data should not be copied into test environments without suitable controls.',
      ],
      [
        'Release and fallback',
        'Keep a record of changes and relevant verification. Agree deployment access, release windows, and rollback or recovery procedures. Database changes and external services can complicate reversal, so a rollback should not be described as a guaranteed one-click fix for every incident.',
      ],
    ],
  },
  {
    id: 'care-incidents',
    label: 'UPTIME & INCIDENT RESPONSE',
    title: 'Monitoring needs a response plan behind it.',
    intro:
      'Monitoring can detect some availability or functionality problems, but the checks must reflect meaningful journeys. Automated checks are distinct from human support coverage. Agree both before relying on alerts for business-critical operations.',
    cards: [
      [
        'Checks and alert routing',
        'Define monitored destinations, check intervals, alert thresholds, and recipients. A homepage returning a successful response may not prove that a form or integration works. Document what the monitoring does and does not test, including external-provider limitations.',
      ],
      [
        'Triage and escalation',
        'Agree how severity is assessed, which access is needed, and when a host or vendor is involved. Contact channels, support windows, acknowledgment expectations, and any SLA belong in the service agreement. This page does not advertise a 24/7 on-call team or fixed emergency response time.',
      ],
      [
        'Resolution and follow-up',
        'Record the impact, investigation, actions, and unresolved dependencies. Where appropriate, review contributing causes and prevention work after recovery. A response commitment is different from a guaranteed resolution deadline, especially when third-party infrastructure is involved.',
      ],
    ],
  },
  {
    id: 'care-content',
    label: 'CONTENT UPDATES & SMALL CHANGES',
    title: 'Keep routine requests manageable.',
    intro:
      'A care engagement can include a defined allowance for small changes. Agree the types of requests, source material, approvals, and scheduling before work begins. Maintenance should support everyday publishing without disguising substantial development as an unlimited task.',
    cards: [
      [
        'Typical requests',
        'Text corrections, image replacements, link updates, and small template adjustments can be reviewed within scope. The site owner supplies approved content and confirms publishing decisions. New page types, integrations, or a visual redesign may require a separate project.',
      ],
      [
        'Request and approval workflow',
        'Agree a contact or request channel, the information each request needs, and who can authorize changes. Prioritize urgent operational issues separately from routine publishing. Turnaround depends on coverage, complexity, access, and the agreed queue rather than a universal deadline.',
      ],
      [
        'Allocation and boundaries',
        'Confirm any included hours or task allowance, how time is recorded, and whether unused allocation rolls over. Additional work needs explicit scope and approval. No monthly allowance, cancellation policy, or rollover rule is implied before the commercial terms are agreed.',
      ],
    ],
  },
  {
    id: 'care-reporting',
    label: 'REPORTING & REVIEW',
    title: 'Make completed work and open issues visible.',
    intro:
      'Agree a reporting cadence and format that helps the site owner understand what happened and what needs attention. A monthly summary can be discussed, with measurements drawn from the tools actually configured for the engagement.',
    cards: [
      [
        'Work and operational status',
        'Summarize updates, content changes, relevant checks, incidents, and pending actions. Identify work blocked by missing access, expired licenses, or vendor issues so the owner knows which decisions are needed to keep the site maintainable.',
      ],
      [
        'Measurements and recovery evidence',
        'Include available uptime or performance trends, backup status, and restore-check results with their scope and limitations. Do not report unconfigured monitoring as if it were active or equate a scanner result with proof that the entire website is secure.',
      ],
      [
        'Next priorities',
        'Separate necessary fixes from optional improvements and estimate substantial work before approval. Review recurring issues and whether the coverage still fits the platform, traffic, and operational requirements. Reporting should support decisions rather than just list automated activity.',
      ],
    ],
  },
  {
    id: 'care-value',
    label: 'WHY MAINTENANCE MATTERS',
    title: 'Small, reviewed changes can reduce avoidable disruption.',
    intro:
      'Websites continue to change after launch: content grows, providers update services, dependencies evolve, and operational owners move on. Regular review helps identify gaps before the team has to diagnose them under pressure, while keeping the work visible and proportionate.',
    cards: [
      [
        'Compatibility and continuity',
        'Outdated or undocumented components can make future changes harder. Keeping an inventory, reviewing compatibility, and recording releases helps maintainers understand the system. Some issues will still require a rebuild or specialist support rather than a routine patch.',
      ],
      [
        'Visitor experience',
        'Broken links, confusing forms, slow pages, and expired integrations can interrupt useful journeys. Focus checks on the tasks visitors need to complete. Better maintenance supports usability without claiming a fixed conversion increase or guaranteed search ranking.',
      ],
      [
        'Shared ownership',
        'Clarify who controls domains, hosting, content, licenses, and integrations. Recovery preparation and access ownership matter alongside code updates. A care plan reduces uncertainty about responsibilities, but cannot remove every operational or security risk.',
      ],
    ],
  },
]
const process = [
  [
    'Onboarding and site review',
    'Inventory the platform, hosting, dependencies, access owners, and important journeys. Establish current issues and agree the coverage, exclusions, and initial priorities.',
  ],
  [
    'Stabilization',
    'Review existing faults before treating the site as ready for routine care. Scope remediation separately where needed and document issues requiring the owner or a provider to act.',
  ],
  [
    'Monitoring and recovery setup',
    'Configure the agreed checks, alert routing, backups, and recovery procedures. Confirm who receives alerts and how tools are tested; do not assume every available safeguard is active.',
  ],
  [
    'Scheduled maintenance',
    'Perform agreed updates, checks, and routine changes using the release workflow. Verify critical functionality and record completed work, outcomes, and unresolved compatibility issues.',
  ],
  [
    'Reporting and review',
    'Share the agreed summary of work, relevant measurements, incidents, and pending decisions. Review request allocation and priorities against the actual needs of the website.',
  ],
  [
    'Continuous improvement',
    'Prioritize recurring problems and useful improvements. Adjust coverage where needed and estimate larger changes separately rather than expanding the maintenance commitment without agreement.',
  ],
]
const faqs = [
  [
    'How much does website maintenance cost?',
    'Cost depends on the platform, current condition, hosting, integrations, coverage, reporting, and change allocation. Provider subscriptions and significant remediation may be separate. Share your website and requirements for a scoped proposal; fixed prices or starting ranges are not published here.',
  ],
  [
    'What is included in a website maintenance plan?',
    'The agreement defines updates, checks, security work, backups, reporting, and any routine change allocation. Frequency, tools, access, and exclusions are confirmed during onboarding. The coverage described here is a planning framework, not a promise that every task is included in every engagement.',
  ],
  [
    'Do I need a contract, and can I cancel anytime?',
    'Duration, renewal, cancellation, notice periods, and handover arrangements are set in the proposal and agreement. No cancel-anytime policy or minimum term is assumed. Confirm those details before beginning recurring care.',
  ],
  [
    'How quickly do you respond to emergencies?',
    'Response coverage, channels, severity definitions, and any SLA are agreed explicitly. This page does not promise 24/7 human support or a fixed response deadline. Resolution can depend on hosts, vendors, available access, and the nature of the incident.',
  ],
  [
    'Can you maintain a website you did not build?',
    'An existing website can be reviewed for feasibility, access, dependencies, licensing, and current issues. Unsupported components or missing source access may require remediation first. The review establishes which maintenance work can be accepted and which needs a separate project.',
  ],
  [
    'Do you maintain Shopify or WooCommerce stores?',
    'Those platforms have dedicated Shopify Store Maintenance and WooCommerce Maintenance services. Website Maintenance focuses on WordPress and custom websites, while commerce care must also consider catalog, checkout, payments, and fulfillment. Use the related service links to discuss the appropriate scope.',
  ],
  [
    'Are backups and malware removal automatically included?',
    'Backup coverage, frequency, retention, restore testing, and incident remediation are defined in the agreement. Existing provider capabilities are reviewed first. Malware cleanup or recovery may require additional investigation and scope; no automatic removal, daily backup, or instant restore guarantee is implied.',
  ],
]
export function WebsiteMaintenanceCoverage() {
  return (
    <section className={styles.section} aria-labelledby="care-build-title">
      <div className={styles.heading}>
        <span>WHAT MAINTENANCE CAN COVER</span>
        <h2 id="care-build-title">Website care with a clearly defined scope.</h2>
        <p>
          Review the care your WordPress or custom website needs, then agree the tasks, tools,
          frequency, and responsibilities. The areas below guide the proposal rather than imply
          unlimited coverage.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which maintenance service fits your platform?</strong>
        <p>
          Use <Link href="/services/shopify-store-maintenance/">Shopify Store Maintenance</Link> for
          Shopify commerce and{' '}
          <Link href="/services/woocommerce-maintenance/">WooCommerce Maintenance</Link> for
          WooCommerce. This page focuses on WordPress and custom website care.
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
export function WebsiteMaintenanceContent() {
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
                <h2 id="care-process-title">Six steps to a maintainable care workflow.</h2>
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
      <section className={styles.section} aria-labelledby="care-faq-title">
        <div className={styles.heading}>
          <span>WEBSITE MAINTENANCE QUESTIONS</span>
          <h2 id="care-faq-title">Before you choose website care.</h2>
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
      <section className={styles.section} aria-labelledby="care-related-title">
        <div className={styles.heading}>
          <span>THE WEBSITE LIFECYCLE</span>
          <h2 id="care-related-title">Find the right service for your platform.</h2>
          <p>
            Preparing an update or launch? Use our{' '}
            <Link href="/blogs/wordpress-staging-site-checklist/">
              WordPress staging site checklist
            </Link>{' '}
            to plan tests, deployment scope and live verification.
          </p>
          <p>
            Planning ongoing care? Follow our{' '}
            <Link href="/blogs/website-maintenance-checklist-small-business/">
              small business website maintenance checklist
            </Link>{' '}
            to plan regular checks and assign responsibilities.
          </p>
        </div>
        <p>
          Reviewing website speed? Use our{' '}
          <Link href="/blogs/core-web-vitals-checklist-small-business/">
            Core Web Vitals checklist for small business websites
          </Link>{' '}
          to investigate loading, responsiveness, and layout stability.
        </p>
        <div className={styles.related}>
          <Link href="/blogs/monthly-website-maintenance-packages-comparison/">
            Monthly maintenance package comparison <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/blogs/wordpress-maintenance-services-update-recovery-plan/">
            WordPress updates and recovery guide <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/blogs/small-business-website-maintenance-services-priorities/">
            Small business maintenance priorities <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/blogs/website-maintenance-services-coverage-guide/">
            Website maintenance coverage guide <ArrowRight aria-hidden="true" />
          </Link>
          {[
            ['WordPress Development', 'wordpress-development'],
            ['Shopify Store Maintenance', 'shopify-store-maintenance'],
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

export function WebsiteMaintenanceProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="care-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="care-cta-title">Start with the care your website actually needs.</h2>
      <p>
        Share your website, platform, hosting, current concerns, and important visitor journeys.
        Let’s define practical coverage, responsibilities, and the first priorities.
      </p>
      <Link href="/contact/">
        Discuss your maintenance plan <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
