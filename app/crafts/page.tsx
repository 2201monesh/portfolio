import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const page = () => {
  return (
    <div className="flex bg-zinc-50 font-sans">
      <div className="w-full px-4 sm:px-6 pb-12 md:w-3/5 lg:w-2/5 mx-auto">
        <p className="mt-10 text-neutral-600 text-sm md:text-base">
          some of my recent crafts
        </p>
        <div className="mt-6">
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/2013237322066890844?s=20"
              className="flex items-center group text-neutral-600 hover:text-neutral-900 transition text-sm md:text-base"
              target="_blank"
            >
              combo box animation using motion
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                size={18}
              />
            </Link>
          </p>
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/2011431087982190724?s=20"
              className="flex items-center group text-neutral-600 hover:text-neutral-900 transition text-sm md:text-base"
              target="_blank"
            >
              mac inspired notification
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                size={18}
              />
            </Link>
          </p>
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/1999787935961604404?s=20"
              className="flex items-center group text-neutral-600 hover:text-neutral-900 transition text-sm md:text-base"
              target="_blank"
            >
              Wallet card animation
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                size={18}
              />
            </Link>
          </p>
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/1998619458752098325?s=20"
              className="flex items-center group text-neutral-600 hover:text-neutral-900 transition text-sm md:text-base"
              target="_blank"
            >
              Cards with micro animation
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                size={18}
              />
            </Link>
          </p>
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/2008916255022145930?s=20"
              className="flex items-center group text-neutral-600 hover:text-neutral-900 transition text-sm md:text-base"
              target="_blank"
            >
              draggable list component
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                size={18}
              />
            </Link>
          </p>
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/2001876074595258423?s=20"
              className="flex items-center group text-neutral-600 hover:text-neutral-900 transition text-sm md:text-base"
              target="_blank"
            >
              custom animation component
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                size={18}
              />
            </Link>
          </p>
          <p className="mb-3">
            <Link
              href="https://x.com/GoyalMonesh/status/2001702374025650447?s=20"
              className="flex items-center group text-neutral-600 hover:text-neutral-900 transition text-sm md:text-base"
              target="_blank"
            >
              text animation using motion
              <GoArrowUpRight
                className="text-neutral-500 ml-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                size={18}
              />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
