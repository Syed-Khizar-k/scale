"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface ResearchCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  icon,
  title,
  description,
  href,
}) => {
  return (
    <div
      // href={href}
      // target="_blank"
      // rel="noopener noreferrer"
      className="embla__slide flex-none w-full sm:w-1/2 md:w-1/3 pl-4 group rounded-2xl relative text-left block"
    >
      <div className="flex items-center h-full bg-[#1a1a1a] group-hover:bg-[#222222] transition-colors duration-150 ease-linear rounded-2xl p-4 sm:px-6 py-8">
        {/* ✅ Next.js Image instead of <img> */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 shrink-0">
          <Image
            src={icon}
            alt={`${title} icon`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
          />
        </div>

        <div className="flex flex-col pl-4 pr-10">
          <p className="mb-1 text-xs font-medium sm:text-sm text-purple-300">
            {title}
          </p>
          <p className="text-white text-lg leading-6 sm:text-xl line-clamp-2 md:line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      <div
        role="none"
        className="absolute items-center duration-150 overflow-hidden justify-center 
                   w-8 h-8 sm:w-10 sm:h-10 group-hover:bg-white bg-white/10 border group-hover:border-white 
                   transition-colors ease-linear border-white/13 flex rounded-full 
                   right-4 bottom-4"
      >
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 text-white transition-colors duration-150 ease-linear group-hover:text-black"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g>
            <path d="M7.75 7.5V4.25H4.5"></path>
            <path d="M7.5 4.5L0.75 11.25"></path>
            <path d="M5.785 10.25H8.75C9.855 10.25 10.75 9.355 10.75 8.25V2.75C10.75 1.645 9.855 0.75 8.75 0.75H3.75C2.645 0.75 1.75 1.645 1.75 2.75V6.215"></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

const FrontierResearch: React.FC = () => {
  const cards = [
    {
      icon: "/home/logos/smes.png",
      title: "Built for SMEs",
      description:
        "No overbuilt enterprise pricing. Solutions sized for growing businesses.",
      href: "#",
    },
    {
      icon: "/home/logos/open-stack.png",
      title: "Open Stack",
      description: "n8n + open automation stack. No vendor lock-in, full control.",
      href: "#",
    },
    {
      icon: "/home/logos/erp.webp",
      title: "ERP-Friendly",
      description:
        "Deep integration experience with your existing business systems.",
      href: "#",
    },
    {
      icon: "/home/logos/ai.jpg",
      title: "AI-Enhanced",
      description:
        "Voice, chat, data enrichment - advanced AI capabilities built-in.",
      href: "#",
    },
    {
      icon: "/home/logos/roi.jpg",
      title: "Guaranteed ROI",
      description:
        "Pilot-based approach. We start with quick wins, guaranteed results.",
      href: "#",
    },
    {
      icon: "/home/icon3.webp",
      title: "Local & Regional",
      description: "UAE/GCC focus. Supports local compliance & data laws.",
      href: "#",
    },
  ];

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-white text-xs font-light tracking-widest uppercase">
            Why RocketOps.ai
          </span>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Built for SMEs, Designed for Growth
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're different. No overbuilt enterprise pricing, no vendor lock-in, just
            results that matter to your business.
          </p>
        </div>

        <div
          className="embla overflow-hidden no-scrollbar cursor-grab -ml-4"
          ref={emblaRef}
        >
          <div className="embla__container flex gap-3">
            {cards.map((card, index) => (
              <ResearchCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontierResearch;
