'use client'
import { useEffect, useState } from 'react'
import { SERVICE_CATEGORIES } from '@/lib/services'
import styles from './ServicesContent.module.css'
const labels = ['Application', 'Website', 'Maintenance', 'Design', 'SEO']
export function ServicesNavigation() {
  const [active, setActive] = useState('')
  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const sections = SERVICE_CATEGORIES.map((c) => document.getElementById(c.slug)).filter(
          (s): s is HTMLElement => Boolean(s),
        )
        const current = sections.find(
          (s) => s.getBoundingClientRect().top <= 190 && s.getBoundingClientRect().bottom > 190,
        )
        setActive(current?.id ?? '')
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return (
    <nav className={styles.navigation} aria-label="Jump to a service category">
      <div>
        {SERVICE_CATEGORIES.map((c, i) => (
          <a
            key={c.id}
            href={'#' + c.slug}
            aria-current={active === c.slug ? 'location' : undefined}
          >
            {labels[i]}
            <span>{String(c.services.length).padStart(2, '0')}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
