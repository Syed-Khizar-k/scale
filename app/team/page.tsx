import Footer from "@/components/footer/Footer";
import Future from "@/components/home/Future";
import Nav from "@/components/nav/Nav";
import People from "@/components/team/People";
import Team from "@/components/team/Team";
import React from "react";

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
