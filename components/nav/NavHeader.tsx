import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavHeader = () => {
 return (
  <div className="px-6 w-full border-b border-white/10 bg-black">
   <div className="flex items-center justify-center  container mx-auto gap-4 py-3 md:py-4  md:gap-4  ">
    <span className="relative flex items-center w-8 h-8 shrink-0 md:w-6 md:h-6">
     <Image
      src={"/nav/nav_header_logo.webp"}
      alt={"header_logo"}
      fill
      className="h-full w-full object-cover"></Image>
    </span>

    <p className="text-white text-[0.875rem] md:text-[1rem] md:leading-6 leading-6">
     Introducing RocketOps: Real People, Real Conversations, Real Rankings
    </p>

    <Link
     href={"/"}
     className="group md:inline-flex hidden items-center gap-1 transition-colors duration-300 text-white hover:text-gray-200 text-base">
     <span>Visit Now</span>
     <span
      className="transition-transform duration-300 ease-out inline-block arrow font-unicode group-hover:translate-x-1"
      aria-hidden="true">
      →
     </span>
    </Link>
   </div>
  </div>
 );
};

export default NavHeader;
