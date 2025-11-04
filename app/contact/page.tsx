import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
 title:
  "Contact Us | Get Your Free AI Automation Audit in Dubai, UAE",
 description:
  "Ready to automate? Contact the RocketOps team for a free automation audit, partnership inquiries, or support. Reach our Dubai, UAE office directly by phone or email.",


 keywords: [
  "contact RocketOps",
  "rocketops contact",
  "rocketops contact number",
  "AI automation support UAE",
  "Dubai office phone number",
  "book free automation audit",
  "partnership inquiries",
  "RocketOps email contact",
  "contact details Dubai",
  "tech support UAE",
 ],

 openGraph: {
  title:
   "Contact Us | Get Your Free AI Automation Audit in Dubai, UAE",
  description:
   "Ready to automate? Contact the RocketOps team for a free automation audit, partnership inquiries, or support.",
  url: "https://rocketops.ai/contact",
  siteName: "RocketOps.ai",
  locale: "en_AE",
  type: "website",
 },

 alternates: {
  canonical: "https://rocketops.ai/contact",
 },
};
const page = () => {
 return (
  <main className="">
   <Nav />
   <ContactForm />
   <Footer />
  </main>
 );
};

export default page;
