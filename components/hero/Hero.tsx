"use client";
import React from "react";
import WhiteBtn from "../ui/WhiteBtn";
import TransLink from "../ui/TransLink";

const Hero = () => {
  return (
    <section className="w-full bg-black">
      <div className="container mx-auto md:px-[32px] px-[24px] pb-0 flex flex-col md:flex-row-reverse items-center md:items-start md:justify-between">
        
        {/* 🚀 Rocket Launch Video (no top padding) */}
        <div className="relative flex justify-center items-center md:w-1/2 w-full md:pt-0 pt-[48px] mt-25">
          <video
            src="/rocket-launch.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full max-h-[500px]"
          />
        </div>

        {/* 📝 Text Section (keeps top padding) */}
        <div className="md:w-1/2 w-full md:pt-[216px] pt-[48px]">
          <h1 className="text-[2.7rem] font-light leading-none md:leading-tight xl:leading-[80px] lg:text-6xl xl:text-7xl -tracking-[1%] font-aeonik max-w-2xl xl:max-w-4xl text-balance text-center md:text-left">
            <span className="text-[#bbdef2]">Automate. Save. Scale.</span>
          </h1>

          <p className="my-6 font-sans text-base text-white/80 sm:px-0 font-normal lg:my-[22px] lg:text-lg md:w-11/12 lg:max-w-lg text-balance text-center md:text-left">
            RocketOps.ai empowers SMEs in UAE & GCC to slash overhead, speed
            operations, and grow — by automating workflows, integrating ERP, and
            deploying AI agents.
          </p>

          <div className="flex gap-4 flex-wrap md:justify-start justify-center items-center">
            <WhiteBtn href={"/"}>Get Free Automation Audits</WhiteBtn>
            <TransLink href={"/"}>See Demo Workflows →</TransLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
