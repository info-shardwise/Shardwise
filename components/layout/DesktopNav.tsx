'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface DesktopNavProps {
  isMegaMenuOpen: boolean
  setIsMegaMenuOpen: (open: boolean) => void
}

export function DesktopNav({ isMegaMenuOpen, setIsMegaMenuOpen }: DesktopNavProps) {
  const pathname = usePathname()

  const isAboutActive = pathname === '/about'
  const isServicesActive = pathname.startsWith('/services')
  const isBlogsActive = pathname.startsWith('/blogs')

  return (
    <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
      {/* About */}
      <Link
        href="/about"
        className={`text-sm font-medium transition-colors hover:text-white ${
          isAboutActive ? 'text-white font-semibold' : 'text-slate-300'
        }`}
      >
        About
      </Link>

      {/* Services Trigger */}
      <div className="relative" onMouseEnter={() => setIsMegaMenuOpen(true)}>
        <button
          type="button"
          onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
          aria-expanded={isMegaMenuOpen}
          aria-haspopup="true"
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md py-1 ${
            isServicesActive || isMegaMenuOpen ? 'text-white font-semibold' : 'text-slate-300'
          }`}
        >
          <span>Services</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isMegaMenuOpen ? 'rotate-180 text-[#11C5F5]' : 'text-slate-400'
            }`}
          />
        </button>
      </div>

      {/* Blogs */}
      <Link
        href="/blogs"
        className={`text-sm font-medium transition-colors hover:text-white ${
          isBlogsActive ? 'text-white font-semibold' : 'text-slate-300'
        }`}
      >
        Blogs
      </Link>

      {/* Contact CTA */}
      <Button href="/contact" variant="primary" size="sm" className="shadow-md shadow-[#0878F9]/20">
        Contact
      </Button>
    </nav>
  )
}
