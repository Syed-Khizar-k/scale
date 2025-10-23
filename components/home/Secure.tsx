"use client";
import React from "react";
import Image from "next/image";
import WhiteBtn from "../ui/WhiteBtn";
import TransLink from "../ui/TransLink";

// ✅ FR Logo Component (Next.js Image)
const FrLogo = () => (
  <div className="relative h-14 w-auto">
    <Image
      src="/home/fr.svg"
      alt="FR Certified"
      width={100}
      height={56}
      className="invert object-contain h-14 w-auto"
      priority
    />
  </div>
);

// ✅ ISO Logo Component
const IsoLogo = () => (
  <div className="relative h-14 w-auto">
    <Image
      src="/home/iso.svg"
      alt="ISO Certified"
      width={100}
      height={56}
      className="invert object-contain h-14 w-auto"
    />
  </div>
);

// ✅ SOC Logo Component
const SocLogo = () => (
  <div className="relative h-14 w-auto">
    <Image
      src="/home/aicpa.svg"
      alt="AICPA SOC Certified"
      width={100}
      height={56}
      className="invert object-contain h-14 w-auto"
    />
  </div>
);

const Secure: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* 1. Compliance Section */}
        <div className="mb-20 md:mb-24 flex flex-col items-center">
          <span className="text-xs font-bold tracking-widest uppercase text-white mb-4">
            Secure
          </span>
          <p className="text-sm font-medium uppercase tracking-[4px] mb-8 text-white">
            Our cloud platform's infrastructure and operations are certified <br />{" "}
            compliant with the following industry best practice standards and
            frameworks
          </p>

          {/* Logo Row */}
          <div className="flex justify-center items-center gap-6 md:gap-8 pt-4 pb-8">
            <FrLogo />
            <IsoLogo />
            <SocLogo />
          </div>

          <hr className="border-0 bg-[linear-gradient(270deg,rgba(255,255,255,0.00)_0%,#FFF_52.07%,rgba(255,255,255,0.00)_100%)] z-[1] opacity-[0.15] relative h-[1px] w-full max-w-[1006px] mx-auto" />
        </div>

        {/* 2. Main Hero Text */}
        <div className="mb-12">
          <h1 className="text-4xl text-gray-400 md:text-7xl lg:text-8xl font-light md:tracking-tighter">
            The future of your
            <br />
            industry <span className="text-white">starts here</span>
          </h1>
        </div>

        {/* 3. Buttons */}
        <div className="flex gap-4 flex-wrap justify-center items-center">
          <WhiteBtn href="/">Get Free Automation Audits</WhiteBtn>
          <TransLink href="/">See Demo Workflows →</TransLink>
        </div>
      </div>
    </section>
  );
};

export default Secure;
