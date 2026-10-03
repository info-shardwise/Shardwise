export function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs font-medium text-[#11C5F5]">
      #{tag}
    </span>
  )
}
