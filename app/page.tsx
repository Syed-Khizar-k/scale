import Companies from "@/components/companies/Companies";
import SwiperCompanies from "@/components/companies/SwiperCompanies";
import DemoSec from "@/components/demo/DemoSec";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import FaqSection from "@/components/home/Accordian";
import CaseStudies from "@/components/home/CaseStudies";
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
 metadataBase: new URL("https://rocketops.ai"),
 title: {
  default:
   "RocketOps.ai — AI Automation for SMEs in UAE & GCC (Workflows, ERP, AI Agents)",
  template: "%s | RocketOps.ai",
 },
 description:
  "RocketOps.ai helps SMEs in the UAE & GCC automate workflows, integrate ERP/CRMs, and deploy AI agents for measurable productivity gains. We design, build, and maintain no-lock-in automation using n8n, OpenAI, and modern data stacks.",
 keywords: [
  "RocketOps.ai",
  "AI automation UAE",
  "workflow automation GCC",
  "SME automation UAE",
  "n8n experts Dubai",
  "AI agents for business",
  "ERP integration UAE",
  "business process automation Dubai",
  "generative AI solutions UAE",
  "data engineering GCC",
  "no lock-in ERP",
  "automation consultancy UAE",
 ],
 applicationName: "RocketOps.ai",
 category: "Business, Automation, AI",
 alternates: {
  canonical: "https://rocketops.ai/",
  languages: {
   "en-US": "https://rocketops.ai/",
  },
 },
 robots: {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
   index: true,
   follow: true,
   maxSnippet: -1,
   maxImagePreview: "large",
   maxVideoPreview: -1,
  },
 },
 openGraph: {
  title:
   "RocketOps.ai — AI Automation for SMEs in UAE & GCC (Workflows, ERP, AI Agents)",
  description:
   "Automate operations, reduce overhead, and scale with AI. We build workflow automation, ERP integrations, and AI agents using open and extensible tools.",
  url: "https://rocketops.ai",
  siteName: "RocketOps.ai",
  images: [
   {
    url: "/logo.png", // update to real path
    width: 1200,
    height: 630,
    alt: "RocketOps.ai — AI Automation & ERP Integration (UAE & GCC)",
   },
  ],
  locale: "en_US",
  type: "website",
 },
 twitter: {
  card: "summary_large_image",
  title: "RocketOps.ai — AI Automation for SMEs in UAE & GCC",
  description:
   "We automate workflows and integrate ERPs with AI agents (n8n, OpenAI). Faster ops, lower cost, real ROI.",
  images: ["/logo.png"],
  creator: "@RocketOps433299", // update if you have one
 },
 icons: {
  icon: "/favicon.ico",
  apple: "/logo.png",
 },
 verification: {
  // add codes when available
  google: "",
  other: { "msvalidate.01": "" },
 },
};
const faqs = [
  {
    question: "What is RocketOps.ai and how does it help my business?",
    answer:
      "RocketOps.ai is an AI-powered automation and integration platform designed to help startups and enterprises in the UAE and beyond eliminate manual tasks. It connects your tools, streamlines workflows, and enables scalable growth through intelligent automation — all without writing a single line of code.",
  },
  {
    question: "Do I need technical or coding skills to use RocketOps.ai?",
    answer:
      "No technical skills are required. RocketOps.ai offers a no-code workflow builder, ready-to-use templates, and guided setup. This allows business owners, marketers, and operations teams to create automations visually and deploy them instantly — even without IT support.",
  },
  {
    question: "Can RocketOps integrate with my existing software and business tools?",
    answer:
      "Yes. RocketOps integrates seamlessly with 1,000+ tools including CRMs, ERPs, Slack, Google Sheets, Notion, HubSpot, Airtable, and industry-specific systems. Custom integrations can also be built for local enterprise software commonly used across UAE and GCC businesses.",
  },
  {
    question: "What type of AI automations can I create with RocketOps.ai?",
    answer:
      "You can build voice and chat agents, automated email campaigns, data pipelines, and predictive analytics workflows. Our platform supports sales outreach bots, lead generation flows, report automation, and real-time monitoring — designed for business efficiency across Dubai, Abu Dhabi, and global markets.",
  },
  {
    question: "Is customer support available after automation setup?",
    answer:
      "Absolutely. Our Managed Automation Support team provides ongoing monitoring, optimization, and maintenance for all workflows. You’ll receive proactive updates, error-handling, and performance tuning to ensure continuous uptime and measurable business outcomes.",
  },
  {
    question: "Can RocketOps.ai handle enterprise-level automation in the GCC region?",
    answer:
      "Yes. RocketOps is built for scale — supporting multi-team operations, enterprise data security, and API-based automation infrastructure. Our GCC-based deployment options ensure data compliance, speed, and reliability for enterprises operating in regulated sectors.",
  },
  {
    question: "Is RocketOps available in Arabic or other regional languages?",
    answer:
      "Yes. RocketOps.ai supports Arabic language UI and localized documentation for GCC clients. Multi-language support helps regional teams collaborate efficiently without technical barriers.",
  },
];
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
   <CaseStudies />
   <FaqSection faqs={faqs} />
   <Secure />
   <Future />
   <Footer />
  </main>
 );
}
