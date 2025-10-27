import React from "react";
import Image from "next/image";

const SanFranciscoHq = () => {
 return (
  <section className="w-full py-16 md:py-24 bg-black text-white">
   {/* Container for the whole section */}
   <div className="container mx-auto px-6 md:px-8">
    {/* Top part: Image and Title */}
    <div>
     <Image
      alt="San Francisco Headquarters"
      loading="lazy"
      width="1216"
      height="689"
      decoding="async"
      className="w-full h-auto" // Replaced generated class with functional Tailwind
      style={{ color: "transparent" }}
      src="/about/workflow.webp"
     />
     <div className="flex flex-col justify-center items-center mx-auto mb-10 max-w-3xl text-center md:mb-20 md:mt-12">
      <div className="text-xs leading-6 tracking-[1px] mb-5 uppercase font-geist-mono">
       <span>headquarters</span>
      </div>
      <h2 className="font-aeonik leading-snug font-light lg:leading-tight text-3xl md:text-4.5xl lg:text-5xl text-balance">
       Dubai , UAE
      </h2>
     </div>
    </div>

    {/* Middle part: Key Stats (1000, 2016, $29B) */}
    {/* I've replaced the generated layout with a responsive grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16 md:mb-24">
     <div>
      <h3 className="md:text-8xl text-6xl font-light">10+</h3>
      <p className="text-base">Employees</p>
     </div>
     <div>
      <h3 className="md:text-8xl text-6xl font-light">2025</h3>
      <p className="text-base">Founded</p>
     </div>
     <div>
      <h3 className="md:text-8xl text-6xl font-light bg-linear-to-r from-purple-500 via-purple-600 to-yellow-500 bg-clip-text text-transparent">
       20+
      </h3>
      <p className="text-base">Happy Clients</p>
     </div>
    </div>

    {/* Bottom part: Stats Card */}
    <div className="border-y border-white/10">
     <div className="bg-white/10 p-6 z-10 md:mx-10 md:my-16 my-8  relative lg:items-center  rounded-2xl overflow-hidden md:overflow-visible">
      {/* I've replaced the generated layout with a responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
       <div className="flex gap-4 items-center">
        <h3 className="text-5xl md:text-8xl mb-4  font-light bg-linear-to-r from-purple-500 via-purple-600 to-yellow-500 bg-clip-text text-transparent">
         15B
        </h3>
        <p className="text-2xl md:text-3xl text-balance">
         Human decisions to train AI models.
        </p>
       </div>
       <div className="flex gap-4 items-center">
        <h3 className="text-5xl md:text-8xl  mb-4 font-light bg-linear-to-r from-purple-500 via-purple-600 to-yellow-400 bg-clip-text text-transparent">
         $1B
        </h3>
        <p className="text-2xl md:text-3xl text-balance">
         Paid to contributors&nbsp;
         <br />
         globally.
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default SanFranciscoHq;
