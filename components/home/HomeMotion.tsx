'use client'
import { useEffect, useRef, type ReactNode } from 'react'
import styles from './Homepage.module.css'

export function HomeMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let observer: IntersectionObserver | undefined
    let frame = 0
    const items = [...root.querySelectorAll<HTMLElement>('[data-reveal]')]
    const images = [...root.querySelectorAll<HTMLElement>('[data-parallax]')]
    const update = () => {
      frame = 0
      if (preference.matches) return
      for (const image of images) {
        const rect = image.getBoundingClientRect()
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const progress =
            (window.innerHeight / 2 - rect.top - rect.height / 2) / window.innerHeight
          image.style.setProperty('--parallax-y', Math.max(-18, Math.min(18, progress * 35)) + 'px')
        }
      }
    }
    const onScroll = () => {
      if (!frame && !preference.matches) frame = requestAnimationFrame(update)
    }
    const setup = () => {
      observer?.disconnect()
      if (preference.matches || !('IntersectionObserver' in window)) {
        root.dataset.motion = 'off'
        items.forEach((item) => {
          item.dataset.visible = 'true'
        })
        images.forEach((image) => image.style.setProperty('--parallax-y', '0px'))
        return
      }
      root.dataset.motion = 'ready'
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const item = entry.target as HTMLElement
              item.dataset.visible = 'true'
              observer?.unobserve(item)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -25px 0px' },
      )
      items.forEach((item) => {
        if (item.dataset.visible !== 'true') observer?.observe(item)
      })
      onScroll()
    }
    setup()
    preference.addEventListener('change', setup)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      observer?.disconnect()
      cancelAnimationFrame(frame)
      preference.removeEventListener('change', setup)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return (
    <div ref={ref} className={styles.page}>
      {children}
    </div>
  )
}
