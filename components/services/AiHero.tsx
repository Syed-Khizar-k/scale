"use client";
import React from "react";

// 1. Define a type for our dynamic content
type ServiceContent = {
 heading: string;
 paragraph: string;
 videoMp4: string;
 videoWebm: string;
};

// 2. Create a map of content based on the slug
// In a real-world app, you might fetch this from a CMS.
const serviceData: Record<string, ServiceContent> = {
 "ai-agent-automation": {
  heading: "AI Agent Automations",
  paragraph:
   "We automate workflows with intelligent RPA and Integration solutions, perfecting Document processing, Email automation, and Data entry automation for efficiency.",
  videoMp4: "/videos/ai-dev.mp4",
  videoWebm: "/videos/ai-dev.webm",
 },
 "ai-development": {
  heading: "Ai Development",
  paragraph:
   "We deliver Custom AI model development including NLP, Computer Vision solutions, Predictive analytics, AI-powered chatbots, and Recommendation systems for business impact.",
  videoMp4: "/videos/ai-dev.mp4",
  videoWebm: "/videos/ai-dev.webm",
 },
 "data-engineering": {
  heading: "Data Engineering",
  paragraph:
   "We design robust Data pipeline development for Cloud data solutions. We specialize in ETL/ELT, Data warehousing, Real-time processing, and Data quality management.",
  videoMp4: "/videos/data-engineering.mp4",
  videoWebm: "/videos/data-engineering.webm",
 },
 "machine-learning": {
  heading: "Machine Learning",
  paragraph:
   "We build Supervised learning and Unsupervised learning including advanced Deep learning solutions, focusing on Time series forecasting, Classification & regression, and reliable Model deployment & monitoring.",
  videoMp4: "/videos/machine-learning.mp4",
  videoWebm: "/videos/machine-learning.webm",
 },
};

// 3. Define a fallback in case the slug doesn't match
const defaultContent: ServiceContent = {
 heading: "Our Services",
 paragraph: "Explore our innovative solutions tailored for your business.",
 videoMp4: "/videos/default.mp4",
 videoWebm: "/videos/default.webm",
};

const AiHero = ({ slug }: { slug: string }) => {
 // 4. Look up the content using the slug, or use the default
 const content = serviceData[slug] || defaultContent;

 return (
  <section className="w-full bg-black">
   <div className="container mx-auto md:px-8 px-6 pb-0 flex flex-col md:flex-row-reverse items-center md:items-center md:justify-between">
    {/* 🚀 Rocket Launch Video (no top padding) */}
    <div className="relative flex md:h-[500px] h-[220px] justify-center items-center md:w-1/2 w-full md:pt-0 pt-12 ">
     <video
      key={slug} // IMPORTANT: Add key to re-render video on slug change
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="absolute object-cover w-full h-full">
      {/* Use dynamic video sources */}
      <source src={content.videoMp4} type="video/mp4;codecs=hvc1" />
      <source src={content.videoWebm} type="video/webm" />
      Your browser does not support the video tag.
     </video>
    </div>

    {/* 📝 Text Section (keeps top padding) */}
    <div className="md:w-1/2 w-full md:pt-0  pt-12">
     {/* Use dynamic heading */}
     <h1 className="text-[2.7rem] font-light leading-none md:leading-tight xl:leading-20 lg:text-6xl xl:text-7xl -tracking-[1%] font-aeonik max-w-2xl xl:max-w-4xl text-balance text-center md:text-left">
      {content.heading}
     </h1>

     {/* Use dynamic paragraph */}
     <p className="my-6 font-sans text-base text-white/80 sm:px-0 font-normal lg:my-[22px] lg:text-lg md:w-11/12 lg:max-w-lg text-balance text-center md:text-left">
      {content.paragraph}
     </p>
    </div>
   </div>
  </section>
 );
};

export default AiHero;
