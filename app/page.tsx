export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black flex-col">
      <div className="w-2/5 h-screen">
        <div className="flex items-center mt-18">
          <div className="w-13 h-13 flex items-center justify-center rounded-full bg-neutral-300 mr-4"></div>
          <div className="flex flex-col">
            <p className="">Monesh Goyal</p>
            <p className="text-neutral-600">Software Engineer</p>
          </div>
        </div>
        <div className="mt-20">
          <p className="text-neutral-600">
            Building software with a focus on design, detail, and function.
          </p>
        </div>
      </div>
    </div>
  );
}
