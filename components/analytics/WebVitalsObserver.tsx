'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitalsObserver() {
  useReportWebVitals((metric) => {
    // Log to console in development mode or when debugging is enabled
    if (
      process.env.NODE_ENV === 'development' ||
      (typeof window !== 'undefined' && window.localStorage?.getItem('debug_vitals') === 'true')
    ) {
      // Color-coded Core Web Vitals logging
      const isGood =
        (metric.name === 'CLS' && metric.value <= 0.1) ||
        (metric.name === 'LCP' && metric.value <= 2500) ||
        (metric.name === 'FID' && metric.value <= 100) ||
        (metric.name === 'INP' && metric.value <= 200) ||
        (metric.name === 'FCP' && metric.value <= 1800) ||
        (metric.name === 'TTFB' && metric.value <= 800)

      const color = isGood ? '#10B981' : '#F59E0B'

      console.log(
        `%c[CWV] ${metric.name}: ${Math.round(metric.value * 100) / 100} (${metric.rating})`,
        `color: ${color}; font-weight: bold;`,
        {
          id: metric.id,
          navigationType: metric.navigationType,
          delta: metric.delta,
        },
      )
    }
  })

  return null
}
