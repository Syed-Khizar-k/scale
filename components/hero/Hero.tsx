"use client";
import React from "react";
import WhiteBtn from "../ui/WhiteBtn";
import TransLink from "../ui/TransLink";

const Hero = () => {
  return (
    <section className="w-full bg-black">
      <div className="container mx-auto md:px-[32px] px-[24px] pt-[48px] pb-0 md:pt-[216px] flex flex-col md:flex-row-reverse items-center md:items-start md:justify-between">
        
        {/* 🚀 Rocket Launch Video */}
        <div className="relative h-auto w-auto flex justify-center items-center">
          <video
            src="/rocket-launch.mp4" // ✅ path relative to public/
            autoPlay
            loop
            muted
            playsInline
            className="md:h-[360px] md:w-[400px] h-[300px] w-full object-contain"
          />
        </div>

        {/* 📝 Text Section */}
        <div>
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
