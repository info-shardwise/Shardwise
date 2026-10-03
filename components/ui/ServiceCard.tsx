import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { clsx } from 'clsx'

interface ServiceCardProps {
  name: string
  description?: string
  href: string
  icon?: React.ReactNode
  variant?: 'default' | 'compact'
  className?: string
}

export function ServiceCard({
  name,
  description,
  href,
  icon,
  variant = 'default',
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'group flex items-start gap-3 p-4 rounded-md border border-transparent',
        'hover:border-[--color-border] hover:shadow-card transition-all duration-200',
        'focus-visible:outline-2 focus-visible:outline-[--color-primary]',
        variant === 'compact' && 'p-3',
        className,
      )}
    >
      {icon && <span className="mt-0.5 text-[--color-primary] shrink-0">{icon}</span>}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[--color-text-dark] group-hover:text-[--color-primary] transition-colors duration-150 truncate">
          {name}
        </p>
        {description && variant === 'default' && (
          <p className="text-sm text-[--color-text-muted] mt-1 line-clamp-2">{description}</p>
        )}
      </div>
      <ArrowRight
        size={16}
        className="mt-1 text-[--color-text-light] group-hover:text-[--color-primary] group-hover:translate-x-1 transition-all duration-150 shrink-0"
      />
    </Link>
  )
}
