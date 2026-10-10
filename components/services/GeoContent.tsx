import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './GeoContent.module.css'
const builds = [
  [
    'AI visibility audit',
    'Review a defined set of audience questions across agreed AI experiences. Record brand mentions, linked sources, competing answers, and factual gaps. Establish a baseline that your team can revisit with the same testing conditions.',
  ],
  [
    'Citation research',
    'Map useful questions to the pages and independent sources appearing in sampled answers. Separate informational, comparison, and buying intent. Prioritize topics that relate to your actual expertise and offerings rather than chasing every possible prompt.',
  ],
  [
    'Entity clarity',
    'Review how your organization, products, authors, and services are described across owned pages and genuine profiles. Resolve ambiguous names, inconsistent descriptions, and outdated details so readers and search systems encounter a coherent account of your business.',
  ],
  [
    'Useful source content',
    'Prepare briefs for explanations, comparisons, guides, and evidence-led resources. Make each page useful to a person before considering how it might be cited. Research, writing, specialist review, and production responsibilities are defined in the scope.',
  ],
  [
    'Technical discovery review',
    'Assess readable page content, internal links, indexability, and relevant crawler access with your technical team. Distinguish search retrieval from model training controls. Recommend specific fixes while retaining the site’s security and publishing approval process.',
  ],
  [
    'Structured data review',
    'Describe real entities and visible content with suitable markup. Check consistency and current platform support. Schema can clarify relationships, but there is no universal AI citation markup that forces an assistant to quote or recommend your business.',
  ],
  [
    'Brand evidence and PR planning',
    'Identify credible opportunities to share approved expertise, original information, or product knowledge with relevant audiences. Define messaging and publication responsibilities. Third-party editorial decisions remain independent; paid placements and outreach require an agreed scope and budget.',
  ],
  [
    'Monitoring and iteration',
    'Track the chosen questions, sources, and brand descriptions over time. Combine sampled observations with available referral and search data, explain the limitations, and prioritize changes. Reports guide decisions rather than promise complete visibility into every AI answer.',
  ],
]
const sections = [
  {
    id: 'geo-definition',
    label: 'WHAT IS GENERATIVE ENGINE OPTIMIZATION?',
    title: 'Make your expertise useful in AI-assisted discovery.',
    intro:
      'Generative Engine Optimization (GEO) is the work of improving the clarity, discoverability, and evidence behind your online content while studying how your brand appears in AI-generated answers. It connects source material, technical access, and a practical measurement plan.',
    cards: [
      [
        'A useful focus within search strategy',
        'GEO emphasizes generative answers, linked sources, and how a business is described. It shares the foundations of SEO: useful pages, accessible content, relevance, and accurate information. A new label does not create a separate ranking system or replace a sound website.',
      ],
      [
        'How GEO relates to GEO',
        'GEO focuses on answer-oriented content and traditional search features such as snippets and related questions. GEO broadens the research to generative experiences and citations. The work can share content and technical foundations while keeping the deliverables and measurement scope distinct.',
      ],
      [
        'Source access and answer selection',
        'Some experiences retrieve current web information; others may answer without live search or use information supplied by a user. A brand mention, a linked citation, and a recommendation are different observations. Improved content supports discovery, while selection remains with the platform.',
      ],
    ],
  },
  {
    id: 'geo-context',
    label: 'WHY GEO MATTERS NOW',
    title: 'Understand how people discover and compare your business.',
    intro:
      'AI-assisted experiences give people another way to research questions, evaluate options, and explore products. A useful GEO project starts with the decisions your audience makes rather than a general claim that every business needs the same AI strategy.',
    cards: [
      [
        'Questions across a buying journey',
        'Consider what a person asks before choosing a service or product: what it does, who it helps, what the limitations are, and how it compares. Review whether your website provides accurate answers and whether sampled AI descriptions reflect them.',
      ],
      [
        'Clarity when answers summarize sources',
        'A summary may omit context or repeat outdated information. Clear product pages, evidence, and consistent descriptions give readers useful destinations when they follow a source link. Address factual gaps with appropriate source updates rather than promises to control every generated response.',
      ],
      [
        'A measured extension to existing work',
        'Start with a defined baseline and priorities that complement your SEO and content roadmap. Decide which markets and experiences matter to your audience. Avoid unsupported adoption statistics, universal return-on-investment claims, or an assumption that every AI appearance produces a website visit.',
      ],
    ],
  },
  {
    id: 'geo-platforms',
    label: 'AI SEARCH ENGINES AND EXPERIENCES',
    title: 'Plan coverage by platform, mode, and market.',
    intro:
      'ChatGPT, Perplexity, Google AI Overviews and AI Mode, Microsoft Copilot, Claude, and Gemini can be considered in a scoped visibility review. Their access, search behavior, answer formats, and available features differ.',
    cards: [
      [
        'Search-enabled assistants',
        'For experiences such as ChatGPT search and Perplexity, record the exact mode and whether an answer links to a source. Note language, location settings, and the question used. A sample from one mode should not stand in for every product configuration or user.',
      ],
      [
        'Google and Microsoft search experiences',
        'Review relevant generative search surfaces where they are available and actually appear for the selected questions. Website SEO and indexing remain part of the foundation. Keep platform observations separate rather than assuming an answer in one search experience transfers to another.',
      ],
      [
        'Claude, Gemini, and agreed additions',
        'Confirm whether the selected assistant mode has web access and whether the evaluation includes uploaded material or private context. Additional platforms require agreed coverage and suitable access. No claim is made that every assistant searches the web, provides citations, or behaves identically.',
      ],
    ],
  },
  {
    id: 'geo-citations',
    label: 'AI CITATION TRACKING',
    title: 'Distinguish a mention, a citation, and a recommendation.',
    intro:
      'Useful tracking records what an answer actually says and where its links lead. An agreed prompt set creates a repeatable research frame, with variation and sampling limits clearly documented.',
    cards: [
      [
        'Define what counts',
        'Separate an unlinked brand mention from a source link, product recommendation, or factual description. Record the cited URL and relevant context rather than a single visibility score. Agree whether competitors and third-party pages are included in the review.',
      ],
      [
        'Document sampling conditions',
        'Use an agreed question set, platforms, modes, languages, markets, and review dates. Where practical, repeat observations to understand variability. A percentage calculated from these checks describes this sample; it is not your brand’s share of every AI answer worldwide.',
      ],
      [
        'Review accuracy and missed context',
        'Inspect whether names, capabilities, pricing, and limitations are represented accurately. Trace issues to available source material where possible and prioritize updates to owned pages or legitimate profiles. A changed source cannot guarantee that an assistant immediately corrects a future response.',
      ],
    ],
  },
  {
    id: 'geo-entities',
    label: 'ENTITY OPTIMIZATION AND KNOWLEDGE GRAPH',
    title: 'Give your business a consistent, verifiable identity.',
    intro:
      'Entity work connects the real organization, its people, products, and services through accurate information. It helps reduce ambiguity without inventing credentials, locations, or external endorsements.',
    cards: [
      [
        'Owned pages and genuine profiles',
        'Align approved business names, descriptions, product details, and relevant profile links. Explain services and intended audiences consistently while preserving the useful context of each page. Identify outdated information and assign an owner to review changes before publication.',
      ],
      [
        'Relationships and authorship',
        'Use truthful organization and author information, clear ownership, and appropriate connections between pages. Link only to profiles that represent the same entity. Do not manufacture staff biographies, credentials, awards, or review evidence to make the brand appear better established.',
      ],
      [
        'Independent entity resources',
        'Knowledge panels and independent resources such as Wikidata have their own eligibility and editorial rules. Assess genuine relevance where appropriate; a commercial engagement cannot guarantee an entry or panel. Work focuses on accurate source material rather than promising control over an external knowledge graph.',
      ],
    ],
  },
  {
    id: 'geo-content',
    label: 'CITATION-WORTHY CONTENT STRATEGY',
    title: 'Publish information that helps someone make a decision.',
    intro:
      'Specific explanations and credible evidence give readers reasons to use a page as a source. Plan content around what your team can substantiate, keeping context, ownership, and review responsibilities visible.',
    cards: [
      [
        'Original information with a method',
        'Use approved research, product data, expert explanations, or real examples where available. Document how evidence was obtained and what it can establish. Research production, participant consent, specialist review, and licensing are scoped rather than replaced with invented statistics.',
      ],
      [
        'Comparisons, definitions, and guides',
        'Explain relevant criteria, limitations, use cases, and alternatives fairly. Put direct answers beside enough supporting detail for the reader to assess them. Avoid repetitive pages, unsupported “best” claims, and generated summaries that add no useful information to the topic.',
      ],
      [
        'Freshness and editorial ownership',
        'Assign an owner to review changed features, evidence, and source links. Update content when the facts change, with appropriate approval. Recency alone is not proof of quality or a guaranteed citation advantage; the information still needs to be relevant and correct.',
      ],
    ],
  },
  {
    id: 'geo-schema',
    label: 'STRUCTURED DATA AND TECHNICAL ACCESS',
    title: 'Keep machine-readable descriptions aligned with the page.',
    intro:
      'Technical work supports discovery and accurate interpretation. Markup describes visible content and real relationships, while crawler policies and retrieval controls are reviewed according to each service’s documentation.',
    cards: [
      [
        'Appropriate schema and semantic HTML',
        'Review suitable Organization, Person, Article, or Product markup where the page supports it. Match claims, identifiers, and relationships to real content. Use readable text, meaningful headings, and accessible structure rather than assuming every assistant depends on JSON-LD to understand a page.',
      ],
      [
        'Validation and platform support',
        'Check syntax, content consistency, and current eligibility for supported features. A schema validator and a rich-result test answer different questions. FAQ markup can describe visible FAQs, but Google no longer displays FAQ rich results; it is not a shortcut to AI citations.',
      ],
      [
        'Retrieval, indexing, and controls',
        'Review indexability, internal links, and relevant crawler documentation with your technical team. Search access and training controls may differ. No firewall, crawler policy, account permission, or analytics setting is changed by this page update; technical recommendations require an agreed implementation scope.',
      ],
    ],
  },
  {
    id: 'geo-pr',
    label: 'BRAND MENTIONS AND DIGITAL PR',
    title: 'Share credible expertise with relevant audiences.',
    intro:
      'A brand’s useful information can appear beyond its own website. A scoped PR plan identifies appropriate publications and communities, defines the evidence to share, and respects independent editorial decisions.',
    cards: [
      [
        'Expert contributions and useful material',
        'Prepare approved commentary, research summaries, product explanations, or other material relevant to an audience. Confirm spokesperson approval, rights, claims, and disclosure requirements. Deliverables can include a content and outreach plan; external publication is subject to editorial acceptance.',
      ],
      [
        'Genuine third-party references',
        'Prioritize accurate coverage and relevant discussions over manufactured mentions. Avoid fake reviews, undisclosed promotional posts, purchased endorsements, or misleading community activity. A mention in a publication does not guarantee model training inclusion, retrieval, or a subsequent recommendation.',
      ],
      [
        'Clear outreach responsibilities',
        'Agree whether pitching, follow-up, paid distribution, or partnership coordination is included, along with approvals and budgets. This website update does not contact publishers or create external accounts. The project scope defines who can speak for the business and what material may be shared.',
      ],
    ],
  },
  {
    id: 'geo-sectors',
    label: 'GEO FOR E-COMMERCE AND SAAS',
    title: 'Answer the questions behind a product shortlist.',
    intro:
      'Product and software discovery often involves comparison, suitability, and practical constraints. Make the information people need easy to verify and connect it to a useful next step on your site.',
    cards: [
      [
        'E-commerce product decisions',
        'Clarify specifications, genuine availability, intended use, care, compatibility, and buying conditions. Use appropriate product information and authentic review evidence where available. Catalogue work, merchant integrations, feeds, and shopping features are separately scoped; a product recommendation cannot be promised.',
      ],
      [
        'SaaS evaluation and adoption',
        'Explain current features, supported integrations, use cases, implementation needs, and limitations. Keep comparison and alternative pages fair and up to date. Connect documentation, service descriptions, and examples so a visitor can verify the information behind an AI-generated shortlist.',
      ],
      [
        'Specialist and regional requirements',
        'Adapt research to the markets and decision criteria that matter to the business. Sensitive claims require suitable review, and localization needs appropriate language expertise. Do not invent certifications, client outcomes, or universal industry experience to populate a sector section.',
      ],
    ],
  },
  {
    id: 'geo-reporting',
    label: 'GEO MEASUREMENT AND REPORTING',
    title: 'Turn sampled observations into a practical next step.',
    intro:
      'A useful report explains work delivered, observed answer changes, and available performance data. It keeps measurement definitions clear so your team can assess progress without confusing correlation with causation.',
    cards: [
      [
        'Visibility and source trends',
        'Report selected mentions, citations, descriptions, and competitor observations against the defined question set. Include dates and coverage changes. If a sampled share-of-voice metric is used, state its denominator and method so it can be compared meaningfully over time.',
      ],
      [
        'Traffic and attribution limits',
        'Review identifiable referrals and authorized existing analytics where available. Not every appearance creates a click or a recognizable referrer. Google AI search activity is included in aggregate Search Console Web performance, so it should not be presented as an isolated attribution report.',
      ],
      [
        'Priorities with accountable owners',
        'Connect findings to content revisions, source corrections, or technical follow-up. Record dependencies and agree a reporting cadence. No new tracking SDK, advertising pixel, or paid monitoring subscription is activated here; conversion analysis needs an agreed data source and permissions.',
      ],
    ],
  },
  {
    id: 'geo-engagement',
    label: 'GEO TOOLS AND ENGAGEMENT MODELS',
    title: 'Agree the platforms, content, and delivery responsibilities.',
    intro:
      'A focused audit, implementation project, and ongoing visibility review have different workloads. Define the coverage and available evidence before selecting tools, fees, or a reporting schedule.',
    cards: [
      [
        'Tools selected for the question',
        'Direct platform checks and existing search data can support a baseline. Services such as Profound, Otterly, Peec AI, or Scrunch may support an agreed monitoring scope. Coverage, access, sampling, and pricing differ; confirm current capabilities and license costs before choosing a paid tool.',
      ],
      [
        'A defined audit or content project',
        'Agree questions, pages, markets, platforms, research depth, deliverables, and review rounds. Implementation can include specified content or technical work when scoped. Writing, development, original research, PR, and integrations are not automatically included in an audit or offered as a free service.',
      ],
      [
        'Ongoing support and team collaboration',
        'An ongoing engagement can allocate capacity to refreshes, sampled tracking, reporting, and collaboration with SEO or GEO. Define access, approvals, ownership, and changes to scope. Your organization keeps its accounts and grants suitable invited access instead of sharing passwords.',
      ],
    ],
  },
]
const process = [
  [
    'Discovery and baseline',
    'Agree business goals, audiences, questions, markets, platforms, and access. Record the initial observations and define how the same research frame will be revisited.',
  ],
  [
    'Entity and source review',
    'Check owned business information, real profiles, author details, and source relationships. Identify factual gaps, ambiguous descriptions, and outdated material for approval and correction.',
  ],
  [
    'Citation and question research',
    'Study the selected prompts, linked sources, and competing descriptions. Group intent and prioritize the information your team can answer with useful expertise and evidence.',
  ],
  [
    'Content planning and production',
    'Prepare agreed briefs or revisions with source requirements and editorial owners. Connect clear answers to context, comparisons, and appropriate reader actions.',
  ],
  [
    'Technical and markup review',
    'Validate agreed implementations, page access, internal links, and content consistency. Coordinate changes with the publishing team and check current platform requirements.',
  ],
  [
    'Brand evidence and publication',
    'Deliver approved source material and any scoped PR work through the agreed review process. Record what was actually published; independent editorial decisions remain outside the project’s control.',
  ],
  [
    'Monitoring and iteration',
    'Review the agreed samples and available performance data, then prioritize further work. Explain variability and attribution limits while maintaining a clear record of completed changes.',
  ],
]
const faqs = [
  [
    'What is GEO, and how is it different from SEO?',
    'GEO focuses on how useful source content and a brand appear in AI-generated answers, including mentions and linked citations. It shares SEO foundations such as discoverable pages and relevant information. The labels overlap; GEO does not replace SEO or create guaranteed AI recommendations.',
  ],
  [
    'How much does GEO cost?',
    'Cost depends on platforms, questions, markets, research depth, content production, implementation, PR, and ongoing monitoring. Paid tools may be separate. Share your website and priorities for a scoped proposal; there is no universal published fee or automatic free audit.',
  ],
  [
    'How long until we see results from GEO?',
    'Deliverables can be scheduled, but retrieval, indexing, answer variability, competition, and platform changes affect observations. No citation count, recommendation, revenue gain, or result date is guaranteed. Reporting separates work completed from the evidence available after publication.',
  ],
  [
    'Do you handle both GEO and GEO?',
    'A project can coordinate GEO’s answer-focused content work with GEO’s generative visibility research. We agree their shared foundations and distinct coverage, including platforms, questions, content, and measurement. Both can work alongside technical SEO and content strategy.',
  ],
  [
    'How do you measure AI visibility?',
    'We define a question set, platforms, modes, markets, and observation schedule. Reports distinguish brand mentions, source citations, and recommendations, with links and context where available. Any share-of-voice percentage describes the agreed sample, not all AI answers or every user’s experience.',
  ],
  [
    'Do you offer ongoing GEO support?',
    'Ongoing work can be scoped around content refreshes, selected platform checks, reporting, and collaboration with your team. Agree capacity, approvals, access, tool costs, and implementation ownership. Unlimited research, external publication, or coverage of every platform is not implied.',
  ],
  [
    'Do we need special AI schema or to allow model training?',
    'There is no universal schema that guarantees AI citations. Appropriate markup should match visible content. Search retrieval and model training can involve different controls, so they are reviewed separately against platform documentation. Policy changes and new integrations require a defined technical scope and approval.',
  ],
]
export function GeoOptions() {
  return (
    <>
      {sections.slice(0, 2).map((section) => (
        <section key={section.id} className={styles.section} aria-labelledby={section.id}>
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
        </section>
      ))}
      <section className={styles.section} aria-labelledby="geo-build-title">
        <div className={styles.heading}>
          <span>WHAT WE DO</span>
          <h2 id="geo-build-title">
            AI visibility research, useful content, and connected evidence.
          </h2>
          <p>
            Connect a defined visibility baseline with accurate business information, evidence-led
            content, and technical review. Prioritize work that helps your audience understand and
            evaluate your offer.
          </p>
        </div>
        <div className={styles.note}>
          <strong>Which SEO service fits your goal?</strong>
          <p>
            GEO focuses on generative answers and source visibility. For traditional answer
            features, explore <Link href="/services/aeo/">AEO</Link>. For website search
            foundations, see{' '}
            <Link href="/services/technical-onpage-seo/">Technical &amp; On-Page SEO</Link>.
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
    </>
  )
}
export function GeoContent() {
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
      <section className={styles.section} aria-labelledby="geo-process-title">
        <>
          <div className={styles.processHeading}>
            <span>FROM DISCOVERY BASELINE TO CONTINUOUS IMPROVEMENT</span>
            <h2 id="geo-process-title">
              Seven steps from AI visibility audit to evidence-led iteration.
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
      </section>
      {sections.slice(2).map((section, index) => (
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
        </section>
      ))}
      <section className={styles.section} aria-labelledby="geo-faq-title">
        <div className={styles.heading}>
          <span>GENERATIVE ENGINE OPTIMIZATION QUESTIONS</span>
          <h2 id="geo-faq-title">Before you start your GEO project.</h2>
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
      <section className={styles.section} aria-labelledby="geo-related-title">
        <div className={styles.heading}>
          <span>CONNECTED SEARCH SERVICES</span>
          <h2 id="geo-related-title">Connect AI discovery with your wider search strategy.</h2>
        </div>
        <div className={styles.related}>
          {[
            ['Technical & On-Page SEO', 'technical-onpage-seo'],
            ['Content & Keyword Strategy', 'content-keyword-strategy'],
            ['AEO', 'aeo'],
            ['Local & Google Business SEO', 'local-google-business-seo'],
            ['App Store Optimization', 'app-store-optimization'],
            ['Website Design', 'website-design'],
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

export function GeoProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="geo-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="geo-cta-title">Ready to understand your brand’s AI visibility?</h2>
      <p>
        Share your website, audiences, priority questions, markets, and existing source material. We
        can define the platform research, content, technical review, and reporting that support your
        next step.
      </p>
      <Link href="/contact/">
        Start your GEO project <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
