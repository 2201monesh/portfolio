'use client'

import Link from 'next/link'
import { CornerUpLeft } from 'lucide-react'
import { useRef } from 'react'
import CardCarousel from './_components/CardCarousel'

export default function CardCarouselPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={pageRef} className="relative mx-auto w-full max-w-3xl space-y-8 px-6 py-12 sm:px-10 sm:py-16 md:px-20 md:py-24 font-serif text-neutral-900">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
        <CornerUpLeft size={14} />
        Back
      </Link>
      <header className="space-y-px">
        <div className="flex items-center justify-between">
          <h1 className="leading-snug font-medium tracking-tight">Card carousel</h1>
        </div>
        <p className="text-sm leading-snug text-neutral-400">Jun 8, 2026</p>
      </header>

      <div className="flex items-center justify-center overflow-x-hidden py-12 sm:py-16 rounded-2xl bg-neutral-100">
        <div className="origin-center scale-[0.55] min-[440px]:scale-[0.65] sm:scale-[0.8]">
          <CardCarousel panelContainerRef={pageRef} />
        </div>
      </div>
    </div>
  )
}
