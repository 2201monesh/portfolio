"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHoverHighlight } from "./HighlightWrapper";

export default function HeaderNav() {
  const pathname = usePathname();
  const { onEnter, onLeave } = useHoverHighlight();

  return (
    <div className="w-full px-4 sm:px-6 pt-10 sm:pt-16 md:w-3/5 lg:w-2/5 mx-auto">
      <div className="flex justify-between gap-4">
        <Link href="/" className="flex flex-col">
          <div
            className="relative font-medium text-base md:text-lg text-neutral-900 px-2 py-0.5 rounded"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            Monesh Goyal
          </div>
          <p
            className="relative text-neutral-600 text-sm md:text-base px-2 py-0.5 rounded"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            23. Engineering
          </p>
        </Link>
        {pathname !== "/crafts" && (
          <Link
            href="/crafts"
            className="relative self-start text-neutral-600 text-sm md:text-base hover:text-neutral-900 transition rounded px-2 py-0.5"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            Crafts
          </Link>
        )}
      </div>
    </div>
  );
}
