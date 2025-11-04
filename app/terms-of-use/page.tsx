import Footer from "@/components/footer/Footer";
import Future from "@/components/home/Future";
import Nav from "@/components/nav/Nav";
import Terms from "@/components/terms-of-use/Terms";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
 title: "RocketOps.ai Terms of Use | Governing Law: Dubai, UAE",

 description:
  "Read the official RocketOps.ai Terms of Use (Last updated: October 26, 2024) governing the use of our website and AI automation services. Includes client data rights and legal disclaimers.",

 keywords: [
  "RocketOps terms of use",
  "AI service agreement UAE",
  "website terms and conditions Dubai",
  "intellectual property rights RocketOps",
  "governing law UAE",
  "client data rights",
 ],

 openGraph: {
  title: "RocketOps.ai Terms of Use | Governing Law: Dubai, UAE",
  description:
   "The official legal terms for using RocketOps.ai website and AI automation services.",
  url: "https://rocketops.ai/terms-of-use",
  siteName: "RocketOps.ai",
  // ... (include images object)
  locale: "en_AE",
  type: "website",
 },

 // Optional: Canonical URL
 alternates: {
  canonical: "https://rocketops.ai/terms-of-use",
 },
};
const page = () => {
 return (
  <main>
   <Nav />
   <Terms />
   <Future />
   <Footer />
  </main>
 );
};

export default page;
