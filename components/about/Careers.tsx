import { section } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Careers = () => {
 const departments = [
  {
   name: "Business Operations",

   iconSrc: "/about/c1.webp",
   alt: "icon for Business Operations team",
  },
  {
   name: "Data Science and Analytics",

   iconSrc: "/about/c2.webp",
   alt: "icon for Data Science and Analytics team",
  },
  {
   name: "Engineering",

   iconSrc: "/about/c3.webp",
   alt: "icon for Engineering team",
  },
  {
   name: "Finance",

   iconSrc: "/about/c4.webp",
   alt: "icon for Finance team",
  },
  {
   name: "Growth",

   iconSrc: "/about/c5.webp",
   alt: "icon for Growth team",
  },
  {
   name: "IT",

   iconSrc: "/about/c6.webp",
   alt: "icon for IT team",
  },
  {
   name: "Legal",
   iconSrc: "/about/c7.webp",
   alt: "icon for Legal team",
  },
  {
   name: "Marketing and Communications",

   iconSrc: "/about/c8.webp",
   alt: "icon for Marketing and Communications team",
  },
  {
   name: "Operations",

   iconSrc: "/about/c1.webp",
   alt: "icon for Operations team",
  },
  {
   name: "Product and Design",

   iconSrc: "/about/c2.webp",
   alt: "icon for Product and Design team",
  },
  {
   name: "Public Sector",

   iconSrc: "/about/c3.webp",
   alt: "icon for Public Sector team",
  },
  {
   name: "Research",

   iconSrc: "/about/c4.webp",
   alt: "icon for Research team",
  },
  {
   name: "Robotics",
   iconSrc: "/about/c5.webp",
   alt: "icon for Robotics team",
  },
  {
   name: "Sales",

   iconSrc: "/about/c6.webp",
   alt: "icon for Sales team",
  },
  {
   name: "Specialist",

   iconSrc: "/about/c7.webp",
   alt: "icon for Specialist team",
  },
  {
   name: "University",

   iconSrc: "/about/c8.webp",
   alt: "icon for University team",
  },
 ];
 return (
  <section className="w-full bg-black pt-6 pb-16 ">
   <div className="container mx-auto px-6 md:px-8">
    <div className="pb-[60px]">
     {/* Header Text (no change) */}
     <div className="text-center mb-8">
      <span className="text-white text-xs font-light tracking-widest uppercase">
       OPEN ROLES
      </span>
     </div>

     {/* Main Heading */}
     <h2 className="text-center text-4xl md:text-5xl font-light mb-4">
      Careers
     </h2>
     <p className="mt-4 lg:mt-2 text-center max-w-[700px] mx-auto leading-[1.60] lg:text-xl block font-normal">
      Join us as we continue to accelerate the development of AI applications.
     </p>
    </div>
    {/* cards section */}
    <div className="overflow-hidden w-full rounded-3xl p-8 bg-black/90 backdrop-blur-[2px] border border-white/[0.16] [box-shadow:_inset_0px_0px_12px_rgba(255,_255,_255,_0.08)] md:px-8 md:py-12">
     <ul className="grid grid-cols-3 gap-x-4 gap-y-12 md:gap-y-16 lg:gap-y-20 lg:grid-cols-9">
      {departments.map((dept) => (
       <li key={dept.name}>
        <div className="flex flex-col items-center">
         <div className="relative mb-4">
          <Image
           alt={dept.alt}
           loading="lazy"
           width={64}
           height={64}
           decoding="async"
           src={dept.iconSrc}
           className="h-12 w-auto md:h-16"
          />
         </div>
         <p className="text-xs h-4 text-center text-white leading-4 md:text-sm md:h-5">
          {dept.name}
         </p>
        </div>
       </li>
      ))}
     </ul>
    </div>
   </div>
  </section>
 );
};

export default Careers;
