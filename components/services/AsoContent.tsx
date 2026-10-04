import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './AsoContent.module.css'
const builds = [
  [
    'App Store listing review',
    'Review the iOS product page, audience, categories, metadata, keywords, and creative assets. Identify useful changes within the current App Store Connect requirements and the app’s release process, with publisher approval before submission.',
  ],
  [
    'Google Play listing review',
    'Assess the Android listing’s message, descriptions, graphics, screenshots, and relevant store settings. Use Play Console evidence where available and keep metadata accurate to the real app rather than copying an iOS keyword plan unchanged.',
  ],
  [
    'ASO keyword research',
    'Connect the app’s features and audience vocabulary with store-specific search evidence. Review relevance, competition, and regional differences. Tool estimates guide prioritization but cannot establish exact demand or promise a ranking for a chosen term.',
  ],
  [
    'Metadata and messaging',
    'Clarify the app’s purpose, value, and supported functionality through appropriate fields for each store. Plan revisions with release and approval requirements in mind. Avoid unrelated keywords, unsupported superlatives, or claims the product cannot deliver.',
  ],
  [
    'Screenshots, icons, and previews',
    'Review how the listing communicates the app experience. Creative design or video work can be scoped around approved screens and brand assets. Deliverables, devices, languages, formats, and revision rounds are confirmed before production.',
  ],
  [
    'Product-page testing',
    'Plan experiments around a clear hypothesis and the testing features available for the app. Identify supported assets, suitable audience coverage, and evidence requirements. Metadata revisions and creative experiments are different kinds of work, not interchangeable tests.',
  ],
  [
    'Reviews and localization',
    'Organize genuine feedback, appropriate responses, and regional listing priorities. Review language, messaging, and creative relevance with suitable input. Do not buy ratings, gate reviews, or treat a literal translation as a complete international strategy.',
  ],
  [
    'Measurement and publisher support',
    'Define the store evidence, release context, and decisions an ASO report should support. Coordinate agreed changes with publishers and development teams. New analytics, attribution tools, paid campaigns, and ongoing management require explicit scope.',
  ],
]
const sections = [
  {
    id: 'aso-ios',
    label: 'APP STORE OPTIMIZATION FOR IOS',
    title: 'Use each App Store field for its intended purpose.',
    intro:
      'An iOS product page combines discovery information with a useful explanation of the app. We review the available fields, approved assets, and publisher workflow against current Apple requirements instead of treating every field as a keyword container.',
    cards: [
      [
        'Name, subtitle, and keywords',
        'Review an accurate, recognizable name and a subtitle that explains value. Research relevant terms for the dedicated keyword field within its limits. Avoid competing app names, unrelated terms, and unauthorized trademark use; metadata must reflect the app’s actual functionality.',
      ],
      [
        'Descriptions and creative assets',
        'Explain benefits and important features with approved copy and real app imagery. Promotional text supports timely messages rather than acting as an extra keyword field. Coordinate screenshots and previews with supported devices and current asset requirements.',
      ],
      [
        'Release and approval coordination',
        'Confirm which changes need a version submission or review and who owns that workflow. Consider categories and additional product-page features where relevant. App review, featuring, and approval decisions remain with Apple; optimization cannot guarantee any of them.',
      ],
    ],
  },
  {
    id: 'aso-android',
    label: 'PLAY STORE OPTIMIZATION FOR ANDROID',
    title: 'Build the Google Play listing around the actual app.',
    intro:
      'Google Play has its own fields, assets, policies, and measurement context. We assess the Android audience and listing separately, coordinating recommendations with the publisher rather than assuming that iOS tactics apply to every Play field.',
    cards: [
      [
        'Clear titles and descriptions',
        'Review the title, short description, and full description for relevance and understandable benefits. Use natural language instead of repetitive keyword placement. Claims, categories, and store information should accurately represent functionality and the audience the app serves.',
      ],
      [
        'Graphics and preview content',
        'Plan icons, feature graphics, screenshots, or video around current requirements and genuine app behavior. Make the visual message clear on supported devices. Confirm production scope and approved source assets; a new listing does not automatically include a complete app redesign.',
      ],
      [
        'Console settings and changes',
        'Coordinate listing updates and available experiments with publisher permissions, localization, and release plans. Submission and publishing behavior can vary by change and account. Age ratings and policy declarations must be accurate, rather than altered as an optimization tactic.',
      ],
    ],
  },
  {
    id: 'aso-keywords',
    label: 'APP STORE KEYWORD RESEARCH',
    title: 'Choose relevant terms before chasing popularity.',
    intro:
      'Keyword work starts with the app, user tasks, and market. Store-specific evidence and competitor observations help identify themes, but relevance and a credible listing matter more than filling every field with high-volume phrases.',
    cards: [
      [
        'Audience vocabulary',
        'Map the features and problems people expect the app to solve. Review brand and non-brand discovery intent, language differences, and actual product capabilities. A term should make sense to the user who reaches the listing, not only appear attractive in a research tool.',
      ],
      [
        'Opportunity and competition',
        'Compare available demand estimates, observed results, and competitor positioning. Use these inputs to prioritize hypotheses rather than claim knowledge of a store’s complete algorithm. Record the region, date, and limitations of observations before interpreting a movement in position.',
      ],
      [
        'A platform-specific plan',
        'Map selected themes to the fields each store provides and their current rules. Keep a record of changes, releases, and localization decisions. Research scope and tracking coverage are agreed; neither unlimited keyword monitoring nor a fixed ranking target is assumed.',
      ],
    ],
  },
  {
    id: 'aso-creatives',
    label: 'CREATIVE OPTIMIZATION AND TESTING',
    title: 'Show why the app is useful, then test a clear idea.',
    intro:
      'Screenshots and other listing assets should communicate a real app experience. Creative work begins with the audience and message, while experiments help assess selected changes when the app has suitable access, features, and traffic.',
    cards: [
      [
        'A coherent screenshot story',
        'Choose approved screens that explain important tasks and benefits. Plan the sequence, captions, and readability for the target devices and languages. Do not show fictional features or invented awards; illustrative website mockups are separate from assets submitted to a store.',
      ],
      [
        'Supported experiments',
        'Apple product page optimization supports eligible creative treatments; Google Play offers store listing experiments with its own supported assets and text. Confirm the available test types before planning them. These tools do not provide an unrestricted A/B test for every metadata field.',
      ],
      [
        'Interpret results carefully',
        'Agree the hypothesis, audience, test duration, and evidence needed to make a decision. Avoid changing unrelated elements mid-test. Limited traffic or inconclusive results may call for further investigation, not a declaration that a winning asset guarantees more installs.',
      ],
    ],
  },
  {
    id: 'aso-reviews',
    label: 'RATINGS AND REVIEW MANAGEMENT',
    title: 'Use genuine feedback to improve the listing and product.',
    intro:
      'Reviews reveal questions, friction, and expectations that marketing alone cannot solve. We can define a feedback and response process while coordinating product issues with the people who maintain the app.',
    cards: [
      [
        'Appropriate review prompts',
        'Discuss platform-provided review flows and suitable timing with developers. Respect the platform’s presentation and frequency rules. Do not pre-screen people for positive sentiment, offer rewards for ratings, or assume that a review prompt will always appear.',
      ],
      [
        'Responses and escalation',
        'Agree who monitors feedback, approves responses, and handles sensitive issues. Answer helpfully without exposing private user information. Monitoring coverage and response cadence are scoped; real-time alerts or replies in every language are not automatic deliverables.',
      ],
      [
        'Product and release learning',
        'Group recurring issues and share them with the product team. A misleading listing or a broken journey may need product changes, not different keywords. Store ratings and legitimate negative reviews cannot be controlled or removed on demand by an optimization service.',
      ],
    ],
  },
  {
    id: 'aso-localization',
    label: 'LOCALIZATION AND INTERNATIONAL ASO',
    title: 'Adapt the message to the markets you can support.',
    intro:
      'International work connects language, user expectations, store availability, and the app’s capabilities. Prioritize regions deliberately and confirm translation, review, and operational support instead of assuming that localized assets alone create a suitable product.',
    cards: [
      [
        'Choose markets with context',
        'Review available audience and store evidence, existing languages, and business priorities. Agree the countries, languages, and devices in scope. Country-level visibility and conversion can differ, so a result from one market is not a forecast for every region.',
      ],
      [
        'Localize more than words',
        'Adapt metadata, screenshot captions, and imagery with appropriate language review. Consider terminology and product availability. Translation services, native-language reviewers, and additional creative versions are confirmed before being included in the deliverables.',
      ],
      [
        'Validate and maintain',
        'Check the listing against the app experience and current store requirements. Assign responsibility for updates when features or messages change. Localization should not imply language support that the app lacks, and no multiple-of-install-growth promise is made.',
      ],
    ],
  },
  {
    id: 'aso-ranking-measurement',
    label: 'DISCOVERY FACTORS AND MEASUREMENT',
    title: 'Separate observed changes from guaranteed outcomes.',
    intro:
      'Store discovery and conversion are related but different questions. We review relevant metadata, app quality, listing presentation, and available evidence without claiming access to a private algorithm or a formula for ranking first.',
    cards: [
      [
        'Discovery and product quality',
        'Assess how the listing represents the app and how user feedback relates to the product experience. Discuss quality concerns with engineers where relevant. Updates should improve the app or communicate meaningful changes rather than follow an arbitrary ranking-driven release schedule.',
      ],
      [
        'Store funnel evidence',
        'Review available impressions, page views, acquisitions, conversion, or other relevant console measures. Confirm each platform’s definitions and coverage. Installs are not automatically retained users or revenue, and a metric from one console may not match another data source.',
      ],
      [
        'Reporting with release context',
        'Record metadata changes, creative tests, markets, and important app releases alongside the evidence. Note uncertainty and processing delays. Agree reporting cadence and decisions to revisit instead of promising a particular ranking, install increase, or outcome date.',
      ],
    ],
  },
  {
    id: 'aso-paid-organic',
    label: 'PAID AND ORGANIC COORDINATION',
    title: 'Use campaign evidence without assuming organic uplift.',
    intro:
      'If the publisher already runs paid acquisition, relevant evidence may inform messaging and audience hypotheses. Paid campaign management and ad spend are separate scopes; this page does not imply that buying installs guarantees organic rankings.',
    cards: [
      [
        'Shared message and audience',
        'Coordinate approved campaign messages with the app listing so users understand what to expect. Consider audience-specific pages where supported and relevant. Confirm ownership and the available platform features before adding campaign-related listing deliverables.',
      ],
      [
        'Evidence and attribution limits',
        'Review paid and organic sources separately where the configured systems support it. Conversion or attribution can be affected by privacy choices and platform definitions. Do not treat ad activity as proof that an ASO change caused a wider improvement.',
      ],
      [
        'Budget and implementation ownership',
        'New ads, account integrations, attribution SDKs, or tracking require explicit agreement, permissions, and budget. Collaboration can be scoped with your acquisition team. No advertising account is created and no campaign or SDK is activated as part of this website update.',
      ],
    ],
  },
  {
    id: 'aso-tools-engagement',
    label: 'ASO TOOLS AND ENGAGEMENT MODELS',
    title: 'Agree the apps, markets, assets, and responsibilities.',
    intro:
      'A focused audit, creative project, and ongoing ASO engagement involve different work. We define coverage, publisher access, review stages, and implementation ownership before agreeing fees or a schedule.',
    cards: [
      [
        'Research and console tools',
        'App Store Connect and Play Console supply platform evidence where access permits. Tools such as AppTweak, Sensor Tower, or Mobile Action may support research. Estimates are not exact outcomes; paid subscriptions, integrations, and monitoring coverage are agreed separately.',
      ],
      [
        'Audit or creative delivery',
        'An audit can provide findings, metadata recommendations, and a roadmap. Creative work can cover specified screenshots, icons, or previews. Confirm production formats, licensing, languages, revision rounds, and publisher approval; submission and development are included only when scoped.',
      ],
      [
        'Ongoing or multi-app support',
        'Define app and market coverage, testing capacity, reporting, and a prioritized backlog. Additional apps or regions can change the workload. The agreement governs access and approvals, without implying unlimited testing, a free audit, specialist certification, or guaranteed results.',
      ],
    ],
  },
]
const process = [
  [
    'Discovery and listing audit',
    'Confirm the apps, stores, audience, markets, assets, current listings, and available evidence. Agree publisher access, approvals, and delivery boundaries.',
  ],
  [
    'Keyword research',
    'Review relevant themes and platform-specific search evidence. Prioritize the app’s actual purpose and audience rather than unrelated popular terms.',
  ],
  [
    'Metadata plan',
    'Prepare accurate recommendations for the appropriate store fields. Coordinate localization and submission requirements with the publisher before changes go live.',
  ],
  [
    'Creative development and testing',
    'Plan the agreed assets and supported experiments around clear hypotheses. Confirm device formats, source screens, review stages, and test evidence requirements.',
  ],
  [
    'Reviews and product feedback',
    'Define appropriate prompt guidance, responses, and escalation. Share recurring concerns with the product team without incentivizing or filtering feedback.',
  ],
  [
    'Launch and monitoring',
    'Publish only approved changes through the agreed process. Record releases and review available discovery and conversion evidence with its limitations.',
  ],
  [
    'Iteration and localization',
    'Prioritize further metadata, creative, or market work from evidence. Define ongoing capacity and avoid treating every change as a guaranteed improvement.',
  ],
]
const faqs = [
  [
    'How much does App Store Optimization cost?',
    'Cost depends on stores, apps, markets, research depth, creative production, testing, and ongoing support. Paid tools or localization services may be separate. Share your listings and requirements for a scoped proposal; no universal monthly fee is published here.',
  ],
  [
    'How long until we see ASO results?',
    'Listing deliverables can be scheduled, but store processing, traffic, competition, and product quality affect outcomes. Tests also need sufficient evidence. No ranking, install increase, or result date is guaranteed; reporting separates completed work from later observations.',
  ],
  [
    'Do you handle both the App Store and Google Play?',
    'The scope can cover either or both stores. Metadata, assets, testing features, and release workflows differ, so recommendations are platform-specific. Confirm your apps, publisher access, target markets, and supported languages during discovery.',
  ],
  [
    'Do you design screenshots and app icons?',
    'Creative production can be included for agreed assets, devices, languages, and revision rounds. Source screens and brand material must accurately reflect the app and have appropriate rights. Videos, product redesign, implementation, and store submission are separate unless explicitly scoped.',
  ],
  [
    'Can you help with ratings and reviews?',
    'An engagement can define appropriate review prompts, monitoring, response guidance, and escalation. Prompt implementation may need developer work. No fake reviews, incentives, positive-feedback filtering, guaranteed ratings, or removal of legitimate criticism is offered.',
  ],
  [
    'Can you support multiple apps or international markets?',
    'Multi-app or regional work can be scoped with clear priorities, markets, asset coverage, access, and reporting. Translation and native-language review responsibilities are confirmed. Results and testing needs differ across apps and regions; one universal plan is not assumed.',
  ],
  [
    'Do you need our store account password?',
    'No. Use invited access with suitable roles for the agreed tasks while retaining publisher ownership. Some changes need developer input or publisher approval. Review, featuring, and publication decisions remain with the stores, and any paid campaign or new tracking requires separate authorization.',
  ],
]
export function AsoOptions() {
  return (
    <section className={styles.section} aria-labelledby="aso-build-title">
      <div className={styles.heading}>
        <span>WHAT WE DO</span>
        <h2 id="aso-build-title">App Store Optimization for discovery and listing clarity.</h2>
        <p>
          Connect store-specific research, accurate metadata, creative assets, and a practical
          measurement plan. Focus the work on the app and audience before deciding which listing
          changes to prioritize.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which SEO service fits your goal?</strong>
        <p>
          ASO focuses on app stores rather than website search. For the app experience, explore{' '}
          <Link href="/services/app-design/">App Design</Link>. For website search foundations, see{' '}
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
  )
}
export function AsoContent() {
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
                <span>FROM LISTING AUDIT TO CONTINUOUS IMPROVEMENT</span>
                <h2 id="aso-process-title">
                  Seven steps from listing review to testing and iteration.
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
      <section className={styles.section} aria-labelledby="aso-faq-title">
        <div className={styles.heading}>
          <span>APP STORE OPTIMIZATION QUESTIONS</span>
          <h2 id="aso-faq-title">Before you start your ASO project.</h2>
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
      <section className={styles.section} aria-labelledby="aso-related-title">
        <div className={styles.heading}>
          <span>CONNECTED SEARCH SERVICES</span>
          <h2 id="aso-related-title">Connect app discovery with design and development.</h2>
        </div>
        <div className={styles.related}>
          {[
            ['iOS App Development', 'ios-app-development'],
            ['Android App Development', 'android-app-development'],
            ['App Design', 'app-design'],
            ['Technical & On-Page SEO', 'technical-onpage-seo'],
            ['Content & Keyword Strategy', 'content-keyword-strategy'],
            ['Product Design', 'product-design'],
          ].map(([name, slug]) => (
            <Link key={slug} href={`/services/${slug}/`}>
              {name}
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.cta}`} aria-labelledby="aso-cta-title">
        <span>YOUR NEXT STEP</span>
        <h2 id="aso-cta-title">Ready to give your app a clearer store presence?</h2>
        <p>
          Share your app links, target stores, markets, current assets, and discovery concerns. We
          can define the research, listing, creative, and measurement work that supports your next
          step.
        </p>
        <Link href="/contact/">
          Start your ASO project <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </>
  )
}
