import Companies from "@/components/companies/Companies";
import SwiperCompanies from "@/components/companies/SwiperCompanies";
import DemoSec from "@/components/demo/DemoSec";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import InteractiveSec from "@/components/interactive/InteractiveSec";
import Nav from "@/components/nav/Nav";
import NavHeader from "@/components/nav/NavHeader";

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
   <Footer />
  </main>
 );
}
