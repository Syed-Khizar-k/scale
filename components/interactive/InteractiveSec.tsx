"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Swiper Carousel Imports (for mobile) ---
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Data for the sections
const featureSections = [
 {
  id: "fine-tuning",
  title: "Fine-Tuning and RLHF",
  description:
   "Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.",
  image: "/interactive/step3.jpg",
 },
 {
  id: "foundation-models",
  title: "Foundation Models",
  description:
   "Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including Google, Meta, Cohere, and more.",
  image: "/interactive/step2.jpg", // Make sure you have different images
 },
 {
  id: "enterprise-data",
  title: "Enterprise Data",
  description:
   "Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
  image: "/interactive/step3.jpg", // Make sure you have different images
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
     <div className="flex items-center justify-center min-h-[300px] max-h-[600px]">
      {currentImage && (
       <motion.img
        key={activeSection}
        src={currentImage}
        alt={activeSection}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-full max-h-[600px] object-cover rounded-lg"
       />
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
         <img
          src={section.image}
          alt={section.title}
          className="w-full h-[250px] object-contain mb-8 rounded-lg"
         />
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
     background-color: #6b7280; /* Gray inactive dot */
     opacity: 1;
    }
    .swiper-pagination-bullet-active {
     background-color: #ffffff; /* White active dot */
    }
   `}</style>
  </section>
 );
};

export default InteractiveSec;
