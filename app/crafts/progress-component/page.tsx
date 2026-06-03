import Link from 'next/link'
import { CornerUpLeft } from 'lucide-react'
import ProgressComponent from './_components/ProgressComponent'

export default function ProgressComponentPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 px-6 py-12 sm:px-10 sm:py-16 md:px-20 md:py-24 font-serif text-neutral-900">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
        <CornerUpLeft size={14} />
        Back
      </Link>
      <header className="space-y-px">
        <div className="flex items-center justify-between">
          <h1 className="leading-snug font-medium tracking-tight">Progress component</h1>
        </div>
        <p className="text-sm leading-snug text-neutral-400">Apr 29, 2026</p>
      </header>

      <div className="overflow-hidden rounded-2xl h-[580px]">
        <ProgressComponent />
      </div>
    </div>
  )
}
