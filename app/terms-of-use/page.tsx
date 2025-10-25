import Footer from "@/components/footer/Footer";
import Future from "@/components/home/Future";
import Nav from "@/components/nav/Nav";
import Terms from "@/components/terms-of-use/Terms";
import React from "react";

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
