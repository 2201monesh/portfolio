import Link from 'next/link'
import { CornerUpLeft } from 'lucide-react'
import DiscordAnimation from './_components/DiscordAnimation'

export default function DiscordAnimationPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 px-6 py-12 sm:px-10 sm:py-16 md:px-20 md:py-24 font-serif text-neutral-900">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
        <CornerUpLeft size={14} />
        Back
      </Link>
      <header className="space-y-px">
        <div className="flex items-center justify-between">
          <h1 className="leading-snug font-medium tracking-tight">Discord animation</h1>
          <a
            href="https://x.com/moneshgoyal/status/2037145179376042495?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 transition-colors"
            aria-label="View on X (Twitter)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
        <p className="text-sm leading-snug text-neutral-400">Mar 28, 2026</p>
      </header>

      <div className="overflow-hidden rounded-2xl h-[620px]">
        <DiscordAnimation />
      </div>
    </div>
  )
}
