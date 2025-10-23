import { section } from "framer-motion/client";
import React from "react";
import WhiteBtn from "../ui/WhiteBtn";

const DemoSec = () => {
 return (
  <section className="w-full bg-black">
   <div className="flex flex-col container justify-center items-center pt-[72px] mx-auto pb-16!  text-center md:pb-20 md:pt-12">
    <div className="text-xs leading-6 tracking-[1px] mb-5 uppercase font-geist-mono">
     <span>What We Do</span>
    </div>
    <h2 className="font-aeonik leading-snug lg:leading-tight text-3xl md:text-4.5xl lg:text-5xl text-balance" style={{color:'#bbdef2'}}>
     Services That Transform Your Business
    </h2>
    <p className="mt-4 lg:mt-2 leading-[1.60] lg:text-xl text-balance [white-space:inherit] block font-normal" style={{color:'#bbdef2'}}>
     From workflow automation to AI agents, we provide comprehensive solutions
     tailored to SME business needs.
    </p>
    <a
     className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block mt-8"
     href="/demo"
     style={{ WebkitTapHighlightColor: "transparent" }}>
     <WhiteBtn href={"/demo"}>Book a Demo</WhiteBtn>
    </a>
   </div>
  </section>
 );
};

export default DemoSec;
