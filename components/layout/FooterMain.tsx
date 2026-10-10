import Link from 'next/link'
import { Logo } from '@/components/layout/Logo'
import { SERVICE_CATEGORIES } from '@/lib/services'
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'
import styles from './FooterMain.module.css'

export function FooterMain() {
  return (
    <div className="border-t border-white/10 bg-[#061A3A] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1 — Brand (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Shardwise builds websites, applications, digital experiences, and growth-focused
              solutions for modern businesses.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shardwise LinkedIn"
                className={styles.socialLink}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shardwise Twitter / X"
                className={styles.socialLink}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2 — Company (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'About', href: '/about' },
                { label: 'Blogs', href: '/blogs' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-300 hover:text-[#11C5F5] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    href={category.href}
                    className="text-slate-300 hover:text-[#11C5F5] transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Get in Touch (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-[#11C5F5] mt-0.5 shrink-0" />
                <a
                  href="mailto:contact@shardwise.com"
                  className="hover:text-white transition-colors"
                >
                  contact@shardwise.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-[#11C5F5] mt-0.5 shrink-0" />
                <span>+1 (800) SHARDWISE</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#11C5F5] mt-0.5 shrink-0" />
                <span>San Francisco, California</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center text-xs font-semibold text-[#11C5F5] hover:underline"
              >
                Send a project brief →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
