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
            <p className="font-medium text-base md:text-lg">Monesh Goyal</p>
            <p className="text-neutral-600 text-sm md:text-base">
              Frontend Engineer
            </p>
          </div>
          <div>
            <Link href="/crafts" className="text-neutral-600 text-sm md:text-base hover:text-neutral-900 transition">Crafts</Link>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <p className="text-neutral-600 mb-4 leading-relaxed">
            I'm a frontend engineer passionate about crafting scalable,
            performant web applications using React, Next.js, and Tailwind CSS.
            I focus heavily on frontend architecture, developer experience, and
            performance optimization-writing clean, maintainable code that feels
            great to use.
          </p>

          <p className="text-neutral-600 mb-4 leading-relaxed">
            I primarily work with React, Next.js, Tailwind CSS, and shadcn/ui.
            I'm deeply interested in frontend performance tuning, building
            developer tools that improve workflows, and designing UI systems
            with strong consistency and attention to detail.
          </p>

          <p className="text-neutral-600 mb-6 leading-relaxed">
            Outside of work, I enjoy exploring new technologies, experimenting
            with side projects, and continuously growing as a frontend
            specialist.
          </p>
        </div>

        {/* Email */}
        <div className="mt-8 text-neutral-600 break-words">
          for collaborations, reach me at{" "}
          <span className="underline underline-offset-4">
            goyalmonesh2201@gmail.com
          </span>
        </div>

        {/* Socials */}
        <div className="socials mt-8 flex flex-wrap items-center gap-6 text-neutral-600">
          <a
            href="https://github.com/2201monesh"
            className="hover:text-neutral-900 transition"
          >
            GitHub
          </a>
          <a
            href="https://x.com/GoyalMonesh"
            className="hover:text-neutral-900 transition"
          >
            X
          </a>
          <a
            href="https://www.linkedin.com/in/monesh-goyal/"
            className="hover:text-neutral-900 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
