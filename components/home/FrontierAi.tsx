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
      Build AI
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
       <div className="flex items-center gap-2 p-4 border-b border-gray-700">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="text-gray-300 text-sm ml-2">AI Text Generator</span>
       </div>

       {/* Card Body */}
       <div className="p-6">
        {/* Question Box */}
        <div className="flex items-center gap-3 mb-6">
         <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center border border-gray-500">
           <UserIcon />
          </div>
         </div>
         <div className="flex-grow bg-[#333] rounded-lg p-3 text-sm text-gray-200 border border-gray-600">
          Why is human feedback necessary for accurate llm responses?
         </div>
         <button className="flex-shrink-0 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
          <SendIcon />
         </button>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Ranking Section */}
        <div>
         <h4 className="text-purple-400 text-sm font-semibold mb-4">
          Human Feedback Ranking
         </h4>
         <div className="flex flex-col gap-3">
          <div className="bg-[#333] rounded-full px-4 py-2 text-sm text-gray-300 border border-gray-600 cursor-pointer hover:border-gray-400 transition-colors">
           LLMs are trained by garden gnomes, who are known to lie
          </div>
          <div className="bg-[#333] rounded-full px-4 py-2 text-sm text-gray-300 border border-gray-600 cursor-pointer hover:border-gray-400 transition-colors">
           LLMs are not always truthful or aligned with human preferences
          </div>
          <div className="bg-[#333] rounded-full px-4 py-2 text-sm text-gray-300 border border-gray-600 cursor-pointer hover:border-gray-400 transition-colors">
           Humans enjoy giving opinions. It makes them feel important
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>

     {/* Right Column: Text Content */}
     <div className="md:w-1/2 w-full">
      <h3 className="text-3xl md:text-4xl font-light mb-4">Generative AI</h3>
      <p className="text-gray-400 mb-4 text-lg">
       Powering the next generation of Generative AI
      </p>
      <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
       Scale Generative AI Data Engine powers many of the most advanced LLMs and
       generative models in the world through world-class RLHF, data generation,
       model evaluation, safety, and alignment.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 items-center flex-wrap">
       <WhiteBtn href={"/"}>Get Free Automation Audit</WhiteBtn>
       <TransLink href={"/build-ai"}>See Demo Workflows →</TransLink>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default GenerativeAiSection;
