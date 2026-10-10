import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './AppDesignContent.module.css'
const builds = [
  [
    'iPhone app design',
    'Plan the main tasks, navigation, and interface states of an iPhone app. Consider platform conventions, text scaling, safe areas, and one-handed use alongside your brand. Agree supported devices and operating-system versions with the development team.',
  ],
  [
    'Android app design',
    'Design mobile journeys around Android navigation and interaction patterns. Consider system back behavior, adaptable layouts, and relevant Material components. Connect the visual direction to the actual implementation approach rather than treating Android as an identical copy of iOS.',
  ],
  [
    'Cross-platform experiences',
    'Create shared foundations for apps targeting both platforms, with deliberate differences where users expect them. Confirm framework constraints and component availability early. Shared branding can coexist with platform-specific navigation, controls, and permission flows.',
  ],
  [
    'Tablet and iPad layouts',
    'Use additional space to improve navigation, reading, editing, or comparison rather than simply enlarging a phone screen. Plan layout changes and relevant input methods with real content. Supported orientations and multitasking behavior are defined in scope.',
  ],
  [
    'Foldable and adaptive interfaces',
    'Discuss how journeys respond to changing window sizes and available space. Identify content that can become a secondary pane and states that should persist through layout changes. Device coverage and implementation testing are confirmed with developers.',
  ],
  [
    'Watch companion experiences',
    'Explore focused, glanceable tasks for watchOS or Wear OS where a companion experience serves the product. Keep the interaction set small and confirm platform feasibility, device scope, and engineering support before adding wearable deliverables to the project.',
  ],
  [
    'Onboarding and core journeys',
    'Design first-run guidance, permissions, empty states, and the tasks that make the app useful. Help people reach value with clear explanations and recoverable steps. Include returning users and interrupted journeys rather than only a successful first session.',
  ],
  [
    'App design systems and redesigns',
    'Organize reusable components, platform variants, and interaction states for growing teams. Existing apps can start with a focused audit and prioritized improvements. Agree whether the engagement covers a single journey, shared foundations, or a broader interface redesign.',
  ],
]
const sections = [
  {
    id: 'app-platform-design',
    label: 'PLATFORM-SPECIFIC DESIGN',
    title: 'One brand, with patterns that suit each platform.',
    intro:
      'Mobile interfaces live alongside system controls and familiar navigation. We use platform guidance as a reference and work with developers to decide where shared design makes sense and where the experience should differ.',
    cards: [
      [
        'iOS interface patterns',
        'Review Apple’s Human Interface Guidelines alongside the target app and supported versions. Consider navigation, sheets, controls, text scaling, and system integration. Additional surfaces such as widgets need explicit design and implementation scope.',
      ],
      [
        'Android interface patterns',
        'Use Android design guidance and relevant Material components to inform navigation, controls, and adaptive layouts. Consider back behavior and different window sizes. Confirm component choices against the framework and versions your development team will support.',
      ],
      [
        'Shared foundations, intentional differences',
        'Keep identity, language, and task priorities consistent while allowing platform-appropriate behavior. Document variants instead of forcing every screen to match. Review accessibility, theme needs, and engineering constraints before deciding what to reuse.',
      ],
    ],
  },
  {
    id: 'app-research',
    label: 'UX RESEARCH AND DISCOVERY',
    title: 'Understand the situations behind the screens.',
    intro:
      'Mobile use can involve interruptions, limited attention, and changing connectivity. Research should answer the decisions your team needs to make, using existing evidence and the access to users available for the project.',
    cards: [
      [
        'Listen and review evidence',
        'Discuss user needs with stakeholders and review available feedback, support themes, or app-store reviews. Interviews can be scoped where useful. Recruitment, participant numbers, consent, and research methods are agreed rather than implied by a fixed package.',
      ],
      [
        'Map tasks and exceptions',
        'Identify priority journeys, roles, navigation, and information needs. Include permission denial, interrupted work, loading, errors, and empty content. A task map helps the team distinguish essential launch functionality from features that can follow later.',
      ],
      [
        'Agree success questions',
        'Define what a better experience should make easier and how that could be assessed. Use existing data only with appropriate access and consent. New analytics, session recording, or experiments are separate implementation decisions, not automatic additions to an app.',
      ],
    ],
  },
  {
    id: 'app-design-systems',
    label: 'UI AND APP DESIGN SYSTEMS',
    title: 'Build consistency into components and states.',
    intro:
      'A usable app needs more than polished screenshots. Reusable foundations help teams preserve a coherent experience as features grow, while making important interaction states visible to the people implementing them.',
    cards: [
      [
        'Visual foundations',
        'Establish typography, spacing, color, iconography, and hierarchy around your brand and platform needs. Consider light and dark themes where included. Check font and icon licensing and review contrast and text expansion with representative content.',
      ],
      [
        'Components and variants',
        'Define navigation, buttons, inputs, lists, cards, and other recurring elements with the required states. Document platform variants and usage guidance. Coded components, automated token exports, and ongoing library governance require explicit ownership and scope.',
      ],
      [
        'Accessible interaction guidance',
        'Consider text scaling, touch targets, focus, labels, and alternatives to gesture-only actions. Specify calm motion and reduced-motion behavior. Screen-reader behavior must also be reviewed in the implemented app; a design file alone cannot establish accessibility compliance.',
      ],
    ],
  },
  {
    id: 'app-prototyping-testing',
    label: 'PROTOTYPING AND USER TESTING',
    title: 'Review the journey before committing to the build.',
    intro:
      'A prototype helps people experience the proposed flow and discuss it concretely. The right fidelity depends on the questions being tested, and the findings should feed back into design decisions.',
    cards: [
      [
        'Prototype priority flows',
        'Connect core screens, onboarding, and selected exceptions in an interactive prototype. Make the testing boundaries clear: simulated data, device features, and network behavior may differ from a working app. Avoid treating a prototype as production-ready software.',
      ],
      [
        'Test with relevant people',
        'Agree moderated or unmoderated sessions, recruitment, and the tasks participants will attempt. Device-based review can reveal layout and interaction concerns. The method and number of sessions follow the questions, budget, and participant access rather than an invented quota.',
      ],
      [
        'Document and refine',
        'Record observed problems, uncertainty, and changes supported by the findings. Prioritize issues with stakeholders and developers. Confirm review rounds and acceptance criteria; specialist accessibility testing and production experiments can be included as separate work.',
      ],
    ],
  },
  {
    id: 'app-onboarding-retention',
    label: 'ONBOARDING AND RETURNING USE',
    title: 'Help people reach value and return with confidence.',
    intro:
      'Good onboarding explains the app without delaying its useful tasks. Returning-use design focuses on clarity, control, and meaningful continuity; it does not promise a retention uplift or depend on manipulative patterns.',
    cards: [
      [
        'Make the first session useful',
        'Introduce only what is needed to begin. Use clear empty states, progressive guidance, and recoverable setup steps. Explain permission requests in context and account for declined access without trapping users in a repeated prompt or blocked journey.',
      ],
      [
        'Respect attention and control',
        'Design notification settings and relevant reminders around user preferences and available product functionality. Make opt-outs and settings understandable. Notification infrastructure, campaign management, and permission implementation belong to the development and operating scope.',
      ],
      [
        'Support interrupted journeys',
        'Consider drafts, saved progress, session expiry, and offline limitations with engineers. Clearly communicate what has been saved or failed. If post-launch measurement is agreed, evaluate hypotheses from actual evidence rather than presenting guaranteed retention targets.',
      ],
    ],
  },
  {
    id: 'app-design-handoff',
    label: 'DESIGN HANDOFF AND COLLABORATION',
    title: 'Connect the design to the native development team.',
    intro:
      'An organized handoff helps developers understand the intent, platform variants, and exceptions behind a screen. Design-only deliverables guide implementation; they do not include a built app or store release unless agreed.',
    cards: [
      [
        'Files, specifications, and assets',
        'Provide agreed source files, component references, layout guidance, and export-ready assets. Confirm ownership, access, and licensing in the agreement. Keep naming and documentation usable for the developers who will maintain the app.',
      ],
      [
        'Platform and interaction detail',
        'Review how the design maps to SwiftUI, Jetpack Compose, or the chosen cross-platform stack. Document relevant states, gestures, transitions, and responsive rules. Coded token libraries, custom animations, and integrations are not automatic design-only deliverables.',
      ],
      [
        'Build-stage reviews',
        'Scope handoff sessions and implementation reviews around priority journeys. Agree responsibility for device testing, accessibility checks, content, and release preparation. iOS or Android development can be discussed alongside design or handled by your existing engineering team.',
      ],
    ],
  },
  {
    id: 'app-redesigns',
    label: 'MOBILE APP REDESIGNS',
    title: 'Improve existing journeys in manageable stages.',
    intro:
      'Start with how the current app is used, where people encounter friction, and which constraints matter. A redesign can focus on important journeys or shared components before extending to the rest of the product.',
    cards: [
      [
        'Audit the current experience',
        'Review navigation, visual consistency, reported problems, and available evidence with your team. Identify useful patterns to retain and issues worth investigating. Research depth and any technical or accessibility audit are confirmed before the engagement begins.',
      ],
      [
        'Prioritize with engineering',
        'Compare expected user value, dependencies, and implementation effort. Plan how updated screens coexist with older parts of the app. Account for permissions, existing data, and familiar workflows rather than assuming a visual refresh has no migration cost.',
      ],
      [
        'Learn from a phased release',
        'Coordinate rollout and feedback with the product team where support is included. Revisit decisions using appropriate evidence after release. Design changes cannot guarantee ratings, retention, or an interruption-free rollout; testing and release ownership remain explicit.',
      ],
    ],
  },
  {
    id: 'app-tools-engagement',
    label: 'TOOLS AND WORKING MODELS',
    title: 'Agree the tools, deliverables, and review rhythm.',
    intro:
      'Choose a scope that fits the product stage and the people who will use the work. We define the research, design, and handoff needs before agreeing fees, capacity, or a schedule.',
    cards: [
      [
        'Collaborative design and prototyping',
        'Figma can support shared files, component libraries, comments, and prototypes. More specialized research or motion tools can be discussed where needed. Subscriptions, data access, participant recruitment, and tool integrations are confirmed rather than assumed.',
      ],
      [
        'A defined project or ongoing design',
        'A focused engagement can cover agreed journeys and review stages. Ongoing support can help prioritize new screens and improvements. Confirm capacity, revision boundaries, decision makers, and backlog ownership without assuming a dedicated designer or unlimited revisions.',
      ],
      [
        'Design-only or design and development',
        'Work with your existing engineers or discuss a combined design and build scope. Provide the platforms, users, core tasks, current app, and target date. Estimates reflect the actual complexity and deliverables; no universal sprint length or starting rate is published here.',
      ],
    ],
  },
]
const process = [
  [
    'Discovery and research',
    'Confirm users, goals, platforms, available evidence, and engineering constraints. Agree research methods, missing inputs, decision makers, and the boundaries of the engagement.',
  ],
  [
    'Strategy and information architecture',
    'Map core tasks, navigation, and important exceptions. Prioritize features and identify what belongs in the initial scope versus later iterations.',
  ],
  [
    'Wireframes',
    'Explore low-fidelity flows and screen structure with representative content. Review onboarding, key actions, and interrupted or unsuccessful journeys before detailed styling.',
  ],
  [
    'UI and component design',
    'Develop the visual direction, components, platform variants, and required interaction states. Align the design with supported devices and the chosen development approach.',
  ],
  [
    'Prototype and testing',
    'Model priority journeys and conduct the agreed reviews or usability sessions. Summarize findings, refine the design, and distinguish validated decisions from remaining assumptions.',
  ],
  [
    'Developer handoff',
    'Organize specifications, assets, source files, and review sessions. Confirm implementation ownership, build-stage support, testing responsibilities, and any coded deliverables.',
  ],
  [
    'Post-launch iteration',
    'Where support is agreed, review feedback and available evidence after release. Prioritize improvements through a defined scope rather than assuming indefinite support or guaranteed metrics.',
  ],
]
const faqs = [
  [
    'How much does app design cost?',
    'Cost depends on platforms, journeys, screen states, research, components, prototypes, and handoff support. Specialist testing, subscriptions, and participant recruitment may be separate. Share the app and requirements for a scoped proposal rather than a universal package price.',
  ],
  [
    'How long does app design take?',
    'Timing depends on complexity, evidence and content readiness, platform differences, engineering input, feedback, and approvals. A focused onboarding flow and a whole-app redesign involve different work. Share your target date so launch priorities can be discussed before setting a schedule.',
  ],
  [
    'Do you design for iOS, Android, or both?',
    'The scope can cover either platform or both. Shared branding is balanced with platform-specific behavior and component choices. Confirm target devices, operating-system versions, framework, and any tablet or wearable requirements during discovery.',
  ],
  [
    'Do you also build the app?',
    'Design-only work supplies the agreed layouts, specifications, assets, and prototypes. Development, integrations, testing, and store release require a build scope. We can discuss iOS or Android development or collaborate with your existing engineering team.',
  ],
  [
    'Can you redesign our existing app?',
    'Yes, a redesign can focus on navigation, core journeys, visual consistency, or shared components. We review available evidence and work with your team to prioritize changes. Migration, release planning, and post-launch support are defined separately rather than assumed.',
  ],
  [
    'What do we receive at the end of the project?',
    'The agreement defines source-file access, screens, component references, platform variants, prototypes, specifications, and assets. Ownership, licenses, revision stages, and implementation support are confirmed. A prototype or design system does not automatically include production code.',
  ],
  [
    'Do you include user testing and accessibility work?',
    'Research, usability testing, and accessibility review can be scoped around the decisions the app needs. Methods, participants, device coverage, and review rounds are agreed. Accessibility guidance in design must be followed by implementation testing; formal compliance is not guaranteed by visual layouts.',
  ],
]
export function AppDesignOptions() {
  return (
    <section className={styles.section} aria-labelledby="app-build-title">
      <div className={styles.heading}>
        <span>WHAT WE DESIGN</span>
        <h2 id="app-build-title">Mobile app design for the tasks that matter.</h2>
        <p>
          Design mobile UX, native interaction patterns, and adaptable interfaces around real user
          tasks. Agree the platforms, device needs, and handoff requirements before defining the
          visual direction.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which design service fits your project?</strong>
        <p>
          For broader software workflows, explore{' '}
          <Link href="/services/product-design/">Product Design</Link>. For marketing and content
          sites, see <Link href="/services/website-design/">Website Design</Link>. App Design
          focuses on mobile journeys and platform-specific interfaces.
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
export function AppDesignContent() {
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
                <span>FROM DISCOVERY TO APP ITERATION</span>
                <h2 id="app-process-title">Seven steps from research to handoff and learning.</h2>
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
      <section className={styles.section} aria-labelledby="app-faq-title">
        <div className={styles.heading}>
          <span>APP DESIGN QUESTIONS</span>
          <h2 id="app-faq-title">Before you start your app design project.</h2>
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
      <section className={styles.section} aria-labelledby="app-related-title">
        <div className={styles.heading}>
          <span>THE MOBILE PRODUCT LIFECYCLE</span>
          <h2 id="app-related-title">Connect app design with the right next step.</h2>
        </div>
        <div className={styles.related}>
          {[
            ['iOS App Development', 'ios-app-development'],
            ['Android App Development', 'android-app-development'],
            ['Product Design', 'product-design'],
            ['App Store Optimization', 'app-store-optimization'],
            ['Website Design', 'website-design'],
            ['Logo Design', 'logo-design'],
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

export function AppDesignProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="app-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="app-cta-title">Have an app that needs better design?</h2>
      <p>
        Share your app, users, target platforms, important journeys, and current challenges. Let’s
        define the research, interface design, and developer handoff work that supports your next
        step.
      </p>
      <Link href="/contact/">
        Start your app design project <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
