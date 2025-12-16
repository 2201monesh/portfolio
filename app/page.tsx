export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black flex-col">
      <div className="w-2/5 h-screen">
        <div className="flex items-center mt-18">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-neutral-300 mr-4"></div>
          <div className="flex flex-col">
            <p className="">Monesh Goyal</p>
            <p className="text-neutral-600">Software Engineer</p>
          </div>
        </div>
        <div className="mt-18">
          <p className="text-neutral-600 mb-4">
            Building software with a focus on design, detail, and function.
          </p>
          <p className="text-neutral-600 mb-4">
            I'm building a design-engineering studio working with AI <br />{" "}
            companies on interfaces, systems, and marketing sites. <br /> Recent
            collaborations include: Cloudflare, LMArena, and Antimetal.
          </p>
          <p className="text-neutral-600">My Work:</p>
        </div>
      </div>
    </div>
  );
}
