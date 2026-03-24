export default function Home() {
  return (
    <div className="flex bg-zinc-50 font-sans">
      <div className="w-full px-4 sm:px-6 pb-12 md:w-3/5 lg:w-2/5 mx-auto">
        {/* Description */}
        <div className="mt-10">
          <p className="text-neutral-600 mb-4 leading-relaxed">
            I'm a frontend engineer who enjoys building clean, modern UIs with
            smooth, minimal animations. I mostly work with React, Next.js,
            Tailwind CSS, and shadcn/ui, and I love turning well-thought-out
            designs into fast, polished web experiences.
          </p>

          <p className="text-neutral-600 mb-4 leading-relaxed">
            These days, I spend a lot of time using Framer Motion to add subtle
            motion-micro-interactions, transitions, and animations that make
            interfaces feel natural without being flashy. I care a lot about
            visual consistency, performance, and writing code that's easy to
            scale and maintain.
          </p>

          <p className="text-neutral-600 mb-6 leading-relaxed">
            Outside work, I experiment with side projects, explore new
            tools, and constantly level up my craft.
          </p>
        </div>

        {/* Email */}
        <div className="mt-8 text-neutral-600 break-words">
          for collaborations, reach me at{" "}
          <span className="underline underline-offset-4">
            moneshgoyal.work@gmail.com
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
