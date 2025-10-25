"use client"; // This component uses a client-side library (react-fast-marquee)

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

// We define the logos in an array to keep the JSX clean
const logos = [
 {
  alt: "n8n",
  src: "/home/logos/n8n-logo.jpg",
  width: 160,
  height: 64,
 },
 {
  alt: "vapi",
  src: "/home/logos/vapi-logo.svg",
  width: 57,
  height: 16,
 },
 {
  alt: "gemini",
  src: "/home/logos/gemini-logo.jpg",
  width: 37,
  height: 37,
 },
 {
  alt: "chatgpt",
  src: "/home/logos/gpt-logo.png",
  width: 108,
  height: 18,
 },
 {
  alt: "11 labs",
  src: "/home/logos/11-logo.webp",
  width: 72,
  height: 20,
 },
 {
  alt: "claude",
  src: "/home/logos/claude.jpg",
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
     <p className="w-full mb-12 text-base text-center text-balance text-gray-400 max-w-[698px] px-4 mx-auto">
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
     <div className="hidden md:block w-full ">
      <ul
       className="items-center container mx-auto justify-center grid gap-8 md:gap-y-16"
       style={{ gridTemplateColumns: "repeat(8, minmax(0, 1fr))" }}>
       {logos.map((logo) => (
        <li
         key={logo.alt}
         className="col-span-2 flex items-center justify-center">
         <div className="relative ">
          <Image
           key={logo.alt}
           src={logo.src}
           alt={logo.alt}
           width={120} // ✅ Required width
           height={32} // ✅ Required height
           className="h-16 w-40 object-cover"
           priority // improves LCP for above-the-fold images
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
           key={logo.alt}
           src={logo.src}
           alt={logo.alt}
           width={120} // ✅ Required width
           height={32} // ✅ Required height
           className="h-14 w-34 object-cover"
           priority // improves LCP for above-the-fold images
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
