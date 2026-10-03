import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Layers } from 'lucide-react'
import styles from './HomeHero.module.css'

interface HomeHeroProps {
  stats: { label: string; value: string }[]
}
export function HomeHero({ stats }: HomeHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span aria-hidden="true" />
            Full-Cycle Digital Agency &amp; Software Engineering
          </div>
          <h1 id="home-hero-title" className={styles.heading}>
            We Engineer <span>Digital Products</span> That Scale
          </h1>
          <p className={styles.description}>
            From high-performance web platforms and bespoke mobile applications to technical SEO and
            ongoing maintenance. We turn complex requirements into clean, scalable software.
          </p>
          <div className={styles.actions}>
            <Link href="/contact/" className={styles.primary}>
              Start a Project <ArrowRight size={19} aria-hidden="true" />
            </Link>
            <Link href="/services/" className={styles.secondary}>
              <span className={styles.serviceIcon}>
                <Layers size={16} aria-hidden="true" />
              </span>
              View All Services
            </Link>
          </div>
        </div>
        <div className={styles.artwork} aria-hidden="true">
          <Image
            src="/images/home/hero-artwork.svg"
            width={900}
            height={760}
            alt=""
            priority
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 55vw"
          />
        </div>
      </div>
      <div className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
