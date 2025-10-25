import React from "react";

// Partner data - using SVGs for logos where possible for better quality
const partners = [
 {
  name: "n8n ",
  logo: <span className="text-2xl font-bold tracking-wider">n8n</span>,
 },
 {
  name: "Meta",
  logo: (
   <div className="flex items-center justify-center space-x-3">
    <span className="text-2xl font-bold tracking-wider">Gemini</span>
   </div>
  ),
 },
 {
  name: "cohere",
  logo: (
   <div className="flex items-center justify-center space-x-2">
    <span className="text-2xl font-bold tracking-normal">11 Labs</span>
   </div>
  ),
 },
 {
  name: "Anthropic",
  logo: <span className="text-2xl font-bold tracking-wider">ChatGpt</span>,
 },
];

export default function PartnersSection() {
 // Duplicate partners for a seamless infinite scroll effect on mobile
 const scrollingPartners = [...partners, ...partners];

 return (
  <div className="bg-black text-white md:pb-8 pb-4 md:pt-16 pt-4">
   {/*
    Injecting keyframes for the animation.
    In a full Next.js application, this would ideally be in a global CSS file,
    but for a self-contained component, this is a clean and effective method.
   */}
   <style>
    {`
     @keyframes scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
     }
     .scrolling-wrapper {
      animation: scroll 25s linear infinite;
     }
    `}
   </style>

   <div className="mx-auto container pb-[72px] md:pb-0 md:px-[32px]">
    <div className="text-center">
     <h2 className="text-sm font-light px-6 md:p-0 uppercase tracking-widest text-white font-mono">
      Generative AI providers we work with:
     </h2>
    </div>

    {/* Mobile: Infinite Horizontal Carousel */}
    <div className="mt-10 w-full overflow-hidden  md:hidden">
     <div className="flex w-fit scrolling-wrapper">
      {scrollingPartners.map((partner, index) => (
       <div
        // A unique key is needed for each item in the duplicated list
        key={`${partner.name}-${index}`}
        className="shrink-0 w-[250px] flex items-center justify-center h-[112px] bg-white/5 rounded-[4px] mx-2">
        <div className="text-white">{partner.logo}</div>
       </div>
      ))}
     </div>
    </div>

    {/* Desktop: Static, Responsive Flexbox Layout */}
    <div className="mt-10 w-full hidden md:flex flex-row flex-wrap justify-center items-center gap-4">
     {partners.map((partner) => (
      <div
       key={partner.name}
       className="flex-1 flex items-center justify-center min-w-[180px] lg:min-w-[230px] max-w-[230px] h-[112px] bg-white/5 rounded-[4px] hover:bg-white/10 cursor-pointer transition-colors duration-300">
       <div className="text-white">{partner.logo}</div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}
