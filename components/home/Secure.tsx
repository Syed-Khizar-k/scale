import Image from "next/image";
import React from "react";
// ✅ FR Logo Component (Next.js Image)
const FrLogo = () => (
 <div className="relative h-14 w-auto">
  <Image
   src="/home/fr.svg"
   alt="FR Certified"
   width={100}
   height={56}
   className="invert object-contain h-14 w-auto"
   priority
  />
 </div>
);

// ✅ ISO Logo Component
const IsoLogo = () => (
 <div className="relative h-14 w-auto">
  <Image
   src="/home/iso.svg"
   alt="ISO Certified"
   width={100}
   height={56}
   className="invert object-contain h-14 w-auto"
  />
 </div>
);

// ✅ SOC Logo Component
const SocLogo = () => (
 <div className="relative h-14 w-auto">
  <Image
   src="/home/aicpa.svg"
   alt="AICPA SOC Certified"
   width={100}
   height={56}
   className="invert object-contain h-14 w-auto"
  />
 </div>
);
const Secure = () => {
 return (
  <section className="bg-black text-white pt-24 md:pt-32">
   <div className="container mx-auto px-4 flex flex-col items-center text-center">
    {/* 1. Compliance Section */}
    <div className="mb-2 md:mb-0 flex flex-col items-center">
     <span className="text-xs font-bold tracking-widest uppercase text-white mb-4">
      Secure
     </span>
     <p className="text-sm font-medium uppercase tracking-[4px] mb-8 text-white">
      Our cloud platform's infrastructure and operations are certified <br />{" "}
      compliant with the following industry best practice standards and
      frameworks
     </p>

     {/* Logo Row */}
     <div className="flex justify-center items-center gap-6 md:gap-8 pt-4 pb-8">
      <FrLogo />
      <IsoLogo />
      <SocLogo />
     </div>
    </div>
   </div>
  </section>
 );
};

export default Secure;
