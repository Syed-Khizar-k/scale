import Companies from "@/components/companies/Companies";
import SwiperCompanies from "@/components/companies/SwiperCompanies";
import DemoSec from "@/components/demo/DemoSec";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import CaseStudies from "@/components/home/CaseStudies";
import FrontierAi from "@/components/home/FrontierAi";
import MultipleCards from "@/components/home/MultipleCards";
import Secure from "@/components/home/Secure";
import Solutions from "@/components/home/Solutions";
import Testimonials from "@/components/home/Testimonials";
import InteractiveSec from "@/components/interactive/InteractiveSec";
import Nav from "@/components/nav/Nav";
import NavHeader from "@/components/nav/NavHeader";
import Partener from "@/components/partener/Partener";

export default function Home() {
 return (
  <main className="">
   <NavHeader />
   <Nav />
   <Hero />
   <Companies />
   {/* mobile componenies */}
   <SwiperCompanies />
   <DemoSec />
   <InteractiveSec />
   <Partener />
   <Solutions />
   <MultipleCards />
   <FrontierAi />
   <Testimonials />
   <CaseStudies />
   <Secure/>
   <Footer />
  </main>
 );
}
