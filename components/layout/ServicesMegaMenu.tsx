'use client'

import { useState } from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import { SERVICE_CATEGORIES, type ServiceCategory } from '@/lib/services'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  TabletSmartphone,
  Globe,
  Code2,
  ShoppingBag,
  Layout,
  ShieldCheck,
  Store,
  RefreshCw,
  Sparkles,
  PenTool,
  Monitor,
  Layers,
  TrendingUp,
  MapPin,
  FileText,
  DownloadCloud,
  HelpCircle,
  Cpu,
  type LucideIcon,
} from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone,
  TabletSmartphone,
  Globe,
  Code2,
  ShoppingBag,
  Layout,
  ShieldCheck,
  Store,
  RefreshCw,
  Sparkles,
  PenTool,
  Monitor,
  Layers,
  TrendingUp,
  MapPin,
  FileText,
  DownloadCloud,
  HelpCircle,
  Cpu,
}

interface ServicesMegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function ServicesMegaMenu({ isOpen, onClose }: ServicesMegaMenuProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(SERVICE_CATEGORIES[0]!.id)

  if (!isOpen) return null

  const activeCategory: ServiceCategory = (SERVICE_CATEGORIES.find(
    (cat) => cat.id === activeCategoryId,
  ) ?? SERVICE_CATEGORIES[0])!

  const renderIcon = (iconName: string) => {
    const IconComponent = ICON_MAP[iconName] ?? Layers
    return (
      <IconComponent className="h-5 w-5 text-[#0878F9] transition-colors group-hover:text-black group-focus-visible:text-black" />
    )
  }

  return (
    <div
      id="desktop-services-menu"
      role="region"
      aria-label="Services Navigation Menu"
      className={`${styles.megaMenu} absolute top-full left-0 hidden w-full pt-2 z-50 lg:block max-h-[calc(100dvh-112px)] overflow-y-auto`}
      onMouseLeave={onClose}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#08111C] backdrop-blur-xl p-6 shadow-2xl shadow-black/40 ring-1 ring-white/5">
          <div className="grid grid-cols-12 gap-6 min-h-[380px]">
            {/* Left Column — Categories */}
            <div className="col-span-4 border-r border-white/10 pr-4 space-y-1.5">
              <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Service Categories
              </div>

              {SERVICE_CATEGORIES.map((cat) => {
                const isSelected = cat.id === activeCategoryId
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onMouseEnter={() => setActiveCategoryId(cat.id)}
                    onFocus={() => setActiveCategoryId(cat.id)}
                    className={`w-full group flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                      isSelected
                        ? 'bg-[#0878F9] text-white shadow-md shadow-[#0878F9]/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                        isSelected ? 'text-white' : 'text-slate-500'
                      }`}
                    />
                  </button>
                )
              })}

              <div className="pt-4 px-3">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#11C5F5] hover:underline"
                >
                  View all services overview
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column — Services Grid */}
            <div className="col-span-8 pl-4 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white">{activeCategory.name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{activeCategory.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  {activeCategory.services.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-start gap-3.5 rounded-xl border border-white/5 bg-white/[0.03] p-3.5 transition-all hover:border-[#0878F9]/50 hover:bg-white/[0.07] hover:shadow-lg"
                    >
                      <div className="mt-0.5 rounded-lg bg-[#0878F9]/15 p-2 transition-colors group-hover:bg-[#0878F9] group-focus-visible:bg-[#0878F9]">
                        {renderIcon(item.iconName)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between text-sm font-semibold text-white group-hover:text-[#11C5F5]">
                          <span>{item.name}</span>
                          <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                        </div>
                        <p className="mt-1 text-xs text-slate-400 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Strip */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white/[0.02] border border-white/5 px-4 py-2.5 text-xs text-slate-400">
                <span>Looking for a tailored architecture or enterprise SLA?</span>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="font-medium text-[#11C5F5] hover:text-white transition-colors"
                >
                  Schedule a discovery call →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
