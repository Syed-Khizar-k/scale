import Companies from "@/components/companies/Companies";
import SwiperCompanies from "@/components/companies/SwiperCompanies";
import DemoSec from "@/components/demo/DemoSec";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import FrontierAi from "@/components/home/FrontierAi";
import Future from "@/components/home/Future";
import MultipleCards from "@/components/home/MultipleCards";
import Secure from "@/components/home/Secure";
import Solutions from "@/components/home/Solutions";
import Testimonials from "@/components/home/Testimonials";
import InteractiveSec from "@/components/interactive/InteractiveSec";
import Nav from "@/components/nav/Nav";
import Partener from "@/components/partener/Partener";

export const metadata = {
 title: "RocketOps.ai - Automate, Optimize, and Scale Your Business with AI",
 description:
  "RocketOps.ai helps businesses automate workflows, boost productivity, and scale efficiently with AI-powered tools. Discover cutting-edge automation and workflow optimization solutions today.",
 keywords: [
  "RocketOps AI",
  "business automation tools",
  "workflow automation AI",
  "AI automation tools",
  "business automation UAE",
  "workflow optimization GCC",
  "AI automation UAE",
  "workflow automation GCC",
  "ERP integration UAE",
  "business process automation Dubai",
  "AI agents for business",
  "generative AI solutions UAE",
  "n8n workflow consulting",
  "SME automation UAE",
  "scale business GCC",
  "reduce overhead UAE",
  "RocketOps",
 ],
 openGraph: {
  title: "RocketOps.ai - Automate, Optimize, and Scale Your Business with AI",
  description:
   "Streamline your business operations with RocketOps.ai — an AI-driven platform built for workflow automation and business efficiency.",
  url: "https://rocketops.ai",
  siteName: "RocketOps.ai",
  images: [
   {
    url: "/logo.png", // Replace with the actual path to your logo/social image
    width: 800,
    height: 600,
    alt: "RocketOps Logo and AI Automation Solutions",
   },
  ],
  locale: "en_US",
  type: "website",
 },

};

export default function Home() {
 return (
  <main className="">
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
   {/* <CaseStudies /> */}
   <Secure />
   <Future />
   <Footer />
  </main>
 );
}
