import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './LogoDesignContent.module.css'
const builds = [
  [
    'Wordmarks',
    'A typographic identity built around the name. Review letterforms, spacing, and legibility against the brand’s tone and real applications. A short name, a long name, and a multilingual identity can need different approaches.',
  ],
  [
    'Lettermarks and monograms',
    'An initials-based mark can support a compact identity when the full name is difficult to use at small sizes. Explore recognizable relationships between letters while checking clarity and the intended reading order.',
  ],
  [
    'Pictorial and abstract marks',
    'A symbol can connect with a product, idea, or visual characteristic. Consider whether a literal or abstract direction fits the audience, and how the mark will be understood with and without the company name.',
  ],
  [
    'Combination marks',
    'A symbol and wordmark can work together as a primary identity, with secondary arrangements for different spaces. Define the relationship between the elements rather than treating every placement as a separate composition.',
  ],
  [
    'Emblems and character-led directions',
    'Badge-like or character-led identities can be explored where the brand and applications justify them. Complexity, reproduction, and small-size clarity need review; specialist illustration or extensive character assets may require a separate scope.',
  ],
  [
    'Responsive logo systems',
    'A primary identity may need compact, horizontal, stacked, or single-color alternatives. Plan these around actual use cases so the logo remains recognizable without forcing one detailed version into every screen or printed surface.',
  ],
]
const sections = [
  {
    id: 'logo-process',
    label: 'THE LOGO DESIGN WORKFLOW',
    title: 'Start with the brand, then develop the mark.',
    intro:
      'Useful logo work connects visual decisions with the audience, positioning, and places the identity will appear. Agree the brief, decision maker, review points, and deliverables before exploration begins so feedback has a shared reference.',
    cards: [
      [
        'A clear starting brief',
        'Discuss the business, audience, values, competitors, existing assets, and practical applications. Identify what should be communicated and what should remain recognizable. Approved names and business claims come from the client.',
      ],
      [
        'Reasoned visual directions',
        'Explore concepts against the brief and explain the reasoning behind them. The number of directions and refinement rounds is agreed in the proposal. Feedback should identify what serves the goal rather than combining every idea into one mark.',
      ],
      [
        'Validation in context',
        'Review the selected direction at meaningful sizes, in one color, on suitable backgrounds, and in representative layouts. Mockups show potential applications; they are not evidence of a shipped client project unless explicitly identified as such.',
      ],
    ],
  },
  {
    id: 'logo-deliverables',
    label: 'LOGO FILES & DELIVERABLES',
    title: 'Know what the handover contains.',
    intro:
      'Agree the delivery checklist before design starts. File formats, lockups, color variants, source files, and application assets depend on the scope and production workflow. The final package should explain what each approved file is intended for.',
    cards: [
      [
        'Vector and raster files',
        'Discuss scalable vector outputs such as SVG or PDF and appropriate raster exports such as transparent PNG. Editable source formats are confirmed with the design workflow; Illustrator, EPS, JPEG, or every possible export is not automatically promised for every engagement.',
      ],
      [
        'Approved variants and lockups',
        'Define the primary logo and any horizontal, stacked, icon-only, or wordmark-only versions required. Agree full-color, dark, light, or grayscale alternatives where useful and test their contrast and reproduction in the intended contexts.',
      ],
      [
        'Practical handover information',
        'Include the agreed naming, dimensions, export guidance, and usage notes. Favicons, social profile assets, stationery, presentation templates, and other collateral can be separately scoped. Fonts and third-party resources may have their own licensing and delivery restrictions.',
      ],
    ],
  },
  {
    id: 'logo-identity',
    label: 'BRAND IDENTITY BEYOND THE LOGO',
    title: 'Connect the mark with a usable visual system.',
    intro:
      'A logo is one part of how a brand communicates. A wider identity scope can establish color, typography, layout, and visual direction so the approved mark is used consistently across websites, products, and everyday materials.',
    cards: [
      [
        'Color and typography',
        'Discuss a palette and type hierarchy suited to the applications. Document agreed digital color values and any print specifications needed. Font availability and licensing should be reviewed before treating a typeface as an asset the client can freely redistribute.',
      ],
      [
        'Supporting visual language',
        'Scope iconography, illustration, photography direction, or layout principles where they serve a defined need. A moodboard establishes a direction; producing a full illustration library, custom font, or photography collection is additional work unless included explicitly.',
      ],
      [
        'Application planning',
        'Identify the first materials that need the new identity, such as a website, app, profile image, or presentation. Prioritize those touchpoints and agree which are designed versus supplied as examples. This avoids assuming that a logo engagement includes a complete redesign of every channel.',
      ],
    ],
  },
  {
    id: 'logo-approach',
    label: 'DESIGN APPROACH & TOOLS',
    title: 'Use the right workflow for a reusable asset.',
    intro:
      'Sketching, vector construction, and collaborative review each have a role. Tool selection follows the agreed deliverables and handover needs. The client should understand the design rationale and how the final assets will be maintained.',
    cards: [
      [
        'Concept and construction',
        'Move from exploratory ideas to considered proportions, letterforms, and shapes. Review the mark in simple form before relying on gradients, effects, or a polished presentation. A useful identity should work in its essential applications.',
      ],
      [
        'Collaboration and source formats',
        'Figma or a vector design tool can support review and production depending on the project. Illustrator or other native source files are agreed where needed. The application used does not by itself determine ownership, licensing, or the scope of delivered working files.',
      ],
      [
        'Legibility and reproduction',
        'Review small-size recognition, background choices, color combinations, and reproduction limits. Provide simpler alternatives where appropriate. An identity review does not certify accessibility compliance for every future website or guarantee identical color reproduction on all printers and screens.',
      ],
    ],
  },
  {
    id: 'logo-refresh',
    label: 'LOGO REFRESHES & REBRANDS',
    title: 'Decide what to preserve before changing the identity.',
    intro:
      'An established business may need a careful refresh rather than a completely new logo. Review recognition, practical problems, brand changes, and existing applications before deciding how much of the identity should change.',
    cards: [
      [
        'Focused logo refresh',
        'Refine spacing, geometry, typography, or reproduction while retaining useful recognizable elements. Establish which changes matter and compare the proposed direction in existing contexts. A refresh is not an automatic guarantee that every audience will respond in the same way.',
      ],
      [
        'New identity direction',
        'A wider rebrand may be appropriate when positioning, audience, or business structure changes. Agree discovery depth, naming responsibilities, decision makers, and the identity elements included. Brand strategy and naming work are not silently added to a logo-only scope.',
      ],
      [
        'Rollout and migration',
        'Inventory the touchpoints that use the old identity and prioritize updates. Define who changes websites, profiles, documents, and printed stock. Rollout support can be scoped separately, with clear handover dates and guidance for using old and new assets during a transition.',
      ],
    ],
  },
  {
    id: 'logo-guidelines',
    label: 'LOGO USAGE & BRAND GUIDELINES',
    title: 'Make consistent use easier for the next person.',
    intro:
      'Guidelines translate the approved design into practical instructions. Agree whether the project needs a short usage sheet or a broader brand document, and make examples reflect the applications the business actually uses.',
    cards: [
      [
        'Space, size, and placement',
        'Document clear space, minimum recommended sizes, alignment, and approved arrangements. Explain when to choose a compact version instead of shrinking the primary logo beyond legibility. The rules should be easy for a non-designer to follow.',
      ],
      [
        'Color and background behavior',
        'Show approved color versions on suitable backgrounds and examples of incorrect use. Avoid stretching, recoloring, or adding effects that undermine recognition. Print guidance and special production requirements are confirmed with the intended supplier or medium.',
      ],
      [
        'Digital, print, and partners',
        'Discuss web, social, email signatures, packaging, or co-branding where required. Partner lockups and collateral templates are scoped explicitly. Keep the guide and source of approved assets easy to find so future work does not begin from outdated copies.',
      ],
    ],
  },
  {
    id: 'logo-scope',
    label: 'PROJECT SCOPE & ENGAGEMENT',
    title: 'Choose the depth your identity project needs.',
    intro:
      'Pricing and timing depend on discovery, concept exploration, refinement, deliverables, and the number of applications. A proposal should separate the design scope from licensed resources, collateral production, and rollout work. No fixed packages or starting rates are published here.',
    cards: [
      [
        'Logo-focused project',
        'Scope the brief, agreed concept directions, refinement rounds, final variants, and delivery files. Confirm who approves decisions and how feedback is consolidated. Additional concepts or major changes to an approved brief need a clear change process.',
      ],
      [
        'Logo and identity foundations',
        'Discuss color, typography, a practical usage guide, and selected application assets alongside the logo. The scope should identify each deliverable rather than treat a full brand book or unlimited collateral as an automatic inclusion.',
      ],
      [
        'Refresh or wider rebrand',
        'Review existing assets and recognition before setting the work plan. Agree strategy depth, rollout responsibilities, and any ongoing support. Rights, licensing, source-file delivery, and portfolio permissions are documented in the agreement rather than assumed.',
      ],
    ],
  },
]
const process = [
  [
    'Discovery and positioning',
    'Discuss the audience, business, values, existing identity, competitors, and intended applications. Agree the brief and decision makers.',
  ],
  [
    'Research and visual direction',
    'Review references and moodboards to establish a useful direction. Separate inspiration from assets that can be used in the final identity.',
  ],
  [
    'Concept development',
    'Explore the agreed number of directions, with reasoning and representative context. Review concepts against the brief before choosing a direction.',
  ],
  [
    'Refinement',
    'Consolidate feedback and improve the chosen mark within the agreed revision scope. Check proportion, spacing, and practical reproduction.',
  ],
  [
    'Final variants',
    'Prepare the approved lockups and color alternatives. Validate intended sizes and formats before assembling the delivery package.',
  ],
  [
    'Delivery and guidance',
    'Supply the agreed files and usage notes. Explain asset selection, licensing dependencies, and the next rollout steps.',
  ],
]
const faqs = [
  [
    'How much does logo design cost?',
    'The estimate depends on discovery, concepts, revisions, variants, guidelines, and application assets. Licensed fonts or other resources may be separate. Share your requirements for a scoped proposal; sample package prices are not published as Shardwise rates.',
  ],
  [
    'How long does a logo project take?',
    'Timing follows scope, review cycles, decision-maker availability, and required deliverables. A refresh and a wider identity project can involve different work. Share any launch deadline early so approvals and rollout requirements can be included in the plan.',
  ],
  [
    'How many concepts and revisions are included?',
    'The proposal confirms concept directions, refinement rounds, and how feedback is provided. No fixed count or unlimited revisions are implied. Changes to the brief or extra concepts are reviewed through the agreed scope-change process.',
  ],
  [
    'Do I own the logo after the project?',
    'Ownership or license terms, transfer conditions, working-file delivery, and permitted use are documented in the agreement. Third-party fonts and resources can have separate licenses. Unselected concepts and portfolio permissions should also be addressed rather than assuming every working asset transfers automatically.',
  ],
  [
    'Can you refresh our existing logo?',
    'An existing identity can be reviewed for recognition, legibility, reproduction, and current business needs. A focused refresh may preserve useful elements; a wider rebrand may need additional discovery and rollout planning. Share current files and key applications for scoping.',
  ],
  [
    'Can we discuss a full brand identity?',
    'Yes, a wider scope can include color, typography, guidelines, and selected application assets. Strategy, naming, illustration, stationery, and templates are defined individually in the proposal. A logo-only engagement does not automatically include every brand deliverable.',
  ],
  [
    'Is trademark clearance or registration included?',
    'Design work does not guarantee trademark availability or registration. Any required clearance, searches, legal advice, or filing should be arranged with an appropriate qualified professional and documented separately. Share known naming or jurisdiction constraints early.',
  ],
]
export function LogoDesignOptions() {
  return (
    <section className={styles.section} aria-labelledby="logo-build-title">
      <div className={styles.heading}>
        <span>WHAT WE DESIGN</span>
        <h2 id="logo-build-title">Logo directions shaped around your brand.</h2>
        <p>
          Choose a logo approach around the name, audience, brand character, and places it will
          appear. The right identity balances recognition with practical use across different sizes
          and formats.
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
export function LogoDesignContent() {
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
                <span>FROM BRIEF TO FINAL ASSETS</span>
                <h2 id="logo-process-title">Six steps from discovery to logo handover.</h2>
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
      <section className={styles.section} aria-labelledby="logo-faq-title">
        <div className={styles.heading}>
          <span>LOGO DESIGN QUESTIONS</span>
          <h2 id="logo-faq-title">Before you start your logo project.</h2>
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
      <section className={styles.section} aria-labelledby="logo-related-title">
        <div className={styles.heading}>
          <span>THE WEBSITE LIFECYCLE</span>
          <h2 id="logo-related-title">Carry the identity into your digital experience.</h2>
        </div>
        <div className={styles.related}>
          {[
            ['Product Design', 'product-design'],
            ['Website Design', 'website-design'],
            ['App Design', 'app-design'],
            ['Custom Website Development', 'custom-website-development'],
            ['Technical & On-Page SEO', 'technical-onpage-seo'],
          ].map(([name, slug]) => (
            <Link key={slug} href={`/services/${slug}/`}>
              {name}
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.cta}`} aria-labelledby="logo-cta-title">
        <span>YOUR NEXT STEP</span>
        <h2 id="logo-cta-title">Have a logo or identity project in mind?</h2>
        <p>
          Share your business, audience, existing identity, intended applications, and launch
          timing. Let’s define the design scope and the assets you need.
        </p>
        <Link href="/contact/">
          Start your logo project <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </>
  )
}
