import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './ProductDesignContent.module.css'
const builds = [
  [
    'SaaS product experiences',
    'Design onboarding, navigation, core tasks, and account states around the users and roles of the product. Review what customers need to accomplish before organizing features into screens, especially where permissions and workspace context affect the experience.',
  ],
  [
    'Dashboards and data products',
    'Make complex information easier to interpret through clear hierarchy, filters, comparison, and useful empty states. Discuss data freshness, units, and decision context so a visually attractive dashboard also helps users understand what action to take.',
  ],
  [
    'B2B workflows and internal tools',
    'Map the steps, approvals, handoffs, and exceptions behind a business process. Design for different responsibilities and frequent tasks, with attention to error recovery and the information staff need to complete work confidently.',
  ],
  [
    'Marketplaces and platforms',
    'Consider the journeys of different participant groups, such as buyers, sellers, administrators, or partners. Define discovery, status, communication, and operational states together rather than designing only the ideal first-time customer path.',
  ],
  [
    'Mobile-connected products',
    'Scope how the wider product experience connects with mobile usage, accounts, and workflows. Dedicated iOS or Android interaction work can be discussed through App Design, while this service addresses the broader software-product experience.',
  ],
  [
    'AI-assisted interfaces',
    'Plan clear input, result, review, and recovery states where an AI feature is part of the product. Make uncertainty, user control, and consequential actions understandable. A design concept does not guarantee model accuracy or remove the need for product safeguards.',
  ],
  [
    'Developer and operational tools',
    'Organize technical workflows, setup, configuration, and feedback around the intended users. Review terminology and information density with the team so specialists can work efficiently without relying on undocumented knowledge.',
  ],
  [
    'Existing-product redesigns',
    'Review a live product’s problems and constraints before deciding what to change. Prioritize useful improvements and a feasible rollout rather than assuming that replacing every screen is necessary to improve the experience.',
  ],
]
const sections = [
  {
    id: 'product-research',
    label: 'UX RESEARCH & DISCOVERY',
    title: 'Understand the tasks before designing the screens.',
    intro:
      'Product design starts with the questions that matter for the project. Existing evidence, stakeholder knowledge, and user access shape the research plan. Agree the methods and depth rather than assuming a fixed number of interviews suits every product.',
    cards: [
      [
        'Questions and evidence',
        'Review goals, audiences, workflows, support issues, and available product evidence. Distinguish observations from assumptions. Research should answer a decision the team needs to make rather than collect material that never changes the design.',
      ],
      [
        'Interviews and workflow mapping',
        'Where participant access is available, scope interviews, workshops, or task observation. Agree recruitment, consent, sensitive-data handling, and who supplies access. Map important journeys and exceptions with enough context to understand different roles and needs.',
      ],
      [
        'Synthesis and priorities',
        'Summarize findings, open questions, and implications for the design. Personas or journey maps should reflect evidence where used. Agree the most important problems and success criteria before moving into detailed layouts.',
      ],
    ],
  },
  {
    id: 'product-ui',
    label: 'UI DESIGN & COMPONENT SYSTEMS',
    title: 'Design the states that make a product usable.',
    intro:
      'High-fidelity screens need more than a successful default state. Define loading, empty, error, permission, and completion behavior alongside the visual hierarchy. Reusable components help the team maintain consistency as features grow.',
    cards: [
      [
        'Visual foundations',
        'Scope typography, color, spacing, icons, and layout principles around the brand and content. Define responsive behavior and any required themes. A design should remain understandable with long labels, real data, and different viewport sizes.',
      ],
      [
        'Components and interaction states',
        'Document controls, navigation, forms, tables, and feedback with meaningful variants. Include focus, validation, disabled, and selected states where relevant. Coordinate behavior with engineering so the design does not imply functionality or data the product cannot provide.',
      ],
      [
        'Accessibility requirements',
        'Agree the accessibility target and review contrast, reading order, keyboard behavior, and assistive-technology expectations. Design review supports implementation, but a prototype alone does not certify the finished product’s accessibility. Formal audits or specialist testing are separately scoped.',
      ],
    ],
  },
  {
    id: 'product-testing',
    label: 'PROTOTYPING & USER TESTING',
    title: 'Test important decisions before committing to the build.',
    intro:
      'Prototypes make journeys tangible and can reveal misunderstandings before detailed implementation. Choose the fidelity around the question being tested. A clickable prototype demonstrates an interaction model, not a working backend or a validated production system.',
    cards: [
      [
        'Focused prototypes',
        'Model important tasks and transitions with representative content and realistic states. Figma or another suitable tool can support the agreed level of interaction. Clarify simulated behavior and constraints so reviewers do not mistake a presentation for completed functionality.',
      ],
      [
        'Usability sessions',
        'Where participants are available, scope moderated or unmoderated tasks and define what to observe. Recruitment, consent, incentives, and research access need agreement. A small study can reveal useful issues without proving that every audience or edge case is represented.',
      ],
      [
        'Iteration and validation',
        'Prioritize findings and review changes against the original question. Agree iteration rounds and what needs retesting. Post-launch experiments require adequate traffic, appropriate measurement, and a separate plan; improved activation or conversion is not guaranteed by prototype testing.',
      ],
    ],
  },
  {
    id: 'product-handoff',
    label: 'DESIGN HANDOFF & ENGINEERING COLLABORATION',
    title: 'Make the intended behavior understandable to developers.',
    intro:
      'Handoff connects visual decisions with the implementation team’s architecture and constraints. Agree documentation, review sessions, and build-stage support before the design is considered complete. A design file should not leave critical behavior to guesswork.',
    cards: [
      [
        'Organized specifications',
        'Supply the agreed screen organization, component references, content examples, and interaction notes. Document responsive behavior, states, and acceptance criteria. Editable files and source access are confirmed in the engagement rather than assumed for every possible tool format.',
      ],
      [
        'Tokens and component alignment',
        'Coordinate naming and reusable patterns with the development team. Token exports, coded libraries, or Storybook integration can be scoped where useful; they are implementation deliverables, not automatic inclusions in a design-only project.',
      ],
      [
        'Implementation review',
        'Define the availability and review scope for questions during the build. Compare important journeys and states with the agreed design and document deviations. Ongoing QA support is a defined commitment rather than an unlimited promise to remain involved until every feature ships.',
      ],
    ],
  },
  {
    id: 'product-systems',
    label: 'DESIGN SYSTEMS AT SCALE',
    title: 'Keep the system usable as teams and features grow.',
    intro:
      'A component library becomes more valuable when teams understand how to use and change it. Start with the product’s existing patterns and the adoption needs of designers and developers before creating an extensive library that nobody maintains.',
    cards: [
      [
        'Audit and shared foundations',
        'Review inconsistent patterns, duplicate components, and existing code constraints. Identify a useful initial set of foundations and components. A system should solve recurring problems, with enough flexibility for real content and feature differences.',
      ],
      [
        'Governance and contribution',
        'Agree ownership, review, versioning, and how changes are communicated. Document when to extend a component and when a new pattern is needed. Deprecation and migration guidance help teams avoid using outdated versions without a replacement path.',
      ],
      [
        'Adoption and maintenance',
        'Scope documentation, onboarding, and alignment with implemented components. Review whether the system is helping the team rather than measuring only the number of assets. Multi-brand support or ongoing governance requires explicit responsibilities and development capacity.',
      ],
    ],
  },
  {
    id: 'product-redesign',
    label: 'PRODUCT REDESIGNS',
    title: 'Improve the experience without losing its context.',
    intro:
      'Existing users, workflows, integrations, and engineering constraints should shape a redesign. Begin with the problems the team can explain and the evidence available. A phased change may be more practical than replacing the full product at once.',
    cards: [
      [
        'Audit the current journeys',
        'Review navigation, terminology, task completion, confusing states, and known support issues. Use authorized analytics or recordings only where available and appropriate. This page update does not add tracking or assume that customer sessions are already being recorded.',
      ],
      [
        'Prioritize and phase the work',
        'Compare the importance of problems with the effort and dependencies of proposed changes. Agree which journeys are redesigned first and which remain stable. Plan how users will understand changed behavior and what support material may be needed.',
      ],
      [
        'Measure and learn',
        'Define success criteria before rollout and use available evidence to review the result. Separate a design hypothesis from a proven outcome. A phased release can reduce uncertainty, but cannot guarantee no user disruption or a fixed improvement in product metrics.',
      ],
    ],
  },
  {
    id: 'product-tools',
    label: 'TOOLS & WORKFLOW',
    title: 'Choose tools that support the team’s decisions.',
    intro:
      'The workflow follows collaboration, research, prototype, and handoff requirements. Tool names are options to evaluate rather than a mandatory bundle. Licensing, workspace ownership, participant access, and data handling need explicit decisions.',
    cards: [
      [
        'Design and collaboration',
        'Figma or a comparable design environment can support layouts, prototypes, libraries, and review. Collaborative workshop tools can help organize research and flows. Confirm the workspace, edit permissions, and deliverable access the client needs after handover.',
      ],
      [
        'Research and measurement',
        'A suitable testing platform can support the agreed study when needed. Existing analytics may inform design with permission, while new recording or tracking tools require a separate privacy and implementation decision. Subscriptions and recruitment costs are scoped explicitly.',
      ],
      [
        'Documentation and code alignment',
        'Coordinate design files, component documentation, and engineering references with the team’s existing workflow. Avoid introducing multiple overlapping tools without a purpose. Code integration and automated accessibility testing are distinct from preparing visual specifications.',
      ],
    ],
  },
  {
    id: 'product-scope',
    label: 'ENGAGEMENT & PROJECT SCOPE',
    title: 'Match design depth to the decisions ahead.',
    intro:
      'Fees and timing depend on discovery, workflows, roles, states, prototypes, testing, system work, and handoff support. Agree deliverables and review milestones before work begins. No fixed price, one-week sprint, or dedicated staffing commitment is published here.',
    cards: [
      [
        'Defined product design project',
        'Scope specific journeys or a product area with discovery, wireframes, UI, and agreed validation. Identify the content, access, and engineering input required. The proposal should explain the deliverables and acceptance criteria rather than count screens alone.',
      ],
      [
        'Focused discovery or redesign',
        'Discuss a research question, usability review, or phased redesign where the product already exists. Findings can guide a separate implementation scope. Recruitment, audit depth, and prototype rounds are confirmed instead of assumed.',
      ],
      [
        'Ongoing design collaboration',
        'Discuss recurring feature design or system work when the roadmap needs it. Agree allocation, priorities, team interfaces, reporting, and support after handoff. Dedicated capacity and continuing iteration depend on availability and explicit commercial terms.',
      ],
    ],
  },
]
const process = [
  [
    'Discovery and research',
    'Review the product, users, business goals, constraints, and available evidence. Agree research questions and the scope of access and participation.',
  ],
  [
    'Strategy and information architecture',
    'Map roles, journeys, navigation, and priorities. Define useful success criteria and dependencies with the product and engineering team.',
  ],
  [
    'Wireframes and flow review',
    'Explore layouts and task paths before committing to detailed UI. Include important exceptions and review the structure with representative content.',
  ],
  [
    'UI and component design',
    'Develop visual foundations, key screens, responsive behavior, and reusable components. Document the interaction states the agreed scope requires.',
  ],
  [
    'Prototype and testing',
    'Model priority journeys and conduct the agreed validation. Summarize findings, refine the design, and identify questions that need production evidence.',
  ],
  [
    'Developer handoff',
    'Organize files, specifications, component references, and review sessions. Confirm implementation support and any coded deliverables separately.',
  ],
  [
    'Post-launch learning',
    'Where ongoing support and measurement are agreed, review feedback and prioritize iterations. Treat results as evidence to assess rather than outcomes guaranteed in advance.',
  ],
]
const faqs = [
  [
    'How much does product design cost?',
    'Cost follows research depth, workflows, roles, interaction states, prototypes, testing, design-system work, and handoff support. Tool subscriptions and participant recruitment may be separate. Share your product and requirements for a scoped proposal; no universal starting rate is published here.',
  ],
  [
    'How long does a product design project take?',
    'Timing depends on scope, access to users, content readiness, engineering input, feedback, and approval cycles. A focused journey and a whole-product redesign involve different work. Share your target date so essential launch decisions can be separated from later improvements.',
  ],
  [
    'Do you include user research or only UI design?',
    'Research and discovery can be scoped around the decisions the product team needs to make. Existing evidence, interviews, workshops, or usability sessions may be appropriate. Methods, recruitment, participant counts, and consent responsibilities are agreed; no fixed interview quota is implied.',
  ],
  [
    'Can you work with our existing development team?',
    'Yes, collaboration can be scoped around your architecture, components, specifications, and implementation reviews. Agree the contacts, review cadence, and handoff support. Coded libraries, Storybook integration, and unlimited build-stage QA are not automatic design-only deliverables.',
  ],
  [
    'Do you design component libraries and design systems?',
    'A system scope can include visual foundations, tokens, components, variants, usage guidance, and governance. Align it with the actual product and codebase. Multi-brand support, code implementation, and ongoing maintenance need explicit ownership and allocation.',
  ],
  [
    'What happens after design handoff?',
    'The agreement defines access to files, documentation, review sessions, and any implementation support. Ongoing product iteration or post-launch measurement can be discussed separately. A handoff does not imply indefinite support or a guaranteed business-metric improvement.',
  ],
  [
    'How is Product Design different from App or Website Design?',
    'Product Design focuses on software workflows, roles, research, UI states, and reusable systems. App Design specializes in mobile interaction patterns. Website Design focuses on marketing, content, and responsive site journeys. The right scope can connect these areas without treating them as identical services.',
  ],
]
export function ProductDesignOptions() {
  return (
    <section className={styles.section} aria-labelledby="product-build-title">
      <div className={styles.heading}>
        <span>WHAT WE DESIGN</span>
        <h2 id="product-build-title">Product design for software people need to use.</h2>
        <p>
          Design the journeys, roles, and interaction states behind a software product. Start with
          the tasks users need to complete, then connect research, UI, and engineering constraints.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which design service fits your project?</strong>
        <p>
          For mobile-specific journeys, explore <Link href="/services/app-design/">App Design</Link>
          . For marketing and content sites, see{' '}
          <Link href="/services/website-design/">Website Design</Link>. This page focuses on
          software-product UX, workflows, and design systems.
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
export function ProductDesignContent() {
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
                <span>FROM DISCOVERY TO PRODUCT ITERATION</span>
                <h2 id="product-process-title">
                  Seven steps from research to handoff and learning.
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
      <section className={styles.section} aria-labelledby="product-faq-title">
        <div className={styles.heading}>
          <span>PRODUCT DESIGN QUESTIONS</span>
          <h2 id="product-faq-title">Before you start your product design project.</h2>
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
      <section className={styles.section} aria-labelledby="product-related-title">
        <div className={styles.heading}>
          <span>THE WEBSITE LIFECYCLE</span>
          <h2 id="product-related-title">Connect product design with the right next step.</h2>
        </div>
        <div className={styles.related}>
          {[
            ['Logo Design', 'logo-design'],
            ['Website Design', 'website-design'],
            ['App Design', 'app-design'],
            ['Web App Development', 'web-app-development'],
            ['iOS App Development', 'ios-app-development'],
            ['Android App Development', 'android-app-development'],
          ].map(([name, slug]) => (
            <Link key={slug} href={`/services/${slug}/`}>
              {name}
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.cta}`} aria-labelledby="product-cta-title">
        <span>YOUR NEXT STEP</span>
        <h2 id="product-cta-title">Have a software product that needs clearer design?</h2>
        <p>
          Share your product, users, important workflows, current challenges, and engineering
          constraints. Let’s define the research, design, and handoff work that supports your next
          step.
        </p>
        <Link href="/contact/">
          Start your product design project <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </>
  )
}
