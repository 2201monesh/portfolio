import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

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
        <Link href="/" className="group transition inline-flex items-center">
          <FaArrowLeft
            size={14}
            className="mr-1.5 transition-transform duration-200 ease-out group-hover:-translate-x-1"
          />{" "}
          back
        </Link>
        <p className="mt-6">some of my recent crafts</p>
        <div className="mt-6">
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/2013237322066890844?s=20"
              className="flex items-center group"
              target="_blank"
            >
              combo box animation using motion
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
              />
            </Link>
          </p>
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/2011431087982190724?s=20"
              className="flex items-center group"
              target="_blank"
            >
              mac inspired notification
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
              />
            </Link>
          </p>
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/1999787935961604404?s=20"
              className="flex items-center group"
              target="_blank"
            >
              Wallet card animation
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
              />
            </Link>
          </p>
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/1998619458752098325?s=20"
              className="flex items-center group"
              target="_blank"
            >
              Cards with micro animation
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
              />
            </Link>
          </p>
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/2008916255022145930?s=20"
              className="flex items-center group"
              target="_blank"
            >
              draggable list component
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
              />
            </Link>
          </p>
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/2001876074595258423?s=20"
              className="flex items-center group"
              target="_blank"
            >
              custom animation component
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
              />
            </Link>
          </p>
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/2001702374025650447?s=20"
              className="flex items-center group"
              target="_blank"
            >
              text animation using motion
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
              />
            </Link>
          </p>
        </div>
        {/* <p className="mt-6 text-neutral-600 dark:text-neutral-400">Coming soon...</p> */}
      </div>
    </div>
  );
};

export default page;
