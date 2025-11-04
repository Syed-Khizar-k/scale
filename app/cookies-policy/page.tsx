import Cookies from "@/components/cookies-policy/Cookies";
import Footer from "@/components/footer/Footer";
import Future from "@/components/home/Future";
import Nav from "@/components/nav/Nav";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
 title: "RocketOps.ai Cookie Policy | Use of Cookies & Tracking Technologies",

 description:
  "Read the official RocketOps.ai Cookie Policy (Last updated: October 26, 2024). Learn about how we use strictly necessary, performance, and functionality cookies on our website.",
 keywords: [
  "RocketOps cookie policy",
  "cookie policy UAE",
  "website cookie usage",
  "manage cookie preferences",
  "strictly necessary cookies",
  "performance cookies",
 ],
 alternates: {
  canonical: "https://rocketops.ai/cookies-policy",
 },
};
const page = () => {
 return (
  <main>
   <Nav />
   <Cookies />
   <Future />
   <Footer />
  </main>
 );
};

export default page;
