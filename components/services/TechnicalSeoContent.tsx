import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './TechnicalSeoContent.module.css'
const builds = [
  [
    'Technical SEO audits',
    'Review the agreed site scope for discovery, crawl access, indexing, rendering, metadata, and template-level issues. Turn evidence into a prioritized list of actions, with affected URLs and implementation owners rather than an unexplained score.',
  ],
  [
    'Architecture and internal links',
    'Assess navigation, URL structure, breadcrumbs, and contextual links. Identify important pages that are difficult to reach and unnecessary paths that consume crawler attention. Recommendations should respect real visitor journeys as well as search discovery.',
  ],
  [
    'Indexation and canonicalization',
    'Investigate which pages should appear in search and how duplicate or parameterized URLs are handled. Review canonical hints, indexing directives, status codes, and sitemap consistency instead of assuming that every excluded URL represents a problem.',
  ],
  [
    'Core Web Vitals and speed',
    'Review loading, interaction responsiveness, and visual stability across important templates. Separate real-user evidence from laboratory diagnostics, then discuss practical improvements to images, scripts, rendering, caching, and server response with the implementation team.',
  ],
  [
    'On-page optimization',
    'Clarify page intent through useful titles, descriptions, headings, content structure, image descriptions, and internal links. Align changes with the actual offer and audience rather than repeating keywords mechanically or relying on arbitrary character-count rules.',
  ],
  [
    'Structured data',
    'Check whether markup accurately describes visible content and meets applicable requirements. Review supported types, required properties, and template generation. Valid markup helps communicate information but does not guarantee a rich result or a particular search presentation.',
  ],
  [
    'Mobile and JavaScript SEO',
    'Review content availability, navigation, metadata, links, and rendering across devices and key routes. Investigate whether important material depends on interactions or scripts that prevent reliable discovery. Coordinate framework-specific fixes with developers.',
  ],
  [
    'International and migration SEO',
    'Plan language and regional URL relationships where relevant, or assess the SEO implications of a redesign, domain move, or platform migration. Confirm redirect mapping, localization ownership, validation, and monitoring rather than promising unchanged rankings.',
  ],
]
const sections = [
  {
    id: 'technical-audit',
    label: 'TECHNICAL SEO AUDIT',
    title: 'An audit your team can turn into action.',
    intro:
      'The audit starts with your goals, platform, important templates, and available evidence. Coverage is agreed around the actual website; there is no automatic URL quota or checklist count that substitutes for understanding the site.',
    cards: [
      [
        'Scope and evidence',
        'Confirm domains, templates, access restrictions, and known problems. Review a crawl alongside available Search Console data and representative pages. On larger sites, sampling, crawl configuration, or log analysis may be needed and are defined in scope.',
      ],
      [
        'Findings with context',
        'Record affected pages, examples, severity, and reasons behind each recommendation. Distinguish deliberate exclusions from accidental barriers. A prioritized report should explain what needs fixing, what requires investigation, and what is already working as intended.',
      ],
      [
        'A practical roadmap',
        'Group actions by expected value, effort, dependencies, and risk. Agree implementation owners and validation criteria with your developers. An audit-only engagement supplies recommendations; code changes, content updates, and ongoing monitoring require agreed delivery scope.',
      ],
    ],
  },
  {
    id: 'seo-architecture',
    label: 'SITE ARCHITECTURE AND CRAWLABILITY',
    title: 'Make important pages discoverable.',
    intro:
      'A useful structure connects navigation, contextual links, and clear URL patterns. We review how people and crawlers reach important content, then prioritize improvements without treating crawl budget as a concern for every small website.',
    cards: [
      [
        'Navigation and internal links',
        'Review depth, orphaned pages, breadcrumbs, and relevant contextual links. Use descriptive links to connect related content. Architecture changes should improve understanding rather than adding a large volume of repetitive links with no clear purpose.',
      ],
      [
        'Sitemaps and crawl access',
        'Check that sitemaps reflect intended canonical, indexable URLs and that robots.txt does not accidentally block essential pages or resources. Sitemap submission supports discovery; it cannot force indexing. Private information needs proper access control rather than crawler directives.',
      ],
      [
        'Redirects and response codes',
        'Inspect broken destinations, redirect chains, loops, and inconsistent status codes. Plan direct redirects where a genuine replacement exists. Preserve meaningful errors for removed pages without an equivalent destination instead of redirecting every old URL to the homepage.',
      ],
    ],
  },
  {
    id: 'seo-indexation',
    label: 'INDEXATION AND CANONICALIZATION',
    title: 'Help search engines understand the intended page.',
    intro:
      'Discovery, crawling, and indexing are different stages. We compare your intended indexable pages with available evidence and investigate the causes before recommending exclusions, consolidation, or content changes.',
    cards: [
      [
        'Review exclusions carefully',
        'Look at affected templates, internal links, response codes, rendering, and content usefulness. Some pages should remain outside the index. Search Console examples help investigate patterns, but a report entry alone does not explain every underlying cause.',
      ],
      [
        'Align canonical signals',
        'Review canonical hints alongside internal links, redirects, and sitemap URLs. Consider filters, variants, duplicate routes, and pagination in the context of the site. Canonicals are signals; search engines can select a different representative URL.',
      ],
      [
        'Use directives for the right job',
        'Robots.txt manages crawling and does not reliably keep a URL out of search. A crawler must be able to access a page to see its noindex directive. Discuss privacy, content removal, and indexing goals separately before changing site-wide rules.',
      ],
    ],
  },
  {
    id: 'seo-performance',
    label: 'CORE WEB VITALS AND PAGE SPEED',
    title: 'Improve performance where visitors experience it.',
    intro:
      'Loading speed, responsiveness, and layout stability affect the experience of a page. We use measurements to find bottlenecks and guide improvements, without promising a Lighthouse score, ranking position, or conversion uplift.',
    cards: [
      [
        'Field evidence and diagnostics',
        'Review Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift where data is available. Compare device and template patterns. Laboratory tests help diagnose issues, but a single run is not a substitute for real-user performance evidence.',
      ],
      [
        'Focus the implementation work',
        'Investigate image sizing and loading, font behavior, render-blocking assets, excessive scripts, and expensive interactions. Review caching and server response where the hosting setup allows it. Prioritize changes against the site’s functionality and operational constraints.',
      ],
      [
        'Validate after release',
        'Re-test relevant templates and check for regressions. Field data can take time to reflect a change, and low-traffic pages may not have enough data. Passing performance checks alone does not guarantee rankings; content relevance and other search signals also matter.',
      ],
    ],
  },
  {
    id: 'seo-structured-data',
    label: 'STRUCTURED DATA AND SCHEMA',
    title: 'Describe what is actually on the page.',
    intro:
      'Structured data should reflect genuine entities and visible content. We assess which markup suits the website, review implementation and validation, and distinguish valid schema from eligibility for a search feature.',
    cards: [
      [
        'Choose appropriate types',
        'Review Organization, Article, Product, Breadcrumb, or other relevant types against the actual business and content. Use real contact details, profiles, and product information. Do not create invented ratings, reviews, or credentials to populate markup.',
      ],
      [
        'Keep templates consistent',
        'Coordinate markup generation with CMS fields and rendered content. Check required properties, links, and relationships. A reusable template should also handle missing fields and changing content without silently publishing inaccurate information.',
      ],
      [
        'Validate without promises',
        'Use the relevant Google testing tools and schema validators. Eligibility depends on current search-feature rules and policies; valid markup does not ensure display. FAQ content can be useful to readers without assuming it will receive a special search appearance.',
      ],
    ],
  },
  {
    id: 'seo-onpage',
    label: 'ON-PAGE OPTIMIZATION',
    title: 'Make each page clear, useful, and connected.',
    intro:
      'On-page work connects a page’s purpose with its content and search presentation. It complements technical fixes and broader content planning, rather than reducing optimization to metadata or a repeated keyword formula.',
    cards: [
      [
        'Titles, descriptions, and headings',
        'Review unique, descriptive titles and summaries that reflect the page. Organize headings around the questions readers need answered. Search engines may generate different title links or snippets, so metadata cannot guarantee a particular presentation.',
      ],
      [
        'Content structure and images',
        'Improve clarity, reading order, and useful supporting information. Describe meaningful images for accessibility and context, leaving decorative imagery appropriately handled. Identify gaps or overlapping intent for discussion with the content team instead of adding filler.',
      ],
      [
        'Contextual linking',
        'Connect relevant pages with understandable anchor text. Consider consolidation where multiple pages serve the same purpose, but assess evidence before removing useful content. Larger editorial planning and topic research can be scoped through Content & Keyword Strategy.',
      ],
    ],
  },
  {
    id: 'seo-mobile',
    label: 'MOBILE SEO',
    title: 'Keep essential content accessible on mobile.',
    intro:
      'Review the mobile experience as a primary way visitors reach the site. Important text, links, metadata, and structured data should remain available, with layouts and interactions that support reading and navigation.',
    cards: [
      [
        'Content and navigation parity',
        'Check that smaller screens do not hide essential material or require unnecessary interactions to access it. Review mobile navigation, internal links, headings, and indexing signals alongside desktop templates. Responsive layout alone does not prove all content is accessible.',
      ],
      [
        'Readable and usable pages',
        'Review typography, spacing, tap targets, forms, and overlays on representative devices. Avoid intrusive interruptions that obscure the page. Coordinate accessibility and usability improvements with the design and development team rather than treating them as metadata changes.',
      ],
      [
        'Mobile performance checks',
        'Investigate loading and interaction issues under representative conditions. Review media, third-party widgets, and layout changes that affect smaller screens. Agree browser and device coverage and record remaining limitations when validating the implementation.',
      ],
    ],
  },
  {
    id: 'seo-international',
    label: 'INTERNATIONAL AND MULTILINGUAL SEO',
    title: 'Connect language and regional versions deliberately.',
    intro:
      'International SEO begins with genuine audiences and available localized content. We review URL structure and relationships between versions where relevant, without adding language variants or regional pages solely to expand a sitemap.',
    cards: [
      [
        'Language and region mapping',
        'Confirm the audience, languages, regional differences, and existing URLs. Discuss subfolders, subdomains, or domains in the context of operations and ownership. Translation, currency, commercial terms, and content maintenance need responsible owners.',
      ],
      [
        'Hreflang and canonical alignment',
        'Review language annotations and their consistency across relevant versions. Coordinate canonical URLs, return references, and fallback behavior. Avoid automatically pointing every localized page to one language version if those pages should be independently discoverable.',
      ],
      [
        'Localized experience',
        'Check navigation, content, and important page information for each agreed market. Translated words alone may not address regional needs. Establish validation and publishing processes so later content changes keep the relationships accurate.',
      ],
    ],
  },
  {
    id: 'seo-javascript-migrations',
    label: 'JAVASCRIPT SEO AND MIGRATIONS',
    title: 'Verify what search engines can discover and render.',
    intro:
      'Modern frameworks and website changes need checks beyond a desktop screenshot. We review important routes and the rendered content, then coordinate fixes or migration preparation with the people responsible for the application.',
    cards: [
      [
        'Rendering and route behavior',
        'Compare initial HTML and rendered output on representative pages. Check meaningful links, metadata, status codes, and content loading. Server rendering or static generation can support delivery, but neither automatically makes every route discoverable or indexable.',
      ],
      [
        'JavaScript dependencies',
        'Investigate hydration issues, blocked resources, and content that appears only after user actions. Review the framework and loading approach with developers. Avoid presenting legacy dynamic rendering as a default solution when a sustainable rendering strategy can be used.',
      ],
      [
        'Migration checks',
        'Map important old URLs to appropriate destinations, verify redirects and indexing signals, and check the new site before launch. Monitor agreed evidence afterward. Redesigns and domain moves can still cause fluctuations, so no unchanged-traffic promise is made.',
      ],
    ],
  },
  {
    id: 'seo-tools-engagement',
    label: 'TOOLS, REPORTING, AND ENGAGEMENT',
    title: 'Agree how findings become ongoing improvements.',
    intro:
      'Choose the engagement around the site’s needs and your team’s ability to implement changes. Tool selection, access, reporting, and responsibilities are confirmed before the work begins.',
    cards: [
      [
        'Tools with a purpose',
        'Crawling tools such as Screaming Frog or Sitebulb can support audits. Search Console, PageSpeed Insights, and applicable validators provide other evidence. Paid subscriptions, log access, and new analytics installations are confirmed separately, not assumed.',
      ],
      [
        'Audit or implementation support',
        'A defined audit can supply findings and a roadmap. Implementation support can coordinate fixes with your developers or an agreed delivery team. Confirm access permissions, release approvals, testing, and responsibilities before making changes to production systems.',
      ],
      [
        'Monitoring and reporting',
        'Ongoing support can track agreed technical issues, releases, search evidence, and priorities. Reports should distinguish completed work from business outcomes and remaining uncertainty. Fees, cadence, and capacity follow the agreed scope rather than an invented package or service-level promise.',
      ],
    ],
  },
]
const process = [
  [
    'Discovery and access',
    'Confirm goals, platform, site scope, known problems, and available evidence. Agree least-necessary access and responsibilities; no new tracking is installed automatically.',
  ],
  [
    'Technical audit',
    'Review representative templates and the agreed crawl scope. Investigate discovery, indexing, rendering, performance, and page signals with documented examples.',
  ],
  [
    'Prioritized roadmap',
    'Group findings by importance, effort, dependencies, and implementation risk. Agree owners and validation criteria before scheduling changes.',
  ],
  [
    'Implementation',
    'Deliver the agreed fixes or coordinate recommendations with your team. Test changes appropriately and follow the site’s release process.',
  ],
  [
    'Validation',
    'Re-crawl affected areas and review status codes, rendered content, indexing signals, and relevant performance diagnostics. Record unresolved issues and follow-up work.',
  ],
  [
    'Monitoring',
    'Where included, review available search and technical evidence after releases. Allow for processing delays and distinguish observations from assumptions.',
  ],
  [
    'Iteration',
    'Prioritize new issues and improvements through an agreed backlog. Revisit decisions with evidence rather than promising rankings or continuous unlimited work.',
  ],
]
const faqs = [
  [
    'How much does technical SEO cost?',
    'Cost follows site size, templates, technical complexity, audit depth, access, and implementation support. Paid tools and specialist work may be separate. Share the website and goals for a scoped proposal; no universal starting price is published here.',
  ],
  [
    'How long does a technical SEO audit take?',
    'Timing depends on coverage, crawl configuration, platform complexity, and access to evidence. A small marketing site and a large faceted store need different investigations. Agree the deliverables and review schedule before setting a completion date.',
  ],
  [
    'Do you implement fixes or only recommend them?',
    'Both audit-only and implementation-support scopes can be discussed. The agreement defines code changes, CMS edits, coordination, testing, and release ownership. A recommendation report does not automatically include production changes or unlimited developer support.',
  ],
  [
    'How do you work with our development team?',
    'We provide findings with examples, priorities, and validation criteria, then discuss dependencies with your developers. Agree communication, access, release approvals, and review stages. Work should fit the team’s architecture and deployment process rather than bypassing it.',
  ],
  [
    'How long until we see results?',
    'Technical improvements can be validated after release, but search processing and business outcomes vary. Rankings depend on many factors, and no timing or position is guaranteed. Monitoring should distinguish completed fixes from later changes in indexing, visibility, and enquiries.',
  ],
  [
    'Do you offer ongoing technical SEO support?',
    'Ongoing work can be scoped around technical monitoring, release reviews, issue investigation, and a prioritized backlog. Reporting cadence, capacity, tools, and implementation ownership are agreed. Content strategy or local SEO may require related service scopes.',
  ],
  [
    'Can you help with JavaScript sites or a migration?',
    'Yes, the scope can address rendering, route behavior, metadata, internal links, or migration planning. Confirm the framework, hosting, URLs, and development support during discovery. Redirects and validation help manage risk but cannot guarantee unchanged traffic or rankings.',
  ],
]
export function TechnicalSeoOptions() {
  return (
    <section className={styles.section} aria-labelledby="seo-build-title">
      <div className={styles.heading}>
        <span>WHAT WE DO</span>
        <h2 id="seo-build-title">Technical and on-page SEO, from audit to validation.</h2>
        <p>
          Review the technical foundation and page-level signals that help search engines discover
          and understand your website. Choose a focused audit or discuss an implementation and
          monitoring scope.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which SEO service fits your goal?</strong>
        <p>
          This page covers crawlability, indexation, performance, and page signals. For local
          visibility, see{' '}
          <Link href="/services/local-google-business-seo/">Local &amp; Google Business SEO</Link>.
          For editorial planning, explore{' '}
          <Link href="/services/content-keyword-strategy/">Content &amp; Keyword Strategy</Link>.
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
export function TechnicalSeoContent() {
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
                <span>FROM AUDIT TO IMPLEMENTATION</span>
                <h2 id="seo-process-title">
                  Seven steps from audit to implementation and monitoring.
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
        </section>
      ))}
      <section className={styles.section} aria-labelledby="seo-faq-title">
        <div className={styles.heading}>
          <span>TECHNICAL SEO QUESTIONS</span>
          <h2 id="seo-faq-title">Before you start your technical SEO project.</h2>
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
      <section className={styles.section} aria-labelledby="seo-related-title">
        <div className={styles.heading}>
          <span>CONNECTED SEARCH SERVICES</span>
          <h2 id="seo-related-title">Connect the technical foundation with your wider goals.</h2>
        </div>
        <div className={styles.related}>
          {[
            ['Local & Google Business SEO', 'local-google-business-seo'],
            ['Content & Keyword Strategy', 'content-keyword-strategy'],
            ['Answer Engine Optimization', 'aeo'],
            ['Generative Engine Optimization', 'geo'],
            ['App Store Optimization', 'app-store-optimization'],
            ['WordPress Development', 'wordpress-development'],
            ['Custom Website Development', 'custom-website-development'],
          ].map(([name, slug]) => (
            <Link key={slug} href={`/services/${slug}/`}>
              {name}
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.cta}`} aria-labelledby="seo-cta-title">
        <span>YOUR NEXT STEP</span>
        <h2 id="seo-cta-title">Ready to investigate what is holding your website back?</h2>
        <p>
          Share your app, users, target platforms, important journeys, and current challenges. Let’s
          define the research, interface design, and developer handoff work that supports your next
          step.
        </p>
        <Link href="/contact/">
          Start your technical SEO project <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </>
  )
}
