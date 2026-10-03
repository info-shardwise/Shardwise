'use client'

import { useState, useEffect } from 'react'
import { Logo } from '@/components/layout/Logo'
import { DesktopNav } from '@/components/layout/DesktopNav'
import { ServicesMegaMenu } from '@/components/layout/ServicesMegaMenu'
import { MobileNav } from '@/components/layout/MobileNav'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  // Scroll listener — passive for performance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Escape key closes mega menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMegaMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#061A3A]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#061A3A] border-b border-white/5 py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav isMegaMenuOpen={isMegaMenuOpen} setIsMegaMenuOpen={setIsMegaMenuOpen} />

          {/* Mobile Drawer Trigger */}
          <MobileNav />
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      <ServicesMegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
    </header>
  )
}
