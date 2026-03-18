"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <div className="w-full px-4 sm:px-6 pt-10 sm:pt-16 md:w-3/5 lg:w-2/5 mx-auto">
      <div className="flex justify-between gap-4">
        <Link href="/" className="flex flex-col">
          <p className="font-medium text-base md:text-lg text-neutral-900">
            Monesh Goyal
          </p>
          <p className="text-neutral-600 text-sm md:text-base">
            23. Engineering
          </p>
        </Link>
        {pathname !== "/crafts" && (
          <Link
            href="/crafts"
            className="text-neutral-600 text-sm md:text-base hover:text-neutral-900 transition"
          >
            Crafts
          </Link>
        )}
      </div>
    </div>
  );
}
