'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight, ArrowRight, Layers, UserRound, FileText } from 'lucide-react'
import { SERVICE_CATEGORIES } from '@/lib/services'
import { HEADER_LINKS, isHeaderLinkActive } from '@/lib/header-navigation'
import styles from './Header.module.css'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const closeMenu = () => {
    setIsOpen(false)
    setIsServicesOpen(false)
    setOpenCategory(null)
  }

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const close = () => {
      setIsOpen(false)
      setIsServicesOpen(false)
      setOpenCategory(null)
    }
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
        trigger.current?.focus()
        return
      }
      if (event.key !== 'Tab') return
      const controls = [
        trigger.current,
        ...Array.from(
          panel.current?.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>(
            'a[href], button',
          ) || [],
        ),
      ].filter((element): element is HTMLAnchorElement | HTMLButtonElement => Boolean(element))
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    const breakpoint = window.matchMedia('(min-width: 1024px)')
    breakpoint.addEventListener('change', close)
    window.addEventListener('keydown', keyboard)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', keyboard)
      breakpoint.removeEventListener('change', close)
    }
  }, [isOpen])

  const renderLink = (link: (typeof HEADER_LINKS)[number]) => {
    const Icon = link.href === '/about' ? UserRound : FileText
    const active = isHeaderLinkActive(pathname, link.href)
    return (
      <Link
        key={link.href}
        href={link.href}
        onClick={closeMenu}
        aria-current={active ? 'page' : undefined}
        className={`${styles.mobileRow} ${active ? styles.activeRow : ''}`}
      >
        <Icon className={styles.rowIcon} aria-hidden="true" />
        <span>{link.label}</span>
        <ChevronRight className={styles.rowChevron} aria-hidden="true" />
      </Link>
    )
  }

  return (
    <div className={styles.mobileNav}>
      <button
        ref={trigger}
        type="button"
        onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className={styles.menuToggle}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {isOpen && (
        <>
          <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
          <nav
            ref={panel}
            id="mobile-navigation"
            aria-label="Mobile Navigation"
            className={styles.mobilePanel}
          >
            {renderLink(HEADER_LINKS[0]!)}
            <button
              type="button"
              onClick={() => {
                setIsServicesOpen(!isServicesOpen)
                setOpenCategory(null)
              }}
              aria-expanded={isServicesOpen}
              aria-controls="mobile-service-categories"
              className={`${styles.mobileRow} ${isServicesOpen || isHeaderLinkActive(pathname, '/services') ? styles.activeRow : ''}`}
            >
              <Layers className={styles.rowIcon} aria-hidden="true" />
              <span>Services</span>
              <ChevronRight
                className={`${styles.rowChevron} ${isServicesOpen ? styles.expandedChevron : ''}`}
                aria-hidden="true"
              />
            </button>
            {isServicesOpen && (
              <div id="mobile-service-categories" className={styles.categoryList}>
                {SERVICE_CATEGORIES.map((category) => (
                  <div key={category.id}>
                    <button
                      type="button"
                      className={styles.categoryButton}
                      onClick={() =>
                        setOpenCategory(openCategory === category.id ? null : category.id)
                      }
                      aria-expanded={openCategory === category.id}
                      aria-controls={`mobile-category-${category.id}`}
                    >
                      <span>{category.name}</span>
                      <ChevronRight
                        size={16}
                        className={openCategory === category.id ? styles.expandedChevron : ''}
                        aria-hidden="true"
                      />
                    </button>
                    {openCategory === category.id && (
                      <div id={`mobile-category-${category.id}`} className={styles.serviceList}>
                        {category.services.map((service) => (
                          <Link key={service.slug} href={service.href} onClick={closeMenu}>
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link href="/services" onClick={closeMenu} className={styles.allServices}>
                  All Services <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            )}
            {HEADER_LINKS.slice(1).map(renderLink)}
            <Link
              href="/contact"
              onClick={closeMenu}
              className={`${styles.projectButton} ${styles.mobileProjectButton}`}
            >
              Start a Project <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </nav>
        </>
      )}
    </div>
  )
}
