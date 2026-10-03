export const HEADER_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Blogs', href: '/blogs' },
]

export function isHeaderLinkActive(pathname: string, href: string) {
  const current = pathname.replace(/\/$/, '') || '/'
  return current === href || current.startsWith(`${href}/`)
}
