import { clsx } from 'clsx'

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'

interface AnimatedTextProps {
  as?: Tag
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedText({
  as: Tag = 'h2',
  children,
  className,
  delay = 0,
}: AnimatedTextProps) {
  return (
    <Tag
      className={clsx('animate-fade-up opacity-0', className)}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </Tag>
  )
}
