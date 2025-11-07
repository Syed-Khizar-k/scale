import Head from "next/head";
import FaqSection from "./Accordian";

export default function Faqs() {
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
   question:
    "Can RocketOps integrate with my existing software and business tools?",
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
   question:
    "Can RocketOps.ai handle enterprise-level automation in the GCC region?",
   answer:
    "Yes. RocketOps is built for scale — supporting multi-team operations, enterprise data security, and API-based automation infrastructure. Our GCC-based deployment options ensure data compliance, speed, and reliability for enterprises operating in regulated sectors.",
  },
  {
   question: "Is RocketOps available in Arabic or other regional languages?",
   answer:
    "Yes. RocketOps.ai supports Arabic language UI and localized documentation for GCC clients. Multi-language support helps regional teams collaborate efficiently without technical barriers.",
  },
 ];
 const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
   "@type": "Question",
   name: f.question,
   acceptedAnswer: {
    "@type": "Answer",
    text: f.answer,
   },
  })),
 };

 return (
  <>
   <Head>
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
   </Head>
   <FaqSection faqs={faqs}/>
   {/* your client component here */}
  </>
 );
}
