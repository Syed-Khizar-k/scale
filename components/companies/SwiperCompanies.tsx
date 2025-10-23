"use client";
import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image

// --- Swiper Carousel Imports ---
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// --- Swiper CSS Imports ---
import "swiper/css";

// --- Data for the logos ---
const allLogos = [
  { src: "/companies/cisco.webp", alt: "Cisco" },
  { src: "/companies/cengage.webp", alt: "Cengage" },
  { src: "/companies/time.webp", alt: "Time" },
  { src: "/companies/cisco.webp", alt: "Brex" },
  { src: "/companies/cengage.webp", alt: "Samsung" },
  { src: "/companies/time.webp", alt: "AMD" },
  // Repeat set for seamless loop
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
        {/* --- Main Heading (Mobile) --- */}
        <h2 className="mb-8 text-base text-gray-400">
          Scale works with Generative AI Companies, U.S. Government Agencies &amp;
          Enterprises
        </h2>

        {/* --- Infinite Logo Carousel (Mobile) --- */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 4, // Continuous scroll
            disableOnInteraction: false,
          }}
          speed={4000}
          allowTouchMove={true}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          className="w-full"
        >
          {allLogos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120} // ✅ required width
                height={32} // ✅ required height
                className="h-8 w-auto object-contain"
                priority // improves performance for visible images
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoShowcase;
