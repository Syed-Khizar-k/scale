import React from "react";
import WhiteBtn from "../ui/WhiteBtn";

// Removed: import Image from "next/image";

// --- End of Mock Components ---

// 1. Define the props for the reusable section
interface FeatureSectionProps {
 title: string;
 subtitle: string;
 description: string;
 imageUrl: string;
 imageAlt: string;
 primaryButtonText: string;
 primaryButtonHref: string;

 reverseLayout?: boolean;
}

// 2. Create an array of data for all your sections
// All your sections had identical text, so I've repeated it here.
// You can now easily change the text for each section by editing this array.
const sectionData: FeatureSectionProps[] = [
 {
  title: "AI Agent Automation",
  subtitle:
   "Autonomously Scale Your Business Logic with Intelligent AI Workflows.",
  description:
   "Move beyond static automation. We deploy autonomous AI agents capable of handling complex, multi-step processes, making dynamic decisions and learning on the fly to maximize business efficiency.",
  imageUrl: "/services/automation.jpg",
  imageAlt: "Generative AI demonstration",
  primaryButtonText: "Learn More ",
  primaryButtonHref: "/services/ai-agent-automation",
  reverseLayout: false, // Section 1
 },
 {
  title: "Ai Development",
  subtitle: "Custom AI solutions tailored to your business needs",
  description:
   "Scale Generative AI Data Engine powers many of the most advanced LLMs and generative models in the world through world-class RLHF, data generation, model evaluation, safety, and alignment.",
  imageUrl: "/services/ai.jpg",
  imageAlt: "Generative AI alignment process",
  primaryButtonText: "Learn More ",
  primaryButtonHref: "/services/ai-development",
  reverseLayout: true, // Section 2 (reversed)
 },
 {
  title: "Data Engineering",
  subtitle: "Transform raw data into actionable insights",
  description:
   "Scale Generative AI Data Engine powers many of the most advanced LLMs and generative models in the world through world-class RLHF, data generation, model evaluation, safety, and alignment.",
  imageUrl: "/services/data.jpg",
  imageAlt: "Model evaluation dashboard",
  primaryButtonText: "Learn More ",
  primaryButtonHref: "/services/data-engineering",
  reverseLayout: false, // Section 3
 },
 {
  title: "Machine Learning",
  subtitle: "Advanced ML algorithms for business intelligence",
  description:
   "We build Supervised learning and Unsupervised learning including advanced Deep learning solutions, focusing on Time series forecasting, Classification & regression, and reliable Model deployment & monitoring.",
  imageUrl: "/services/machine.jpg",
  imageAlt: "Data generation interface",
  primaryButtonText: "Learn More ",
  primaryButtonHref: "/services/machine-learning",
  reverseLayout: true, // Section 4 (reversed)
 },
];

// 3. Create the reusable FeatureSection component
const FeatureSection: React.FC<FeatureSectionProps> = ({
 title,
 subtitle,
 description,
 imageUrl,
 imageAlt,
 primaryButtonText,
 primaryButtonHref,
 reverseLayout = false,
}) => {
 return (
  <div
   className={`flex flex-col ${
    reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
   } md:items-center gap-12 md:gap-16 py-10`}>
   {/* Image Column */}
   <div className="md:w-1/2 w-full">
    <div className="bg-[#1a1a1a] md:h-[400px] h-[220px] rounded-xl relative border border-gray-700 shadow-lg overflow-hidden">
     {/* Replaced Next/Image with standard <img> tag to fix resolution error */}
     <img
      src={imageUrl}
      alt={imageAlt}
      className="rounded-xl object-cover w-full h-full"
      loading="lazy"
     />
    </div>
   </div>

   {/* Text Column */}
   <div className="md:w-1/2 w-full">
    <h3 className="text-3xl md:text-4xl font-light mb-4">{title}</h3>
    <p className="text-gray-400 mb-4 text-lg">{subtitle}</p>
    <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
     {description}
    </p>

    {/* Buttons */}
    <div className="flex gap-4 items-center flex-wrap">
     <WhiteBtn href={primaryButtonHref}>{primaryButtonText}</WhiteBtn>
    </div>
   </div>
  </div>
 );
};

// 4. Your main component is now much cleaner
const ServiceOne: React.FC = () => {
 return (
  <section className="bg-black text-white py-16 md:py-24 w-full">
   <div className="container mx-auto px-6 md:px-8">
    {/* Top Label */}
    <div className="text-center mb-8">
     <span className="text-white text-xs font-light tracking-widest uppercase">
      Our Services
     </span>
    </div>

    {/* Main Heading */}
    <h2 className="text-center text-4xl md:text-5xl font-light mb-4">
     Ready to Transform Your Business?
    </h2>
    <p className="mt-4 lg:mt-2 text-center leading-[1.60] lg:text-xl block mb-6 font-normal">
     Book your free automation audit and discover how much time and money you
     can save with intelligent automation.
    </p>

    {/* Mapped Feature Sections */}
    <div className="flex flex-col">
     {sectionData.map((section, index) => (
      <FeatureSection key={index} {...section} />
     ))}
    </div>
   </div>
  </section>
 );
};

export default ServiceOne;
