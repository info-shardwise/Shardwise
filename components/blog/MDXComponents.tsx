import React from 'react'
import Link from 'next/link'
import { Info, AlertTriangle, Lightbulb } from 'lucide-react'

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="font-display text-3xl sm:text-4xl text-white uppercase mt-12 mb-6 tracking-wide"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-display text-2xl sm:text-3xl text-white uppercase mt-10 mb-4 tracking-wide border-b border-white/10 pb-3"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-bold text-white mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-slate-300 leading-relaxed text-base mb-6" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-6" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 space-y-2 text-slate-300 mb-6" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-[#0878F9] pl-4 py-1 my-6 italic text-slate-200 bg-white/[0.02] rounded-r-lg"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-[#11C5F5]"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="rounded-2xl border border-white/10 bg-[#040e20] p-5 my-6 overflow-x-auto text-sm text-slate-200 font-mono"
      {...props}
    />
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'))
    if (isInternal) {
      return (
        <Link
          href={href}
          className="text-[#11C5F5] underline underline-offset-4 hover:text-white transition-colors"
          {...props}
        >
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#11C5F5] underline underline-offset-4 hover:text-white transition-colors"
        {...props}
      >
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
    const styles = {
      info: 'border-[#0878F9]/40 bg-[#0878F9]/10 text-blue-200',
      tip: 'border-[#11C5F5]/40 bg-[#11C5F5]/10 text-cyan-200',
      warning: 'border-amber-500/40 bg-amber-500/10 text-amber-200',
    }
    const icons = {
      info: <Info className="h-5 w-5 text-[#0878F9] shrink-0" />,
      tip: <Lightbulb className="h-5 w-5 text-[#11C5F5] shrink-0" />,
      warning: <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0" />,
    }

    return (
      <div className={`my-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${styles[type]}`}>
        {icons[type]}
        <div className="flex-1">{children}</div>
      </div>
    )
  },
}
