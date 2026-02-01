import Link from "next/link";
import profileImage from "../public/Monesh Goyal Portfolio Image.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <div
        className="
          w-full 
          px-6 
          pt-16 
          pb-12
          md:w-3/5 
          lg:w-2/5 
          mx-auto
        "
      >
        {/* Header */}
        <div className="flex justify-between gap-4">
          {/* <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-300 overflow-hidden">
            <Image
              src={profileImage}
              alt="Monesh Goyal"
              className="w-full h-full object-cover"
            />
          </div> */}

          <div className="flex flex-col">
            <p className="font-medium text-base md:text-lg text-neutral-900 dark:text-neutral-100">
              Monesh Goyal
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
              Frontend Engineer
            </p>
          </div>
          <div>
            <Link
              href="/crafts"
              className="text-neutral-600 dark:text-neutral-400 dark:hover:text-white text-sm md:text-base hover:text-neutral-900 transition"
            >
              Crafts
            </Link>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
            I’m a frontend engineer who enjoys building clean, modern UIs with
            smooth, minimal animations. I mostly work with React, Next.js,
            Tailwind CSS, and shadcn/ui, and I love turning well-thought-out
            designs into fast, polished web experiences.
          </p>

          <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
            These days, I spend a lot of time using Framer Motion to add subtle
            motion-micro-interactions, transitions, and animations that make
            interfaces feel natural without being flashy. I care a lot about
            visual consistency, performance, and writing code that’s easy to
            scale and maintain.
          </p>

          <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
            Outside work, I experiment with side projects, explore new
            tools, and constantly level up my craft.
          </p>
        </div>

        {/* Email */}
        <div className="mt-8 text-neutral-600 dark:text-neutral-400 break-words">
          for collaborations, reach me at{" "}
          <span className="underline underline-offset-4">
            moneshgoyal.work@gmail.com
          </span>
        </div>

        {/* Socials */}
        <div className="socials mt-8 flex flex-wrap items-center gap-6 text-neutral-600 dark:text-neutral-400">
          <a
            href="https://github.com/2201monesh"
            className="hover:text-neutral-900 transition dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://x.com/GoyalMonesh"
            className="hover:text-neutral-900 transition dark:hover:text-white"
          >
            X
          </a>
          <a
            href="https://www.linkedin.com/in/monesh-goyal/"
            className="hover:text-neutral-900 transition dark:hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
