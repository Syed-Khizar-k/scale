import Footer from "@/components/footer/Footer";
import Future from "@/components/home/Future";
import Nav from "@/components/nav/Nav";
import PrivacyPolicy from "@/components/privay-policy/PrivacyPolicy";
import { Metadata } from "next";
import React from "react";
// This is the exported metadata object that Next.js will use for the Privacy Policy page.
export const metadata: Metadata = {
 title: "RocketOps.ai Privacy Policy | Data Security & UAE Compliance",

 description:
  "RocketOps.ai Privacy Policy details how we collect, use, and safeguard your personal and project data. We prioritize security, encryption, and compliance with UAE data protection laws.",

 keywords: [
  "RocketOps privacy policy",
  "UAE data protection laws",
  "AI services data security",
  "personal information safeguarding",
  "privacy rights UAE",
  "data encryption policy",
  "RocketOps data collection",
 ],

 openGraph: {
  title: "RocketOps.ai Privacy Policy | Data Security & UAE Compliance",
  description:
   "Read the official policy on how RocketOps.ai protects your data, ensuring security and compliance with UAE regulations.",
  url: "https://rocketops.ai/privacy-policy",
  siteName: "RocketOps.ai",
  locale: "en_AE",
  type: "website",
 },

 alternates: {
  canonical: "https://rocketops.ai/privacy-policy",
 },
};
const page = () => {
 return (
  <main>
   <Nav />
   <PrivacyPolicy />
   <Future />
   <Footer />
  </main>
 );
};

export default page;
