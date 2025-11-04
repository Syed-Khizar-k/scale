import Footer from "@/components/footer/Footer";
import Future from "@/components/home/Future";
import Testimonials from "@/components/home/Testimonials";
import Nav from "@/components/nav/Nav";
import ServiceOne from "@/components/services/ServiceOne";
import SpecialSec from "@/components/services/SpecialSec";
import { Metadata } from "next";
import React from "react";
// This is the exported metadata object that Next.js will use for the Services page.
export const metadata: Metadata = {
 title:
  "AI Automation Services | Data Engineering, ML Consulting & Custom AI Solutions UAE",

 description:
  "Explore RocketOps AI Agent Automation, Custom AI Development, Data Engineering, and Machine Learning services. Solutions for UAE & GCC SMEs with guaranteed ROI and open stack integration.",

 keywords: [
  "AI Agent Automation services",
  "Custom AI development UAE",
  "Data Engineering solutions GCC",
  "Machine Learning consulting Dubai",
  "Supervised learning solutions",
  "Time series forecasting",
  "business intelligence services",
  "intelligent workflows UAE",
  "open stack automation",
 ],

 openGraph: {
  title:
   "AI Automation Services | Data Engineering, ML Consulting & Custom AI Solutions UAE",
  description:
   "Explore RocketOps AI Agent Automation, Custom AI Development, Data Engineering, and Machine Learning services for the UAE & GCC market.",
  url: "https://rocketops.ai/services",
  siteName: "RocketOps.ai",
  locale: "en_AE",
  type: "website",
 },

 alternates: {
  canonical: "https://rocketops.ai/services",
 },
};
const page = () => {
 return (
  <main>
   <Nav />
   <ServiceOne />
   <SpecialSec />
   <Testimonials />
   <Future />
   <Footer />
  </main>
 );
};

export default page;
