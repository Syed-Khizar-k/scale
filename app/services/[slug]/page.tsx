import Footer from "@/components/footer/Footer";
import Future from "@/components/home/Future";
import Testimonials from "@/components/home/Testimonials";
import Nav from "@/components/nav/Nav";
import AiHero from "@/components/services/AiHero";
import Details from "@/components/services/Details";
import React from "react";
type DynamicPageProps = {
 params: {
  slug: string;
 };
};
const page = ({ params }: any) => {
 const { slug } = params;
 return (
  <main>
   <Nav />
   <AiHero slug={slug} />
   <Details slug={slug} />
   <Testimonials />
   <Future />
   <Footer />
  </main>
 );
};

export default page;
