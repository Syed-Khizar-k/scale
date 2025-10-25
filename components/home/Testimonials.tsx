"use client";
// components/TestimonialSection.tsx
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
const EurekaLogo: React.FC<{ className?: string }> = ({ className }) => (
 <span className={`font-serif text-2xl ${className}`}>Eureka</span>
);
const NfdgLogo: React.FC<{ className?: string }> = ({ className }) => (
 <span className={`font-sans text-2xl font-bold ${className}`}>nfdg</span>
);

interface Testimonial {
 quote: string;
 author: string;
 title: string;
 logoId: string;
 LogoComponent: any;
}

// 1. Define your testimonial data
const testimonials: Testimonial[] = [

 {
  quote:
   "RocketOps transformed our operations with their AI automation solutions. We've seen 40% increase in efficiency.",
  author: "Ahmed Al-Mansouri",
  title: "CEO, Tech Innovations UAE",
  logoId: "eurekad",
  LogoComponent: EurekaLogo,
 },
 {
  quote:
   "Outstanding service and expertise. Their team delivered beyond our expectations with custom ML models.",
  author: "Sarah Johnson",
  title: "Operations Director, Gulf Logistics",
  logoId: "nfdg",
  LogoComponent: NfdgLogo,
 },
 {
  quote:
   "Professional, reliable, and innovative. RocketOps is our go-to partner for all AI-related projects.",
  author: "Omar Hassan",
  title: "CTO, Digital Solutions Co.",
  logoId: "eureka",
  LogoComponent: EurekaLogo,
 },
];

const TestimonialSection: React.FC = () => {
 // 2. Set up Embla Carousel
 const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
 const [selectedIndex, setSelectedIndex] = useState(0);

 // 3. Function to scroll to a specific slide
//  const scrollTo = useCallback(
//   (index: number) => {
//    emblaApi?.scrollTo(index);
//   },
//   [emblaApi]
//  );

 // 4. Listen for slide changes and update the selectedIndex state
 useEffect(() => {
  if (!emblaApi) return;

  const onSelect = () => {
   setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  emblaApi.on("select", onSelect);
  emblaApi.on("reInit", onSelect); // Also update on re-initialization

  return () => {
   emblaApi.off("select", onSelect);
  };
 }, [emblaApi]);

 return (
  <section className="bg-black text-white py-16 md:py-24 w-full">
   <div className="container mx-auto px-6 md:px-8">
    {/* Top Label */}
    <div className="text-center mb-8">
     <span className="text-white text-xs font-light tracking-widest uppercase">
      Testimonials
     </span>
    </div>

    {/* Main Heading */}
    <h2 className="text-center text-4xl md:text-5xl font-light mb-4">
     What Our Clients Say
    </h2>
    <p className="mt-4 lg:mt-2 text-center leading-[1.60] lg:text-xl block font-normal">
     Hear from businesses across UAE who have transformed their operations with
     our AI solutions.
    </p>
    {/* The Card - which is the carousel viewport */}
    <div
     className="bg-white/5 mt-17 backdrop-blur-xl  select-none  md:h-[720px] h-auto flex justify-center items-center rounded-2xl w-full  mx-auto overflow-hidden cursor-grab"
     ref={emblaRef}>
     {/* Carousel container */}
     <div className="flex">
      {testimonials.map((item, index) => (
       // Each slide
       <div
        key={index}
        className="flex-none  w-full min-h-[350px] md:min-h-[300px] flex flex-col justify-center items-center p-8 md:p-16 text-center">
        <blockquote className="text-xl md:text-2xl text-white leading-relaxed md:max-w-2xl max-w-[300px] mx-auto">
         "{item.quote}"
        </blockquote>
        <footer className="mt-8">
         <div className="font-semibold text-white">{item.author}</div>
         <div className="text-gray-400">{item.title}</div>
        </footer>
       </div>
      ))}
     </div>
    </div>

 
   </div>
  </section>
 );
};

export default TestimonialSection;
