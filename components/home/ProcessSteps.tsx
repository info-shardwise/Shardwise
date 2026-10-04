import { ArrowUpRight } from 'lucide-react'
import styles from './Homepage.module.css'
export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'Clarify product requirements, user journeys, architecture, and the goals that will guide the project.',
  },
  {
    num: '02',
    title: 'Design & Build',
    desc: 'Connect design and implementation through clear review points, reusable patterns, and iterative development.',
  },
  {
    num: '03',
    title: 'Launch & QA',
    desc: 'Review functionality across devices, check performance, and prepare the deployment and handover.',
  },
  {
    num: '04',
    title: 'Support & Iterate',
    desc: 'Agree on ongoing maintenance and improvements so your digital product can evolve after launch.',
  },
]
export function ProcessSteps() {
  return (
    <div className={styles.steps}>
      {PROCESS_STEPS.map((step) => (
        <article key={step.num} style={{ padding: '22px 0', borderBottom: '1px solid #e7e1f0' }}>
          <h3 style={{ display: 'flex', gap: 16, fontSize: 19, fontWeight: 500 }}>
            <span className={styles.stepNumber}>{step.num}</span>
            {step.title}
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--muted)', marginTop: 12 }}>
            {step.desc}
          </p>
        </article>
      ))}
      <a href="/contact/" className={styles.textLink}>
        Start a Project
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </div>
  )
}
