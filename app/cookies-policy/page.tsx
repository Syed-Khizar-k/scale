import Cookies from "@/components/cookies-policy/Cookies";
import Footer from "@/components/footer/Footer";
import Future from "@/components/home/Future";
import Nav from "@/components/nav/Nav";
import React from "react";

const page = () => {
 return (
  <main>
   <Nav />
   <Cookies />
   <Future/>
   <Footer />
  </main>
 );
};

export default page;
