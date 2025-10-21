"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data for the logos ---
const logoData = [
 {
  name: "Generative AI Companies",
  logos: [
   { src: "/companies/cisco.webp", alt: "Meta" },
   { src: "/companies/cisco.webp", alt: "OpenAI" },
   { src: "/companies/cisco.webp", alt: "Google" },
   { src: "/companies/cisco.webp", alt: "Microsoft" },
  ],
 },
 {
  name: "U.S. Government Agencies",
  logos: [
   { src: "/companies/cengage.webp", alt: "U.S. Army" },
   { src: "/companies/cengage.webp", alt: "U.S. Air Force" },
   { src: "/companies/cengage.webp", alt: "DIU" },
   { src: "/companies/cengage.webp", alt: "CDAO" },
   { src: "/companies/cengage.webp", alt: "U.S. Air Force" },
  ],
 },
 {
  name: "Enterprises",
  logos: [
   { src: "/companies/time.webp", alt: "Samsung" },
   { src: "/companies/time.webp", alt: "General Motors" },
   { src: "/companies/time.webp", alt: "AMD" },
   { src: "/companies/time.webp", alt: "Brex" },
   { src: "/companies/cengage.webp", alt: "CDAO" },
   { src: "/companies/cengage.webp", alt: "U.S. Air Force" },
  ],
 },
];

const Companies = () => {
 const [activeIndex, setActiveIndex] = useState(0);

 // Effect to handle the automatic cycling
 useEffect(() => {
  const interval = setInterval(() => {
   setActiveIndex((prevIndex) => (prevIndex + 1) % logoData.length);
  }, 3000); // Change logo set every 5 seconds

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
        <img
         key={logo.alt}
         src={logo.src}
         alt={logo.alt}
         className="h-8 w-[120px]"
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
