"use client"; // This is a client component because it uses a hook (useKeenSlider)

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import Keen Slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import WhiteBtn from "../ui/WhiteBtn";

// Array of image URLs extracted from the HTML
const sliderImages = [
 "/about/img1.webp",
 "/about/img2.webp",
 "/about/img3.webp",
 "/about/img4.webp",
 "/about/img5.webp",
 "/about/img3.webp",
 "/about/img4.webp",
 "/about/img5.webp",
];

const LifeAtRocket = () => {
 // Setup the Keen Slider hook
 const [sliderRef] = useKeenSlider({
  loop: true,
  mode: "free-snap",
  slides: {
   perView: "auto",
   spacing: 16, // 1rem spacing between slides
  },
 });

 return (
  <section className="py-16 overflow-x-hidden bg-black">
   <div className="flex flex-col justify-stretch items-center">
    {/* --- YOUTUBE VIDEO SECTION --- */}
    {/* I've replaced the custom padding-bottom with Tailwind's aspect-video */}

    {/* --- KEEN SLIDER SECTION --- */}
    <div className="relative w-full mt-10 mb-16 max-w-[1792px]">
     <div ref={sliderRef} className="keen-slider h-[190px] cursor-grab gap-4!">
      {sliderImages.map((src, index) => (
       <figure
        key={index}
        className="keen-slider__slide relative overflow-hidden md:min-w-[348px] min-w-[288px] max-w-[420px]">
        <div className="relative w-full h-full  border-2 border-[#e5e7eb41] rounded-xl">
         <Image
          alt={`Slider image ${index + 1}`}
          loading="eager"
          decoding="async"
          fill
          src={src}
          className="object-cover rounded-xl p-0.5"
          sizes="30vw"
         />
        </div>
       </figure>
      ))}
     </div>
    </div>

    {/* --- CTA BUTTON SECTION --- */}
    {/* I've replaced the custom CSS module classes with functional Tailwind 
          to create a similar-looking button.
        */}
    <WhiteBtn href={" "}>RocketOps Is Growing. Grow With Us</WhiteBtn>
   </div>
  </section>
 );
};

export default LifeAtRocket;
