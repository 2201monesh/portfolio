"use client";

import Link from "next/link";
import { useHoverHighlight } from "./components/HighlightWrapper";

export default function Home() {
  const { onEnter, onLeave } = useHoverHighlight();

  return (

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
       <Link href="/crafts/folder-card-animation" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Apr 14, 2026</p>
        <p className="">Folder card animation</p>
      </Link>
      <Link href="/crafts/motion-cards-component" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Apr 5, 2026</p>
        <p className="">Motion cards component</p>
      </Link>
      <Link href="/crafts/discord-animation" className="flex cursor-pointer items-center justify-start py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <p className="w-30 text-neutral-400">Mar 28, 2026</p>
        <p className="">Discord Animation</p>
      </Link>
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
