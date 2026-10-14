import Link from 'next/link'
import { ArrowRight, Plus, Check, Smartphone, Code2, Layers } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './IosContent.module.css'

const buildOptions = [
  [
    'Native iPhone apps',
    'A Swift and SwiftUI foundation for customer-facing products, business tools, and services that benefit from familiar iOS navigation. The first release focuses on a useful core journey rather than an oversized feature list.',
  ],
  [
    'Layouts for iPad',
    'When iPad is part of the scope, larger screens need considered navigation, content density, and input behavior. Supported devices and layouts are agreed before implementation; an enlarged phone screen is not the design goal.',
  ],
  [
    'Existing app improvements',
    'A focused review can identify difficult navigation, brittle code, slow screens, or release blockers. Improvements can be planned around the existing product, with migration work scoped separately from new features.',
  ],
  [
    'Connected product experiences',
    'An app can connect to your existing backend, account system, or web platform. We clarify API readiness, ownership, permissions, and failure states early so the mobile experience fits the wider product.',
  ],
]
const process = [
  [
    'Discovery and release scope',
    'Define the audience, business goal, essential journeys, and success criteria. Agree device coverage, backend dependencies, account ownership, and what belongs in the initial release.',
  ],
  [
    'UX and interface design',
    'Map navigation and prototype key screens before building. Plan loading, empty, error, and permission states alongside the main journey, with readable typography and accessible controls.',
  ],
  [
    'Native implementation',
    'Develop modular Swift and SwiftUI features around clear data flows. Connect agreed APIs, handle offline or interrupted requests where needed, and keep configuration separate from application logic.',
  ],
  [
    'Device QA and beta feedback',
    'Test the agreed device and OS matrix, including authentication, network changes, accessibility, and important user flows. TestFlight can distribute beta builds and collect feedback before public release.',
  ],
  [
    'Submission preparation',
    'Prepare the release build, listing assets, review notes, and relevant privacy information with the account owner. Check that reviewers can access required features and that the app behaves as described.',
  ],
  [
    'Launch and handover',
    'Address agreed release issues and document configuration, dependencies, and build steps. Apple controls review decisions; release timing should allow for questions or changes requested during review.',
  ],
  [
    'Iterate after release',
    'Use agreed feedback and monitoring to prioritize fixes and improvements. Compatibility updates, additional features, and ongoing support are planned as a defined follow-on scope.',
  ],
]
const faqs = [
  [
    'How much does iOS app development cost?',
    'Pricing depends on the feature set, design work, backend readiness, integrations, and testing scope. Share your main user journey and any budget constraints so the proposal can distinguish launch essentials from later improvements. There is no universal starting price published here.',
  ],
  [
    'How long does it take to build and launch an app?',
    'The schedule is agreed after discovery. A contained first release differs from a product with complex permissions, payments, or backend migration. Design feedback, account setup, external dependencies, and Apple review can also affect the launch date.',
  ],
  [
    'Do you build native or cross-platform apps?',
    'This service focuses on native Swift and SwiftUI development. If Android is also required, platform choice should be discussed during discovery. Shared-code approaches can be evaluated against product requirements rather than assumed to be the right fit for every app.',
  ],
  [
    'Can you help with App Store submission?',
    'Release preparation can include build readiness, App Store Connect coordination, listing assets, privacy information, and review notes as agreed in the scope. Apple makes the approval decision, so approval and a fixed review date cannot be guaranteed.',
  ],
  [
    'Who owns the Apple developer account?',
    'Account ownership, access, and release responsibilities should be established at the start. The business publishing the app should retain control of its account; access needed for the project can be agreed without sharing passwords in an enquiry.',
  ],
  [
    'Can you support the app after launch?',
    'Support can be scoped for bug fixes, compatibility checks, monitoring, or ongoing feature work. Coverage, response expectations, reporting, and excluded work are agreed in the project terms rather than assumed to be included indefinitely.',
  ],
  [
    'Can you help improve App Store visibility?',
    'App Store Optimization is a related service covering listing strategy and presentation. It can be discussed alongside release preparation, but downloads, rankings, and ratings depend on many factors and are not guaranteed.',
  ],
]
const related = [
  ['Android App Development', 'android-app-development'],
  ['Web App Development', 'web-app-development'],
  ['App Design', 'app-design'],
  ['App Store Optimization', 'app-store-optimization'],
]

export function IosBuildOptions() {
  return (
    <section className={styles.section} aria-labelledby="ios-build-title">
      <div className={styles.heading}>
        <span>WHAT WE BUILD</span>
        <h2 id="ios-build-title">iOS experiences shaped around your product.</h2>
        <p>
          Start with the people using your app and the work it needs to do. Native development is a
          product decision, with device coverage and integrations matched to the brief.
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

export function IosContent() {
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
      <section className={styles.section} aria-labelledby="ios-stack-title">
        <div className={styles.heading}>
          <span>TECHNOLOGY & DEVICE COVERAGE</span>
          <h2 id="ios-stack-title">A considered Swift and SwiftUI foundation.</h2>
          <p>
            The stack is chosen for maintainability and the agreed product requirements. Backend
            services, SDKs, and automation tools are decisions to make together, rather than a
            checklist of technologies every app needs.
          </p>
        </div>
        <div className={styles.stack}>
          <article>
            <Code2 aria-hidden="true" />
            <h3>Language and interface</h3>
            <p>
              Swift for application logic and SwiftUI for native interfaces. Existing UIKit or
              Objective-C code is reviewed before any interoperability or migration work is
              estimated.
            </p>
          </article>
          <article>
            <Layers aria-hidden="true" />
            <h3>Architecture and data</h3>
            <p>
              Clear separation between screens, business logic, and data access. Agree API
              contracts, authentication, state management, and local storage around the app’s actual
              needs.
            </p>
          </article>
          <article>
            <Smartphone aria-hidden="true" />
            <h3>Build and validation</h3>
            <p>
              Xcode builds and an agreed device test matrix support release readiness. Signing, beta
              distribution, and build automation are configured for the project’s ownership and
              delivery workflow.
            </p>
          </article>
        </div>
        <div className={styles.note}>
          <strong>Define device coverage early.</strong>
          <p>
            iPhone and any required iPad layouts are scoped explicitly. Watch, TV, Vision Pro,
            CarPlay, and specialist extensions need a separate feasibility discussion; they are not
            automatically included in an iOS app project.
          </p>
        </div>
      </section>
      <section className={`${styles.section} ${styles.tint}`} aria-labelledby="ios-process-title">
        <div className={styles.heading}>
          <span>FROM BRIEF TO RELEASE</span>
          <h2 id="ios-process-title">An iOS development process with clear checkpoints.</h2>
          <p>
            Each stage turns assumptions into decisions. The delivery plan identifies what you
            review, what your team supplies, and what must be ready before the next milestone.
          </p>
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
      </section>
      <section className={styles.section} aria-labelledby="ios-release-title">
        <div className={styles.split}>
          <div className={styles.heading}>
            <span>APP STORE PREPARATION</span>
            <h2 id="ios-release-title">Plan the release alongside the build.</h2>
            <p>
              A working app is one part of release readiness. Account access, product information,
              screenshots, and review access also need owners and a place in the schedule.
            </p>
            <Link href="/services/app-store-optimization/" className={styles.textLink}>
              Explore App Store Optimization <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <ul className={styles.checklist}>
            {[
              'App Store Connect responsibilities and signing access',
              'Accurate descriptions, screenshots, and support details',
              'Privacy disclosures based on actual data use and included SDKs',
              'Review notes and access to gated features where needed',
              'A plan for responding to review questions and release issues',
            ].map((x) => (
              <li key={x}>
                <Check aria-hidden="true" />
                {x}
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.source}>
          Platform reference:{' '}
          <a
            href="https://developer.apple.com/testflight/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple TestFlight
          </a>{' '}
          and{' '}
          <a
            href="https://developer.apple.com/app-store/review/"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Review
          </a>
          . Submission requirements should be checked for the app’s release.
        </p>
      </section>
      <section className={styles.section} aria-labelledby="ios-integrations-title">
        <div className={styles.heading}>
          <span>CONNECTED, WITH CARE</span>
          <h2 id="ios-integrations-title">Integrations and security start with the data flow.</h2>
          <p>
            Useful features often depend on external systems. We identify the information involved,
            who can access it, and what happens when a service is unavailable before an integration
            becomes part of the release scope.
          </p>
        </div>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Accounts and backend APIs</h3>
            <p>
              Discuss your existing identity provider, user roles, and API readiness. Plan session
              expiry, permission failures, and recovery states so authentication fits the wider
              product.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Device capabilities</h3>
            <p>
              Notifications, location, camera access, and other permissions should serve a clear
              user need. Specialist features such as health data, augmented reality, or
              subscriptions require a feasibility and platform-policy review.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Privacy and secure handling</h3>
            <p>
              Plan appropriate credential storage, secure network communication, and minimum
              necessary data collection. Privacy disclosures must reflect the app and its
              third-party SDKs; regulated requirements need specialist review and an explicit scope.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Reliability and accessibility</h3>
            <p>
              Validate key flows on the agreed devices, including interrupted requests, readable
              layouts, and assistive navigation. Performance and accessibility work is measured
              against defined project acceptance criteria.
            </p>
          </article>
        </div>
      </section>
      <section className={`${styles.section} ${styles.tint}`} aria-labelledby="ios-support-title">
        <div className={styles.split}>
          <div className={styles.heading}>
            <span>AFTER THE FIRST RELEASE</span>
            <h2 id="ios-support-title">Keep the product useful as it evolves.</h2>
            <p>
              Launch creates a new set of priorities: real user feedback, defects, compatibility,
              and future features. A support plan makes ownership and boundaries clear instead of
              treating handover as the end of the conversation.
            </p>
          </div>
          <div className={styles.support}>
            <h3>Agree the support scope</h3>
            <p>
              Define bug triage, crash reporting where configured, compatibility checks, and release
              responsibilities. Ongoing work may include performance improvements, listing updates,
              or a prioritized feature roadmap.
            </p>
            <p>
              Monitoring tools, access, maintenance frequency, and response expectations are agreed
              separately. Support is not an unlimited promise or an assumed service-level
              commitment.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="ios-engagement-title">
        <div className={styles.heading}>
          <span>A SCOPE THAT FITS</span>
          <h2 id="ios-engagement-title">Choose the next useful milestone.</h2>
          <p>
            The right engagement depends on where your product is today. Deliverables, fees,
            dependencies, and review points are confirmed in the proposal.
          </p>
        </div>
        <div className={styles.stack}>
          {[
            [
              'Defined first release',
              'Scope the essential journey, design, implementation, and release preparation for a contained launch. Additional ideas can move into a later roadmap.',
            ],
            [
              'Existing product improvement',
              'Focus on agreed issues such as interface changes, API integration, performance, or release readiness. Begin with enough review to understand the existing code.',
            ],
            [
              'Ongoing product iteration',
              'Plan a sequence of improvements around prioritized needs. Availability, cadence, reporting, and support coverage are agreed for the engagement.',
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.section} aria-labelledby="ios-faq-title">
        <div className={styles.heading}>
          <span>IOS PROJECT QUESTIONS</span>
          <h2 id="ios-faq-title">Before you start building.</h2>
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
      <section className={styles.section} aria-labelledby="ios-related-title">
        <div className={styles.heading}>
          <span>THE WIDER PRODUCT</span>
          <h2 id="ios-related-title">Connect your iOS plans with the right services.</h2>
        </div>
        <div className={styles.related}>
          <Link href="/blogs/swift-app-development-services-project-review/">
            Swift app project review guide <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/blogs/ios-app-development-services-release-planning/">
            iOS app release planning guide <ArrowRight aria-hidden="true" />
          </Link>
          {related.map(([name, slug]) => (
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

export function IosProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="ios-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="ios-cta-title">Have an iOS app in mind? Let’s scope it.</h2>
      <p>
        Share your audience, core idea, current product if you have one, and any launch constraints.
        We can start with the decisions that matter most for your first release.
      </p>
      <Link href="/contact/">
        Start your iOS project <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
