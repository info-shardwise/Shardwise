import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'
import content from './homepage-seo.json'
import styles from './SeoHomepage.module.css'

function inline(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link)
      return (
        <Link key={i} href={link[2]!}>
          {link[1]}
        </Link>
      )
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    return part
  })
}

export function SeoHomepage() {
  return (
    <div className={styles.page}>
      {content.map((blocks, index) => (
        <section key={index} className={`${styles.section} ${index === 0 ? styles.hero : ''}`}>
          <div className={styles.inner}>
            {blocks.map((block, i) => {
              const text = block.text
              switch (block.type) {
                case 'h1':
                  return <h1 key={i}>{text}</h1>
                case 'h2':
                  return <h2 key={i}>{text}</h2>
                case 'h3':
                  return <h3 key={i}>{text}</h3>
                case 'eyebrow':
                  return (
                    <span key={i} className={styles.eyebrow}>
                      {text}
                    </span>
                  )
                case 'button':
                  return (
                    <div key={i} className={styles.button}>
                      {inline(text)}
                    </div>
                  )
                case 'caption':
                  return (
                    <figure key={i} className={styles.photo}>
                      <Image
                        src="/images/home/unsplash/team-collaboration.jpg"
                        alt="Developers collaborating around laptops in a shared workspace"
                        width={1600}
                        height={1067}
                        priority
                        sizes="(max-width: 767px) 94vw, 1050px"
                      />
                      <figcaption>{text}</figcaption>
                    </figure>
                  )
                case 'list':
                  return (
                    <ul key={i}>
                      {text.split('\n').map((line, n) => (
                        <li key={n}>{inline(line.replace(/^- /, ''))}</li>
                      ))}
                    </ul>
                  )
                default:
                  return <p key={i}>{inline(text)}</p>
              }
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
