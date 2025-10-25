import Footer from "@/components/footer/Footer";
import Future from "@/components/home/Future";
import Nav from "@/components/nav/Nav";
import PrivacyPolicy from "@/components/privay-policy/PrivacyPolicy";
import { main } from "framer-motion/client";
import React from "react";

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
