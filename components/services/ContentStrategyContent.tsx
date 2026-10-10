import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './ContentStrategyContent.module.css'
const builds = [
  [
    'Keyword and audience research',
    'Connect customer questions, business relevance, and available search evidence. Review intent, competing results, and existing pages before prioritizing topics. Search volumes and difficulty estimates are useful inputs, not precise forecasts of traffic or revenue.',
  ],
  [
    'Topic clusters and page mapping',
    'Organize related questions into a useful content structure with clear purposes for each page. Decide which existing pages can be improved and where new material adds value. Cluster size follows the subject and audience rather than a fixed article quota.',
  ],
  [
    'Content strategy and editorial planning',
    'Turn priorities into a manageable calendar with formats, owners, dependencies, review stages, and intended next steps. Plan around actual production capacity and access to expertise, keeping room for useful updates rather than chasing publication volume alone.',
  ],
  [
    'Content briefs and production',
    'Define the audience, questions, sources, angle, structure, and review requirements for each piece. Writing and editing can be included in an agreed scope, or briefs can support your in-house team. Content ownership and publishing responsibilities are confirmed.',
  ],
  [
    'Existing content optimization',
    'Review clarity, usefulness, titles, headings, source quality, and contextual links. Align the page with its purpose and reader needs. Avoid adding keywords or length solely to satisfy a tool score when the result makes the content less useful.',
  ],
  [
    'Content refresh and consolidation',
    'Inventory existing pages and assess accuracy, purpose, overlap, and available performance evidence. Recommend updates, consolidation, or retention before considering removal. Redirects, publishing changes, and technical validation need an implementation owner.',
  ],
  [
    'Answer-focused content',
    'Structure helpful explanations, comparisons, and practical answers around real questions. Use original insight and reliable evidence where available. Work can connect with AEO or GEO scopes, without promising that an AI system or search feature will cite the page.',
  ],
  [
    'Measurement and team guidance',
    'Agree outcomes and evidence that can inform the strategy, from relevant search queries to qualified enquiries where measurable. Support editorial teams with clear priorities and review guidance. New analytics, paid tools, and reporting cadence are agreed separately.',
  ],
]
const sections = [
  {
    id: 'content-keyword-research',
    label: 'KEYWORD RESEARCH AND TOPIC CLUSTERS',
    title: 'Start with the questions worth answering.',
    intro:
      'A keyword list is a starting point, not a content strategy. We connect available search evidence with audience needs, your expertise, and the role each page should play in a useful journey.',
    cards: [
      [
        'Understand intent and context',
        'Review the questions people ask, the kinds of results they find, and the next action they may need. Combine search evidence with sales or support insight where available. An apparent keyword opportunity still needs to fit the business and the reader.',
      ],
      [
        'Map topics to real pages',
        'Group related questions and give each planned page a distinct purpose. Consider pillar resources, supporting articles, service pages, or comparisons where appropriate. Internal links should connect useful information rather than manufacture an arbitrary number of supporting posts.',
      ],
      [
        'Prioritize with evidence',
        'Compare relevance, existing coverage, expertise, effort, and potential usefulness. Search estimates and competitor gaps inform decisions but do not guarantee demand or results. Review overlap before creating another page for a slightly different version of the same question.',
      ],
    ],
  },
  {
    id: 'content-editorial-calendar',
    label: 'CONTENT STRATEGY AND EDITORIAL CALENDAR',
    title: 'Build a calendar your team can deliver.',
    intro:
      'A workable plan connects business priorities with content quality, available expertise, and the people responsible for review. The planning horizon and publication cadence are agreed around the actual capacity of the project.',
    cards: [
      [
        'Define goals and formats',
        'Clarify the audience, questions, and purpose behind each content stream. Choose articles, guides, landing pages, comparisons, or other formats because they fit the task. Establish useful next steps without treating every educational page as a direct sales pitch.',
      ],
      [
        'Make dependencies visible',
        'Include brief preparation, interviews, source gathering, drafting, editing, approval, and publishing. Identify who supplies factual input and who can approve claims. A calendar should expose missing material early instead of promising dates that depend on unavailable reviewers.',
      ],
      [
        'Keep priorities adjustable',
        'Separate essential pieces from experiments and later improvements. Reserve capacity for corrections and refreshes. Review the plan using feedback and available evidence, rather than continuing to publish against an outdated topic list simply to maintain a quota.',
      ],
    ],
  },
  {
    id: 'content-production',
    label: 'CONTENT PRODUCTION AND EDITING',
    title: 'Turn a good brief into useful, credible content.',
    intro:
      'Production can be scoped around new pieces, existing pages, or support for your own writers. The work should add something readers can use, with appropriate source checking and approval before publication.',
    cards: [
      [
        'Briefs that guide the writer',
        'Specify the audience, intent, key questions, angle, structure, evidence, and relevant internal links. Identify statements that need an expert or business approval. Length follows the subject and purpose, not an assumed preferred search-engine word count.',
      ],
      [
        'Original input and fact checking',
        'Use approved subject-matter input, examples, or research where available. Attribute external evidence appropriately and check factual claims. Case studies require real customer permission and results; stock visuals or illustrative scenarios cannot substitute for actual proof.',
      ],
      [
        'A clear editorial workflow',
        'Agree drafting, editing, revision stages, style, and publication ownership. Confirm asset rights and source-file delivery. CMS entry, translations, specialist review, and technical implementation are included only when scoped, rather than assumed to come with every brief.',
      ],
    ],
  },
  {
    id: 'content-onpage-optimization',
    label: 'ON-PAGE CONTENT OPTIMIZATION',
    title: 'Make the page easier to understand and navigate.',
    intro:
      'Optimization should support readers while helping search systems understand the page. We review the information itself and its presentation, then coordinate technical changes with the website team where required.',
    cards: [
      [
        'Titles, summaries, and structure',
        'Use descriptive titles, helpful summaries, and headings that reflect the actual content. Organize important explanations so readers can find them. Search engines can generate different title links or snippets, so metadata cannot guarantee an exact search presentation.',
      ],
      [
        'Links and supporting evidence',
        'Connect related pages with clear anchor text and link to credible sources where they support a claim. Review image descriptions and contextual information. Avoid repetitive keyword insertion, unnecessary links, or unsupported statistics added merely to make a page look authoritative.',
      ],
      [
        'Content and technical coordination',
        'Flag issues that require CMS, markup, rendering, or performance work. Structured data must describe visible, accurate content and meet relevant requirements. Deeper technical investigation belongs in an agreed Technical & On-Page SEO scope.',
      ],
    ],
  },
  {
    id: 'content-distribution',
    label: 'CONTENT DISTRIBUTION AND REPURPOSING',
    title: 'Plan how useful content reaches the right audience.',
    intro:
      'Publication is one step in a content workflow. Distribution can be discussed around channels the business already uses and the material that suits them, with clear permissions and responsibilities for external publishing.',
    cards: [
      [
        'Use relevant existing channels',
        'Identify appropriate business social accounts, partner publications, or communities where a piece could help readers. Adapt the message to the context rather than posting the same promotional copy everywhere. Channel access and publication approval are confirmed before any external action.',
      ],
      [
        'Repurpose with purpose',
        'An approved article can inform a concise social post, visual explanation, or presentation where useful. Choose formats around audience needs and available resources. Video, audio, design production, and channel management are separate deliverables unless explicitly included.',
      ],
      [
        'Respect quality and permissions',
        'Check attribution, rights, and platform expectations when considering syndication or outreach. Paid promotion and third-party placement costs need a separate scope and approval. Distribution is not a guarantee of links, coverage, traffic, or engagement.',
      ],
    ],
  },
  {
    id: 'content-refresh',
    label: 'CONTENT REFRESH AND CONSOLIDATION',
    title: 'Improve the useful material you already have.',
    intro:
      'Older content may still serve readers well, or it may need corrections and a clearer purpose. Review the page and available evidence before deciding to refresh, combine, retain, or retire it.',
    cards: [
      [
        'Inventory and review',
        'Map the content, purpose, ownership, accuracy, and available performance evidence. Look for outdated information, missing answers, broken references, and overlapping pages. Low traffic alone is not proof that a page has no value to its audience or business.',
      ],
      [
        'Refresh what matters',
        'Update substantive information, examples, links, and structure where they improve usefulness. Preserve accurate material and clear authorship. Changing a date without meaningful revision does not create a genuinely updated resource. Record what changed so later reviews have context.',
      ],
      [
        'Consolidate carefully',
        'Assess whether similar pages should remain separate or become one stronger resource. Coordinate redirects and link updates where URLs change. Removal requires a considered decision and implementation validation; pruning content is not an automatic route to higher rankings.',
      ],
    ],
  },
  {
    id: 'content-ai-search',
    label: 'CONTENT FOR ANSWERS AND AI SEARCH',
    title: 'Make expertise clear without chasing citation promises.',
    intro:
      'Helpful, reliable content remains the foundation of discoverability. We can assess answer-focused structure and how a subject appears in selected search experiences, with findings connected to the wider editorial plan.',
    cards: [
      [
        'Clear answers and context',
        'Explain important questions directly, then provide the detail and qualifications readers need. Use accurate entities, descriptive headings, and meaningful relationships between pages. Concise formatting should not remove the nuance that makes an answer trustworthy.',
      ],
      [
        'Evidence worth referencing',
        'Include original insight, genuine examples, and appropriately sourced information where available. Confirm authorship and relevant reviewer input. Do not invent data, expert identities, or credentials to make a page appear more likely to be cited.',
      ],
      [
        'Evaluate the limits',
        'Search and AI presentations can change across queries, users, and time. Selected observations do not establish universal visibility or attribution. AEO and GEO work can be scoped separately, with no guarantee of an AI citation, featured answer, or ranking position.',
      ],
    ],
  },
  {
    id: 'content-measurement',
    label: 'MEASUREMENT AND REPORTING',
    title: 'Connect editorial decisions with meaningful evidence.',
    intro:
      'Reporting should show completed work, what readers are finding useful, and what needs investigation. Agree the goals and data sources before judging the strategy through traffic totals or a small set of keyword positions.',
    cards: [
      [
        'Define useful outcomes',
        'Identify the role of content in discovery, education, evaluation, or enquiries. Use qualified leads or revenue only where the systems can support those measures. A page view, ranking, or assisted interaction is not automatically a sale or a complete attribution model.',
      ],
      [
        'Review comparable evidence',
        'Use available Search Console and website evidence, recording periods, publication dates, and relevant business changes. New analytics or conversion tracking require separate decisions. Compare patterns with appropriate context rather than treating every movement as the effect of one content edit.',
      ],
      [
        'Turn findings into priorities',
        'Summarize what shipped, what changed, remaining uncertainty, and recommended next actions. Review topics, formats, refreshes, and journeys in light of evidence. Reporting cadence is agreed; no fixed traffic growth, return on investment, or result timeline is promised.',
      ],
    ],
  },
  {
    id: 'content-tools-engagement',
    label: 'TOOLS AND ENGAGEMENT MODELS',
    title: 'Choose the working model around your editorial needs.',
    intro:
      'A focused strategy project and ongoing production involve different responsibilities. We define the research, planning, writing, review, and implementation requirements before agreeing fees, capacity, or a publication schedule.',
    cards: [
      [
        'Tools that support judgment',
        'Research tools such as Ahrefs or Semrush can provide useful estimates; shared calendars can organize decisions and reviews. Tool scores do not replace editorial judgment. Paid accounts, integrations, data access, and specialized checks are confirmed in the agreed scope.',
      ],
      [
        'Assistive AI and review',
        'Any AI-assisted workflow should be agreed with the client, including confidentiality, permitted inputs, and review responsibilities. Outputs need source checking and editorial oversight. Do not send private business material to an unapproved tool or publish unchecked drafts as expert-reviewed work.',
      ],
      [
        'Strategy, production, or team support',
        'Discuss a defined research and roadmap project, agreed production, or guidance for an in-house team. Confirm article volumes, revision stages, subject-matter access, ownership, and publishing duties. Neither a writer network nor unlimited specialist coverage is assumed.',
      ],
    ],
  },
]
const process = [
  [
    'Discovery and audit',
    'Confirm business goals, audience, existing content, available evidence, expertise, and review responsibilities. Identify practical constraints before proposing a calendar.',
  ],
  [
    'Keyword research',
    'Assess intent, competing results, topic relevance, and existing coverage. Use search estimates alongside customer and business insight instead of treating them as guaranteed demand.',
  ],
  [
    'Topic mapping',
    'Organize useful page purposes and relationships. Decide where an existing resource can be improved and where a new piece would add distinct value.',
  ],
  [
    'Editorial planning',
    'Agree priorities, formats, owners, dependencies, and a realistic schedule. Make approvals and subject-matter inputs part of the plan.',
  ],
  [
    'Production and review',
    'Prepare briefs and the agreed drafts, edits, and asset work. Check claims and sources, then obtain the required business or specialist approvals.',
  ],
  [
    'Optimization and publishing',
    'Review structure, metadata, contextual links, and relevant website requirements. Publish through the agreed workflow, with CMS and implementation responsibilities defined.',
  ],
  [
    'Measurement and iteration',
    'Review available evidence and feedback after publication. Prioritize corrections, refreshes, and later topics within the agreed scope rather than promising immediate results.',
  ],
]
const faqs = [
  [
    'How much does content and keyword strategy cost?',
    'Cost depends on research depth, existing content, topic coverage, briefs, production, review requirements, and implementation support. Paid tools or specialist input may be separate. Share the website, audience, and goals for a scoped proposal rather than a universal rate.',
  ],
  [
    'How long until content produces results?',
    'Research and editorial deliverables can be scheduled, but search visibility and business outcomes vary. Competition, website health, content usefulness, and processing time all matter. No ranking, traffic uplift, or result date is guaranteed; measurement should distinguish completed work from later outcomes.',
  ],
  [
    'Do you write content or only plan it?',
    'Both strategy-only and production scopes can be discussed. Briefs can support your writers, or agreed drafts and editing can be included. Confirm subject-matter input, review stages, assets, CMS entry, publication ownership, and revisions before the work begins.',
  ],
  [
    'Do you use AI to write content?',
    'Any AI assistance is discussed as part of the workflow, including permitted tools, confidentiality, source checking, and human review. It should support useful work rather than publish unchecked material at scale. Private information is not sent to an unapproved tool.',
  ],
  [
    'How many articles per month are included?',
    'There is no fixed article quota on this page. Volume follows complexity, formats, research, expert access, approvals, and budget. Agree quality requirements and production capacity first, then define a realistic publication schedule and the scope for revisions.',
  ],
  [
    'Can you optimize content for AEO or GEO?',
    'Answer-focused structure and reliable information can support the wider content plan. AEO or GEO analysis can be discussed as related scopes. Search and AI results vary, and no specific snippet, citation, platform appearance, or ranking can be guaranteed.',
  ],
  [
    'Can you improve our existing articles instead of writing new ones?',
    'Yes, an agreed audit can assess accuracy, usefulness, overlap, and available performance evidence. Recommendations may include refreshing, retaining, or consolidating pages. Redirects, CMS changes, and removals need an implementation owner and appropriate approval; low traffic alone is not grounds for deletion.',
  ],
]
export function ContentStrategyOptions() {
  return (
    <section className={styles.section} aria-labelledby="content-build-title">
      <div className={styles.heading}>
        <span>WHAT WE DO</span>
        <h2 id="content-build-title">
          Content strategy that connects research with useful publishing.
        </h2>
        <p>
          Connect audience needs, keyword research, topic planning, and a realistic editorial
          workflow. Define what content should help people do before deciding what to publish next.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which SEO service fits your goal?</strong>
        <p>
          This page covers topic research, editorial planning, production, and content improvement.
          For crawlability and the website foundation, see{' '}
          <Link href="/services/technical-onpage-seo/">Technical &amp; On-Page SEO</Link>. For
          business profiles and nearby discovery, explore{' '}
          <Link href="/services/local-google-business-seo/">Local &amp; Google Business SEO</Link>.
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
export function ContentStrategyContent() {
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
                <span>FROM AUDIENCE RESEARCH TO EDITORIAL IMPROVEMENT</span>
                <h2 id="content-process-title">
                  Seven steps from research to publishing and iteration.
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
      <section className={styles.section} aria-labelledby="content-faq-title">
        <div className={styles.heading}>
          <span>CONTENT STRATEGY QUESTIONS</span>
          <h2 id="content-faq-title">Before you start your content project.</h2>
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
      <section className={styles.section} aria-labelledby="content-related-title">
        <div className={styles.heading}>
          <span>CONNECTED SEARCH SERVICES</span>
          <h2 id="content-related-title">
            Connect your content plan with the right supporting work.
          </h2>
        </div>
        <div className={styles.related}>
          {[
            ['Technical & On-Page SEO', 'technical-onpage-seo'],
            ['Local & Google Business SEO', 'local-google-business-seo'],
            ['Answer Engine Optimization', 'aeo'],
            ['Generative Engine Optimization', 'geo'],
            ['Website Design', 'website-design'],
            ['Custom Website Development', 'custom-website-development'],
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

export function ContentStrategyProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="content-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="content-cta-title">Ready to give your content a clearer direction?</h2>
      <p>
        Share your website, audience, goals, existing content, and available expertise. We can
        define the research, editorial plan, and production work that supports your next step.
      </p>
      <Link href="/contact/">
        Start your content project <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
