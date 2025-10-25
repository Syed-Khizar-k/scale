// components/GenerativeAiSection.tsx
import React from "react";
import WhiteBtn from "../ui/WhiteBtn";
import TransLink from "../ui/TransLink";

// Placeholder icon components
const UserIcon = () => (
 <svg
  className="w-5 h-5 text-gray-300"
  fill="currentColor"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg">
  <path
   fillRule="evenodd"
   d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
   clipRule="evenodd"
  />
 </svg>
);

const SendIcon = () => (
 <svg
  className="w-5 h-5 text-white"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg">
  <path
   strokeLinecap="round"
   strokeLinejoin="round"
   strokeWidth={2}
   d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  />
 </svg>
);

const GenerativeAiSection: React.FC = () => {
 return (
  <section className="bg-black text-white py-16 md:py-24 w-full">
   <div className="container mx-auto px-6 md:px-8">
    {/* Top Label */}
    <div className="text-center mb-8">
     <span className="text-white text-xs font-light tracking-widest uppercase">
      Automation Workflow
     </span>
    </div>

    {/* Main Heading */}
    <h2 className="text-center text-4xl md:text-5xl font-light mb-4">
     Ready to Transform Your Business?
    </h2>
    <p className="mt-4 lg:mt-2 text-center leading-[1.60] lg:text-xl block font-normal">
     Book your free automation audit and discover how much time and money you
     can save with intelligent automation.
    </p>

    {/* Two-Column Layout */}
    <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16 py-16">
     {/* Left Column: AI Text Generator */}
     <div className="md:w-1/2 w-full">
      <div className="bg-[#1a1a1a] rounded-xl border border-gray-700 shadow-lg">
       {/* Card Header */}
       <video
        src="/videos/workflow-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full rounded-xl max-h-[500px]"
       />
      </div>
     </div>

     {/* Right Column: Text Content */}
     <div className="md:w-1/2 w-full">
      <h3 className="text-3xl md:text-4xl font-light mb-4"> AI Automations</h3>
      <p className="text-gray-400 mb-4 text-lg">
       Powering the next generation of Agentic Automations
      </p>
      <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
       Agents drive complex, autonomous workflows using world-class LLMs and
       generative models for safety and alignment.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 items-center flex-wrap">
       <WhiteBtn href={"https://calendly.com/sami-rocketops/30min"}>
        Get Free Automation Audit
       </WhiteBtn>
     
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default GenerativeAiSection;
