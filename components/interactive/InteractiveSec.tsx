"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// --- Swiper Carousel Imports (for mobile) ---
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// --- Data for the sections ---
const featureSections = [
 {
  id: "fine-tuning",
  title: "Workflow Automation",
  description:
   "Design & build workflows using n8n to connect your apps. Eliminate manual data entry, errors, and delays.",
  image: "/home/n8.webp",
 },
 {
  id: "ERP Integration",
  title: "Foundation Models",
  description:
   "Seamless syncing between your ERP and business tools. Your systems talk; everything stays up to date.",
  image: "/home/foundation-models.webp",
 },
 {
  id: "enterprise-data",
  title: "AI & Automation Agents",
  description:
   "Use voice, chat, predictive logic to handle repetitive tasks. Let AI agents do the heavy lifting.",
  image: "/home/whole-model.webp",
 },
 {
  id: "enterproise-data",
  title: "Outreach Automation",
  description:
   "Lead scraping + AI voice calls + email nurture sequences. Fill your pipeline without lifting a finger.",
  image: "/interactive/step3.jpg",
 },
 {
  id: "enterpse-data",
  title: "Managed & Support Services",
  description:
   "Monitor, maintain, and evolve your automations. Zero downtime — always improving.",
  image: "/interactive/step2.jpg",
 },
];

const InteractiveSec = () => {
 const [activeSection, setActiveSection] = useState(featureSections[0].id);

 const handleMouseEnter = (id: string) => {
  setActiveSection(id);
 };

 const currentImage = featureSections.find(
  (section) => section.id === activeSection
 )?.image;

 return (
  <section className="bg-black w-full pb-20 text-white">
   <div className="container mx-auto px-6 md:px-8">
    {/* ============================================= */}
    {/* ============ DESKTOP COMPONENT ============== */}
    {/* ============================================= */}
    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
     {/* Left Side: Text Sections */}
     <div className="flex flex-col">
      {featureSections.map((section, index) => (
       <div
        key={section.id}
        className="group cursor-pointer py-4"
        onMouseEnter={() => handleMouseEnter(section.id)}>
        <h3
         className={`w-full pb-2 text-2xl leading-10 text-left transition-colors duration-300 ${
          activeSection === section.id
           ? "text-white"
           : "text-gray-400 group-hover:text-white"
         }`}>
         {section.title}
        </h3>
        <p
         className={`pb-6 text-[16px] leading-[24px] overflow-hidden transition-colors duration-300 ${
          activeSection === section.id
           ? "text-white"
           : "text-gray-500 group-hover:text-white"
         }`}>
         {section.description}
        </p>
        {index < featureSections.length - 1 && (
         <div
          className={`h-px transition-colors duration-300 ${
           activeSection === section.id
            ? "bg-white"
            : "bg-gray-500 group-hover:bg-white"
          }`}></div>
        )}
       </div>
      ))}
     </div>

     {/* Right Side: Dynamic Image */}
     <div className="flex items-center justify-center min-h-[300px] max-h-[600px] relative w-full">
      {currentImage && (
       <motion.div
        key={activeSection}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-[600px] max-w-[700px]">
        <Image
         src={currentImage}
         alt={activeSection}
         fill
         className="object-cover rounded-lg"
         priority
        />
       </motion.div>
      )}
     </div>
    </div>

    {/* ============================================= */}
    {/* ============ MOBILE COMPONENT =============== */}
    {/* ============================================= */}
    <div className="block md:hidden py-2">
     <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="w-full">
      {featureSections.map((section) => (
       <SwiperSlide key={section.id}>
        <div className="flex flex-col items-center pb-10 text-center">
         <div className="relative w-full h-[250px] mb-8">
          <Image
           src={section.image}
           alt={section.title}
           fill
           className="object-contain rounded-lg"
          />
         </div>
         <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
         <p className="text-base text-gray-400 px-4">{section.description}</p>
        </div>
       </SwiperSlide>
      ))}
     </Swiper>
    </div>
   </div>

   {/* Custom styles for Swiper pagination dots */}
   <style jsx global>{`
    .swiper-pagination-bullet {
     background-color: #6b7280;
     opacity: 1;
    }
    .swiper-pagination-bullet-active {
     background-color: #ffffff;
    }
   `}</style>
  </section>
 );
};

export default InteractiveSec;
