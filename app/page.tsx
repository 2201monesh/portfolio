"use client";

import { useHoverHighlight } from "./components/HighlightWrapper";

export default function Home() {
  const { onEnter, onLeave } = useHoverHighlight();

  return (
    // <div className="flex bg-white font-sans">
    //   <div className="w-full px-4 sm:px-6 pb-12 md:w-3/5 lg:w-2/5 max-w-xl mx-auto">
    //     {/* Description */}
    //     <div className="mt-10">
    //       <p
    //         className="relative text-neutral-600 mb-4 leading-relaxed px-2 py-1 cursor-default"
    //         data-label="about"
    //         onMouseEnter={onEnter}
    //         onMouseLeave={onLeave}
    //       >
    //         I'm a frontend engineer who enjoys building clean, modern UIs with
    //         smooth, minimal animations. I mostly work with React, Next.js,
    //         Tailwind CSS, and shadcn/ui, and I love turning well-thought-out
    //         designs into fast, polished web experiences.
    //       </p>

    //       <p
    //         className="relative text-neutral-600 mb-4 leading-relaxed px-2 py-1 cursor-default"
    //         data-label="about"
    //         onMouseEnter={onEnter}
    //         onMouseLeave={onLeave}
    //       >
    //         These days, I spend a lot of time using Framer Motion to add subtle
    //         motion-micro-interactions, transitions, and animations that make
    //         interfaces feel natural without being flashy. I care a lot about
    //         visual consistency, performance, and writing code that's easy to
    //         scale and maintain.
    //       </p>

    //       <p
    //         className="relative text-neutral-600 mb-6 leading-relaxed px-2 py-1 cursor-default"
    //         data-label="about"
    //         onMouseEnter={onEnter}
    //         onMouseLeave={onLeave}
    //       >
    //         Outside work, I experiment with side projects, explore new tools,
    //         and constantly level up my craft.
    //       </p>
    //     </div>

    //     {/* Email */}
    //     <div
    //       className="relative mt-8 text-neutral-600 break-words px-2 py-1 cursor-default"
    //       data-label="email section"
    //       onMouseEnter={onEnter}
    //       onMouseLeave={onLeave}
    //     >
    //       for collaborations, reach me at{" "}
    //       <span className="underline underline-offset-4">
    //         moneshgoyal.work@gmail.com
    //       </span>
    //     </div>

    //     {/* Socials */}
    //     <div className="socials mt-8 flex flex-wrap items-center gap-6 text-neutral-600">
    //       <a
    //         href="https://github.com/2201monesh"
    //         className="relative hover:text-neutral-900 transition px-2 py-0.5 rounded"
    //         data-label="github"
    //         onMouseEnter={onEnter}
    //         onMouseLeave={onLeave}
    //       >
    //         GitHub
    //       </a>
    //       <a
    //         href="https://x.com/moneshgoyal"
    //         className="relative hover:text-neutral-900 transition px-2 py-0.5 rounded"
    //         data-label="x"
    //         onMouseEnter={onEnter}
    //         onMouseLeave={onLeave}
    //       >
    //         X
    //       </a>
    //       <a
    //         href="https://www.linkedin.com/in/monesh-goyal/"
    //         className="relative hover:text-neutral-900 transition px-2 py-0.5 rounded"
    //         data-label="linkedin"
    //         onMouseEnter={onEnter}
    //         onMouseLeave={onLeave}
    //       >
    //         LinkedIn
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div className="mx-auto w-full max-w-3xl space-y-8 px-6 py-12 sm:px-10 sm:py-16 md:px-20 md:py-24 font-serif text-neutral-900">
  <header className="space-y-px">
    <h1 className="leading-snug font-medium tracking-tight">Monesh Goyal</h1>
    <p className="text-sm leading-snug">Engineering and design</p>
  </header>
  <div className="space-y-4">
    <p className="leading-7">I’m a design engineer who loves crafting clean, modern interfaces that feel right. I spend a lot of time working on UI + motion - making components that are smooth, intentional, and just naturally satisfying to use.</p>
    <p className="leading-7">I work with React, Next.js, Tailwind, and shadcn/ui, and lately I’ve been diving deep into framer motion - crafting micro interactions and transitions that truly elevate the experience. Big on details like timing, consistency, and performance, and I take pride in building some of the cleanest motion components out there.</p>
    <p className="leading-7">General mails at <span className="link-text">moneshgoyal.work@gmail.com</span>. I also share about my work on <a href="https://x.com/moneshgoyal" target="_blank" rel="noopener noreferrer" className="link-text">X (Twitter)</a>. You can also see my project work on <a href="https://github.com/2201monesh" target="_blank" rel="noopener noreferrer" className="link-text">GitHub</a> and see my work experiences on <a href="https://www.linkedin.com/in/monesh-goyal/" target="_blank" rel="noopener noreferrer" className="link-text">LinkedIn</a>.</p>
  </div>
  <div className="mt-12 space-y-4 select-none">
    <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
       <a href="https://x.com/moneshgoyal/status/2043915778916004018?s=20" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Apr 14, 2026</p>
        <p className="">Folder card animation</p>
      </a>
      <a href="https://x.com/moneshgoyal/status/2040771299677778423?s=20" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Apr 5, 2026</p>
        <p className="">Motion cards component</p>
      </a>
      <a href="https://x.com/moneshgoyal/status/2037145179376042495?s=20" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Mar 28, 2026</p>
        <p className="">Discord Animation</p>
      </a>
      <a href="https://x.com/moneshgoyal/status/2013237322066890844?s=20" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Jan 19, 2026</p>
        <p className="">Combobox animation using Motion</p>
      </a>
      <a href="https://x.com/moneshgoyal/status/2011431087982190724?s=20" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Jan 14, 2026</p>
        <p className="">MacOs inspired notification</p>
      </a>
      <a href="https://x.com/moneshgoyal/status/2008916255022145930?s=20" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Jan 7, 2026</p>
        <p className="">Draggable List</p>
      </a>
      <a href="https://x.com/moneshgoyal/status/2001876074595258423?s=20" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Dec 19, 2025</p>
        <p className="">Custom Animations</p>
      </a>
      <a href="https://x.com/moneshgoyal/status/2001702374025650447?s=20" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Dec 18, 2025</p>
        <p className="">Text animation using Motion</p>
      </a>
      <a href="https://x.com/moneshgoyal/status/1999787935961604404?s=20" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Dec 13, 2025</p>
        <p className="">Wallet + cards animation</p>
      </a>
      <a href="https://x.com/moneshgoyal/status/1998619458752098325?s=20" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Dec 10, 2025</p>
        <p className="">Micro interactions for cards</p>
      </a>
    </div>
  </div>
</div>
  );
}
