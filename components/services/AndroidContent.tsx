import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './AndroidContent.module.css'

const buildOptions = [
  [
    'Native Android products',
    'Kotlin applications for customer journeys, business workflows, and connected services. A first release should solve a clear problem, with navigation and interaction patterns that feel familiar to Android users.',
  ],
  [
    'Adaptive tablet experiences',
    'Larger screens call for deliberate content organization and navigation. Tablet support, orientation changes, and multi-window behavior are scoped around the audience rather than treated as enlarged phone layouts.',
  ],
  [
    'Foldable-aware layouts',
    'When foldables are included, plan for changing window sizes and continuity as the device changes posture. Agree the relevant hardware and user journeys before promising specialist behavior across every model.',
  ],
  [
    'Existing app modernization',
    'Review a current Android product before planning interface changes, Kotlin migration, API updates, or release fixes. Incremental improvements can protect useful functionality while addressing the parts that make the product hard to maintain.',
  ],
]
const sections = [
  {
    id: 'android-stack',
    label: 'KOTLIN-FIRST FOUNDATIONS',
    title: 'Technology chosen for the product, not the checklist.',
    intro:
      'The existing service centers on native Kotlin development. The interface toolkit, architecture, backend, and automation choices should reflect the project and any code you already have.',
    cards: [
      [
        'Language and interface',
        'Kotlin provides the application foundation. Jetpack Compose can be evaluated for new UI, while existing Java and XML-based screens may call for incremental interoperability rather than an immediate rewrite.',
      ],
      [
        'State and data flows',
        'Separate presentation, business rules, and data access. Plan asynchronous work, cancellation, persistence, and error handling around real user journeys; architecture labels alone do not make an application maintainable.',
      ],
      [
        'Build and delivery',
        'Android Studio and Gradle support the development workflow. Agree signing ownership, configuration, build documentation, and any automated checks so the project can be maintained after handover.',
      ],
    ],
  },
  {
    id: 'android-devices',
    label: 'DEVICE COVERAGE',
    title: 'Handle fragmentation with an agreed test matrix.',
    intro:
      'Android devices vary in screen size, OS version, manufacturer behavior, memory, and network conditions. Coverage begins with your audience and an explicit support policy, rather than a promise to test every device.',
    cards: [
      [
        'Phones and OS versions',
        'Choose representative devices and minimum supported versions based on the product audience. Validate navigation, text scaling, permissions, and important journeys on the agreed matrix.',
      ],
      [
        'Window sizes and lifecycle',
        'Test resizing, rotation, backgrounding, process recreation, and interrupted tasks where relevant. Preserve meaningful state so a returning user can understand what happened instead of unexpectedly starting over.',
      ],
      [
        'Specialist form factors',
        'Wear OS, Android TV, automotive experiences, and widgets need separate UX, feasibility, and distribution discussions. They are not automatically included in a phone app engagement.',
      ],
    ],
  },
  {
    id: 'android-release',
    label: 'GOOGLE PLAY READINESS',
    title: 'Prepare the listing, testing, and release together.',
    intro:
      'Release preparation is more than uploading a build. Play Console access, app information, policy declarations, and testing dependencies should have named owners from the beginning.',
    cards: [
      [
        'Account and release ownership',
        'Agree who owns the developer account, package identity, signing configuration, and release decisions. Keep the publishing business in control of its account and document the access needed for delivery.',
      ],
      [
        'Accurate store information',
        'Prepare listing copy, screenshots, support information, and applicable content declarations. Data safety information needs to match actual data handling, including third-party SDK behavior.',
      ],
      [
        'Testing before production',
        'Use the relevant internal, closed, or open testing workflow to gather feedback. Account-specific production access requirements should be checked early; review and approval remain Google’s decisions.',
      ],
    ],
  },
  {
    id: 'android-integrations',
    label: 'CONNECTED FEATURES',
    title: 'Make integrations work beyond the happy path.',
    intro:
      'Identify the external systems behind each feature and what users see when access is denied, a connection fails, or a service is unavailable. SDK selection and ongoing costs are part of the scope discussion.',
    cards: [
      [
        'Backend and authentication',
        'Connect agreed APIs and identity systems with clear contracts for roles, session expiry, validation, and retry behavior. Backend readiness is a dependency to resolve before estimating the entire mobile journey.',
      ],
      [
        'Maps, messages, and device access',
        'Location, notifications, camera, and media features should request permissions in a clear context. Google services, Firebase, or other providers are selected only when the product requires them.',
      ],
      [
        'Payments and specialist features',
        'Subscriptions, payment flows, health data, and machine-learning features require additional feasibility and platform-policy review. Provider accounts, billing arrangements, and regulated requirements must be clarified before implementation.',
      ],
    ],
  },
  {
    id: 'android-security',
    label: 'PRIVACY & RELIABILITY',
    title: 'Build security into the application decisions.',
    intro:
      'Document what the app collects, where information goes, and which permissions it needs. Technical safeguards and accurate disclosures support the product; legal or regulated obligations require the appropriate specialist review.',
    cards: [
      [
        'Protect sensitive operations',
        'Plan secure network communication, suitable local storage, and appropriate use of Android security facilities for keys and authentication. Keep secrets out of client-visible configuration and avoid unnecessary sensitive data collection.',
      ],
      [
        'Validate critical journeys',
        'Check sign-in, account actions, API failures, and permission denial against agreed acceptance criteria. Accessibility, responsiveness, and resource use belong in testing alongside the main feature checklist.',
      ],
      [
        'Review release requirements',
        'Check current target API, permission, SDK, and Play policy requirements during release preparation. Do not assume a one-time submission keeps the product compatible or eligible indefinitely.',
      ],
    ],
  },
  {
    id: 'android-support',
    label: 'AFTER LAUNCH',
    title: 'Keep compatibility and product improvements on the roadmap.',
    intro:
      'A release creates new information: user feedback, device-specific issues, and changes in platform requirements. A defined support scope makes those responsibilities visible.',
    cards: [
      [
        'Compatibility and maintenance',
        'Plan agreed OS compatibility checks, dependency updates, bug fixes, and release preparation. Policy or target API changes should be evaluated for the actual app rather than tied to an unverified deadline on this page.',
      ],
      [
        'Monitoring and rollout decisions',
        'Crash and stability tools can be configured within scope, with clear ownership of alerts and reports. For eligible updates, a staged rollout can help limit exposure while stability is observed; rollout percentages are a release decision.',
      ],
      [
        'Continuous iteration',
        'Prioritize improvements based on the product’s goals and evidence. Feature work, store listing updates, support coverage, and response expectations are agreed separately rather than assumed to be unlimited.',
      ],
    ],
  },
  {
    id: 'android-engagement',
    label: 'ENGAGEMENT OPTIONS',
    title: 'Choose a milestone with clear boundaries.',
    intro:
      'Pricing, delivery dates, dependencies, and acceptance criteria are confirmed after the project is understood. No fixed starting price or team allocation is assumed.',
    cards: [
      [
        'A defined first release',
        'Scope the essential journey, design, implementation, testing, and release preparation. Separate launch requirements from ideas that can wait until the product has real feedback.',
      ],
      [
        'A focused improvement',
        'Address agreed problems in an existing app, from adaptive layouts to integration or release readiness. Begin with enough technical review to understand risk and avoid misleading estimates.',
      ],
      [
        'Ongoing product work',
        'Plan a sequence of improvements and maintenance around agreed priorities. Confirm availability, review cadence, reporting, ownership, and included support in the project terms.',
      ],
    ],
  },
]
const process = [
  [
    'Discover the audience and scope',
    'Define the core journey, device audience, backend dependencies, and release goal. Agree what is included and what your team needs to supply.',
  ],
  [
    'Design for Android',
    'Prototype navigation and important screen states with Android conventions in mind. Consider responsive layouts, touch targets, accessibility, and permission explanations.',
  ],
  [
    'Implement in Kotlin',
    'Develop modular features, connect agreed services, and handle asynchronous data and lifecycle changes. Keep configuration and responsibilities understandable.',
  ],
  [
    'Test devices and beta builds',
    'Validate the agreed device matrix and distribute test builds through the suitable Play Console track. Collect feedback before making the app widely available.',
  ],
  [
    'Prepare Play Console submission',
    'Coordinate listing assets, release configuration, review access, and applicable declarations with the account owner. Resolve outstanding testing and policy dependencies.',
  ],
  [
    'Release with a monitoring plan',
    'Agree rollout responsibilities, stability signals, and escalation steps. Production access and review timing depend on Google; staged rollouts apply where supported.',
  ],
  [
    'Handover and iterate',
    'Document build steps, dependencies, and operational ownership. Define the next maintenance or feature milestone rather than leaving support responsibilities implicit.',
  ],
]
const faqs = [
  [
    'How much does Android app development cost?',
    'Cost depends on features, design, backend readiness, device coverage, integrations, and release work. Share your core user journey and budget constraints so a proposal can distinguish essential scope from later improvements.',
  ],
  [
    'How long will development and launch take?',
    'The schedule is agreed after discovery. Feedback, existing code, external systems, account setup, and Google Play testing or review can affect the launch. A delivery estimate should identify these dependencies instead of guaranteeing a universal timeline.',
  ],
  [
    'How do you handle Android device fragmentation?',
    'We define a support policy and representative device matrix around the intended audience. Screen sizes, OS versions, manufacturer behavior, and key journeys guide testing. Coverage is scoped explicitly; testing every Android model is not promised.',
  ],
  [
    'Can you help with Google Play submission?',
    'Release preparation can cover Play Console coordination, listing assets, testing tracks, declarations, and build readiness as agreed. Google controls production access, policy review, and approval, so approval or a fixed review date cannot be guaranteed.',
  ],
  [
    'Can you build both Android and iOS versions?',
    'Android and iOS development are both listed services. Discovery should determine whether separate native implementations or a shared-code approach fits the product. Platform parity, integrations, and release responsibilities must be scoped for both platforms.',
  ],
  [
    'What happens after the Android app launches?',
    'Ongoing maintenance and feature work can be agreed separately. Define monitoring where configured, bug triage, compatibility work, release responsibilities, and response expectations in the support scope.',
  ],
  [
    'Will tablets, foldables, or Wear OS be included?',
    'Only the agreed device coverage is included. Tablets and foldables need specific layout and behavior testing; watches, TV, and automotive experiences require separate feasibility and interface work. Tell us which devices your audience actually uses.',
  ],
]
export function AndroidBuildOptions() {
  return (
    <section className={styles.section} aria-labelledby="android-build-title">
      <div className={styles.heading}>
        <span>WHAT WE BUILD</span>
        <h2 id="android-build-title">Android products built around your users’ devices.</h2>
        <p>
          Native development, adaptive interfaces, and a realistic support policy give the project a
          clear starting point. Choose the experience your audience needs before choosing the
          release scope.
        </p>
      </div>
      <div className={styles.grid}>
        {buildOptions.map(([title, text], i) => (
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
export function AndroidContent() {
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
              <div className={styles.heading} style={{ marginTop: 40 }}>
                <span>FROM CONCEPT TO GOOGLE PLAY</span>
                <h2 id="android-process-title">
                  An Android workflow with explicit release checkpoints.
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
          {section.id === 'android-release' && (
            <p className={styles.source}>
              Platform reference:{' '}
              <a
                href="https://support.google.com/googleplay/android-developer/answer/9845334"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play testing tracks
              </a>
              . Check requirements for the publishing account before scheduling release.
            </p>
          )}
        </section>
      ))}
      <section className={styles.section} aria-labelledby="android-faq-title">
        <div className={styles.heading}>
          <span>ANDROID PROJECT QUESTIONS</span>
          <h2 id="android-faq-title">Before you start building.</h2>
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
      <section className={styles.section} aria-labelledby="android-related-title">
        <div className={styles.heading}>
          <span>THE WIDER PRODUCT</span>
          <h2 id="android-related-title">Connect Android with the rest of your product.</h2>
        </div>
        <div className={styles.related}>
          {[
            ['iOS App Development', 'ios-app-development'],
            ['Web App Development', 'web-app-development'],
            ['App Design', 'app-design'],
            ['App Store Optimization', 'app-store-optimization'],
          ].map(([name, slug]) => (
            <Link key={slug} href={`/services/${slug}/`}>
              {name}
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
      <section className={`${styles.section} ${styles.cta}`} aria-labelledby="android-cta-title">
        <span>YOUR NEXT STEP</span>
        <h2 id="android-cta-title">Have an Android app in mind? Let’s scope it.</h2>
        <p>
          Share your core idea, current product, intended devices, and any launch constraints. Start
          with the decisions that shape a useful first release.
        </p>
        <Link href="/contact/">
          Start your Android project <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </>
  )
}
