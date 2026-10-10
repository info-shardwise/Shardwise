'use client'
import { usePathname } from 'next/navigation'
import { PreFooterCTA } from '@/components/layout/PreFooterCTA'
import { FooterMain } from '@/components/layout/FooterMain'
import { FooterBottom } from '@/components/layout/FooterBottom'

interface FooterProps {
  hidePreFooterCTA?: boolean
}

export function Footer({ hidePreFooterCTA = false }: FooterProps) {
  const isHome = usePathname() === '/'
  return (
    <footer className="w-full" role="contentinfo">
      {!hidePreFooterCTA && !isHome && <PreFooterCTA />}
      <FooterMain />
      <FooterBottom />
    </footer>
  )
}
