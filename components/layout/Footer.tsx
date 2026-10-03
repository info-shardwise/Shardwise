import { PreFooterCTA } from '@/components/layout/PreFooterCTA'
import { FooterMain } from '@/components/layout/FooterMain'
import { FooterBottom } from '@/components/layout/FooterBottom'

interface FooterProps {
  hidePreFooterCTA?: boolean
}

export function Footer({ hidePreFooterCTA = false }: FooterProps) {
  return (
    <footer className="w-full" role="contentinfo">
      {!hidePreFooterCTA && <PreFooterCTA />}
      <FooterMain />
      <FooterBottom />
    </footer>
  )
}
