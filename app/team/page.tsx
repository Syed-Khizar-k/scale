import Footer from "@/components/footer/Footer";
import Future from "@/components/home/Future";
import Nav from "@/components/nav/Nav";
import Team from "@/components/team/Team";
import React from "react";
import type { Metadata } from "next";

// This is the exported metadata object that Next.js will use for the Team page.
export const metadata: Metadata = {
 // Title: Emphasizes expertise and the key technical roles.
 title: "Meet Our Experts | RocketOps AI Engineers, CEO & Developers Team",

 // Description: Highlights the leadership and specialized skills that deliver their services.
 description:
  "Meet the team of leading industry experts at RocketOps, including the CEO, AI Engineers, and Full Stack Developers, driving intelligent automation solutions across the UAE & GCC.",

 // Keywords: Focus on key personnel, roles, and technical expertise.
 keywords: [
  "RocketOps team",
  "Sami Zoabi CEO",
  "AI Engineer team UAE",
  "Full Stack Developer team",
  "tech experts Dubai",
  "automation leadership",
  "team of industry experts",
 ],

 openGraph: {
  title: "Meet Our Experts | RocketOps AI Engineers, CEO & Developers Team",
  description:
   "Meet the team of leading industry experts at RocketOps, including the CEO, AI Engineers, and Developers.",
  url: "https://rocketops.ai/team",
  siteName: "RocketOps.ai",
  images: [
   { url: "/home/team/sami.png" },
   { url: "/home/team/umair.png" },
   { url: "/home/team/junaid.png" },
   { url: "/home/team/khizar.png" },
   { url: "/home/team/usama.png" },
  ],
  locale: "en_AE",
  type: "website",
 },
 alternates: {
  canonical: "https://rocketops.ai/team",
 },
};

const page = () => {
 return (
  <main>
   <Nav />
   <Team />
   {/* <People /> */}
   <Future />
   <Footer />
  </main>
 );
};

export default page;
