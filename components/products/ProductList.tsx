import React from "react";
import Image from "next/image";
import WhiteBtn from "../ui/WhiteBtn";

const products = [
 {
  id: 1,
  title: "Fuel Track Pro",
  description:
   "Track your fuel consumption and save money with our intelligent fuel tracking system.",
  image: "/products/fuel.png", // Placeholder image
  link: "https://site-fuel-watch.lovable.app/",
 },
 {
  id: 2,
  title: "Rocket Attendance",
  description:
   "Track your employee attendance and save time with our intelligent attendance tracking system.",
  image: "/products/attandence.png", // Placeholder image
  link: "https://rocketattendance.online/api/attendance/dashboard/",
 },
 {
  id: 3,
  title: "Dosta",
  description:
   "Dosta UAE | Premium Vending and Catering Service Providers . Healthy food every day everywhere",
  image: "/products/dosta.png", // Placeholder image
  link: "https://dosta.ae/",
 },
];

const ProductList = () => {
 return (
  <section className="w-full bg-black pb-24">
   <div className="container mx-auto md:px-[32px] px-[24px]">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {products.map((product) => (
      <div
       key={product.id}
       className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-start hover:bg-white/10 transition-colors duration-300">
       <div className="w-full h-51 relative mb-6 bg-white/5 rounded-xl overflow-hidden flex items-center justify-center">
        {/* Placeholder for product image */}
        <Image
         src={product.image}
         alt={product.title}
         fill
         className="object-cover "
        />
       </div>

       <h3 className="text-2xl font-light text-white mb-3 font-aeonik">
        {product.title}
       </h3>

       <p className="text-white/70 text-base mb-6 flex-grow">
        {product.description}
       </p>

       <WhiteBtn href={product.link} target="_blank">
        Explore
       </WhiteBtn>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default ProductList;
