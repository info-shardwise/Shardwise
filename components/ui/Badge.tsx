import { clsx } from 'clsx'

type BadgeVariant = 'default' | 'primary' | 'cyan' | 'green' | 'yellow' | 'purple'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-[--color-bg-light] text-[--color-text-muted]',
  primary: 'bg-[--color-primary-light] text-[--color-primary]',
  cyan: 'bg-[#e0f7fd] text-[#0754D8]',
  green: 'bg-[#e6f9ec] text-[#2a7a4b]',
  yellow: 'bg-[#fffbe6] text-[#7a6000]',
  purple: 'bg-[#f3eaff] text-[#6b21a8]',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
