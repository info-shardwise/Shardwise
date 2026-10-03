import { Box, UsersRound, ChartNoAxesColumnIncreasing, Globe } from 'lucide-react'
import styles from './TrustStrip.module.css'
const icons = [Box, UsersRound, ChartNoAxesColumnIncreasing, Globe]
interface TrustStripProps {
  stats: { label: string; value: string }[]
}
export function TrustStrip({ stats }: TrustStripProps) {
  return (
    <section id="trust-strip" className={styles.section} aria-labelledby="trust-strip-title">
      <div className={styles.grid} aria-hidden="true" />
      <svg
        className={styles.arcs}
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id="trust-arc-glow">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <g fill="none">
          <path
            d="M-150 210 C280 240 140 660 800 680 M1050 100 C1350 160 1450 310 1480 550"
            stroke="#075dff"
            strokeWidth="14"
            filter="url(#trust-arc-glow)"
          />
          <path
            d="M-150 210 C280 240 140 660 800 680 M1050 100 C1350 160 1450 310 1480 550"
            stroke="#159bff"
            strokeWidth="1.5"
          />
        </g>
      </svg>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>
            <i aria-hidden="true" />
            Trusted Globally
          </span>
          <h2 id="trust-strip-title" className={styles.heading}>
            Real Results. <span>Real Impact.</span>
          </h2>
          <p className={styles.description}>
            Numbers that reflect our commitment to quality,
            <br className={styles.desktopBreak} /> performance, and long-term partnerships.
          </p>
        </div>
        <dl className={styles.panel}>
          {stats.map((stat, index) => {
            const Icon = icons[index] ?? Globe
            return (
              <div key={stat.label} className={styles.metric}>
                <div className={styles.icon} aria-hidden="true">
                  <Icon size={32} strokeWidth={1.8} />
                </div>
                <div className={styles.details}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
