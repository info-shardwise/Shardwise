'use client'
import { useEffect, useRef, useState } from 'react'
export function MetricValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)
  useEffect(() => {
    const element = ref.current
    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
    if (!element || !match) return
    const numeric = match[1]
    if (!numeric) return
    const target = Number(numeric)
    const suffix = match[2] ?? ''
    const decimals = numeric.split('.')[1]?.length ?? 0
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let observer: IntersectionObserver | undefined
    let completed = false
    const setup = () => {
      observer?.disconnect()
      cancelAnimationFrame(frame)
      if (preference.matches || completed || !('IntersectionObserver' in window)) {
        setDisplay(value)
        return
      }
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return
          observer?.disconnect()
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / 1300, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay((target * eased).toFixed(decimals) + suffix)
            if (progress < 1) frame = requestAnimationFrame(tick)
            else {
              completed = true
              setDisplay(value)
            }
          }
          frame = requestAnimationFrame(tick)
        },
        { threshold: 0.5 },
      )
      observer.observe(element)
    }
    setup()
    preference.addEventListener('change', setup)
    return () => {
      observer?.disconnect()
      cancelAnimationFrame(frame)
      preference.removeEventListener('change', setup)
    }
  }, [value])
  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  )
}
