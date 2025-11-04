
import Details from "@/components/about/Details";
import Hero from "@/components/about/Hero";
import TrustedBy from "@/components/about/TrustedBy";
import Footer from "@/components/footer/Footer";
import Future from "@/components/home/Future";
import Nav from "@/components/nav/Nav";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
 title: "About RocketOps.ai | Mission, Team, & AI Automation Expertise in UAE",
 description:
  "Learn about the RocketOps.ai mission to empower SMEs in the UAE & GCC with intelligent AI automation and no-lock-in ERP solutions. Meet the team driving your business growth and guaranteed ROI.",
 keywords: [
  "RocketOps mission",
  "AI automation company UAE",
  "best automation consultancy Dubai",
  "our team RocketOps",
  "why choose RocketOps",
  "SME automation experts GCC",
  "company values AI",
  "guaranteed ROI automation",
 ],

 openGraph: {
  title: "About RocketOps.ai | Mission, Team, & AI Automation Expertise in UAE",
  description:
   "Learn about the RocketOps.ai mission to empower SMEs in the UAE & GCC with intelligent AI automation and no-lock-in ERP solutions.",
  url: "https://rocketops.ai/about",
  siteName: "RocketOps.ai",
  locale: "en_AE",
  type: "website",
 },

 alternates: {
  canonical: "https://rocketops.ai/about",
 },
};
const page = () => {
 return (
  <section>
   <Nav />
   <Hero />
   <Details />
   {/* <LifeAtRocket /> */}
   <TrustedBy />
   {/* <LearnMore /> */}
   {/* <Careers /> */}
   <Future />
   <Footer />
  </section>
 );
};

export default page;
