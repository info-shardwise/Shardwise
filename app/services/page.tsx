import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowUpRight,
  ArrowRight,
  Layers,
  Smartphone,
  TabletSmartphone,
  Globe,
  ShieldCheck,
  PenTool,
  Search,
  Code2,
  ShoppingBag,
  Layout,
  Store,
  RefreshCw,
  Sparkles,
  Monitor,
  TrendingUp,
  MapPin,
  FileText,
  DownloadCloud,
  HelpCircle,
  Cpu,
} from 'lucide-react'
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
const serviceIcons = {
  Smartphone,
  TabletSmartphone,
  Globe,
  Code2,
  ShoppingBag,
  Layout,
  ShieldCheck,
  Store,
  RefreshCw,
  Sparkles,
  PenTool,
  Monitor,
  Layers,
  TrendingUp,
  MapPin,
  FileText,
  DownloadCloud,
  HelpCircle,
  Cpu,
}
export default function ServicesPage() {
  return (
    <HomeMotion>
      <div className={styles.page}>
        <section className={styles.hero} aria-labelledby="catalog-title">
          <div className={styles.heroInner}>
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
                End-to-end technology solutions tailored to your operational goals and growth
                targets.
              </p>
              <Link href="/contact" className={styles.heroCta}>
                Start a conversation <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <nav className={styles.capabilityBoard} aria-label="Service categories">
              <div className={styles.boardHeading}>
                <span>Find your next step</span>
                <span>01 — 05</span>
              </div>
              {SERVICE_CATEGORIES.map((category, index) => {
                const Icon = icons[index] ?? Layers
                return (
                  <Link href={'#' + category.slug} key={category.id} className={styles.capability}>
                    <span className={styles.boardIcon}>
                      <Icon aria-hidden="true" />
                    </span>
                    <span className={styles.boardLabel}>
                      <strong>{category.name}</strong>
                      <small>{category.services.length} services</small>
                    </span>
                    <ArrowUpRight className={styles.boardArrow} aria-hidden="true" />
                  </Link>
                )
              })}
            </nav>
          </div>
        </section>
        <div className={styles.catalogIntro}>
          <span>OUR EXPERTISE</span>
          <p>From the first idea to what comes next.</p>
          <span>19 services · 5 disciplines</span>
        </div>
        <div className={styles.categories}>
          {SERVICE_CATEGORIES.map((category, index) => {
            const Icon = icons[index] ?? Layers
            return (
              <section
                id={category.slug}
                key={category.id}
                className={styles.category}
                data-category={category.id}
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
                  {category.services.map((service, serviceIndex) => {
                    const ServiceIcon =
                      serviceIcons[service.iconName as keyof typeof serviceIcons] ?? Layers
                    return (
                      <Link
                        key={service.slug}
                        href={service.href}
                        className={styles.serviceCard}
                        data-reveal="up"
                      >
                        <span className={styles.serviceIcon}>
                          <ServiceIcon aria-hidden="true" />
                        </span>
                        <div>
                          <h3>{service.name}</h3>
                          <p>{service.description}</p>
                        </div>
                        <span className={styles.cardFooter}>
                          <span>Explore service</span>
                          <ArrowRight aria-hidden="true" />
                        </span>
                        <span className={styles.cardNumber} aria-hidden="true">
                          0{serviceIndex + 1}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </HomeMotion>
  )
}
