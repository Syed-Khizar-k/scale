"use client";
// components/CaseStudiesSection.tsx
import React from "react";
import useEmblaCarousel from "embla-carousel-react"; // <-- Import Embla

interface CaseStudyCardProps {
 category: string;
 title: string;
 logoContent: React.ReactNode;
}

// Data for the cards (no change)
const caseStudies = [
 {
  category: "Case Studies",
  title: "RocketOps Ai empowers Pakways ERP to Automate complete workflows",
  logoContent: (
   <span className="text-white text-2xl font-semibold">
    RocketOps Ai | Pakways ERP
   </span>
  ),
 },
 {
  category: "Case Studies",
  title:
   "RocketOps Ai empowers TravelWise to Enhance Customer Experience and automate their booking systems",
  logoContent: (
   <span className="text-white text-2xl font-semibold">
    RocketOps Ai | TravelWise
   </span>
  ),
 },
 {
  category: "Case Studies",
  title:
   "RocketOps Ai enables TechDaddy to automate the client and freelauncers relations management",
  logoContent: (
   <span className="text-white text-2xl font-semibold">
    RocketOps Ai | TechDaddy
   </span>
  ),
 },
 {
  category: "Case Studies",
  title:
   "RocketOps Ai helps Dosta to streamline operations and improve customer engagement and automate the deleiveries and orders system",
  logoContent: (
   <span className="text-white text-2xl font-semibold">
    RocketOps Ai | Dosta{" "}
   </span>
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
  <div className="embla__slide select-none  flex-none w-10/12  sm:w-2/3 md:w-1/3 lg:w-[36%] pl-4">
   <div className="bg-black rounded-lg h-full flex flex-col">
    <div className="bg-[#111111] select-none h-68 flex items-center justify-center rounded-t-lg p-6">
     {logoContent}
    </div>
    <div className="pt-6">
     <span className="text-purple-400 text-[10px] font-light uppercase tracking-wider">
      {category}
     </span>
     <h3 className="text-white  text-lg font-light mt-2 hover:underline cursor-pointer">
      {title}
     </h3>
    </div>
   </div>
  </div>
 );
};

// Main Section Component
const CaseStudiesSection: React.FC = () => {
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
       Success Stories
      </span>
     </div>

     {/* Main Heading */}
     <h2 className="text-center text-4xl md:text-5xl font-light mb-4">
      Real Results, Real Clients
     </h2>
     <p className="mt-4 lg:mt-2 text-center max-w-[700px] mx-auto leading-[1.60] lg:text-xl block font-normal">
      We're building case studies with our first clients. Soon you'll see
      before/after metrics, workflow diagrams, and real transformation stories.
     </p>
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
   </div>
  </section>
 );
};

export default CaseStudiesSection;
