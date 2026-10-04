import React from 'react'
import Link from 'next/link'
import { Info, AlertTriangle, Lightbulb } from 'lucide-react'
import styles from './ArticleLayout.module.css'
export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 {...props} />,
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href && (href.startsWith('/') || href.startsWith('#')))
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      )
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  },
  Callout: ({
    type = 'info',
    children,
  }: {
    type?: 'info' | 'tip' | 'warning'
    children: React.ReactNode
  }) => {
    const Icon = type === 'warning' ? AlertTriangle : type === 'tip' ? Lightbulb : Info
    return (
      <aside
        className={[
          styles.callout,
          type === 'warning' ? styles.warning : type === 'tip' ? styles.tip : '',
        ].join(' ')}
      >
        <Icon aria-hidden="true" />
        <div>{children}</div>
      </aside>
    )
  },
}
