import React from "react";

const Hero = () => {
 return (
  <section className="w-full bg-black text-white ">
   <div className="relative w-full md:pb-[140px] h-auto overflow-hidden container mx-auto px-6 md:px-8">
    <video
     className=" w-full h-full "
     autoPlay // Autoplays the video
     loop // Loops the video
     muted // **CRITICAL**: Autoplay is blocked by most browsers unless it's muted
     playsInline // Ensures it plays inline on iOS instead of going fullscreen
     controls={false} // Hides all player controls
     src="/videos/about-hero.mp4">
     <source src="/videos/about-hero.mp4" type="video/mp4" />
     Your browser does not support the video tag.
    </video>
    <div className="text-center md:absolute md:bottom-[0px] md:z-50 py-4">
     <h2 className="font-aeonik leading-snug lg:leading-tight text-3xl md:text-4.5xl lg:text-5xl text-balance">
      Our mission is to develop reliable AI systems for the world’s most
      important decisions
     </h2>
     <p className="mt-4 lg:mt-4 leading-[1.60] lg:text-xl text-balance [white-space:inherit] block font-normal">
      We provide high-quality data and full-stack technologies that power the
      world’s leading models and enable enterprises and governments to build,
      deploy, and oversee AI applications that deliver real impact.
     </p>
    </div>
   </div>
  </section>
 );
};

export default Hero;
