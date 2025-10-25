"use client";
import React from "react";

import WhiteBtn from "../ui/WhiteBtn";
import TransLink from "../ui/TransLink";

const Future: React.FC = () => {
 return (
  <section className="bg-black text-white pb-24 md:pb-32">
   <div className="container mx-auto px-4 flex flex-col items-center text-center">
    <hr className="border-0 bg-[linear-gradient(270deg,rgba(255,255,255,0.00)_0%,#FFF_52.07%,rgba(255,255,255,0.00)_100%)] z-1 opacity-[0.15] relative h-px w-full max-w-[1006px] mx-auto" />
    {/* 2. Main Hero Text */}
    <div className="mb-12 md:pt-[132px] pt-12">
     <h1 className="text-4xl text-gray-400 md:text-7xl lg:text-8xl font-light md:tracking-tighter">
      The future of your
      <br />
      industry <span className="text-white">starts here</span>
     </h1>
    </div>

    {/* 3. Buttons */}
    <div className="flex gap-4 flex-wrap justify-center items-center">
     <WhiteBtn href="https://calendly.com/sami-rocketops/30min">
      Get Free Automation Audits
     </WhiteBtn>
    </div>
   </div>
  </section>
 );
};

export default Future;
