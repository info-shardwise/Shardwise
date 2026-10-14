import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './CustomWebsiteContent.module.css'
const builds = [
  [
    'Brand and marketing websites',
    'Bespoke layouts and reusable components for a brand whose content and customer journey need more than a standard template. Define the important pages, calls to action, and publishing responsibilities before selecting the framework.',
  ],
  [
    'Headless CMS websites',
    'A separate frontend connected to structured content can support flexible layouts and multiple publishing destinations. Plan the editor experience, preview workflow, roles, and deployment behavior alongside the public website.',
  ],
  [
    'Editorial and publication sites',
    'Design article templates, taxonomies, search, and content archives around the publishing team. Large catalogs of content need consistent metadata and navigation, plus a clear plan for importing existing articles and managing media.',
  ],
  [
    'Product launches and campaigns',
    'Create focused launch experiences with responsive design and carefully scoped motion. Clarify the campaign lifespan, content readiness, measurement requirements, and future reuse so the site remains useful beyond its first announcement.',
  ],
  [
    'Interactive brand experiences',
    'Explore scroll storytelling, product demonstrations, or selective 3D where they explain something useful. Provide accessible alternatives and lightweight mobile behavior rather than making essential information dependent on an animation finishing.',
  ],
  [
    'Documentation and resource websites',
    'Organize guides, reference material, search, and versioned content around the audience. Agree the editing or repository workflow, link ownership, and information architecture so a growing knowledge base remains understandable.',
  ],
  [
    'Landing-page systems',
    'Reusable page sections and structured fields can support recurring campaigns. Define which choices editors control and which layout rules protect consistency; avoid rebuilding each campaign page as an isolated implementation.',
  ],
  [
    'Multi-brand and regional websites',
    'Scope shared design components, localized content, and brand-specific variations. Review language routing, translation ownership, publishing permissions, and regional requirements before introducing a multi-site architecture.',
  ],
]
const sections = [
  {
    id: 'custom-stack',
    label: 'TECHNOLOGY & ARCHITECTURE',
    title: 'A stack selected for the website you need.',
    intro:
      'Choose the implementation around content, interactions, hosting, and maintenance. The tools below are options to evaluate during scoping, rather than a claim that every project needs every framework or provider.',
    cards: [
      [
        'Frontend and styling',
        'Next.js, Astro, or another suitable framework can support different rendering and interaction needs. CSS Modules, plain CSS, or a utility system should produce a consistent responsive design. The project’s requirements and team workflow guide the final choice.',
      ],
      [
        'Content and integrations',
        'Evaluate a headless CMS such as Sanity, Contentful, or Payload around editing needs, hosting, licensing, and access controls. Forms, search, and external APIs require explicit data ownership and failure handling; a database is added only when the functionality needs it.',
      ],
      [
        'Hosting and verification',
        'Review the framework’s runtime requirements before selecting Cloudflare, Vercel, or another host. Define preview environments, release permissions, and deployment checks. Browser testing, accessibility review, and performance measurements should reflect the agreed acceptance criteria.',
      ],
    ],
  },
  {
    id: 'custom-cms',
    label: 'HEADLESS CMS ARCHITECTURE',
    title: 'Design the publishing experience with the frontend.',
    intro:
      'Decoupling content from presentation can support specialized layouts and reuse across channels. It also creates additional preview, integration, and deployment work. A useful architecture accounts for both editors and maintainers from the beginning.',
    cards: [
      [
        'Structured content models',
        'Define reusable content types, references, media fields, and validation around real examples. Keep the distinction between content and layout understandable so editors can make routine updates without learning component internals or duplicating information across pages.',
      ],
      [
        'Preview and publishing',
        'Agree draft previews, approval roles, scheduled publishing where required, and what happens after an editor saves. Preview access should protect unpublished content. The release or revalidation workflow must be tested so changes appear when the team expects them to.',
      ],
      [
        'Rendering and delivery',
        'Compare static generation, request-time rendering, and supported revalidation for the actual content freshness requirements. Document API caching and failure behavior. A simple site may benefit more from a conventional CMS than from a separate frontend and content service.',
      ],
    ],
  },
  {
    id: 'custom-performance',
    label: 'PERFORMANCE-FIRST ENGINEERING',
    title: 'Treat loading speed as a design constraint.',
    intro:
      'Set measurable targets for representative pages and devices before development. Performance depends on media, fonts, scripts, network conditions, and hosting as well as framework choice. Review those dependencies instead of publishing a universal score guarantee.',
    cards: [
      [
        'Media and fonts',
        'Use appropriately sized responsive images and modern formats where supported. Prioritize the main visual, reserve layout space, and defer nonessential media. Choose a font-loading approach that balances brand requirements, readability, download size, and reliability.',
      ],
      [
        'JavaScript and third parties',
        'Keep interactive code focused on features that need it. Review analytics, embeds, chat widgets, and other scripts for cost and purpose before enabling them. Measurement tools and consent behavior are project decisions; tracking is not installed by default.',
      ],
      [
        'Budgets and measurements',
        'Agree useful budgets for assets and page behavior, and decide which checks belong in the release workflow. Use repeatable lab measurements alongside real-user data where configured. Core Web Vitals and test scores guide investigation, but cannot guarantee identical results on every connection.',
      ],
    ],
  },
  {
    id: 'custom-motion',
    label: 'INTERACTIVE & ANIMATED EXPERIENCES',
    title: 'Motion that supports the story and the task.',
    intro:
      'A custom frontend gives room for distinctive interactions. The experience should remain usable when motion is reduced, assets fail, or a device has limited capacity. Start with the message the interaction needs to communicate.',
    cards: [
      [
        'Purposeful micro-interactions',
        'Use clear hover, focus, and state changes to show what is interactive. The shared design uses 450ms cubic-bezier transitions for hover effects, including nested icons and text. Reduced-motion preferences receive a simpler experience without losing information.',
      ],
      [
        'Scroll and storytelling',
        'Consider paced reveals, transitions, and interactive explanations where they help visitors understand the product. Preserve normal navigation and reading order. Avoid hiding essential content behind a long sequence or forcing customers through a visual presentation before they can act.',
      ],
      [
        '3D and rich media',
        'WebGL, 3D, or specialized animation libraries can be evaluated for a defined visual requirement. Prototype loading cost and mobile behavior early, provide a fallback, and agree the asset-production responsibilities. A complex effect is not assumed to maintain a fixed frame rate everywhere.',
      ],
    ],
  },
  {
    id: 'custom-comparison',
    label: 'CHOOSING THE RIGHT PLATFORM',
    title: 'When custom development earns its complexity.',
    intro:
      'Compare the editing experience, required functionality, budget, and long-term ownership before deciding. Custom development gives control over implementation, but also creates responsibility for the frontend and its integration with the chosen content system.',
    cards: [
      [
        'WordPress for publishing',
        'A conventional WordPress site may suit teams that need familiar editorial tools and established extensions. Review whether those capabilities already solve the requirement before commissioning a separate frontend. Custom WordPress themes can also provide a distinctive design.',
      ],
      [
        'Shopify for commerce',
        'Shopify may fit a business that needs a managed commerce platform and its operational ecosystem. A custom marketing site is not a replacement for catalog, payment, and fulfillment infrastructure. Specialized commerce experiences still need those responsibilities explicitly scoped.',
      ],
      [
        'Custom for specific constraints',
        'A bespoke frontend can be useful for unusual interactions, a specialized content model, or integration with a wider product ecosystem. Confirm the business purpose and maintenance capacity. Custom is not automatically faster, cheaper, or more effective than a well-built platform site.',
      ],
    ],
  },
  {
    id: 'custom-migrations',
    label: 'MIGRATIONS & MODERNIZATION',
    title: 'Rebuild the experience with a documented transition.',
    intro:
      'Existing WordPress, Webflow, Squarespace, or legacy websites can be assessed for migration. The starting point is source access, content inventory, integrations, and customer journeys rather than assuming every feature can be exported directly.',
    cards: [
      [
        'Content and functionality mapping',
        'Map pages, articles, media, metadata, and reusable content into the new model. Identify embeds, forms, search, and other functionality that needs rebuilding. Test representative imports before committing to the full migration and clarify manual content-cleanup responsibilities.',
      ],
      [
        'URLs and search continuity',
        'Create a redirect plan for changed destinations, review internal links, and preserve useful metadata where appropriate. Validate the sitemap and important indexed pages. These steps reduce avoidable disruption; existing rankings and traffic cannot be guaranteed after a platform change.',
      ],
      [
        'Launch and fallback',
        'Coordinate publishing freezes, final imports, DNS ownership, hosting configuration, and live checks. Decide who handles rollback or unexpected issues. A rehearsed transition is preferable to a blanket zero-downtime promise that ignores providers and external dependencies.',
      ],
    ],
  },
  {
    id: 'custom-accessibility',
    label: 'ACCESSIBILITY & TECHNICAL SEO',
    title: 'Build a website people and search systems can use.',
    intro:
      'Agree accessibility requirements and technical search foundations as part of the scope. Validation should cover real templates and interactions, not just the home page. Formal certification or independent audit requirements need separate agreement.',
    cards: [
      [
        'Accessible interactions',
        'Review semantic landmarks, headings, keyboard navigation, visible focus, contrast, and form feedback. Give meaningful alternatives to informative media. Include reduced-motion behavior and test common responsive states against the agreed accessibility criteria.',
      ],
      [
        'Search structure',
        'Plan page titles, descriptions, canonical URLs, sitemap and robots behavior, and internal links. Use structured data that matches visible content and the actual page type. Technical implementation helps search systems understand a site without guaranteeing ranking or rich-result eligibility.',
      ],
      [
        'Regional and content quality',
        'Localized sites need deliberate language routing, appropriate language signals, and translation ownership. Editors should have useful fields for descriptions and image alternatives. Design the content model to support clear, accurate information rather than duplicate pages built only for keywords.',
      ],
    ],
  },
  {
    id: 'custom-support',
    label: 'POST-LAUNCH SUPPORT & ITERATION',
    title: 'Keep the frontend and publishing workflow maintainable.',
    intro:
      'A useful handover explains the code, content models, hosting configuration, and release process. Support is a defined engagement with clear owners for dependencies, CMS access, and third-party services rather than an assumption of indefinite coverage.',
    cards: [
      [
        'Updates and operational care',
        'Scope dependency updates, compatibility review, issue investigation, and deployment checks. Document credentials ownership and recovery procedures without putting secrets in the repository. Support frequency and response expectations are confirmed in the project terms.',
      ],
      [
        'Content and design evolution',
        'Plan additional templates, campaign sections, or content models around a reusable system. Provide editor guidance for routine work and identify changes that need development review. Preserve consistency as the site expands instead of accumulating undocumented exceptions.',
      ],
      [
        'Measured improvement',
        'Where measurement is agreed and configured, review usability, content, and performance to prioritize changes. Experiments require adequate data and a clear hypothesis. Avoid claiming a conversion uplift from a redesign without evidence that separates the change from other influences.',
      ],
    ],
  },
  {
    id: 'custom-engagement',
    label: 'ENGAGEMENT & PROJECT SCOPE',
    title: 'Match the scope to your next business step.',
    intro:
      'Fees and delivery dates depend on design complexity, page types, CMS modeling, integrations, content readiness, and validation. Discuss launch requirements separately from future enhancements, and identify platform subscriptions or hosting costs outside the build.',
    cards: [
      [
        'Defined website project',
        'Agree the templates, content system, integrations, review milestones, and acceptance criteria. Clarify who supplies copy and media. A proposal should describe the implementation and handover so both teams understand what completion means.',
      ],
      [
        'Focused modernization',
        'An existing site can be reviewed for a limited improvement or a phased rebuild. Prioritize the constraints causing real problems and document what stays in place. Avoid making a complete platform replacement the default answer to a local issue.',
      ],
      [
        'Ongoing development',
        'Discuss recurring improvements or dedicated capacity when the roadmap requires it. Agree work allocation, release cadence, reporting, and exclusions. Commercial terms and team availability are confirmed during scoping; no fixed rates or staffing promises are published here.',
      ],
    ],
  },
]
const process = [
  [
    'Discovery and strategy',
    'Review audiences, brand goals, existing content, integrations, and performance requirements. Identify the launch scope and the information your team needs to supply.',
  ],
  [
    'UX, visual design, and motion',
    'Prototype important layouts and responsive behavior using representative content. Agree interaction specifications, accessibility requirements, and review milestones before implementation.',
  ],
  [
    'Architecture and content modeling',
    'Select the frontend, rendering approach, CMS where needed, and hosting. Define content schemas, publishing roles, preview behavior, and integration ownership.',
  ],
  [
    'Frontend and CMS development',
    'Build reusable components and connect the content system. Review progress in a preview environment with actual content and verify that editors can complete common tasks.',
  ],
  [
    'Quality and performance review',
    'Test responsive layouts, keyboard interaction, forms, and relevant integrations. Measure representative pages against the agreed performance and accessibility acceptance criteria.',
  ],
  [
    'Migration and launch',
    'Coordinate redirects, final content, domains, and release permissions. Validate important live journeys and document fallback responsibilities before the transition is considered complete.',
  ],
  [
    'Handover and iteration',
    'Explain publishing and maintenance, then agree the next support scope. Use available feedback and measurements to prioritize improvements rather than adding complexity without a clear purpose.',
  ],
]
const faqs = [
  [
    'How much does a custom website cost?',
    'Cost depends on design complexity, reusable templates, content modeling, integrations, migration, and validation. Hosting and CMS subscriptions are separate considerations. Share your requirements for a scoped proposal; no universal starting price is published here.',
  ],
  [
    'How long does it take to build a custom website?',
    'The schedule follows scope, content readiness, feedback, access, and integration dependencies. Share any launch deadline early so essential launch work can be separated from later enhancements. A timeline is confirmed after reviewing the project requirements.',
  ],
  [
    'Why choose custom over WordPress or Shopify?',
    'Choose custom when a specific experience, content model, or integration need justifies a bespoke frontend and its maintenance. WordPress or Shopify may already fit the requirement. Custom does not automatically deliver better speed, editing, or commercial results.',
  ],
  [
    'Which headless CMS should we use?',
    'Evaluate editing workflows, preview needs, roles, content structure, hosting, licensing, and team skills. Sanity, Contentful, Payload, and other options have different tradeoffs. The recommendation follows those requirements rather than prescribing the same CMS for every site.',
  ],
  [
    'Can you migrate our existing website?',
    'Migration depends on source access, export options, content structure, and functionality. Review imports, rebuilding, redirects, and validation before committing to the transition. Not every feature transfers automatically, and unchanged rankings or zero downtime cannot be guaranteed.',
  ],
  [
    'Can our team edit the finished website?',
    'Editing controls are designed around the chosen content system and agreed workflow. A headless CMS can support structured updates, but previews and publishing behavior need implementation and testing. The scope should explain which changes editors can make and which require development.',
  ],
  [
    'Do you provide ongoing support after launch?',
    'Ongoing maintenance and iteration are separate engagements. Agree responsibility for dependency updates, CMS configuration, hosting, releases, and issue handling. Coverage, reporting, response expectations, and exclusions are confirmed in the project terms.',
  ],
]
export function CustomWebsiteBuildOptions() {
  return (
    <section className={styles.section} aria-labelledby="custom-build-title">
      <div className={styles.heading}>
        <span>WHAT WE BUILD</span>
        <h2 id="custom-build-title">Custom websites for distinctive content and experiences.</h2>
        <p>
          Build a bespoke frontend around your brand, publishing needs, and customer journeys. The
          right architecture can include a headless CMS when structured editing and content reuse
          justify it.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which platform fits your project?</strong>
        <p>
          Compare <Link href="/services/wordpress-development/">WordPress Development</Link> for
          conventional publishing and{' '}
          <Link href="/services/shopify-development/">Shopify Development</Link> for managed
          commerce. For dashboards, accounts, or complex business workflows, explore{' '}
          <Link href="/services/web-app-development/">Web App Development</Link>.
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
export function CustomWebsiteContent() {
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
                <span>FROM STRATEGY TO LAUNCH</span>
                <h2 id="custom-process-title">Seven steps from website strategy to handover.</h2>
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
      <section className={styles.section} aria-labelledby="custom-faq-title">
        <div className={styles.heading}>
          <span>CUSTOM WEBSITE QUESTIONS</span>
          <h2 id="custom-faq-title">Before you start building.</h2>
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
      <section className={styles.section} aria-labelledby="custom-related-title">
        <div className={styles.heading}>
          <span>THE WEBSITE LIFECYCLE</span>
          <h2 id="custom-related-title">Connect the build with the right next step.</h2>
        </div>
        <p>
          Compare scope, editing workflows, testing, and handover in our{' '}
          <Link href="/blogs/custom-website-development-services-guide/">
            custom website development services guide
          </Link>
          .
        </p>
        <div className={styles.related}>
          <Link href="/blogs/bespoke-website-development-project-brief/">
            Bespoke website project brief
            <ArrowRight aria-hidden="true" />
          </Link>
          {[
            ['WordPress Development', 'wordpress-development'],
            ['Shopify Development', 'shopify-development'],
            ['Website Design', 'website-design'],
            ['Website Maintenance', 'website-maintenance'],
            ['Web App Development', 'web-app-development'],
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

export function CustomWebsiteProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="custom-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="custom-cta-title">Have a custom website in mind? Let’s scope it.</h2>
      <p>
        Share your current website, content workflow, design goals, integrations, and launch
        constraints. Start with the decisions that make the experience useful and maintainable.
      </p>
      <Link href="/contact/">
        Start your custom project <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
