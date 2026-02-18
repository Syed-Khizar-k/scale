import React from "react";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import ProductHero from "@/components/products/ProductHero";
import ProductList from "@/components/products/ProductList";
import Secure from "@/components/home/Secure"; // Reusing Section for consistency
import Future from "@/components/home/Future"; // Reusing Section for consistency

export const metadata = {
 title:
  "Products | RocketOps.ai - Fuel Track Pro, Rocket Attendance, Dosta uae",
 description:
  "Discover RocketOps.ai premium products: Fuel Track Pro for smart consumption monitoring, Rocket Attendance for seamless employee tracking, and Dosta for healthy vending and catering services in UAE & GCC.",
 keywords: [
  "RocketOps ai",
  "RocketOps products",
  "RocketOps ai products",
  "Fuel Track Pro",
  "fuel consumption tracking softwares",
  "Rocket Attendance",
  "employee attendance system",
  "Dosta",
  "healthy vending UAE",
  "corporate catering Dubai",
  "AI automation products",
  "SME tools UAE",
  "smart business solutions",
 ],
 openGraph: {
  title: "Products | RocketOps.ai - AI Automation & Business Solutions",
  description:
   "Explore Fuel Track Pro, Rocket Attendance, and Dosta. Smart solutions for fuel monitoring, workforce management, and premium catering in the UAE.",
  url: "https://rocketops.ai/products",
  siteName: "RocketOps.ai",
  images: [
   {
    url: "/logo.png", // Using main logo as fallback, or specific product collage if available
    width: 1200,
    height: 630,
    alt: "RocketOps.ai Products - Fuel Track, Attendance, Dosta",
   },
  ],
  locale: "en_US",
  type: "website",
 },
 twitter: {
  card: "summary_large_image",
  title: "RocketOps.ai Products - Smart Solutions for SMEs",
  description:
   "Discover Fuel Track Pro, Rocket Attendance, and Dosta. Automate and optimize your business operations with our premium tools.",
  images: ["/logo.png"],
 },
 alternates: {
  canonical: "https://rocketops.ai/products",
 },
};

export default function ProductsPage() {
 return (
  <main className="bg-black min-h-screen">
   <Nav />
   <ProductHero />
   <ProductList />
   <Secure />
   <Future />
   <Footer />
  </main>
 );
}
