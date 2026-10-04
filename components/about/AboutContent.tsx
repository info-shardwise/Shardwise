import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  Code2,
  PenTool,
  Search,
  Layers,
  MessagesSquare,
  ShieldCheck,
} from 'lucide-react'
import { RevealHeading } from '@/components/home/RevealHeading'
import styles from './AboutContent.module.css'
function Heading({ label, title, id }: { label: string; title: string; id: string }) {
  return (
    <div className={styles.heading}>
      <span>{label}</span>
      <RevealHeading id={id} text={title} className={styles.title} />
    </div>
  )
}
export function AboutStory() {
  return (
    <section className={styles.story} aria-labelledby="story-title">
      <div>
        <Heading
          label="THE IDEA BEHIND SHARDWISE"
          title="Bring the pieces together."
          id="story-title"
        />
        <span className={styles.storyMark} aria-hidden="true">
          <Layers />
        </span>
      </div>
      <div className={styles.prose}>
        <p>
          A digital product is more than its launch day. Its design needs to make sense to users,
          its code needs to be maintainable, and its content needs to help the right people find it.
          Shardwise brings these connected disciplines into the same conversation.
        </p>
        <p>
          Our focus spans websites, mobile and web applications, interface design, search strategy,
          and ongoing maintenance. That breadth lets a project start with the problem it needs to
          solve, rather than with a platform or a single isolated deliverable.
        </p>
        <p>
          We approach complex requirements by making the decisions clearer: what the product should
          do, how people will use it, what the implementation needs, and how it can be supported
          after delivery. The goal is a practical digital foundation that can evolve with the
          business.
        </p>
        <Link href="/services/">
          Explore our capabilities
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
export function AboutMission() {
  return (
    <section className={styles.mission} aria-labelledby="mission-title">
      <Heading
        label="OUR MISSION"
        title="Make ambitious ideas usable, maintainable, and connected."
        id="mission-title"
      />
      <p>
        Turn complex digital requirements into clear experiences and sound engineering. We consider
        the interface, the underlying implementation, and the next stage of improvement together, so
        the work has a useful life beyond the first release.
      </p>
    </section>
  )
}
export function AboutRoles() {
  return (
    <section className={styles.section} aria-labelledby="roles-title">
      <Heading
        label="THE DISCIPLINES BEHIND THE WORK"
        title="Different perspectives. One project direction."
        id="roles-title"
      />
      <p className={styles.intro}>
        Design, engineering, and search bring different questions to a project. Connecting them
        helps align the user experience with the technical foundations and the business goals.
      </p>
      <div className={styles.grid}>
        {[
          {
            icon: PenTool,
            title: 'Product & interface design',
            text: 'Clarify journeys, content hierarchy, and interaction patterns. Establish a visual language that stays consistent across pages, screens, and states.',
            href: '/services/product-design/',
          },
          {
            icon: Code2,
            title: 'Software engineering',
            text: 'Translate requirements into websites and applications, with attention to structure, implementation choices, and the work needed to keep the product running.',
            href: '/services/web-app-development/',
          },
          {
            icon: Search,
            title: 'Search & digital strategy',
            text: 'Connect technical search foundations and useful content with discoverability, including local search, answer engines, and generative search experiences.',
            href: '/services/',
          },
        ].map(({ icon: Icon, title, text, href }) => (
          <article className={styles.card} key={title} data-reveal="up">
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
            <Link href={href}>
              Explore this discipline
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
export function AboutDifference() {
  return (
    <section className={styles.section} aria-labelledby="difference-title">
      <Heading
        label="WHY SHARDWISE"
        title="A connected approach to digital work."
        id="difference-title"
      />
      <div className={styles.differenceGrid}>
        {[
          {
            icon: Layers,
            title: 'Consider the whole lifecycle',
            text: 'Design, development, search, and maintenance are connected services. Discuss the complete path, from the initial product decision to what happens after launch.',
          },
          {
            icon: ShieldCheck,
            title: 'Keep the foundations in view',
            text: 'Performance and maintainability belong in the project conversation from the beginning. They inform the technical choices alongside the visible experience.',
          },
          {
            icon: MessagesSquare,
            title: 'Make decisions understandable',
            text: 'Clear requirements, review points, and handover expectations help keep the work understandable. Discuss responsibilities and communication before delivery begins.',
          },
          {
            icon: Search,
            title: 'Plan for how people find you',
            text: 'Technical SEO, content strategy, AEO, and GEO sit within our service offering. Search visibility can be considered alongside the site or product rather than only at the end.',
          },
        ].map(({ icon: Icon, title, text }, i) => (
          <article key={title} className={styles.difference} data-reveal="up">
            <span>0{i + 1}</span>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
export function AboutCulture() {
  return (
    <section className={styles.culture} aria-labelledby="culture-title">
      <Heading
        label="HOW WE THINK ABOUT WORK"
        title="Space for clarity and collaboration."
        id="culture-title"
      />
      <p className={styles.intro}>
        Good digital work needs time to understand the problem, compare ideas, and review the
        details. Our engineering principles emphasize transparent collaboration and clear roadmaps
        alongside performance and commercial alignment.
      </p>
      <div className={styles.photos}>
        <figure>
          <Image
            src="/images/about/unsplash/studio-collaboration.jpg"
            width={1600}
            height={1000}
            alt="Stock photograph illustrating a collaborative discussion around laptops"
            sizes="(max-width:600px) 90vw, 600px"
          />
          <figcaption>Collaborative thinking · illustrative Unsplash photography</figcaption>
        </figure>
        <figure>
          <Image
            src="/images/about/unsplash/creative-workspace.jpg"
            width={1100}
            height={800}
            alt="Stock photograph illustrating a bright shared workspace"
            sizes="(max-width:600px) 90vw, 450px"
          />
          <figcaption>Space to focus · illustrative Unsplash photography</figcaption>
        </figure>
      </div>
      <p className={styles.note}>
        These stock photos illustrate working environments; they do not show Shardwise staff or
        premises.
      </p>
    </section>
  )
}
export function AboutNextSteps() {
  return (
    <section className={styles.next} aria-labelledby="next-title">
      <Heading label="GET TO KNOW THE WORK" title="Find the next conversation." id="next-title" />
      <div>
        <Link href="/services/">
          Explore our services
          <ArrowUpRight aria-hidden="true" />
        </Link>
        <Link href="/blogs/">
          Read our insights
          <ArrowUpRight aria-hidden="true" />
        </Link>
        <Link href="/contact/">
          Discuss your project
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
