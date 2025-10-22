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
  category: "Partner",
  title: "Anthropic Partners with Scale to Bring Generative AI to Enterprises",
  logoContent: (
   <span className="text-white text-2xl font-semibold">scale | ANTHROPIC</span>
  ),
 },
 {
  category: "Partner",
  title: "Meta and Scale Partner to Drive Enterprise Adoption of Llama",
  logoContent: (
   <span className="text-white text-2xl font-semibold">
    scale | <span className="font-bold">∞</span> Meta
   </span>
  ),
 },
 {
  category: "Case Studies",
  title: "Customer Case Study: Cohere",
  logoContent: (
   <span className="text-white text-2xl font-semibold">scale × cohere</span>
  ),
 },
 {
  category: "Blog",
  title: "Scale's SEAL: Expert-Evaluations",
  logoContent: (
   <span className="text-white text-2xl font-semibold">scale | Blog Post</span>
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
  <div className="embla__slide flex-none w-10/12 sm:w-2/3 md:w-1/3 lg:w-[30%] pl-4">
   <div className="bg-black rounded-lg h-full flex flex-col">
    <div className="bg-[#111111] h-48 flex items-center justify-center rounded-t-lg p-6">
     {logoContent}
    </div>
    <div className="pt-6">
     <span className="text-purple-400 text-[10px] font-light uppercase tracking-wider">
      {category}
     </span>
     <h3 className="text-white text-lg font-light mt-2 hover:underline cursor-pointer">
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
      Coming Soon: Real Results, Real Clients
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
