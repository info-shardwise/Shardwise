import { type CSSProperties } from 'react'
import styles from './Homepage.module.css'
export function RevealHeading({
  text,
  as = 'h2',
  className = '',
  id,
}: {
  text: string
  as?: 'h1' | 'h2'
  className?: string
  id?: string
}) {
  const Tag = as
  let index = 0
  return (
    <Tag
      id={id ?? (as === 'h1' ? 'homepage-title' : undefined)}
      className={styles.splitHeading + ' ' + className}
      aria-label={text}
      data-reveal="heading"
    >
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className={styles.word} aria-hidden="true">
          {[...word].map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className={styles.letter}
              style={{ '--letter-delay': Math.min(index++ * 16, 700) + 'ms' } as CSSProperties}
            >
              {letter}
            </span>
          ))}{' '}
        </span>
      ))}
    </Tag>
  )
}
