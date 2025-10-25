"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // ✅ Import Next.js Image

// --- Data for the logos ---
const logoData = [
 {
  name: "Generative AI Companies",
  logos: [
   { src: "/home/logos/n8n-logo.jpg", alt: "n8n" },
   { src: "/home/logos/vapi-logo.svg", alt: "vapi" },
   { src: "/home/logos/gpt-logo.png", alt: "gpt" },
   { src: "/home/logos/11-logo.webp", alt: "11 labs" },
   { src: "/home/logos/gemini-logo.jpg", alt: "gemini" },
  ],
 },
 //  {
 //   name: "U.S. Government Agencies",
 //   logos: [
 //    { src: "/companies/cengage.webp", alt: "U.S. Army" },
 //    { src: "/companies/cengage.webp", alt: "U.S. Air Force" },
 //    { src: "/companies/cengage.webp", alt: "DIU" },
 //    { src: "/companies/cengage.webp", alt: "CDAO" },
 //    { src: "/companies/cengage.webp", alt: "U.S. Air Force" },
 //   ],
 //  },
//  {
//   name: "Enterprises",
//   logos: [
//    { src: "/companies/time.webp", alt: "AMD" },
//    { src: "/companies/time.webp", alt: "Brex" },
//    { src: "/companies/cengage.webp", alt: "CDAO" },
//    { src: "/companies/cengage.webp", alt: "U.S. Air Force" },
//   ],
//  },
];

const Companies = () => {
 const [activeIndex, setActiveIndex] = useState(0);

 // Effect to handle the automatic cycling
 useEffect(() => {
  const interval = setInterval(() => {
   setActiveIndex((prevIndex) => (prevIndex + 1) % logoData.length);
  }, 3000); // Change logo set every 3 seconds

  return () => clearInterval(interval); // Cleanup on unmount
 }, []);

 return (
  <section className="bg-black hidden lg:block pt-[256px] pb-16 w-full text-center">
   <div className="container mx-auto md:px-[32px] px-[24px]">
    {/* --- Main Heading --- */}
    <h2 className="mb-12 text-sm leading-6 text-white">
     Scale works with{" "}
     {logoData.map((item, index) => (
      <React.Fragment key={item.name}>
       <button
        onClick={() => setActiveIndex(index)}
        className={`relative mx-1 inline-block text-white transition-colors duration-300 hover:text-gray-300 ${
         activeIndex === index ? "font-semibold" : ""
        }`}>
        {item.name}
        {/* Animated underline */}
        {activeIndex === index && (
         <motion.div
          className="absolute bottom-0 left-0 h-px w-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
          key={activeIndex} // Re-trigger animation on change
         />
        )}
       </button>
       {index < logoData.length - 1 && <span>& </span>}
      </React.Fragment>
     ))}
    </h2>

    {/* --- Logo Display Area --- */}
    <div className="relative h-16">
     <AnimatePresence>
      <motion.div
       key={activeIndex}
       className="absolute inset-0 flex items-center justify-center gap-16"
       initial={{ opacity: 0, x: 20 }}
       animate={{ opacity: 1, x: 0 }}
       exit={{ opacity: 0, x: -20 }}
       transition={{ duration: 1 }}>
       {logoData[activeIndex].logos.map((logo) => (
        <Image
         key={logo.alt}
         src={logo.src}
         alt={logo.alt}
         width={120} // ✅ Required width
         height={32} // ✅ Required height
         className="h-16 w-40 object-cover"
         priority // improves LCP for above-the-fold images
        />
       ))}
      </motion.div>
     </AnimatePresence>
    </div>
   </div>
  </section>
 );
};

export default Companies;
