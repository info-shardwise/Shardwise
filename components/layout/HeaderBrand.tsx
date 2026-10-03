import Link from 'next/link'
import styles from './Header.module.css'

export function HeaderBrand() {
  return (
    <Link href="/" className={styles.brand} aria-label="Shardwise Home">
      <svg viewBox="0 0 64 72" fill="none" className={styles.brandMark} aria-hidden="true">
        <defs>
          <linearGradient
            id="header-shard-top"
            x1="15"
            y1="3"
            x2="50"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#20C4FF" />
            <stop offset="1" stopColor="#0878FF" />
          </linearGradient>
          <linearGradient
            id="header-shard-side"
            x1="52"
            y1="24"
            x2="31"
            y2="70"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#158EFF" />
            <stop offset="1" stopColor="#5035FF" />
          </linearGradient>
          <linearGradient
            id="header-shard-bottom"
            x1="6"
            y1="42"
            x2="37"
            y2="71"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#008CFF" />
            <stop offset="1" stopColor="#5335FF" />
          </linearGradient>
        </defs>
        <path d="M20 16 40 3 59 13 40 27Z" fill="url(#header-shard-top)" />
        <path d="M5 32 17 19 32 28 18 38 5 52Z" fill="url(#header-shard-top)" />
        <path d="M43 30 61 19 61 42 44 58Z" fill="url(#header-shard-side)" />
        <path d="M21 42 34 34 40 38 40 54 30 48Z" fill="url(#header-shard-side)" />
        <path d="M5 58 19 45 29 51 39 59 27 70 14 69Z" fill="url(#header-shard-bottom)" />
        <path d="M20 16 40 27 52 19" stroke="#04101B" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <span>Shardwise</span>
    </Link>
  )
}
