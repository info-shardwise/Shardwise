import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Layers, Smartphone, Globe, ShieldCheck, PenTool, Search } from 'lucide-react'
import { SERVICE_CATEGORIES } from '@/lib/services'
import { HomeMotion } from '@/components/home/HomeMotion'
import { RevealHeading } from '@/components/home/RevealHeading'
import styles from '@/components/services/ServicesCatalog.module.css'
export const metadata: Metadata = {
  title: 'Services Catalog',
  description:
    'Browse all development, maintenance, design, and search optimization services by Shardwise.',
}
const icons = [Smartphone, Globe, ShieldCheck, PenTool, Search]
export default function ServicesPage() {
  return (
    <HomeMotion>
      <div className={styles.page}>
        <section className={styles.hero} aria-labelledby="catalog-title">
          <div className={styles.copy}>
            <span className={styles.eyebrow} data-reveal="up">
              <Layers aria-hidden="true" />
              Capabilities
            </span>
            <RevealHeading
              as="h1"
              id="catalog-title"
              text="Comprehensive Digital & Software Services"
              className={styles.title}
            />
            <p data-reveal="up">
              End-to-end technology solutions tailored to your operational goals and growth targets.
            </p>
            <nav className={styles.categoryLinks} aria-label="Service categories">
              {SERVICE_CATEGORIES.map((category) => (
                <Link href={'#' + category.slug} key={category.id}>
                  {category.name}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>
        </section>
        <div className={styles.categories}>
          {SERVICE_CATEGORIES.map((category, index) => {
            const Icon = icons[index] ?? Layers
            return (
              <section
                id={category.slug}
                key={category.id}
                className={styles.category}
                aria-labelledby={category.id + '-title'}
              >
                <div className={styles.categoryHeader} data-reveal="up">
                  <div className={styles.categoryIntro}>
                    <span className={styles.categoryIcon}>
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <span className={styles.number}>0{index + 1}</span>
                      <h2 id={category.id + '-title'}>{category.name}</h2>
                      <p>{category.description}</p>
                    </div>
                  </div>
                  <Link className={styles.discuss} href="/contact">
                    Discuss {category.name}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
                <div className={styles.grid}>
                  {category.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      className={styles.serviceCard}
                      data-reveal="up"
                    >
                      <span className={styles.serviceIcon}>
                        <Icon aria-hidden="true" />
                      </span>
                      <div>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                      </div>
                      <span className={styles.cardArrow}>
                        <ArrowUpRight aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </HomeMotion>
  )
}
