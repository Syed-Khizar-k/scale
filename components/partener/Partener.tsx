import React from "react";

// Partner data - using SVGs for logos where possible for better quality
const partners = [
 {
  name: "Adept",
  logo: <span className="text-2xl font-bold tracking-wider">Adept</span>,
 },
 {
  name: "Meta",
  logo: (
   <div className="flex items-center justify-center space-x-3">
    <svg
     className="w-8 h-8"
     viewBox="0 0 256 256"
     xmlns="http://www.w3.org/2000/svg"
     fill="white">
     <path d="M128 24a104 104 0 0 0-91.83 152.84 104 104 0 1 0 114.2-148.62A103.36 103.36 0 0 0 128 24Zm47.18 168.81c-15.1-4.2-30-4.23-45.12-1.23-12.77 2.53-25.2 7.7-37.4 13.1-23.23 10.33-46.13 5.42-53.3-10-5.88-12.57 3.3-27.42 16.2-38.11 15-12.42 32.53-20.1 52.4-23.23 25.5-4 50.48-1.5 75.22.25 29.5 2.1 53.28-7.5 58.73-24.23 4.2-12.8-2.6-26.6-13.1-34.8-13.2-10.2-30-10-47.2-5.9-21.7 5.1-42.53 15.6-62.2 26.6-21.2 11.9-46.8 11.2-64.4-4.2s-19.8-40.8 2.3-55.3a103.4 103.4 0 0 0-38.3 125.75c16.3 39.8 71.3 53.3 115.3 35.8 29-11.5 54.3-29.5 82.5-41.2 24.3-10.2 46.1-15.8 55.8-2.1 7.2 10-1.8 24.8-14.8 35.5-15.1 12.4-33.1 19.8-53.4 22.9-26.2 4-51.5 1.5-77.2-.3Z" />
    </svg>
    <span className="text-2xl font-bold tracking-wider">Meta</span>
   </div>
  ),
 },
 {
  name: "cohere",
  logo: (
   <div className="flex items-center justify-center space-x-2">
    <svg
     className="w-8 h-8"
     viewBox="0 0 24 24"
     fill="none"
     xmlns="http://www.w3.org/2000/svg">
     <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="#FFFFFF"></path>
     <path
      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
      fill="#1C1C1C"></path>
     <path
      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      fill="#FFFFFF"></path>
    </svg>
    <span className="text-2xl font-bold tracking-normal">cohere</span>
   </div>
  ),
 },
 {
  name: "Anthropic",
  logo: <span className="text-2xl font-bold tracking-wider">ANTHROP\C</span>,
 },
];

export default function PartnersSection() {
 // Duplicate partners for a seamless infinite scroll effect on mobile
 const scrollingPartners = [...partners, ...partners];

 return (
  <div className="bg-black text-white md:pb-[32px] pb-[16px] md:pt-16 pt-4">
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
      Generative AI providers we partner with:
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