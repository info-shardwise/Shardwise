import Link from 'next/link'

export function FooterBottom() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="border-t border-white/5 bg-[#040e20] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          {/* Dynamic copyright */}
          <p>© {currentYear} Shardwise. All rights reserved.</p>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
