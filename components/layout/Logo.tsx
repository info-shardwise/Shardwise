import Link from 'next/link'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  headerWordmark?: boolean
}

export function Logo({ variant = 'light', className = '', headerWordmark = true }: LogoProps) {
  const isLight = variant === 'light'

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md transition-opacity hover:opacity-90 ${className}`}
      aria-label="Shardwise Home"
    >
      {/* Brand Geometric Shard Icon */}
      <span
        className={`relative flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#11C5F5] to-[#0878F9] shadow-md shadow-[#0878F9]/20 ${headerWordmark ? 'h-10 w-10' : 'h-8 w-8'}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${headerWordmark ? 'h-6 w-6' : 'h-[18px] w-[18px]'} text-white`}
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      </span>

      {/* Wordmark */}
      {headerWordmark ? (
        <span
          className={`font-[family-name:var(--font-inter)] text-[28px] font-semibold tracking-[-0.045em] ${isLight ? 'text-white' : 'text-[#061A3A]'}`}
        >
          Shardwise
        </span>
      ) : (
        <span
          className={`font-display text-2xl tracking-wide uppercase ${
            isLight ? 'text-white' : 'text-[#061A3A]'
          }`}
        >
          Shard<span className="text-[#11C5F5]">wise</span>
        </span>
      )}
    </Link>
  )
}
