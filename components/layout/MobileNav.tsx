'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { SERVICE_CATEGORIES } from '@/lib/services'
import { Button } from '@/components/ui/Button'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const pathname = usePathname()

  const closeMenu = () => {
    setIsOpen(false)
    setOpenCategory(null)
  }

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id)
  }

  return (
    <div className="flex md:hidden">
      {/* Hamburger Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className="rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0878F9]"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-[#061A3A] border-l border-white/10 p-6 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Top Row */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="font-display text-xl uppercase tracking-wider text-white">Menu</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1.5 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="py-4 space-y-2">
            {/* About */}
            <Link
              href="/about"
              onClick={closeMenu}
              className={`block rounded-lg px-3 py-2.5 text-base font-medium ${
                pathname === '/about'
                  ? 'bg-white/10 text-white font-semibold'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              About
            </Link>

            {/* Services Accordion */}
            <div className="rounded-lg border border-white/5 bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleCategory('all-services')}
                className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-300 hover:text-white"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openCategory === 'all-services' ? 'rotate-180 text-[#11C5F5]' : ''
                  }`}
                />
              </button>

              {openCategory === 'all-services' && (
                <div className="px-3 pb-3 space-y-3 pt-1 border-t border-white/5 bg-black/20">
                  {SERVICE_CATEGORIES.map((category) => (
                    <div key={category.id} className="space-y-1">
                      <div className="text-xs font-semibold uppercase text-slate-400 px-2 pt-1">
                        {category.name}
                      </div>
                      <div className="space-y-1 pl-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.slug}
                            href={service.href}
                            onClick={closeMenu}
                            className="block rounded-md px-2 py-1.5 text-xs text-slate-300 hover:bg-white/5 hover:text-[#11C5F5]"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Link
                      href="/services"
                      onClick={closeMenu}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#11C5F5]"
                    >
                      All Services <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Blogs */}
            <Link
              href="/blogs"
              onClick={closeMenu}
              className={`block rounded-lg px-3 py-2.5 text-base font-medium ${
                pathname.startsWith('/blogs')
                  ? 'bg-white/10 text-white font-semibold'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              Blogs
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-white/10">
          <Button
            href="/contact"
            variant="primary"
            onClick={closeMenu}
            className="w-full justify-center shadow-lg shadow-[#0878F9]/30"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
