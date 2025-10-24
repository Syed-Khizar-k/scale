"use client";
// components/CaseStudiesSection.tsx
import React from "react";
import useEmblaCarousel from "embla-carousel-react"; // <-- Import Embla
import Image from "next/image";

interface CaseStudyCardProps {
 category: string;
 title: string;
 logoContent: React.ReactNode;
}

// Data for the cards (no change)
const caseStudies = [
 {
  category: "Ai Specialist",
  title: "Anthropic Partners with Scale to Bring Generative AI to Enterprises",
  logoContent: (
   <Image
    src={"/about/img4.webp"}
    alt={"hello"}
    fill
    className="rounded-lg"></Image>
  ),
 },
 {
  category: "ML Engineer",
  title: "Meta and Scale Partner to Drive Enterprise Adoption of Llama",
  logoContent: (
   <Image
    src={"/about/img3.webp"}
    alt={"hello"}
    fill
    className="rounded-lg"></Image>
  ),
 },
 {
  category: "Generative AI Researcher",
  title: "Customer Case Study: Cohere",
  logoContent: (
   <Image
    src={"/about/img2.webp"}
    alt={"hello"}
    fill
    className="rounded-lg"></Image>
  ),
 },
 {
  category: "Data Scientist",
  title: "Scale's SEAL: Expert-Evaluations",
  logoContent: (
   <Image
    src={"/about/img1.webp"}
    alt={"hello"}
    fill
    className="rounded-lg"></Image>
  ),
 },
];

// Reusable Card Component
// We adjust the classes for the Embla slide structure
const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
 category,
 title,
 logoContent,
}) => {
 return (
  // This is the Embla "slide"
  // 'pl-4' creates the gutter/spacing between cards
  <div className="embla__slide flex-none w-10/12 sm:w-2/3 md:w-1/3 lg:w-[33%] pl-4">
   <div className="bg-black rounded-lg h-full flex flex-col">
    <div className="bg-[#111111] h-48 md:h-58 flex relative items-center justify-center rounded-lg p-6">
     {logoContent}
    </div>
    <div className="pt-6">
     <span className="text-purple-400 text-[10px] font-light uppercase tracking-wider">
      {category}
     </span>
     <h3 className="text-white text-2xl font-light mt-2 hover:underline cursor-pointer">
      {title}
     </h3>
    </div>
   </div>
  </div>
 );
};

// Main Section Component
const Team: React.FC = () => {
 // --- Set up Embla Carousel ---
 const [emblaRef] = useEmblaCarousel({
  align: "start", // Aligns slides to the start of the container
  dragFree: true, // Enables "flick" and momentum-based scrolling
  containScroll: "trimSnaps", // Prevents over-scrolling
 });

 return (
  <section className="bg-black text-white py-16 md:py-24">
   <div className="container mx-auto px-6 md:px-8">
    <div className="pb-[60px]">
     {/* Header Text (no change) */}
     <div className="text-center mb-8">
      <span className="text-white text-xs font-light tracking-widest uppercase">
       Meet Our Team
      </span>
     </div>

     {/* Main Heading */}
     <h2 className="text-center text-4xl md:text-5xl font-light mb-4">
      A Team of Leading Industry Experts
     </h2>
    </div>

    {/* --- Embla Carousel Viewport --- */}
    <div
     className="embla overflow-hidden no-scrollbar cursor-grab"
     ref={emblaRef}>
     {/* Embla Carousel Container */}
     <div className="embla__container flex">
      {caseStudies.map((study, index) => (
       <CaseStudyCard
        key={index}
        category={study.category}
        title={study.title}
        logoContent={study.logoContent}
       />
      ))}
     </div>
    </div>
    {/* <p className="mt-6 lg:mt-8 text-center max-w-[700px] mx-auto leading-[1.60] lg:text-md block font-normal">
     Get In Touch With Our PR Team By Emailing: sami@rocketops.ai →
    </p> */}
   </div>
  </section>
 );
};

export default Team;
