import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
  isLoading?: boolean
}

interface ButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: never
}

interface LinkProps extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  href: string
  external?: boolean
}

type Props = ButtonProps | LinkProps

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[--color-primary] text-white hover:bg-[--color-primary-hover] border border-transparent',
  secondary:
    'bg-transparent text-[--color-primary] border border-[--color-primary] hover:bg-[--color-primary] hover:text-white',
  ghost:
    'bg-transparent text-[--color-text-dark] hover:bg-[--color-bg-light] border border-transparent',
  outline: 'bg-transparent text-white border border-white hover:bg-white hover:text-[--color-navy]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'text-sm font-medium px-4 py-2 rounded-md',
  md: 'text-base font-semibold px-6 py-3 rounded-pill',
  lg: 'text-base font-semibold px-8 py-4 rounded-pill',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 transition-all duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[--color-primary] focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none'

export function Button(props: Props) {
  const { variant = 'primary', size = 'md', className, children, isLoading, ...rest } = props

  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if ('href' in props && props.href) {
    const { href, external, ...linkRest } = props as LinkProps
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...linkRest}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...(linkRest as object)}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={classes}
      disabled={isLoading}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {isLoading ? (
        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
      ) : (
        children
      )}
    </button>
  )
}
