import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './LocalSeoContent.module.css'
const builds = [
  [
    'Google Business Profile optimization',
    'Review eligibility, ownership, categories, services, contact details, hours, and available profile features. Align the information with how the business operates in the real world, with a clear approval process for changes.',
  ],
  [
    'Local visibility analysis',
    'Review how your business appears for relevant searches and locations. Compare available evidence with nearby competitors and identify useful priorities. Results vary by searcher location and context; one screenshot cannot establish visibility across an entire market.',
  ],
  [
    'Citations and business information',
    'Audit important listings for accurate business names, addresses where appropriate, phone numbers, and website links. Prioritize relevant platforms and corrections instead of buying a large volume of low-quality directory entries.',
  ],
  [
    'Review strategy and responses',
    'Plan a consistent way to invite genuine customer feedback and handle responses. Agree monitoring, approvals, and escalation responsibilities. Requests should respect platform rules and customer choice, without incentives, fake reviews, or selective solicitation of positive feedback.',
  ],
  [
    'Local website content',
    'Develop useful location and service information that helps people understand availability and next steps. Connect approved business details with relevant pages and navigation. Content should reflect real operations rather than repeating city names across near-identical templates.',
  ],
  [
    'Multi-location coordination',
    'Organize eligible profiles, location pages, information ownership, and reporting for businesses with several locations. Define what local teams maintain and what is shared centrally, with a process for openings, closures, and special hours.',
  ],
  [
    'Local partnerships and structured data',
    'Review legitimate local references and appropriate business markup. Use genuine relationships, accurate content, and supported properties. Neither a directory listing nor valid schema guarantees a particular placement in Maps or search results.',
  ],
  [
    'Measurement and ongoing improvements',
    'Agree which available profile and website evidence will inform decisions. Connect visibility observations with meaningful enquiries where measurement is possible. New tracking, paid tools, and continuing profile management need explicit scope rather than being assumed.',
  ],
]
const sections = [
  {
    id: 'local-business-profile',
    label: 'GOOGLE BUSINESS PROFILE OPTIMIZATION',
    title: 'Make your business information accurate and useful.',
    intro:
      'A Business Profile should reflect a genuine eligible business. Start with ownership, operations, and the information customers need, then review the profile features that are available for that business and region.',
    cards: [
      [
        'Eligibility and access',
        'Confirm whether the business serves customers in person and which profile arrangement fits its operations. Review ownership and existing profiles before creating anything. Use invited access with an appropriate role; the business keeps ownership and should not share its account password.',
      ],
      [
        'Categories, services, and hours',
        'Choose categories that describe the actual business and review services, attributes, contact routes, and regular or special hours. Use the real business name rather than adding keywords. Confirm changes with an authorized person who knows how the business operates.',
      ],
      [
        'Approved photos and updates',
        'Use genuine, approved images and relevant updates where the profile supports them. Keep links and offerings current. Feature availability varies, so booking, products, or other integrations are confirmed rather than promised for every profile.',
      ],
    ],
  },
  {
    id: 'local-pack-visibility',
    label: 'LOCAL PACK AND MAPS VISIBILITY',
    title: 'Understand where nearby customers can find you.',
    intro:
      'Google describes local ranking in terms of relevance, distance, and prominence. We assess the information and presence you can improve while recognizing that searcher location and competition remain part of the result.',
    cards: [
      [
        'Relevant information',
        'Check whether the profile and website clearly explain what the business offers. Compare categories, services, and useful page content against real customer needs. Improve clarity and completeness without implying that a particular field is a guaranteed ranking lever.',
      ],
      [
        'Location and service-area accuracy',
        'Keep an accurate map location for eligible customer-facing premises and appropriate service-area details for businesses that travel to customers. Adding service areas does not guarantee rankings in those places. Avoid fictional offices or moving a pin to manipulate proximity.',
      ],
      [
        'Contextual visibility checks',
        'Where appropriate, use agreed searches or geographic sampling to understand patterns across the market. Record the query, location, date, and limitations. Local and website results are different views; neither supports a guaranteed top-three placement.',
      ],
    ],
  },
  {
    id: 'local-citations',
    label: 'LOCAL CITATIONS AND CONSISTENCY',
    title: 'Keep the important listings aligned with reality.',
    intro:
      'Customers should encounter reliable contact and location information wherever they find the business. Citation work focuses on useful platforms, existing errors, and sensible maintenance rather than a fixed quantity of listings.',
    cards: [
      [
        'Audit the current footprint',
        'Review relevant search, map, industry, and local directories for inaccurate details or duplicates. Establish a verified reference for business information. Platform formatting may differ, but the underlying facts should identify the same real business.',
      ],
      [
        'Prioritize corrections',
        'Address important wrong numbers, outdated locations, broken website links, or confusing duplicates. Confirm ownership and available correction processes. Listing changes and duplicate resolution depend on the platform; immediate removal or approval cannot be promised.',
      ],
      [
        'Maintain operational changes',
        'Agree who updates information when hours, premises, phone numbers, or services change. Choose new listings for relevance and quality. Paid directory placements, aggregator subscriptions, and recurring management are discussed separately instead of being automatically included.',
      ],
    ],
  },
  {
    id: 'local-reviews',
    label: 'REVIEW MANAGEMENT AND REPUTATION',
    title: 'Build a reliable process for genuine feedback.',
    intro:
      'Reviews help potential customers evaluate a business and provide useful operational feedback. We define how to request, monitor, and respond to feedback with clear responsibilities, customer privacy, and platform policies in mind.',
    cards: [
      [
        'Invite honest feedback',
        'Make it straightforward for customers with genuine experiences to leave a review. Use neutral requests without incentives or pressure, and do not filter invitations by expected sentiment. Customers should be free to share criticism as well as praise.',
      ],
      [
        'Respond with care',
        'Agree response tone, approval, and escalation for sensitive situations. Acknowledge feedback without disclosing private customer details or arguing publicly. Review-response support and monitoring cadence are scoped; round-the-clock alerts and replies to every platform are not assumed.',
      ],
      [
        'Handle problems appropriately',
        'Investigate complaints with the business and use platform reporting processes when content appears to breach policy. Negative feedback is not automatically removable. Avoid purchased reviews, fabricated accounts, or promises that an agency can delete legitimate criticism.',
      ],
    ],
  },
  {
    id: 'local-location-pages',
    label: 'LOCAL LANDING PAGES',
    title: 'Give each real location information worth visiting.',
    intro:
      'Location pages should answer useful questions about a genuine branch or service area. The right structure connects local information with services, contact routes, and clear navigation instead of producing near-identical pages for every city.',
    cards: [
      [
        'Useful local detail',
        'Include approved services, opening hours, access information, and contact or booking routes that actually exist. Use real location photography where available. Do not invent staff, premises, testimonials, or availability to fill a page template.',
      ],
      [
        'Clear journeys and internal links',
        'Connect the location page with relevant services and other helpful information. Make the next step easy to understand on mobile, including calling or directions when appropriate. Contact methods and conversions must reflect the business’s actual operating process.',
      ],
      [
        'Content ownership',
        'Assign responsibility for updating hours, service details, and other changing information. Assess whether a proposed area page offers distinct value before publishing it. Wider keyword research, editorial planning, and page implementation can be included through agreed related scopes.',
      ],
    ],
  },
  {
    id: 'local-multiple-locations',
    label: 'MULTI-LOCATION LOCAL SEO',
    title: 'Coordinate local accuracy with a shared system.',
    intro:
      'Several locations need consistent processes without erasing what makes each branch different. We organize the agreed location scope around profile eligibility, reliable data, website structure, and people responsible for keeping information current.',
    cards: [
      [
        'Location inventory and roles',
        'Map existing eligible profiles and location pages with authorized contacts and access roles. Confirm duplicate or missing information before taking action. Multiple listings, bulk verification, and platform approvals depend on eligibility and the business’s circumstances.',
      ],
      [
        'Shared templates, real differences',
        'Use consistent page structures and information standards while preserving local services, hours, and contact details. Define what central teams approve and what branches maintain. A shared template should make updates easier rather than overwrite accurate local information.',
      ],
      [
        'Reporting by location',
        'Review agreed evidence for each location as well as the broader business. Compare like-for-like periods and explain data limits. New openings, closures, and operational changes belong in interpretation; one aggregate number can hide very different local situations.',
      ],
    ],
  },
  {
    id: 'local-links-schema',
    label: 'LOCAL RELATIONSHIPS AND STRUCTURED DATA',
    title: 'Connect genuine community presence with clear information.',
    intro:
      'Useful local references come from real relationships and relevant content. Structured data can describe the business on its website, but it must remain accurate and does not substitute for eligibility, customer service, or a trustworthy presence.',
    cards: [
      [
        'Legitimate local relationships',
        'Discuss relevant community organizations, business associations, partnerships, or coverage that the business actually participates in. Prioritize useful relationships over links acquired solely to influence rankings. Memberships, sponsorships, outreach, and third-party costs require separate approval and scope.',
      ],
      [
        'Accurate business markup',
        'Review applicable LocalBusiness, Service, or Breadcrumb markup against visible page content. Use genuine details, appropriate location relationships, and supported properties. Do not publish a private address or made-up coordinates to complete a schema template.',
      ],
      [
        'Validation and search features',
        'Check markup with relevant validators and current search guidance. Valid schema does not guarantee a rich result, map placement, or voice answer. Self-serving business ratings should not be presented as a route to review stars in search.',
      ],
    ],
  },
  {
    id: 'local-intent',
    label: 'LOCAL INTENT AND NEARBY SEARCHES',
    title: 'Answer the practical questions people ask nearby.',
    intro:
      'Local searches often involve availability, services, opening times, or getting to a business. Focus content on those real needs rather than treating voice search or the phrase “near me” as a separate shortcut to visibility.',
    cards: [
      [
        'Natural questions and answers',
        'Explain the services, areas actually served, and practical details customers need before contacting you. Use understandable language and useful headings. FAQs should help readers, without promising that an assistant or search engine will choose them as an answer.',
      ],
      [
        'Keep information current',
        'Review special hours, seasonal availability, and important service changes. People searching at the last minute need accurate next steps. Agree an update process with the business; publishing once does not keep operational information correct indefinitely.',
      ],
      [
        'Usable mobile journeys',
        'Check that local pages remain readable and that contact routes work on smaller screens. Coordinate technical or design improvements where needed. Avoid adding repeated location keywords, intrusive overlays, or unnecessary steps between a useful answer and the customer’s next action.',
      ],
    ],
  },
  {
    id: 'local-tools-reporting',
    label: 'TOOLS AND LOCAL SEO REPORTING',
    title: 'Measure what the available evidence can support.',
    intro:
      'Choose tools around the questions that need answering and the access the business can provide. Reporting should connect completed work, visibility observations, and meaningful customer actions while acknowledging the limits of each data source.',
    cards: [
      [
        'Profile and website evidence',
        'Review available Business Profile performance data alongside relevant website and Search Console evidence. Profile interactions are not automatically completed sales or qualified enquiries. Use consistent periods and record operational changes when interpreting the figures.',
      ],
      [
        'Optional specialist tools',
        'Tools such as BrightLocal, Whitespark, or Local Falcon can support citation work or local visibility checks where appropriate. Choose coverage and subscriptions deliberately. Paid accounts, automated monitoring, integrations, and data access are confirmed rather than assumed.',
      ],
      [
        'Tracking decisions',
        'Agree any campaign links or website measurement before implementation. Do not install analytics, call recording, or new customer tracking automatically. Confirm privacy, permissions, costs, and ownership, then report only metrics the configured systems can actually provide.',
      ],
    ],
  },
  {
    id: 'local-engagement',
    label: 'ENGAGEMENT AND IMPLEMENTATION',
    title: 'Define the locations, responsibilities, and next steps.',
    intro:
      'The right scope depends on the business model, existing profile condition, number of locations, and website needs. We agree deliverables and approvals before setting a fee or schedule.',
    cards: [
      [
        'A focused local audit',
        'Review the agreed profiles, local website content, important listings, and available evidence. Deliver documented issues and priorities. An audit does not automatically include profile changes, directory submissions, content writing, or an ongoing management commitment.',
      ],
      [
        'Optimization and coordination',
        'Scope profile improvements, listing corrections, review processes, and website work with clear owners. The business approves facts and keeps account ownership. Verification or reinstatement assistance can be discussed, but decisions and methods remain with Google.',
      ],
      [
        'Ongoing or multi-location support',
        'Define recurring tasks, reporting cadence, location coverage, and capacity. Additional services or locations can change the workload and proposal. No fixed price, guaranteed map ranking, real-time monitoring promise, or unlimited support is implied.',
      ],
    ],
  },
]
const process = [
  [
    'Discovery and audit',
    'Confirm the business model, eligible locations, ownership, existing profiles, website, and known issues. Review available evidence and agree access and scope.',
  ],
  [
    'Strategy and priorities',
    'Connect local customer needs with profile, listing, review, and website findings. Agree responsibilities, approvals, dependencies, and an implementation roadmap.',
  ],
  [
    'Profile optimization',
    'Review accurate categories, services, hours, links, and approved imagery. Make only agreed changes, with the business retaining ownership and approving operational facts.',
  ],
  [
    'Citation corrections',
    'Prioritize useful listings and important inaccuracies. Record submitted changes and platform limitations instead of assuming all corrections will be accepted immediately.',
  ],
  [
    'Review process',
    'Agree neutral feedback invitations, response guidance, monitoring, and escalation. Follow platform rules without incentives or selectively requesting positive reviews.',
  ],
  [
    'Local content',
    'Plan useful location or service information and clear contact journeys. Confirm who supplies approved content and who implements the pages.',
  ],
  [
    'Monitoring and iteration',
    'Review agreed evidence and completed actions. Prioritize later work in context, allowing for platform processing and avoiding guaranteed rankings or enquiry counts.',
  ],
]
const faqs = [
  [
    'How much does local SEO cost?',
    'Cost depends on locations, profile condition, citation work, content needs, implementation, and ongoing support. Paid tools and directory fees may be separate. Share the business and goals for a scoped proposal; no universal monthly price is published here.',
  ],
  [
    'How long does it take to rank in the local pack?',
    'There is no guaranteed position or timeline. Results depend on relevance, distance, prominence, competition, and platform processing. We can define actions and review available evidence, but completed optimization is not a promise of top-three placement.',
  ],
  [
    'Do you need access to our Google Business Profile?',
    'An initial review can use public information. Profile changes and some reporting need invited access with an appropriate role. Keep business ownership and do not share passwords. Verification steps may require your participation and evidence requested by Google.',
  ],
  [
    'Can you work with multiple locations?',
    'A multi-location scope can coordinate eligible profiles, location pages, information ownership, and reporting. Confirm the real locations, operating model, access, and priorities first. Bulk verification and profile approval are subject to Google’s requirements.',
  ],
  [
    'How do you measure local SEO success?',
    'We agree evidence such as profile interactions, website activity, local visibility observations, and qualified enquiries where systems can measure them. Reports distinguish actions from outcomes and explain limitations. A website click or direction request is not automatically a sale.',
  ],
  [
    'Do you offer ongoing local SEO support?',
    'Ongoing work can cover agreed updates, citation maintenance, review processes, reporting, and prioritized improvements. Locations, capacity, approval workflows, tools, and response responsibilities are defined in scope instead of assuming unlimited management.',
  ],
  [
    'Can you guarantee verification, remove reviews, or restore a suspended profile?',
    'No. Google controls verification and reinstatement decisions, and legitimate negative reviews cannot simply be removed. We can discuss eligibility, accurate information, and appropriate reporting or appeal preparation. No fake reviews, fabricated locations, or guaranteed approvals are offered.',
  ],
]
export function LocalSeoOptions() {
  return (
    <section className={styles.section} aria-labelledby="local-build-title">
      <div className={styles.heading}>
        <span>WHAT WE DO</span>
        <h2 id="local-build-title">Local SEO built around real business information.</h2>
        <p>
          Connect accurate profile information, useful local pages, genuine feedback, and relevant
          listings. Define the local business goals before choosing a focused audit or ongoing
          support.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which SEO service fits your goal?</strong>
        <p>
          This page focuses on local discovery, business profiles, listings, and location content.
          For the website foundation, see{' '}
          <Link href="/services/technical-onpage-seo/">Technical &amp; On-Page SEO</Link>. For
          editorial planning, explore{' '}
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
export function LocalSeoContent() {
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
                <span>FROM LOCAL AUDIT TO ONGOING IMPROVEMENT</span>
                <h2 id="local-process-title">
                  Seven steps from local audit to monitoring and improvement.
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
      <section className={styles.section} aria-labelledby="local-faq-title">
        <div className={styles.heading}>
          <span>LOCAL SEO QUESTIONS</span>
          <h2 id="local-faq-title">Before you start your local SEO project.</h2>
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
      <section className={styles.section} aria-labelledby="local-related-title">
        <div className={styles.heading}>
          <span>CONNECTED SEARCH SERVICES</span>
          <h2 id="local-related-title">Connect the technical foundation with your wider goals.</h2>
        </div>
        <div className={styles.related}>
          {[
            ['Technical & On-Page SEO', 'technical-onpage-seo'],
            ['Content & Keyword Strategy', 'content-keyword-strategy'],
            ['Answer Engine Optimization', 'aeo'],
            ['Generative Engine Optimization', 'geo'],
            ['Website Design', 'website-design'],
            ['Custom Website Development', 'custom-website-development'],
            ['Website Maintenance', 'website-maintenance'],
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

export function LocalSeoProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="local-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="local-cta-title">Ready to improve how nearby customers find your business?</h2>
      <p>
        Share your business, real locations or service areas, website, existing profiles, and
        current local visibility concerns. We can define the profile, content, and measurement work
        that supports your next step.
      </p>
      <Link href="/contact/">
        Start your local SEO project <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
