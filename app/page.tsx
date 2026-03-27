"use client";

import { useHoverHighlight } from "./components/HighlightWrapper";

export default function Home() {
  const { onEnter, onLeave } = useHoverHighlight();

  return (
    <div className="flex bg-zinc-50 font-sans">
      <div className="w-full px-4 sm:px-6 pb-12 md:w-3/5 lg:w-2/5 mx-auto">
        {/* Description */}
        <div className="mt-10">
          <p
            className="relative text-neutral-600 mb-4 leading-relaxed px-2 py-1 cursor-default"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            I'm a frontend engineer who enjoys building clean, modern UIs with
            smooth, minimal animations. I mostly work with React, Next.js,
            Tailwind CSS, and shadcn/ui, and I love turning well-thought-out
            designs into fast, polished web experiences.
          </p>

          <p
            className="relative text-neutral-600 mb-4 leading-relaxed px-2 py-1 cursor-default"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            These days, I spend a lot of time using Framer Motion to add subtle
            motion-micro-interactions, transitions, and animations that make
            interfaces feel natural without being flashy. I care a lot about
            visual consistency, performance, and writing code that's easy to
            scale and maintain.
          </p>

          <p
            className="relative text-neutral-600 mb-6 leading-relaxed px-2 py-1 cursor-default"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            Outside work, I experiment with side projects, explore new tools,
            and constantly level up my craft.
          </p>
        </div>

        {/* Email */}
        <div
          className="relative mt-8 text-neutral-600 break-words px-2 py-1 cursor-default"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          for collaborations, reach me at{" "}
          <span className="underline underline-offset-4">
            moneshgoyal.work@gmail.com
          </span>
        </div>

        {/* Socials */}
        <div className="socials mt-8 flex flex-wrap items-center gap-6 text-neutral-600">
          <a
            href="https://github.com/2201monesh"
            className="relative hover:text-neutral-900 transition px-2 py-0.5 rounded"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            GitHub
          </a>
          <a
            href="https://x.com/GoyalMonesh"
            className="relative hover:text-neutral-900 transition px-2 py-0.5 rounded"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            X
          </a>
          <a
            href="https://www.linkedin.com/in/monesh-goyal/"
            className="relative hover:text-neutral-900 transition px-2 py-0.5 rounded"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
