"use client";
import React from "react";

// --- Swiper Carousel Imports ---
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// --- Swiper CSS Imports ---
import "swiper/css";

// --- Data for the logos ---
// I've added more logos here for a better looping effect
const allLogos = [
 { src: "/companies/cisco.webp", alt: "Cisco" },
 { src: "/companies/cengage.webp", alt: "Cengage" },
 { src: "/companies/time.webp", alt: "Time" },
 { src: "/companies/cisco.webp", alt: "Brex" },
 { src: "/companies/cengage.webp", alt: "Samsung" },
 { src: "/companies/time.webp", alt: "AMD" },
 // Repeating the set for a seamless loop
 { src: "/companies/cisco.webp", alt: "Cisco" },
 { src: "/companies/cengage.webp", alt: "Cengage" },
 { src: "/companies/time.webp", alt: "Time" },
 { src: "/companies/cisco.webp", alt: "Brex" },
 { src: "/companies/cengage.webp", alt: "Samsung" },
 { src: "/companies/time.webp", alt: "AMD" },
];

const LogoShowcase = () => {
 return (
  <section className="bg-black lg:hidden block pt-[24px] pb-[48px] text-center text-white">
   <div className="container mx-auto">
    <div className="">
     {/* --- Main Heading (Mobile) --- */}
     <h2 className="mb-8 text-base text-gray-400">
      Scale works with Generative AI Companies, U.S. Government Agencies &
      Enterprises
     </h2>

     {/* --- Infinite Logo Carousel (Mobile) --- */}
     <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={3} // Default slides for mobile
      loop={true}
      autoplay={{
       delay: 4, // Minimal delay for continuous scroll
       disableOnInteraction: false,
      }}
      speed={4000} // The speed of the scroll transition
      allowTouchMove={true} // Disable manual swipes
      breakpoints={{
       // For screens 640px and up
       640: {
        slidesPerView: 3,
        spaceBetween: 30,
       },
       // For screens 768px and up
       768: {
        slidesPerView: 4,
        spaceBetween: 40,
       },
       // For screens 1024px and up
       1024: {
        slidesPerView: 5,
        spaceBetween: 50,
       },
      }}
      className="w-full">
      {allLogos.map((logo, index) => (
       <SwiperSlide
        key={`${index}`}
        className="flex items-center justify-center">
        <img
         src={logo.src}
         alt={logo.alt}
         className="h-8 w-auto" // Use filter-invert if your logos are black
        />
       </SwiperSlide>
      ))}
     </Swiper>
    </div>
   </div>
  </section>
 );
};

export default LogoShowcase;
