"use client";
import React from "react";

const ProductHero = () => {
 return (
  <section className="w-full bg-black">
   <div className="container mx-auto md:px-[32px] px-[24px] pt-[150px] pb-[80px] flex flex-col items-center justify-center text-center">
    <h1 className="text-[2.7rem] font-light leading-none md:leading-tight xl:leading-[80px] lg:text-6xl xl:text-7xl -tracking-[1%] font-aeonik max-w-4xl text-balance">
     <span className="text-white">Empower Your Business with </span>
     <span className="text-[#bbdef2]">Our Solutions</span>
    </h1>

    <p className="mt-6 font-sans text-base text-white/80 sm:px-0 font-normal lg:text-lg max-w-2xl text-balance">
     Explore our suite of AI-driven products designed to automate workflows,
     integrate systems, and scale your operations effortlessly.
    </p>
   </div>
  </section>
 );
};

export default ProductHero;
