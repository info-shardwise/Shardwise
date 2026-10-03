import { clsx } from 'clsx'

type SectionVariant = 'white' | 'light' | 'dark' | 'navy'

interface SectionWrapperProps {
  children: React.ReactNode
  variant?: SectionVariant
  className?: string
  containerClassName?: string
  id?: string
  as?: 'section' | 'div' | 'article'
}

const variantClasses: Record<SectionVariant, string> = {
  white: 'bg-white text-[--color-text-dark]',
  light: 'bg-[--color-bg-light] text-[--color-text-dark]',
  dark: 'bg-[--color-bg-dark] text-[--color-text-white]',
  navy: 'bg-[--color-bg-navy] text-[--color-text-white]',
}

export function SectionWrapper({
  children,
  variant = 'white',
  className,
  containerClassName,
  id,
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={clsx('section', variantClasses[variant], className)}>
      <div className={clsx('container', containerClassName)}>{children}</div>
    </Tag>
  )
}
