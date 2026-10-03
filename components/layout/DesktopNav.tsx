'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { HEADER_LINKS, isHeaderLinkActive } from '@/lib/header-navigation'
import styles from './Header.module.css'

interface DesktopNavProps {
  isMegaMenuOpen: boolean
  setIsMegaMenuOpen: (open: boolean) => void
}

export function DesktopNav({ isMegaMenuOpen, setIsMegaMenuOpen }: DesktopNavProps) {
  const pathname = usePathname()
  const firstLink = HEADER_LINKS[0]!
  return (
    <nav className={styles.desktopNav} aria-label="Main Navigation">
      <Link
        href={firstLink.href}
        aria-current={isHeaderLinkActive(pathname, firstLink.href) ? 'page' : undefined}
        className={`${styles.navLink} ${isHeaderLinkActive(pathname, firstLink.href) ? styles.activeLink : ''}`}
        onMouseEnter={() => setIsMegaMenuOpen(false)}
      >
        {firstLink.label}
      </Link>
      <button
        type="button"
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onClick={() => setIsMegaMenuOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setIsMegaMenuOpen(!isMegaMenuOpen)
          }
        }}
        aria-expanded={isMegaMenuOpen}
        aria-controls="desktop-services-menu"
        className={`${styles.navLink} ${styles.servicesTrigger} ${isHeaderLinkActive(pathname, '/services') || isMegaMenuOpen ? styles.activeLink : ''}`}
      >
        Services
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`${styles.servicesChevron} ${isMegaMenuOpen ? styles.servicesChevronOpen : ''}`}
        />
      </button>
      {HEADER_LINKS.slice(1).map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onMouseEnter={() => setIsMegaMenuOpen(false)}
          aria-current={isHeaderLinkActive(pathname, link.href) ? 'page' : undefined}
          className={`${styles.navLink} ${isHeaderLinkActive(pathname, link.href) ? styles.activeLink : ''}`}
        >
          {link.label}
        </Link>
      ))}
      <Link
        href="/contact"
        className={styles.projectButton}
        onMouseEnter={() => setIsMegaMenuOpen(false)}
      >
        Contact <ArrowRight size={20} aria-hidden="true" />
      </Link>
    </nav>
  )
}
