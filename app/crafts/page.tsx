import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const page = () => {
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
        <Link href="/" className="flex items-center"><FaArrowLeft size={14} className="mr-1.5" /> back</Link>
        <p className="mt-6">Coming soon...</p>
      </div>
    </div>
  );
};

export default page;