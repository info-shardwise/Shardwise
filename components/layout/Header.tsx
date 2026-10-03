'use client'

import { useState, useEffect } from 'react'
import { HeaderBrand } from '@/components/layout/HeaderBrand'
import { DesktopNav } from '@/components/layout/DesktopNav'
import { ServicesMegaMenu } from '@/components/layout/ServicesMegaMenu'
import { MobileNav } from '@/components/layout/MobileNav'
import styles from './Header.module.css'

export function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMegaMenuOpen(false)
    }
    const breakpoint = window.matchMedia('(min-width: 1024px)')
    const closeAtBreakpoint = () => setIsMegaMenuOpen(false)
    window.addEventListener('keydown', handleKeyDown)
    breakpoint.addEventListener('change', closeAtBreakpoint)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      breakpoint.removeEventListener('change', closeAtBreakpoint)
    }
  }, [])
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <HeaderBrand />
        <DesktopNav isMegaMenuOpen={isMegaMenuOpen} setIsMegaMenuOpen={setIsMegaMenuOpen} />
        <MobileNav />
      </div>
      <ServicesMegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
    </header>
  )
}
