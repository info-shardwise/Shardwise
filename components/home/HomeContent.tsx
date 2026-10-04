import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  ShieldCheck,
  Search,
  Smartphone,
  Layers,
  Code2,
  PenTool,
  Globe,
} from 'lucide-react'
import { getAllPosts } from '@/lib/mdx'
import { RevealHeading } from './RevealHeading'
import styles from './HomeContent.module.css'

const problems = [
  {
    icon: Globe,
    title: 'Your website is holding you back.',
    text: 'Slow pages, disconnected content, or a dated experience can make it harder for visitors to take the next step.',
    href: '/services/custom-website-development/',
    link: 'Build a better website',
  },
  {
    icon: ShieldCheck,
    title: 'Keeping things running takes time.',
    text: 'Updates, fixes, and store improvements compete with the work your business needs you to focus on.',
    href: '/services/website-maintenance/',
    link: 'Explore ongoing maintenance',
  },
  {
    icon: Smartphone,
    title: 'Your product needs a clearer path.',
    text: 'Bring scattered requirements, screens, and interactions together into a more coherent app experience.',
    href: '/services/product-design/',
    link: 'Shape your product experience',
  },
  {
    icon: Search,
    title: 'Getting found is getting more complex.',
    text: 'Connect technical foundations and useful content with search visibility, including answer and generative engines.',
    href: '/services/',
    link: 'Explore search services',
  },
]
const faqs = [
  {
    question: 'What is the minimum project budget?',
    answer:
      'Pricing depends on the scope, platform, integrations, and support you need. Share your requirements and budget range so we can discuss an appropriate approach; the website does not list a fixed minimum.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on project complexity, content readiness, integrations, and review cycles. We discuss milestones and dependencies before agreeing on a delivery plan.',
  },
  {
    question: 'Do you offer post-launch maintenance?',
    answer:
      'Yes. Website, Shopify store, and WooCommerce maintenance are part of our service catalog. The scope and frequency of ongoing support are agreed for your project.',
  },
  {
    question: 'How will we collaborate with your team?',
    answer:
      'We start by discussing your goals, requirements, and preferred way of communicating. The project plan should make review points, responsibilities, and handover expectations clear.',
  },
  {
    question: 'How do we start working together?',
    answer:
      'Use the contact page to share your name, email, selected service, and project message. Include your goals, current challenges, and any budget or timeline constraints so we can discuss the next step.',
  },
]
function Heading({
  label,
  title,
  text,
  id,
}: {
  label: string
  title: string
  text: string
  id: string
}) {
  return (
    <div className={styles.heading}>
      <span>{label}</span>
      <RevealHeading id={id} text={title} className={styles.title} />
      <p>{text}</p>
    </div>
  )
}
export function HomeProblems() {
  return (
    <section className={styles.section} aria-labelledby="problems-title">
      <Heading
        label="WHAT BRINGS YOU HERE?"
        title="Move past what’s holding you back."
        text="Start with the challenge. Find the right next step for your website, product, or digital presence."
        id="problems-title"
      />
      <div className={styles.problemGrid}>
        {problems.map(({ icon: Icon, ...p }) => (
          <article key={p.title} className={styles.card} data-reveal="up">
            <span className={styles.icon}>
              <Icon aria-hidden="true" />
            </span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <Link href={p.href}>
              {p.link}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
export function HomeProjectConcepts() {
  return (
    <section className={styles.section} aria-labelledby="concepts-title">
      <Heading
        label="POSSIBILITIES IN PRACTICE"
        title="What could your next project become?"
        text="Illustrative project directions using stock photography. These are concepts, not Shardwise client case studies."
        id="concepts-title"
      />
      <div className={styles.conceptGrid}>
        {[
          {
            title: 'A more connected website',
            image: 'website-concept',
            text: 'Responsive pages, clear navigation, and a foundation your business can build on.',
            href: '/services/website-design/',
          },
          {
            title: 'A simpler mobile experience',
            image: 'app-concept',
            text: 'Considered user flows and consistent interfaces that make the next action clearer.',
            href: '/services/app-design/',
          },
          {
            title: 'A store built for everyday use',
            image: 'commerce-concept',
            text: 'Bring storefront design, platform development, and ongoing care into one plan.',
            href: '/services/shopify-development/',
          },
        ].map((p) => (
          <article key={p.title} className={styles.concept} data-reveal="up">
            <div className={styles.conceptImage}>
              <Image
                src={'/images/home/unsplash/' + p.image + '.jpg'}
                alt="Stock illustration of a digital product context"
                width={1200}
                height={800}
                sizes="(max-width:600px) 90vw, 350px"
              />
            </div>
            <div>
              <span>ILLUSTRATIVE CONCEPT</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <Link href={p.href}>
                Explore the service
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
export function HomeAboutPreview() {
  return (
    <section className={styles.about} aria-labelledby="about-preview-title">
      <div>
        <Heading
          label="MEET SHARDWISE"
          title="Design thinking. Engineering focus."
          text="We connect product design, software engineering, and ongoing improvement to help turn complex requirements into practical digital experiences."
          id="about-preview-title"
        />
        <Link className={styles.button} href="/about/">
          More about Shardwise
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      <div className={styles.principles}>
        <figure className={styles.aboutPhoto}>
          <Image
            src="/images/home/unsplash/about-preview.jpg"
            width={1200}
            height={800}
            alt="Stock illustration of a professional working at a desk"
            sizes="(max-width:600px) 85vw, 450px"
          />
          <figcaption>Stock illustration of a working day</figcaption>
        </figure>
        {[
          {
            icon: PenTool,
            title: 'Clarity before complexity',
            text: 'Understand the experience and the problem before choosing the solution.',
          },
          {
            icon: Code2,
            title: 'Built with the next step in mind',
            text: 'Connect interface decisions with implementation and future maintenance.',
          },
          {
            icon: Layers,
            title: 'A connected digital foundation',
            text: 'Bring design, development, and search considerations into the same conversation.',
          },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title} data-reveal="up">
            <Icon aria-hidden="true" />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
export function HomeTechnology() {
  return (
    <section className={styles.section} aria-labelledby="technology-title">
      <Heading
        label="PLATFORMS & CAPABILITIES"
        title="The right foundation for your project."
        text="Platform choices follow your requirements. Explore the technologies and ecosystems reflected in our services."
        id="technology-title"
      />
      <div className={styles.techGrid}>
        {[
          {
            name: 'Next.js & TypeScript',
            text: 'Web applications and custom platforms',
            href: '/services/web-app-development/',
          },
          {
            name: 'Swift & SwiftUI',
            text: 'Native iOS experiences',
            href: '/services/ios-app-development/',
          },
          {
            name: 'Android',
            text: 'Mobile application development',
            href: '/services/android-app-development/',
          },
          {
            name: 'WordPress',
            text: 'Content-driven websites',
            href: '/services/wordpress-development/',
          },
          {
            name: 'Shopify',
            text: 'Online store development and care',
            href: '/services/shopify-development/',
          },
          {
            name: 'WooCommerce',
            text: 'Ongoing store maintenance',
            href: '/services/woocommerce-maintenance/',
          },
          {
            name: 'Design systems',
            text: 'Reusable interface patterns',
            href: '/services/product-design/',
          },
          {
            name: 'Search strategy',
            text: 'Technical, content, and AI search',
            href: '/services/',
          },
        ].map((t) => (
          <Link href={t.href} key={t.name} className={styles.techCard} data-reveal="up">
            <span>{t.name}</span>
            <p>{t.text}</p>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  )
}
export function HomeInsights() {
  const posts = getAllPosts().slice(0, 3)
  if (!posts.length) return null
  return (
    <section className={styles.section} aria-labelledby="insights-title">
      <Heading
        label="FROM THE KNOWLEDGE BASE"
        title="Ideas for your next digital decision."
        text="Explore our published perspectives on engineering, performance, and digital strategy."
        id="insights-title"
      />
      <div className={styles.insightGrid}>
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={'/blogs/' + p.slug + '/'}
            className={styles.insight}
            data-reveal="up"
          >
            <span>
              {p.tags[0] || 'Insights'} · {p.readingTime}
            </span>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <strong>
              Read article
              <ArrowUpRight aria-hidden="true" />
            </strong>
          </Link>
        ))}
      </div>
      <Link href="/blogs/" className={styles.allLink}>
        Explore all insights
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </section>
  )
}
export function HomeFaq() {
  return (
    <section className={styles.faqSection} aria-labelledby="faq-title">
      <Heading
        label="BEFORE WE BEGIN"
        title="A few questions, answered."
        text="Useful starting points for planning a project with Shardwise."
        id="faq-title"
      />
      <div className={styles.faqs}>
        {faqs.map((f) => (
          <details key={f.question}>
            <summary>
              {f.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>
      <Link href="/contact/" className={styles.allLink}>
        Talk about your project
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </section>
  )
}
