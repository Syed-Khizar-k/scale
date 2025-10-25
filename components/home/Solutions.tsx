"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
// 1. Import the Embla Carousel hook
import useEmblaCarousel from "embla-carousel-react";

const solutions = [
 {
  sector: "PUBLIC SECTOR",
  title: "Agentic Solutions for Defense and Intelligence",
  description: "Orchestrate agent workflows for decision advantage.",
  imagePlaceholder: (
   <video
    src="/videos/workflow-video.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full rounded-xl max-h-[500px]"
   />
  ),
 },
 {
  sector: "ENTERPRISE",
  title: "Agentic Solutions for Enterprise AI Transformation",
  description: "Deeply personalize products and automate knowledge work.",
  imagePlaceholder: (
   <video
    src="/videos/workflow-2.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full rounded-xl max-h-[500px]"
   />
  ),
 },
];

export default function AgenticSolutions() {
 // 2. Set up Embla Carousel
 // The first 'emblaRef' goes on the container that has overflow-hidden
 // The second 'emblaApi' lets us control the carousel
 const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

 // 3. State to store the selected slide index
 const [selectedIndex, setSelectedIndex] = useState(0);

 // 4. A function to scroll to a specific slide
 const goToSlide = (index: number) => {
  if (emblaApi) {
   emblaApi.scrollTo(index);
  }
 };

 // 5. This effect runs when the user swipes or clicks a dot
 // It updates our 'selectedIndex' state so the dots highlight correctly
 useEffect(() => {
  if (!emblaApi) return;

  const onSelect = () => {
   setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  emblaApi.on("select", onSelect);
  // Clean up the event listener on unmount
  return () => {
   emblaApi.off("select", onSelect);
  };
 }, [emblaApi]);

 return (
  <div className="bg-black text-white w-full py-16 md:py-24">
   <div className="mx-auto container px-6 md:px-8">
    <div className="text-center max-w-3xl mx-auto">
     <h3 className="text-sm font-light uppercase tracking-widest mb-[20px] text-white font-mono">
      APPLY AI
     </h3>
     <h1 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">
      Agentic Solutions
     </h1>
     <p className="mt-2 text-[20px] font-normal leading-[30spx] text-white">
      Transform your data and problems into agentic solutions <br /> that
      continuously improve with human interaction.
     </p>
    </div>

    {/* --- Carousel for Mobile & Tablet --- */}
    <div className="mt-12 lg:hidden">
     {/* 6. This is the main Embla viewport. 'emblaRef' goes here. */}
     <div className="overflow-hidden relative" ref={emblaRef}>
      {/* 7. This is the container that moves. No style/transform needed! */}
      <div className="flex">
       {/* 8. Each slide is a "shrink-0 w-full" */}
       {solutions.map((solution, index) => (
        <div
         key={solution.title}
         // Use padding on the slide itself for spacing
         className="shrink-0 w-full basis-full pl-6 pr-2">
         {/*
           FIX 1 (Layout):
           - Added 'flex-col' to make sure children stack vertically.
           - Added 'justify-between' to push content to top and bottom.
           This achieves the layout from your image.
         */}
         <div className="bg-[#BFBFBB] text-black rounded-2xl pl-6 pt-9 min-h-[450px] flex flex-col justify-between">
          {/* Text content stays at the top */}
          <div>
           <h4 className="text-xs font-light uppercase tracking-[3px]">
            {solution.sector}
           </h4>
           <h2 className="mt-2 text-3xl  font-light">{solution.title}</h2>
           <p className="mt-2 text-base">{solution.description}</p>
          </div>
          {/*
           FIX 2 (Image Height):
           - Added 'relative' to this div.
           - This constrains the 'fill' Image component.
           - 'mt-8' provides spacing from the text.
          */}
          <div className="mt-8 h-auto w-full relative rounded-xl">
           {solution.imagePlaceholder}
          </div>
         </div>
        </div>
       ))}
      </div>
     </div>

     {/* 9. The dots now use 'selectedIndex' for styling */}
     <div className="flex justify-center mt-6 space-x-2">
      {solutions.map((_, slideIndex) => (
       <button
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        className={`w-2 h-2 rounded-full ${
         selectedIndex === slideIndex ? "bg-white" : "bg-gray-600"
        }`}
        aria-label={`Go to slide ${slideIndex + 1}`}
       />
      ))}
     </div>
    </div>

    {/* --- Grid for Desktop (No changes needed here) --- */}
    <div className="mt-16 hidden lg:grid grid-cols-2 gap-8">
     {solutions.map((solution, index) => (
      <div
       key={index}
       className="bg-[#BFBFBB] text-black rounded-2xl pl-10 pt-12 flex flex-col min-h-[540px]">
       <h4 className="text-sm font-light uppercase tracking-[3px]">
        {solution.sector}
       </h4>
       <h2 className="mt-3 text-3xl font-light">{solution.title}</h2>
       <p className="mt-3 text-lg">{solution.description}</p>
       <div className="mt-16 h-[350px] w-full relative ">
        {solution.imagePlaceholder}
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}
