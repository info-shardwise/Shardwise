import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './AeoContent.module.css'
const builds = [
  [
    'Answer opportunity audit',
    'Review important questions, existing pages, current search features, and competing sources. Identify gaps in clarity, evidence, and coverage before choosing content to improve. The audit records the search context rather than assuming every query displays an answer box.',
  ],
  [
    'Featured snippet optimization',
    'Shape useful definitions, lists, comparisons, and explanations around the intent behind each question. Keep answers understandable outside their original paragraph while retaining supporting detail. Search engines select snippets; formatting cannot reserve or purchase a placement.',
  ],
  [
    'People Also Ask research',
    'Explore related questions and group them into meaningful topics. Connect genuine customer concerns with existing pages or new briefs. Prioritize useful coverage rather than publishing a separate thin page for every variation of the same question.',
  ],
  [
    'Conversational answer content',
    'Write natural questions and direct explanations that work well when read or heard. Review terminology, local context, and follow-up needs. Assistant outputs vary by product, device, language, and settings; a clear answer does not guarantee a spoken recommendation.',
  ],
  [
    'Structured data review',
    'Match suitable markup to the actual page content and current platform support. Review visible questions, entities, and relationships without treating schema as a ranking shortcut. Validation checks the implementation; it does not prove that a search feature will appear.',
  ],
  [
    'Answer-focused content briefs',
    'Give writers a primary question, supporting subquestions, source requirements, and an appropriate page structure. Define who reviews specialist claims and how readers can explore the topic further. The brief guides useful editorial work rather than mechanical keyword repetition.',
  ],
  [
    'AEO and GEO coordination',
    'Connect traditional search answers with the broader goal of useful source material for AI experiences. Keep technical SEO, evidence, and reader value central. Agree whether AI citation research is included and track sampled observations separately from website traffic.',
  ],
  [
    'Monitoring and refresh',
    'Track an agreed question set, page changes, and available search performance. Record dates, markets, devices, and sampling limitations. Use findings to prioritize revisions; no fixed click-through uplift, permanent snippet ownership, or universal reporting coverage is assumed.',
  ],
]
const sections = [
  {
    id: 'aeo-definition',
    label: 'WHAT IS ANSWER ENGINE OPTIMIZATION?',
    title: 'Make the answer clear, and the supporting detail useful.',
    intro:
      'Answer Engine Optimization (AEO) is a way of organizing accurate, accessible content around the questions people ask. The aim is to help readers find a useful answer and make that answer easier for search systems to understand.',
    cards: [
      [
        'An extension of good SEO',
        'AEO shares the foundations of search optimization: discoverable pages, relevant content, a usable experience, and trustworthy information. It focuses editorial work on answer-oriented queries and formats. It is not a separate search-engine program or an alternative to technical SEO.',
      ],
      [
        'AEO, GEO, and local discovery',
        'This page focuses on featured snippets, related questions, and conversational content. GEO extends the scope to generative answers and citations. Local SEO addresses real business information and local intent, while AEO concerns app stores. These labels overlap and should guide scope rather than create duplicate pages.',
      ],
      [
        'From a question to a useful source',
        'A useful page can lead with a concise answer, explain the reasoning, show relevant examples, and link to related information. The appropriate depth depends on the question. Neither a prescribed word count nor a particular heading guarantees selection by an answer system.',
      ],
    ],
  },
  {
    id: 'aeo-snippets',
    label: 'FEATURED SNIPPET OPTIMIZATION',
    title: 'Choose the format that explains the question best.',
    intro:
      'Featured snippet work starts with the actual search results and the task a reader needs to complete. We review the page, its answer structure, and the evidence behind it before recommending changes.',
    cards: [
      [
        'Definitions and direct explanations',
        'Introduce the subject clearly and answer the main question without an unnecessary preamble. Keep qualifications close to the claim. A short opening can help readers, but important exceptions should not disappear just to meet an arbitrary answer-length target.',
      ],
      [
        'Lists, steps, and comparisons',
        'Use ordered steps for a sequence, a list for distinct items, and a table when readers need to compare consistent attributes. Provide context around each format and use accessible HTML. The structure should support comprehension rather than imitate an unrelated competing snippet.',
      ],
      [
        'Search context and implementation',
        'Record which features appear for selected questions, their source pages, and the market being checked. Improve existing coverage where appropriate and coordinate technical fixes separately. Search systems decide whether to show a snippet and which source to use; placement can change after publication.',
      ],
    ],
  },
  {
    id: 'aeo-paa',
    label: 'PEOPLE ALSO ASK OPTIMIZATION',
    title: 'Turn related questions into a coherent content map.',
    intro:
      'People Also Ask can reveal follow-up concerns, different interpretations, and missing explanations. It is one research input alongside customer enquiries, existing content, and available search data.',
    cards: [
      [
        'Research questions in context',
        'Review related questions for the agreed topics and markets, noting when and where they were observed. Expanded question sets can change and are not a complete measure of demand. Check that each proposed question is relevant to your audience and offer.',
      ],
      [
        'Group intent before creating pages',
        'Separate questions that need different answers from variations that belong on the same page. Assign a primary destination and connect supporting pages with useful internal links. Avoid repetitive FAQ blocks or dozens of nearly identical pages designed only to capture search terms.',
      ],
      [
        'Answer with enough supporting detail',
        'Use a meaningful question heading where it helps readers, then give a direct response and the context needed to act. Include credible evidence for factual claims and review sensitive topics with appropriate expertise. Monitor selected results without describing sampled appearances as permanent ownership.',
      ],
    ],
  },
  {
    id: 'aeo-voice',
    label: 'VOICE SEARCH AND CONVERSATIONAL CONTENT',
    title: 'Write answers that make sense when read aloud.',
    intro:
      'Conversational queries often express a complete question or immediate task. Clear language and accurate context support that experience, while assistant behavior remains dependent on the platform and the situation.',
    cards: [
      [
        'Natural questions and readable answers',
        'Use vocabulary your customers understand. Explain abbreviations, remove ambiguous references, and keep the relationship between question and answer clear. Concision is useful, but there is no universal spoken-answer word count that works for every device or query.',
      ],
      [
        'Local and practical context',
        'For location-dependent questions, use accurate published business information and genuine service coverage. Coordinate relevant work with Local & Google Business SEO. Do not create fictional offices or imply that content work can guarantee a particular assistant recommends your business.',
      ],
      [
        'Platform-specific testing',
        'Any assistant checks are scoped by product, language, device, and permissions. Record them as observations, not a comprehensive voice-search analytics feed. Specialized markup such as speakable is assessed only where the content and current platform requirements make it appropriate.',
      ],
    ],
  },
  {
    id: 'aeo-schema',
    label: 'FAQ SCHEMA AND STRUCTURED ANSWERS',
    title: 'Describe the page accurately, without promising a rich result.',
    intro:
      'Structured data can describe content and its relationships. It must reflect what visitors can actually read and use; a technically valid object is not a guarantee of search visibility.',
    cards: [
      [
        'Useful FAQs come first',
        'Publish genuine questions with complete, visible answers. FAQPage markup can describe that content, but Google no longer displays its FAQ rich result feature. We do not sell FAQ markup as a route to an expanded Google listing. Current support is checked before choosing an implementation.',
      ],
      [
        'Choose a suitable content type',
        'An editorial FAQ is different from a community page where users submit alternative answers. Select types according to the page’s actual function. Do not apply QAPage to ordinary marketing FAQs or assume HowTo and speakable markup create a supported search feature for any website.',
      ],
      [
        'Validation and maintenance',
        'Review syntax, required properties, visible-content consistency, and current feature support. Use appropriate validators and eligible rich-result tests, recognizing their different purposes. Define an owner to revisit markup after content changes and platform updates rather than treating validation as a one-time ranking fix.',
      ],
    ],
  },
  {
    id: 'aeo-ai',
    label: 'AEO AND AI OVERVIEWS',
    title: 'Build useful source material across answer experiences.',
    intro:
      'AI Overviews, AI Mode, and other generative experiences broaden where people encounter answers. The shared foundation is useful, reliable content with clear context and sound technical access.',
    cards: [
      [
        'Evidence beyond generic summaries',
        'Include meaningful expertise, real examples, and original information where available. Explain the source and limitations of claims, keep facts current, and make supporting information easy to find. Do not manufacture statistics or testimonials to make a page appear authoritative.',
      ],
      [
        'Technical foundations remain relevant',
        'Review indexability, internal linking, readable text, and appropriate content controls with the technical SEO team. Google’s AI search features do not require a special AI schema or new machine-readable file. Meeting technical requirements does not guarantee indexing or inclusion.',
      ],
      [
        'Coordinate the GEO scope',
        'For AI citation research and broader generative visibility, connect the project with GEO. Define which platforms, prompts, languages, and markets are sampled. Separate the observed answers from aggregate search performance, and avoid claiming that a content change guarantees citations or caused every traffic movement.',
      ],
    ],
  },
  {
    id: 'aeo-content',
    label: 'ANSWER-FIRST CONTENT STRATEGY',
    title: 'Give each question an editorial purpose and a clear home.',
    intro:
      'AEO content planning connects what readers want to know with your actual expertise and services. It supports useful page improvements, new briefs, and ongoing updates rather than isolated answer fragments.',
    cards: [
      [
        'Briefs with sources and review owners',
        'Specify the main question, audience, intended answer, supporting points, evidence, and next action. Identify who supplies product knowledge and who approves specialist claims. Research, writing, design, and implementation responsibilities are confirmed rather than assumed to be included in every audit.',
      ],
      [
        'Topic relationships and reader journeys',
        'Connect definitions, comparisons, tutorials, and service pages through relevant links. Keep each page’s purpose distinct and provide enough context to make the answer useful. A question heading alone is not a reason to split an established topic into multiple low-value destinations.',
      ],
      [
        'Refresh and international context',
        'Revisit outdated examples, changed products, and unanswered follow-up questions. Regional or multilingual work requires appropriate language review and locally relevant evidence. Define markets, translation responsibilities, approval stages, and refresh capacity in the scope; unlimited new content is not implied.',
      ],
    ],
  },
  {
    id: 'aeo-measurement',
    label: 'AEO MEASUREMENT AND REPORTING',
    title: 'Separate completed work from observed search outcomes.',
    intro:
      'A practical report combines the changes delivered, selected search observations, and performance data you can actually access. It explains the limits of the evidence as well as the next decision.',
    cards: [
      [
        'An agreed baseline and question set',
        'Select important queries and pages, record current answer features, and establish dates and market settings. Note competing sources and existing technical constraints. A sampled result set cannot establish the full share of answers across every search, device, language, or personalized experience.',
      ],
      [
        'Search performance with context',
        'Use Search Console where access permits to review queries, pages, impressions, and clicks. AI search traffic is included in aggregate Web performance rather than a standalone attribution report. Search changes, seasonality, competition, and other site work can affect results alongside the AEO project.',
      ],
      [
        'Decisions and accountable follow-up',
        'Report content changes, validation findings, sampled appearances, and priority actions together. Agree the reporting cadence and owners. Conversion analysis uses only authorized existing data where available; no new analytics, advertising pixels, or paid tracking service is activated by this page update.',
      ],
    ],
  },
  {
    id: 'aeo-tools',
    label: 'AEO TOOLS AND ENGAGEMENT MODELS',
    title: 'Match the research and delivery scope to your team.',
    intro:
      'A focused review, a content implementation project, and ongoing AEO support involve different effort and access. We agree the deliverables, dependencies, and responsibilities before proposing a fee.',
    cards: [
      [
        'Research and validation tools',
        'Search Console, direct result checks, Schema.org validation, and suitable Google tests can support evidence gathering. Tools such as AlsoAsked, AnswerThePublic, Semrush, or Ahrefs may support question research and tracking. Their estimates and coverage differ; paid licenses and integrations are agreed separately.',
      ],
      [
        'A defined audit or delivery project',
        'A focused audit can cover selected pages, questions, content gaps, markup, and a prioritized roadmap. A delivery project can add agreed briefs, writing, or development. Confirm page counts, revisions, approvals, access, and implementation ownership; there is no automatic free audit or published universal price.',
      ],
      [
        'Ongoing support or an integrated plan',
        'An ongoing engagement can allocate capacity to refreshes, monitoring, new questions, and collaboration with SEO or GEO. Agree cadence, markets, scope changes, and reporting expectations. Your team retains account ownership and grants suitable invited access rather than sharing passwords.',
      ],
    ],
  },
]
const process = [
  [
    'Discovery and answer audit',
    'Agree audiences, topics, pages, markets, access, and business goals. Record existing answer coverage and technical constraints, then define what the audit and implementation will include.',
  ],
  [
    'Question and intent research',
    'Combine customer questions, related searches, existing performance, and relevant competitor observations. Group intent and select a manageable set of questions that your expertise can answer well.',
  ],
  [
    'Content structure and briefs',
    'Map questions to existing or proposed pages. Define direct answers, supporting evidence, examples, internal links, and editorial review owners. Keep each page useful as a complete source.',
  ],
  [
    'Content and markup implementation',
    'Deliver the agreed revisions and suitable structured data. Coordinate CMS or development changes through the approval process, matching markup to visible content and current platform support.',
  ],
  [
    'Validation and quality review',
    'Check readability, accessibility, source accuracy, page access, markup, and intended links. Review changes before publication; validators cannot establish future placement or answer selection.',
  ],
  [
    'Monitoring and reporting',
    'Record delivered work and review the agreed questions and available search data. Explain sampling, attribution, and access limits, and distinguish observed changes from proven causes.',
  ],
  [
    'Refresh and iteration',
    'Prioritize further answers or improvements from evidence and business needs. Assign owners and agree ongoing capacity, keeping facts, examples, and platform guidance current.',
  ],
]
const faqs = [
  [
    'What is AEO, and how is it different from SEO?',
    'AEO focuses content work on answering audience questions clearly, including opportunities in featured snippets and related questions. It depends on the same useful content and technical foundations as SEO. These services overlap; AEO is a focus within a wider search strategy, not a separate guaranteed placement system.',
  ],
  [
    'How much does AEO cost?',
    'Cost depends on pages, topics, research depth, writing, implementation, markets, and ongoing monitoring. Paid tools may be separate. Share your site and priorities for a scoped proposal; this page does not publish a universal price or promise a free audit.',
  ],
  [
    'How long until we see results from AEO?',
    'Deliverables can be scheduled, but crawling, indexing, competition, and search-system decisions affect outcomes. No result date, click-through improvement, or permanent answer placement is guaranteed. Reporting separates work completed from later sampled observations and available search performance.',
  ],
  [
    'Do you handle both AEO and GEO?',
    'The project can coordinate answer-focused content with GEO research for generative experiences. We define the platforms, topics, markets, and deliverables separately while sharing useful content and SEO foundations. AI citations and traditional search answers are not guaranteed outcomes.',
  ],
  [
    'Can you help us win featured snippets?',
    'We can review relevant opportunities and improve answer clarity, structure, supporting detail, and technical access. Search engines choose whether to display a snippet and which source to use. We cannot mark a page as the selected answer, buy placement, or guarantee ownership.',
  ],
  [
    'Do you offer ongoing AEO support?',
    'Ongoing support can be scoped around content refreshes, question research, selected result checks, and agreed reporting. Define capacity, approvals, implementation ownership, and any paid tooling before starting. Unlimited content production or monitoring across every assistant is not implied.',
  ],
  [
    'Will FAQ schema make our answers appear in Google?',
    'No. Google no longer displays the FAQ rich result feature. FAQPage can still describe visible FAQ content, but markup is not a promise of search display or ranking. We assess current support and use appropriate structured data for the page’s real function.',
  ],
]
export function AeoOptions() {
  const definition = sections[0]
  if (!definition) return null
  return (
    <>
      <section className={styles.section} aria-labelledby="aeo-definition">
        <div className={styles.heading}>
          <span>{definition.label}</span>
          <h2 id="aeo-definition">{definition.title}</h2>
          <p>{definition.intro}</p>
        </div>
        <div className={styles.stack}>
          {definition.cards.map(([title, text]) => (
            <article key={title} data-reveal="up">
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.section} aria-labelledby="aeo-build-title">
        <div className={styles.heading}>
          <span>WHAT WE DO</span>
          <h2 id="aeo-build-title">Answer-focused research, content, and implementation.</h2>
          <p>
            Connect audience questions with clear answers, credible evidence, and an editorial plan.
            Choose improvements that help people understand your offer and make the next decision.
          </p>
        </div>
        <div className={styles.note}>
          <strong>Which SEO service fits your goal?</strong>
          <p>
            AEO focuses on structured answers and related questions. For generative experiences,
            explore <Link href="/services/geo/">GEO</Link>. For search foundations, see{' '}
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
export function AeoContent() {
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
      <section className={styles.section} aria-labelledby="aeo-process-title">
        <>
          <div className={styles.processHeading}>
            <span>FROM QUESTION RESEARCH TO USEFUL ANSWERS</span>
            <h2 id="aeo-process-title">Seven steps from answer audit to continuous improvement.</h2>
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
      {sections.slice(1).map((section, index) => (
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
      <section className={styles.section} aria-labelledby="aeo-faq-title">
        <div className={styles.heading}>
          <span>ANSWER ENGINE OPTIMIZATION QUESTIONS</span>
          <h2 id="aeo-faq-title">Before you start your AEO project.</h2>
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
      <section className={styles.section} aria-labelledby="aeo-related-title">
        <div className={styles.heading}>
          <span>CONNECTED SEARCH SERVICES</span>
          <h2 id="aeo-related-title">Connect useful answers with your wider search strategy.</h2>
        </div>
        <div className={styles.related}>
          {[
            ['Technical & On-Page SEO', 'technical-onpage-seo'],
            ['Content & Keyword Strategy', 'content-keyword-strategy'],
            ['GEO', 'geo'],
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

export function AeoProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="aeo-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="aeo-cta-title">Ready to answer the questions your customers ask?</h2>
      <p>
        Share your website, priority topics, markets, existing content, and search concerns. We can
        define the question research, editorial work, technical review, and measurement that support
        your next step.
      </p>
      <Link href="/contact/">
        Start your AEO project <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
