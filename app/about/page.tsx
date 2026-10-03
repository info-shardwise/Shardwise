import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Gauge, Code2, TrendingUp, MessagesSquare, Sparkles } from 'lucide-react'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import styles from '@/components/about/About.module.css'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shardwise — our philosophy, team, and modern engineering standards.',
}
const principles = [
  {
    icon: Gauge,
    title: 'Obsession With Performance',
    desc: 'Every millisecond counts. We engineer websites and apps with sub-second loads and near-perfect Core Web Vitals.',
  },
  {
    icon: Code2,
    title: 'Maintainable, Modern Code',
    desc: 'No spaghetti code or fragile frameworks. We write clean, typed TypeScript and modular architectures.',
  },
  {
    icon: TrendingUp,
    title: 'Commercial Alignment',
    desc: 'Technology is a tool for business growth. We build solutions designed to directly drive leads and revenue.',
  },
  {
    icon: MessagesSquare,
    title: 'Transparent Collaboration',
    desc: 'Weekly sprint demos, clear roadmaps, direct access to engineers, and zero vendor lock-in.',
  },
]
export default function AboutPage() {
  return (
    <HomeMotion>
      <div className={styles.about}>
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.copy}>
            <span className={styles.eyebrow} data-reveal="up">
              <span /> About Shardwise
            </span>
            <RevealHeading
              as="h1"
              id="about-title"
              text="We Build Modern Digital Engines For Ambitious Brands"
              className={styles.title}
            />
            <p className={styles.description} data-reveal="up">
              Shardwise is a digital technology studio dedicated to crafting high-performance
              websites, custom web and mobile applications, conversion-driven design systems, and
              authoritative search strategies.
            </p>
          </div>
          <div className={styles.photoLayout}>
            <figure className={styles.mainPhoto} data-reveal="scale" data-parallax>
              <Image
                src="/images/home/unsplash/team-collaboration.jpg"
                alt="People collaborating around laptops in a bright workspace"
                fill
                priority
                sizes="(max-width: 700px) 92vw, 75vw"
              />
            </figure>
            <figure className={styles.detailPhoto} data-reveal="scale" data-parallax>
              <Image
                src="/images/home/unsplash/creative-process.jpg"
                alt="A collaborative planning session around a table"
                fill
                sizes="(max-width: 700px) 40vw, 300px"
              />
            </figure>
            <div className={styles.photoBadge} data-reveal="up">
              <Sparkles aria-hidden="true" />
              <span>
                Modern code.
                <br />
                <strong>Ambitious brands.</strong>
              </span>
            </div>
            <span className={styles.orbit} aria-hidden="true" />
          </div>
        </section>
        <section className={styles.principles} aria-labelledby="principles-title">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow} data-reveal="up">
              <span /> Our approach
            </span>
            <RevealHeading
              id="principles-title"
              text="Engineering Principles"
              className={styles.sectionTitle}
            />
          </div>
          <div className={styles.grid}>
            {principles.map(({ icon: Icon, title, desc }, index) => (
              <article className={styles.card} key={title} data-reveal="up">
                <div className={styles.cardTop}>
                  <span className={styles.icon}>
                    <Icon aria-hidden="true" strokeWidth={1.6} />
                  </span>
                  <span className={styles.number}>0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>
        <section className={styles.contact} aria-labelledby="together-title" data-reveal="up">
          <div className={styles.contactDecoration} aria-hidden="true" />
          <div>
            <h2 id="together-title">Want to work together?</h2>
            <p>
              Let&apos;s talk about your roadmap, timeline, and how Shardwise can accelerate your
              delivery.
            </p>
          </div>
          <Link className={styles.button} href="/contact">
            Get In Touch <ArrowUpRight aria-hidden="true" />
          </Link>
        </section>
      </div>
    </HomeMotion>
  )
}
