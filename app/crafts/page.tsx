"use client";

import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { useHoverHighlight } from "../components/HighlightWrapper";

const crafts = [
  {
    label: "tab toggling",
    href: "/crafts/tab-toggling",
    date: "Jun 3, 2026",
    external: false,
  },
  {
    label: "progress component",
    href: "/crafts/progress-component",
    date: "Apr 29, 2026",
    external: false,
  },
  {
    label: "discord animation",
    href: "/crafts/discord-animation",
    date: "Mar 28, 2026",
    external: false,
  },
  {
    label: "combo box animation using motion",
    href: "/crafts/combo-box-animation",
    date: "Jan 19, 2026",
    external: false,
  },
  {
    label: "mac inspired notification",
    href: "https://x.com/GoyalMonesh/status/2011431087982190724?s=20",
    date: "Jan 14, 2026",
  },
  {
    label: "draggable list component",
    href: "https://x.com/GoyalMonesh/status/2008916255022145930?s=20",
    date: "Jan 7, 2026",
  },
  {
    label: "custom animation component",
    href: "https://x.com/GoyalMonesh/status/2001876074595258423?s=20",
    date: "Dec 19, 2025",
  },
  {
    label: "text animation using motion",
    href: "https://x.com/GoyalMonesh/status/2001702374025650447?s=20",
    date: "Dec 18, 2025",
  },
  {
    label: "Wallet card animation",
    href: "https://x.com/GoyalMonesh/status/1999787935961604404?s=20",
    date: "Dec 13, 2025",
  },
  {
    label: "Cards with micro animation",
    href: "https://x.com/GoyalMonesh/status/1998619458752098325?s=20",
    date: "Dec 10, 2025",
  },
];

const Page = () => {
  const { onEnter, onLeave } = useHoverHighlight();

  return (
    <div className="flex bg-white font-sans">
      <div className="w-full px-4 sm:px-6 pb-12 md:w-3/5 lg:w-2/5 max-w-xl mx-auto">
        <div className="mt-10">
          <p
            className="relative inline-block text-neutral-400 text-xs tracking-widest uppercase px-2 py-1 rounded cursor-default"
            data-label="section heading"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            some of my recent crafts
          </p>
          <hr className="mt-3 border-neutral-200" />
        </div>
        <div className="mt-6">
          {crafts.map((craft) => (
            <p
              key={craft.href}
              className="relative mb-3 px-2 py-1 rounded"
              data-label="craft link"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <Link
                href={craft.href}
                className="flex items-center justify-between group text-neutral-600 hover:text-neutral-900 transition text-sm md:text-base"
                {...(craft.external !== false && { target: "_blank" })}
              >
                <span className="flex items-center">
                  {craft.label}
                  {/* <GoArrowUpRight
                    className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                    size={18}
                  /> */}
                </span>
                <span className="text-neutral-400 text-xs shrink-0 ml-4">{craft.date}</span>
              </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
