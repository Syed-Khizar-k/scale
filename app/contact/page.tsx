import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import React from "react";

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
