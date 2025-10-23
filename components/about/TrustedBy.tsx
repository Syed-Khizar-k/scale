"use client"; // This component uses a client-side library (react-fast-marquee)

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

// We define the logos in an array to keep the JSX clean
const logos = [
 {
  alt: "meta",
  src: "/about/logo1.svg",
  width: 100,
  height: 20,
 },
 {
  alt: "Nuro",
  src: "/about/logo2.svg",
  width: 57,
  height: 16,
 },
 {
  alt: "gm",
  src: "/about/logo3.svg",
  width: 37,
  height: 37,
 },
 {
  alt: "cohere",
  src: "/about/logo4.svg",
  width: 108,
  height: 18,
 },
 {
  alt: "brex",
  src: "/about/logo5.svg",
  width: 72,
  height: 20,
 },
 {
  alt: "adept",
  src: "/about/logo6.svg",
  width: 70,
  height: 24,
 },
 {
  alt: "Cisco",
  src: "/about/logo7.svg",
  width: 70,
  height: 37,
 },
 {
  alt: "time_logo",
  src: "/about/logo8.svg",
  width: 82,
  height: 25,
 },
];

const TrustedBy = () => {
 return (
  <section className="w-full py-16 bg-black">
   <div className="container mx-auto px-4">
    <div>
     {/* --- Top Paragraph --- */}
     <p className="w-full mb-12 text-base text-center [text-wrap:balance] text-gray-400 max-w-[698px] px-4 mx-auto">
      <span className="mr-2">
       We are proud to be trusted by leading companies to provide a
       data-centric, end-to-end solution to manage the entire ML lifecycle.
       Combining cutting edge technology with operational excellence, we help
       teams develop the highest-quality datasets because better data → better
       AI
      </span>
      <Link
       href="/customers"
       aria-label="Meet our customers"
       target="_self"
       className="group inline-flex items-center gap-1 transition-colors duration-300 text-white hover:text-gray-200 text-base">
       <span className="font-medium">Meet our customers</span>
       <span
        className="transition-transform duration-300 ease-out inline-block group-hover:translate-x-1"
        aria-hidden="true">
        →
       </span>
      </Link>
     </p>

     {/* --- Desktop Logo Grid (Static) --- */}
     <div className="hidden md:block">
      <ul
       className="items-center justify-center grid gap-8 md:gap-y-16"
       style={{ gridTemplateColumns: "repeat(8, minmax(0, 1fr))" }}>
       {logos.map((logo) => (
        <li
         key={logo.alt}
         className="col-span-2 flex items-center justify-center">
         <div className="relative">
          <Image
           alt={logo.alt}
           width={logo.width}
           height={logo.height}
           decoding="async"
           src={logo.src}
           className="invert"
           style={{ color: "transparent" }}
          />
         </div>
        </li>
       ))}
      </ul>
     </div>

     {/* --- Mobile Logo Carousel (Infinitely Looping) --- */}
     <div className="md:hidden">
      <Marquee
       pauseOnHover={true}
       autoFill={true} // This makes it loop infinitely
       speed={40}>
       {/* We render each logo inside the marquee */}
       {logos.map((logo) => (
        <li
         key={logo.alt}
         className="flex items-center justify-center ml-12" // ml-12 creates spacing
        >
         <div className="relative">
          <Image
           alt={logo.alt}
           width={logo.width}
           height={logo.height}
           decoding="async"
           src={logo.src}
           className="invert"
           style={{ color: "transparent" }}
          />
         </div>
        </li>
       ))}
      </Marquee>
     </div>
    </div>
   </div>
  </section>
 );
};

export default TrustedBy;
