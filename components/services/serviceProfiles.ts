export interface ServiceProfile {
  eyebrow: string
  heading: string
  intro: string
  kind: 'mobile' | 'web' | 'store' | 'maintenance' | 'design' | 'search'
  visualTitle: string
  labels: string[]
  cards: { title: string; text: string }[]
  deliverables: string[]
}
export const SERVICE_PROFILES: Record<string, ServiceProfile> = {
  'ios-app-development': {
    eyebrow: 'Built for the Apple ecosystem',
    heading: 'Native experiences. Thoughtfully engineered.',
    intro:
      'From the first interaction to the final release, make every detail feel at home on iOS.',
    kind: 'mobile',
    visualTitle: 'SwiftUI experience',
    labels: ['Swift & SwiftUI', 'Native interactions', 'Release readiness'],
    cards: [
      {
        title: 'Native foundations',
        text: 'Build on Swift and SwiftUI with an architecture that keeps application features modular and maintainable.',
      },
      {
        title: 'Polished interactions',
        text: 'Design clear navigation, accessible controls, and responsive interfaces that follow the conventions of iOS.',
      },
      {
        title: 'Ready for release',
        text: 'Validate real device behavior and prepare the application for a structured App Store handover.',
      },
    ],
    deliverables: [
      'Native Swift and SwiftUI implementation',
      'Modular application architecture',
      'Accessible interface and interaction states',
      'Device testing and performance review',
      'Release preparation and handover documentation',
    ],
  },
  'android-app-development': {
    eyebrow: 'Native Android engineering',
    heading: 'Made for the way Android works.',
    intro: 'Build a consistent experience across Android devices with a modern Kotlin foundation.',
    kind: 'mobile',
    visualTitle: 'Kotlin application',
    labels: ['Kotlin foundation', 'Adaptive layouts', 'Device testing'],
    cards: [
      {
        title: 'Modern foundations',
        text: 'Structure Kotlin application features around clear responsibilities and maintainable data flows.',
      },
      {
        title: 'Adaptive experiences',
        text: 'Plan navigation and layouts for the device sizes and interaction patterns your audience uses.',
      },
      {
        title: 'Reliable delivery',
        text: 'Review device compatibility, performance, and release requirements before handover.',
      },
    ],
    deliverables: [
      'Native Kotlin application implementation',
      'Adaptive mobile interface layouts',
      'API and data flow integration',
      'Device compatibility and performance checks',
      'Google Play release preparation and documentation',
    ],
  },
  'web-app-development': {
    eyebrow: 'Scalable web applications',
    heading: 'From useful features to lasting platforms.',
    intro:
      'Bring your workflows, customer portals, and SaaS ideas together in a maintainable web application.',
    kind: 'web',
    visualTitle: 'Application workspace',
    labels: ['Clear architecture', 'Connected workflows', 'Cloud-ready delivery'],
    cards: [
      {
        title: 'Plan the platform',
        text: 'Map user roles, core workflows, and integration requirements before defining the architecture.',
      },
      {
        title: 'Build for real use',
        text: 'Create responsive interfaces and predictable application states around the tasks users need to complete.',
      },
      {
        title: 'Support the next stage',
        text: 'Use modular code and clear documentation so the platform can evolve as requirements grow.',
      },
    ],
    deliverables: [
      'Application architecture and workflow specification',
      'Responsive SaaS or portal interface',
      'API integration and application state management',
      'Browser testing and performance review',
      'Deployment configuration and developer handover',
    ],
  },
  'wordpress-development': {
    eyebrow: 'Flexible publishing platforms',
    heading: 'A website your team can make its own.',
    intro:
      'Connect a custom front-end experience with an editing workflow built around your content.',
    kind: 'web',
    visualTitle: 'Content publishing studio',
    labels: ['Gutenberg blocks', 'Editorial workflow', 'Headless options'],
    cards: [
      {
        title: 'Content comes first',
        text: 'Define reusable page structures and editing patterns that fit the content your team publishes.',
      },
      {
        title: 'Custom implementation',
        text: 'Build Gutenberg blocks or a headless front end around your design and technical requirements.',
      },
      {
        title: 'A confident handover',
        text: 'Review responsiveness, performance, and editor usability, then document the publishing workflow.',
      },
    ],
    deliverables: [
      'Custom WordPress implementation',
      'Reusable Gutenberg blocks or headless integration',
      'Responsive page and content templates',
      'Performance and compatibility review',
      'Editor training and publishing documentation',
    ],
  },
  'shopify-development': {
    eyebrow: 'Commerce built around your brand',
    heading: 'Make the path to purchase feel effortless.',
    intro:
      'Bring your products, brand, and storefront experience together in a custom Shopify build.',
    kind: 'store',
    visualTitle: 'Storefront experience',
    labels: ['Liquid themes', 'Product discovery', 'Purchase journey'],
    cards: [
      {
        title: 'Design product discovery',
        text: 'Organize collections, product information, and navigation around how shoppers browse.',
      },
      {
        title: 'Build the storefront',
        text: 'Develop custom Liquid sections and templates that match your brand and editing needs.',
      },
      {
        title: 'Review the journey',
        text: 'Test responsive behavior, storefront performance, and the route from product to checkout.',
      },
    ],
    deliverables: [
      'Custom Shopify theme and Liquid sections',
      'Product and collection page templates',
      'Navigation and merchandising structure',
      'Responsive storefront and performance testing',
      'Store editor documentation and handover',
    ],
  },
  'custom-website-development': {
    eyebrow: 'Bespoke digital experiences',
    heading: 'A custom website, built with purpose.',
    intro:
      'Translate your brand and business goals into a fast, responsive Next.js and React experience.',
    kind: 'web',
    visualTitle: 'Custom website system',
    labels: ['Next.js & React', 'Reusable components', 'Responsive delivery'],
    cards: [
      {
        title: 'Define the experience',
        text: 'Connect page structure and user journeys with your content and commercial priorities.',
      },
      {
        title: 'Engineer the details',
        text: 'Build reusable React components and responsive layouts with a maintainable code structure.',
      },
      {
        title: 'Launch with clarity',
        text: 'Review browsers and performance, configure deployment, and document the site for future changes.',
      },
    ],
    deliverables: [
      'Custom Next.js and React implementation',
      'Reusable responsive component system',
      'Content and integration setup',
      'Browser, accessibility, and performance review',
      'Cloud deployment and developer documentation',
    ],
  },
  'website-maintenance': {
    eyebrow: 'Proactive website care',
    heading: 'Keep your website ready for what’s next.',
    intro:
      'Maintain the reliability, security, and performance of an existing website through ongoing care.',
    kind: 'maintenance',
    visualTitle: 'Website care workflow',
    labels: ['Monitor', 'Review & update', 'Verify'],
    cards: [
      {
        title: 'Understand the system',
        text: 'Review the hosting, codebase, dependencies, and operational risks of the current website.',
      },
      {
        title: 'Keep it maintained',
        text: 'Coordinate updates, fixes, and security reviews through a controlled maintenance workflow.',
      },
      {
        title: 'Check after changes',
        text: 'Verify affected pages and critical user journeys after updates and communicate the work completed.',
      },
    ],
    deliverables: [
      'Website and dependency review',
      'Monitoring and issue triage setup',
      'Security and dependency updates',
      'Browser and user journey checks',
      'Maintenance change log and recommendations',
    ],
  },
  'shopify-store-maintenance': {
    eyebrow: 'Ongoing Shopify store care',
    heading: 'Keep the storefront moving smoothly.',
    intro:
      'Support your catalog, theme, and store integrations as your commerce operations evolve.',
    kind: 'maintenance',
    visualTitle: 'Shopify care workflow',
    labels: ['Catalog & apps', 'Theme updates', 'Storefront checks'],
    cards: [
      {
        title: 'Review the store',
        text: 'Understand the theme, catalog structure, connected apps, and current storefront workflows.',
      },
      {
        title: 'Maintain the moving parts',
        text: 'Coordinate theme fixes, app updates, and catalog changes with your store operations.',
      },
      {
        title: 'Protect the shopping journey',
        text: 'Review affected product, cart, and checkout journeys after changes.',
      },
    ],
    deliverables: [
      'Store theme and app audit',
      'Catalog and integration checks',
      'Theme fixes and update coordination',
      'Storefront performance and purchase journey checks',
      'Change log and store maintenance guidance',
    ],
  },
  'woocommerce-maintenance': {
    eyebrow: 'Reliable WooCommerce operations',
    heading: 'Care for every part of your store.',
    intro:
      'Keep the WordPress, WooCommerce, and payment components of your store working together.',
    kind: 'maintenance',
    visualTitle: 'Commerce maintenance plan',
    labels: ['Core & plugins', 'Database review', 'Payment checks'],
    cards: [
      {
        title: 'Review the dependencies',
        text: 'Map the WordPress, WooCommerce, theme, and plugin requirements behind the store.',
      },
      {
        title: 'Maintain with care',
        text: 'Coordinate patches, database reviews, and compatibility checks before changes reach customers.',
      },
      {
        title: 'Verify commerce flows',
        text: 'Check the affected product, cart, payment, and order journeys after updates.',
      },
    ],
    deliverables: [
      'Core, theme, and plugin audit',
      'Database and performance review',
      'Patch and compatibility coordination',
      'Payment gateway and order flow checks',
      'Maintenance documentation and change log',
    ],
  },
  'logo-design': {
    eyebrow: 'A distinctive brand foundation',
    heading: 'A clear identity, down to the smallest mark.',
    intro:
      'Develop a brand mark and visual system that works across digital and everyday applications.',
    kind: 'design',
    visualTitle: 'Identity design board',
    labels: ['Brand direction', 'Mark exploration', 'Identity toolkit'],
    cards: [
      {
        title: 'Find the direction',
        text: 'Understand your brand, audience, and visual context before exploring design concepts.',
      },
      {
        title: 'Refine the mark',
        text: 'Develop shapes, typography, and color into a clear and adaptable logo system.',
      },
      {
        title: 'Make it usable',
        text: 'Prepare practical variants and guidance for consistent use across applications.',
      },
    ],
    deliverables: [
      'Brand direction and logo concept exploration',
      'Refined logo and responsive variants',
      'Color and typography recommendations',
      'Exported assets for digital and print use',
      'Logo usage and identity guidance',
    ],
  },
  'product-design': {
    eyebrow: 'Research-led digital product design',
    heading: 'Useful experiences, shaped around people.',
    intro:
      'Connect user needs with product structure, interactions, and a coherent interface system.',
    kind: 'design',
    visualTitle: 'Product design system',
    labels: ['UX research', 'Wireframes', 'Design system'],
    cards: [
      {
        title: 'Understand the users',
        text: 'Explore the audience, tasks, and friction points that should guide product decisions.',
      },
      {
        title: 'Shape the experience',
        text: 'Use flows, wireframes, and prototypes to clarify the product’s structure and interactions.',
      },
      {
        title: 'Create a shared system',
        text: 'Turn the design direction into reusable components and documented interface patterns.',
      },
    ],
    deliverables: [
      'User needs and journey mapping',
      'Product flows and wireframes',
      'Interactive interface prototypes',
      'Reusable UI components and design system',
      'Design specification and engineering handover',
    ],
  },
  'website-design': {
    eyebrow: 'Responsive website design',
    heading: 'Make every page feel connected.',
    intro: 'Bring layout, typography, and interactions together in a cohesive website experience.',
    kind: 'design',
    visualTitle: 'Responsive website canvas',
    labels: ['Page structure', 'Visual direction', 'Responsive layouts'],
    cards: [
      {
        title: 'Plan the journey',
        text: 'Connect page hierarchy, navigation, and content with the actions visitors need to take.',
      },
      {
        title: 'Create the visual language',
        text: 'Define typography, spacing, color, and imagery that express the brand consistently.',
      },
      {
        title: 'Design across screens',
        text: 'Refine layouts and interaction states for desktop, tablet, and mobile use.',
      },
    ],
    deliverables: [
      'Website page and navigation structure',
      'Visual design direction and key page layouts',
      'Responsive desktop and mobile designs',
      'Interface components and interaction states',
      'Developer-ready design specification',
    ],
  },
  'app-design': {
    eyebrow: 'Mobile and tablet interface design',
    heading: 'Thoughtful interactions, wherever users are.',
    intro: 'Create clear, consistent app flows and interfaces for mobile and tablet experiences.',
    kind: 'mobile',
    visualTitle: 'Mobile interface prototype',
    labels: ['User flows', 'Interface system', 'Interactive prototype'],
    cards: [
      {
        title: 'Map the flow',
        text: 'Clarify the steps users take, the information they need, and the states each screen supports.',
      },
      {
        title: 'Design the interface',
        text: 'Build a consistent visual language around navigation, controls, and readable content.',
      },
      {
        title: 'Connect the screens',
        text: 'Use prototypes and interaction notes to communicate the experience before implementation.',
      },
    ],
    deliverables: [
      'Mobile user flows and screen structure',
      'Mobile and tablet interface designs',
      'Interactive prototype and interaction states',
      'Reusable app UI components',
      'Design assets and implementation handover',
    ],
  },
  'technical-onpage-seo': {
    eyebrow: 'A sound foundation for search',
    heading: 'Make your website easier to find and understand.',
    intro:
      'Connect technical access, page structure, and content signals into a practical optimization plan.',
    kind: 'search',
    visualTitle: 'Search readiness map',
    labels: ['Crawlability', 'Page structure', 'Performance'],
    cards: [
      {
        title: 'Review technical access',
        text: 'Identify crawl, indexing, and site structure issues that may limit content discovery.',
      },
      {
        title: 'Clarify page signals',
        text: 'Review titles, headings, internal links, and structured data around page intent.',
      },
      {
        title: 'Prioritize improvements',
        text: 'Organize performance and technical findings into an actionable implementation roadmap.',
      },
    ],
    deliverables: [
      'Technical crawl and indexing review',
      'On-page metadata and heading recommendations',
      'Internal linking and structured data guidance',
      'Core Web Vitals and performance review',
      'Prioritized implementation and measurement roadmap',
    ],
  },
  'local-google-business-seo': {
    eyebrow: 'Local visibility and discovery',
    heading: 'Connect with the people searching nearby.',
    intro: 'Align your website and business profile with the local services your audience needs.',
    kind: 'search',
    visualTitle: 'Local discovery map',
    labels: ['Business profile', 'Location content', 'Review strategy'],
    cards: [
      {
        title: 'Review local signals',
        text: 'Check business information, service context, and local presence for consistency.',
      },
      {
        title: 'Clarify the offering',
        text: 'Align profile details and relevant website content with your locations and services.',
      },
      {
        title: 'Build a useful roadmap',
        text: 'Plan review handling, content improvements, and ways to monitor local visibility.',
      },
    ],
    deliverables: [
      'Google Business Profile and local presence review',
      'Business information consistency recommendations',
      'Location and service content guidance',
      'Review management and profile improvement roadmap',
      'Local visibility measurement framework',
    ],
  },
  'app-store-optimization': {
    eyebrow: 'App store discovery',
    heading: 'Give your app a clearer introduction.',
    intro:
      'Align store listing content, keyword relevance, and visual assets with the app’s audience.',
    kind: 'mobile',
    visualTitle: 'App discovery plan',
    labels: ['Keyword relevance', 'Listing clarity', 'Visual assets'],
    cards: [
      {
        title: 'Understand discovery',
        text: 'Review the app, audience, and category context to identify relevant search themes.',
      },
      {
        title: 'Improve the listing',
        text: 'Clarify titles, descriptions, and screenshots around the app’s purpose and core benefits.',
      },
      {
        title: 'Plan measurement',
        text: 'Define a framework for evaluating listing changes and discovery over time.',
      },
    ],
    deliverables: [
      'App Store and Google Play listing review',
      'Keyword research and metadata recommendations',
      'Description and messaging guidance',
      'Screenshot and creative asset recommendations',
      'Listing change and measurement roadmap',
    ],
  },
  aeo: {
    eyebrow: 'Answer Engine Optimization',
    heading: 'Turn expertise into clear, useful answers.',
    intro:
      'Organize content so the questions your audience asks are answered with clarity and context.',
    kind: 'search',
    visualTitle: 'Answer discovery map',
    labels: ['Audience questions', 'Clear answers', 'Supporting context'],
    cards: [
      {
        title: 'Find the questions',
        text: 'Identify audience questions and the content needed to answer them accurately.',
      },
      {
        title: 'Structure the answers',
        text: 'Create clear definitions, useful explanations, and well-organized supporting material.',
      },
      {
        title: 'Connect the context',
        text: 'Review content relationships, accessibility, and structured data for a coherent source of information.',
      },
    ],
    deliverables: [
      'Audience question and answer coverage review',
      'Answer-focused content structure recommendations',
      'Content briefs and supporting evidence guidance',
      'Structured data and page clarity review',
      'Answer visibility monitoring framework',
    ],
  },
}
