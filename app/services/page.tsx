import Footer from "@/components/footer/Footer";
import Future from "@/components/home/Future";
import Testimonials from "@/components/home/Testimonials";
import Nav from "@/components/nav/Nav";
import ServiceOne from "@/components/services/ServiceOne";
import SpecialSec from "@/components/services/SpecialSec";
import React from "react";

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
