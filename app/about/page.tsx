import Careers from "@/components/about/Careers";
import Details from "@/components/about/Details";
import Hero from "@/components/about/Hero";
import LearnMore from "@/components/about/LearnMore";
import LifeAtRocket from "@/components/about/LifeAtRocket";
import TrustedBy from "@/components/about/TrustedBy";
import Footer from "@/components/footer/Footer";
import Secure from "@/components/home/Future";
import Nav from "@/components/nav/Nav";
import NavHeader from "@/components/nav/NavHeader";
import React from "react";

const page = () => {
 return (
  <section>
   <Nav />
   <Hero />
   <Details />
   <LifeAtRocket />
   <TrustedBy />
   <LearnMore />
   <Careers />
   <Secure />
   <Footer />
  </section>
 );
};

export default page;
