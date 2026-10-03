'use client'
import { useState } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'
import styles from './Homepage.module.css'
export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery & Blueprint',
    desc: 'Deep dive into your product requirements, architecture, user journeys, and target KPIs.',
  },
  {
    num: '02',
    title: 'Design System & UX',
    desc: 'High-fidelity interactive prototypes, design tokens, and user-tested conversion flows.',
  },
  {
    num: '03',
    title: 'Full-Stack Development',
    desc: 'Clean Next.js, TypeScript, and cloud-native backend implementation built for speed and scale.',
  },
  {
    num: '04',
    title: 'QA, Deploy & Scale',
    desc: 'Edge deployment, rigorous Lighthouse auditing, automated CI/CD, and 24/7 proactive monitoring.',
  },
]
export function ProcessSteps() {
  const [active, setActive] = useState<number | null>(0)
  return (
    <div className={styles.steps}>
      {PROCESS_STEPS.map((step, index) => (
        <div
          key={step.num}
          className={styles.step + ' ' + (active === index ? styles.openStep : '')}
        >
          <h3>
            <button
              type="button"
              onClick={() => setActive(active === index ? null : index)}
              aria-expanded={active === index}
              aria-controls={'process-panel-' + step.num}
              id={'process-trigger-' + step.num}
            >
              <span className={styles.stepNumber}>{step.num}</span>
              <span>{step.title}</span>
              <Plus size={20} aria-hidden="true" />
            </button>
          </h3>
          <div
            className={styles.stepPanel}
            id={'process-panel-' + step.num}
            role="region"
            aria-labelledby={'process-trigger-' + step.num}
            aria-hidden={active !== index}
          >
            <div>
              <p>{step.desc}</p>
            </div>
          </div>
        </div>
      ))}
      <a href="/contact/" className={styles.textLink}>
        Start a Project <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </div>
  )
}
