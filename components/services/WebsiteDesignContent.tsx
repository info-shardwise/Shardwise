import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import styles from './WebsiteDesignContent.module.css'
const builds = [
  [
    'Marketing and brand websites',
    'Give visitors a clear introduction to your business, services, and next steps. Plan the homepage, service pages, credibility material, and enquiry journeys around your actual audience and approved content.',
  ],
  [
    'Campaign and landing pages',
    'Focus a page on one campaign, audience, or offer. Connect the message, supporting information, form, and call to action without forcing visitors through unrelated navigation. Measurement and experiments are scoped separately.',
  ],
  [
    'Content and editorial websites',
    'Organize articles, resources, categories, and search so readers can find useful material. Design reading layouts and publishing templates with realistic titles, imagery, metadata, and long-form content rather than idealized placeholder text.',
  ],
  [
    'Ecommerce storefronts',
    'Shape product discovery, collection pages, product information, and shopping journeys. Work within the chosen platform and checkout constraints, with attention to product variations, pricing presentation, empty states, and mobile browsing.',
  ],
  [
    'SaaS marketing websites',
    'Explain a software product through benefits, feature pages, use cases, and appropriate demonstrations. Keep the public marketing experience distinct from the application itself, and connect demo or enquiry routes to your available process.',
  ],
  [
    'Portfolio and agency websites',
    'Present approved work with context, clear navigation, and purposeful project detail layouts. Structure credits and results accurately; stock imagery or illustrative studies are never presented as evidence of completed client work.',
  ],
  [
    'Resource and membership websites',
    'Plan resource libraries, documentation, and public or member-facing content. Confirm access rules, navigation, and account-related states with developers before visual design; authentication and membership implementation require a separate build scope.',
  ],
  [
    'Multilingual and community websites',
    'Consider language length, reading direction where required, and diverse content needs. Agree translation ownership and regional requirements, then design flexible templates that can accommodate real content instead of relying on fixed-height text blocks.',
  ],
]
const sections = [
  {
    id: 'website-strategy',
    label: 'UX STRATEGY',
    title: 'Start with the audience, content, and page goals.',
    intro:
      'A useful website connects what visitors need with what your business can actually offer. Discovery establishes priorities before visual decisions, using the evidence and stakeholder access available for the project.',
    cards: [
      [
        'Understand visitor intent',
        'Review audience questions, existing feedback, business priorities, and available website evidence. Interviews or usability research can be included where useful. Methods, recruitment, access, and consent responsibilities are agreed rather than assumed.',
      ],
      [
        'Organize the information',
        'Map pages, navigation, and content relationships. Identify key journeys such as comparing services, finding a resource, or making an enquiry. Confirm who supplies copy and imagery, and flag missing material before detailed layouts depend on it.',
      ],
      [
        'Define a practical scope',
        'Agree page types, reusable templates, review stages, and platform constraints. Separate essential launch work from later improvements. Establish decision owners so feedback resolves the design instead of repeatedly reopening approved directions.',
      ],
    ],
  },
  {
    id: 'website-visual-design',
    label: 'VISUAL DIRECTION',
    title: 'Build a recognizable website around your brand.',
    intro:
      'Visual design should give content a clear hierarchy and a consistent voice. We connect your existing identity with typography, layout, components, imagery, and interaction patterns suited to the website.',
    cards: [
      [
        'Typography and hierarchy',
        'Choose readable type scales, line lengths, and spacing for headings, body copy, navigation, and supporting details. Test longer titles and realistic content. Font availability and licensing are checked as part of the agreed asset decisions.',
      ],
      [
        'Reusable components',
        'Define buttons, cards, forms, navigation, and other repeated patterns with their relevant states. Shared styles make pages feel coherent and help developers implement new content without inventing a different visual language for every section.',
      ],
      [
        'Purposeful imagery and motion',
        'Use approved assets or clearly identified stock imagery. Plan motion to support orientation and feedback, with reduced-motion behavior. Smooth transitions provide feedback without hiding essential information or preventing interaction.',
      ],
    ],
  },
  {
    id: 'website-responsive-design',
    label: 'RESPONSIVE EXPERIENCE',
    title: 'Design for the content, across screen sizes.',
    intro:
      'Responsive design involves more than shrinking a desktop canvas. We establish how content, navigation, and interactions adapt to narrower widths, then document the behavior developers need to reproduce.',
    cards: [
      [
        'Mobile content priorities',
        'Keep the primary message and next step easy to find. Reconsider columns, secondary detail, and image placement for smaller screens. Long labels, real form content, and expanded menus belong in the review, not only a tidy hero screenshot.',
      ],
      [
        'Accessible interaction',
        'Consider contrast, visible focus, readable text, touch targets, and keyboard paths. Specify meaningful labels and interaction states. Design guidance supports accessibility, while implementation testing and any formal compliance assessment need an agreed scope.',
      ],
      [
        'Performance-aware layouts',
        'Avoid visual requirements that depend on unnecessarily heavy media or constant animation. Discuss image sizing, loading behavior, and layout stability with developers. Final performance depends on implementation, hosting, content, and third-party scripts as well as the design.',
      ],
    ],
  },
  {
    id: 'website-conversion-design',
    label: 'CLEARER NEXT STEPS',
    title: 'Support conversion through clarity and trust.',
    intro:
      'A visitor should understand the offer and know what happens next. Conversion-focused design removes avoidable confusion without promising a particular uplift or adding tracking tools by default.',
    cards: [
      [
        'Make actions understandable',
        'Use clear calls to action that match available services and processes. Explain the purpose of an enquiry form and ask for information needed to respond. Consider field guidance, validation, submission feedback, and recovery from errors.',
      ],
      [
        'Use genuine supporting proof',
        'Place approved testimonials, case studies, credentials, or product details where they answer visitor questions. If evidence is unavailable, use accurate service information rather than invented logos, endorsements, or numerical results.',
      ],
      [
        'Turn assumptions into questions',
        'Record hypotheses about messaging, structure, and friction. Where measurement is agreed and sufficient data exists, assess changes through suitable research or experiments. Analytics configuration, consent handling, and ongoing optimization are separate decisions.',
      ],
    ],
  },
  {
    id: 'website-handoff',
    label: 'FROM DESIGN TO BUILD',
    title: 'Give developers a usable implementation reference.',
    intro:
      'A design file is a specification for a website, not a deployed website. Handoff connects the approved direction with responsive rules, assets, and component states so implementation can proceed with fewer unanswered questions.',
    cards: [
      [
        'Organized files and assets',
        'Provide the agreed source files, page templates, component references, and export-ready assets. Confirm formats, access, ownership, and third-party licenses in the project agreement. Copywriting, photography, and paid fonts are not automatically included.',
      ],
      [
        'Behavior and specifications',
        'Document layout changes, spacing, navigation behavior, interactive states, and content constraints. Discuss CMS fields and reusable templates with the build team. Prototypes illustrate selected journeys rather than substituting for functional code.',
      ],
      [
        'Implementation collaboration',
        'Review design questions and key implementation checkpoints where support is included. Agree responsibility for testing, content entry, and launch. WordPress, Shopify, or custom development can be scoped alongside design or handled by your existing developers.',
      ],
    ],
  },
  {
    id: 'website-redesigns',
    label: 'WEBSITE REDESIGNS',
    title: 'Improve the experience without ignoring what already works.',
    intro:
      'A redesign starts with the existing website: its content, journeys, technical constraints, and business role. The goal is a considered change plan rather than replacing everything simply because the interface looks dated.',
    cards: [
      [
        'Audit and prioritize',
        'Review important pages, navigation, content quality, and reported usability issues. Identify useful elements to retain and problems worth solving. Available evidence guides priorities; the depth of research and technical auditing is agreed before work starts.',
      ],
      [
        'Plan the transition',
        'Map old and proposed page structures, content ownership, and dependencies. Coordinate URL changes and redirects with the development and SEO team. Migration planning reduces avoidable disruption but cannot guarantee unchanged rankings or traffic.',
      ],
      [
        'Release in manageable stages',
        'A focused template refresh or phased redesign may suit the project better than a single large launch. Agree acceptance checks and review responsibilities. Post-launch adjustments can be prioritized from actual feedback when ongoing support is included.',
      ],
    ],
  },
  {
    id: 'website-tools-engagement',
    label: 'TOOLS AND COLLABORATION',
    title: 'Choose a working model that fits your website.',
    intro:
      'The right arrangement depends on the pages, content readiness, platform, and people involved. We define the design work and its boundaries before agreeing a schedule or fee.',
    cards: [
      [
        'Collaborative design tools',
        'Figma can support shared components, comments, and prototypes; other formats can be discussed with your team. Choose tools around handoff needs and existing workflows. Tool subscriptions, integrations, and specialized libraries are confirmed rather than implied.',
      ],
      [
        'Defined project or ongoing support',
        'A defined scope can cover agreed templates and review stages. Ongoing work can support new pages or iterations through a prioritized backlog. Confirm capacity, feedback cycles, revision boundaries, and implementation reviews instead of assuming unlimited changes.',
      ],
      [
        'Design-only or design and build',
        'Work with your developers, or discuss a combined scope through our development services. Fees and timelines follow the actual requirements. Bring your current website, platform, goals, content status, and target date so the proposal addresses the real work.',
      ],
    ],
  },
]
const process = [
  [
    'Discovery and audience',
    'Confirm business goals, audiences, existing material, technical constraints, and decision makers. Identify missing content and agree the scope and review process.',
  ],
  [
    'Sitemap and content journeys',
    'Map navigation, page types, and priority visitor paths. Align each page with its purpose and establish how content will be created or supplied.',
  ],
  [
    'Wireframes',
    'Explore hierarchy and layouts before detailed styling. Use representative content to review important pages, forms, and mobile priorities with stakeholders.',
  ],
  [
    'Visual design',
    'Develop the approved visual direction, reusable components, and key responsive layouts. Capture relevant states and review the design against the agreed objectives.',
  ],
  [
    'Prototype and review',
    'Model selected interactions and journeys. Conduct the agreed stakeholder or usability reviews, record findings, and refine the design where evidence supports a change.',
  ],
  [
    'Developer handoff',
    'Organize source files, assets, specifications, and component references. Review platform constraints and confirm implementation responsibilities and support boundaries.',
  ],
  [
    'Post-launch iteration',
    'Where included, review implementation feedback and subsequent evidence. Prioritize adjustments through an agreed scope rather than assuming indefinite support or guaranteed results.',
  ],
]
const faqs = [
  [
    'How much does website design cost?',
    'Cost depends on page types, research, responsive layouts, content readiness, components, prototypes, and handoff support. Development and third-party assets may be separate. Share your requirements for a scoped proposal rather than relying on a universal package price.',
  ],
  [
    'How long does website design take?',
    'Timing depends on scope, content availability, stakeholder feedback, and approval cycles. A landing page and a multilingual website require different work. Share your target date so launch priorities and later improvements can be discussed before committing to a schedule.',
  ],
  [
    'Does website design include development?',
    'Design-only work produces the agreed layouts, specifications, prototypes, and assets. Building and deploying the website requires a development scope. We can discuss WordPress, Shopify, or custom development, or collaborate with your existing development team.',
  ],
  [
    'Can you redesign our existing website?',
    'Yes, a redesign can address navigation, content structure, visual consistency, and responsive usability. We review the existing website and agree priorities. Content migration, redirects, technical SEO, and launch responsibilities should be coordinated with the build team.',
  ],
  [
    'Which website platforms can you design for?',
    'The design can be scoped around WordPress, Shopify, or a custom website, with platform and theme constraints considered early. Confirm your technology and developer requirements during discovery. A visual concept does not imply that every interaction is supported by every platform.',
  ],
  [
    'What deliverables will we receive?',
    'The agreement defines page layouts, component references, responsive specifications, prototypes, assets, and source-file access. Revision stages, licensing, ownership, and developer support are also confirmed. Copywriting, coded components, and deployment are included only when explicitly scoped.',
  ],
  [
    'Will the website be mobile-friendly, and can you support it after launch?',
    'Responsive layouts and relevant mobile interactions are part of the agreed design scope. Final browser and device behavior requires implementation testing. Build reviews and post-launch design support can be arranged separately with clear responsibilities and a prioritized list of work.',
  ],
]
export function WebsiteDesignOptions() {
  return (
    <section className={styles.section} aria-labelledby="website-build-title">
      <div className={styles.heading}>
        <span>WHAT WE DESIGN</span>
        <h2 id="website-build-title">Website design for the journeys that matter.</h2>
        <p>
          Plan marketing, content, and storefront experiences around real visitor needs. Connect a
          clear structure with your brand, responsive layouts, and practical development
          requirements.
        </p>
      </div>
      <div className={styles.note}>
        <strong>Which design service fits your project?</strong>
        <p>
          For software workflows, explore{' '}
          <Link href="/services/product-design/">Product Design</Link>. For native mobile
          interfaces, see <Link href="/services/app-design/">App Design</Link>. Website Design
          focuses on public-facing site content and responsive visitor journeys.
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
export function WebsiteDesignContent() {
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
                <span>FROM DISCOVERY TO WEBSITE ITERATION</span>
                <h2 id="website-process-title">
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
      <section className={styles.section} aria-labelledby="website-faq-title">
        <div className={styles.heading}>
          <span>WEBSITE DESIGN QUESTIONS</span>
          <h2 id="website-faq-title">Before you start your website design project.</h2>
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
      <section className={styles.section} aria-labelledby="website-related-title">
        <div className={styles.heading}>
          <span>THE WEBSITE LIFECYCLE</span>
          <h2 id="website-related-title">Connect website design with the right next step.</h2>
        </div>
        <p>
          Review your customer journeys with our{' '}
          <Link href="/blogs/website-accessibility-checklist-small-business/">
            website accessibility checklist for small businesses
          </Link>{' '}
          before your next website update.
        </p>
        <div className={styles.related}>
          {[
            ['WordPress Development', 'wordpress-development'],
            ['Shopify Development', 'shopify-development'],
            ['Custom Website Development', 'custom-website-development'],
            ['Product Design', 'product-design'],
            ['App Design', 'app-design'],
            ['Logo Design', 'logo-design'],
            ['Technical & On-Page SEO', 'technical-onpage-seo'],
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

export function WebsiteDesignProjectCTA() {
  return (
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="website-cta-title">
      <span>YOUR NEXT STEP</span>
      <h2 id="website-cta-title">Ready for a clearer, more useful website?</h2>
      <p>
        Share your website, audience, goals, platform, content status, and target date. Let’s define
        the layouts, responsive behavior, and handoff work needed for your next step.
      </p>
      <Link href="/contact/">
        Start your website design project <ArrowRight aria-hidden="true" />
      </Link>
    </section>
  )
}
