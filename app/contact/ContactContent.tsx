import Link from 'next/link'
import { Mail, ArrowRight, Plus } from 'lucide-react'
import styles from './Contact.module.css'

const steps = [
  ['Review your brief', 'We look at your goals, service needs, and the context you share.'],
  [
    'Clarify the essentials',
    'The conversation covers priorities, constraints, and any questions needed to understand the work.',
  ],
  [
    'Agree on the scope',
    'Deliverables, responsibilities, and a suitable schedule are discussed before work begins.',
  ],
  [
    'Confirm the next step',
    'Pricing and project terms are agreed for your specific scope. Sending an enquiry does not commit you to a project.',
  ],
]
const questions = [
  [
    'Do I need a complete brief before contacting you?',
    'No. Start with the problem you want to solve and who the product is for. A current site or app link, examples, and your main priorities help guide the discussion.',
  ],
  [
    'What will my project cost?',
    'Cost depends on the scope, complexity, integrations, and ongoing support required. Share a budget range if you have one; pricing and payment terms are agreed in the project proposal.',
  ],
  [
    'How quickly can the project start?',
    'The start date depends on availability and the work involved. Tell us about any launch deadline so we can discuss a realistic schedule before making commitments.',
  ],
  [
    'Can we arrange a call across timezones?',
    'Include your timezone and a few suitable times in your message. A conversation can then be arranged by email around the project and mutually suitable availability.',
  ],
  [
    'How should I handle confidential information?',
    'Keep your first message high level. If an NDA is needed, raise that before sharing sensitive materials so confidentiality requirements can be discussed first.',
  ],
]

export function ContactNextSteps() {
  return (
    <aside className={styles.nextSteps} aria-labelledby="next-steps-title" data-reveal="up">
      <span className={styles.sectionEyebrow}>A clear starting point</span>
      <h2 id="next-steps-title">What happens next?</h2>
      <ol className={styles.steps}>
        {steps.map(([title, description], index) => (
          <li key={title}>
            <span className={styles.stepNumber} aria-hidden="true">
              0{index + 1}
            </span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className={styles.emailBox}>
        <Mail aria-hidden="true" />
        <div>
          <h3>Prefer email?</h3>
          <a href="mailto:virenstudio.in@gmail.com">virenstudio.in@gmail.com</a>
          <p>You can send your project brief directly to this inbox.</p>
        </div>
      </div>
    </aside>
  )
}

export function ContactResources() {
  return (
    <>
      <section className={styles.briefSection} aria-labelledby="prepare-title" data-reveal="up">
        <div>
          <span className={styles.sectionEyebrow}>Before you reach out</span>
          <h2 id="prepare-title">A little context goes a long way.</h2>
          <p>
            You do not need every answer yet. These details make a useful starting point for the
            conversation.
          </p>
        </div>
        <ul>
          <li>Your business and the audience you want to reach</li>
          <li>The problem to solve and your most important outcome</li>
          <li>Your current website, app, or examples you like</li>
          <li>Any known budget, timing, or technical constraints</li>
        </ul>
      </section>
      <section className={styles.faqSection} aria-labelledby="contact-faq-title" data-reveal="up">
        <span className={styles.sectionEyebrow}>Before we begin</span>
        <h2 id="contact-faq-title">Questions about getting started</h2>
        <div className={styles.faqList}>
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <Plus aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <nav className={styles.exploreLinks} aria-label="Explore Shardwise">
        <Link href="/services/">
          Explore our services <ArrowRight aria-hidden="true" />
        </Link>
        <Link href="/about/">
          Get to know Shardwise <ArrowRight aria-hidden="true" />
        </Link>
        <Link href="/blogs/">
          Read our insights <ArrowRight aria-hidden="true" />
        </Link>
      </nav>
    </>
  )
}
