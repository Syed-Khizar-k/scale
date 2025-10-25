"use client";
// components/CaseStudiesSection.tsx
import React, { useRef } from "react"; // Import useRef
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // <-- Import the Autoplay plugin
// import Image from "next/image"; // <-- Removed Next.js Image component

interface CaseStudyCardProps {
  category: string;
  title: string;
  logoContent: React.ReactNode;
  linkedinUrl: string; // <-- Added URL prop
}

// --- LinkedIn Icon Component ---
// Renders the black LinkedIn icon as requested
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20" // Set size for the icon inside the circle
    height="20"
    viewBox="0 0 24 24"
    fill="black" // Set fill to black
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// --- Data for the cards ---
// Added linkedinUrl to each object
const caseStudies = [
  {
    category: "CEO RocketOps",
    title: "Sami Zoabi",
    linkedinUrl: "https://www.linkedin.com/in/sami-zoabi-a0048654/",
    logoContent: (
      <img
        src={"/home/team/sami.png"}
        alt={"Sami Zoabi"}
        className="absolute inset-0 w-full h-full rounded-lg object-cover object-center"
        onError={(e) =>
          (e.currentTarget.src =
            "https://placehold.co/400x600/111111/FFFFFF?text=Image+Not+Found")
        }
      />
    ),
  },
  {
    category: "AI Engineer",
    title: "Syed Umair Ul Hassan",
    linkedinUrl: "https://www.linkedin.com/in/syed-umair-ul-hassan-03412b100/",
    logoContent: (
      <img
        src={"/home/team/umair.png"}
        alt={"Syed Umair Ul Hassan"}
        className="absolute inset-0 w-full h-full rounded-lg object-cover object-center"
        onError={(e) =>
          (e.currentTarget.src =
            "https://placehold.co/400x600/111111/FFFFFF?text=Image+Not+Found")
        }
      />
    ),
  },
  {
    category: "Full Stack Developer",
    title: "Syed Junaid Ul Hassan",
    linkedinUrl:
      "https://www.linkedin.com/in/syed-junaid-ul-hassan-892b5324b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    logoContent: (
      <img
        src={"/home/team/junaid.png"}
        alt={"Syed Junaid Ul Hassan"}
        className="absolute inset-0 w-full h-full rounded-lg object-cover object-top"
        onError={(e) =>
          (e.currentTarget.src =
            "https://placehold.co/400x600/111111/FFFFFF?text=Image+Not+Found")
        }
      />
    ),
  },
  {
    category: "Front End Developer",
    title: "Syed Khizar Hussain",
    linkedinUrl:
      "https://www.linkedin.com/in/syed-khizar-95193b31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    logoContent: (
      <img
        src={"/home/team/khizar.png"}
        alt={"Syed Khizar Hussain"}
        className="absolute inset-0 w-full h-full rounded-lg object-cover object-top"
        onError={(e) =>
          (e.currentTarget.src =
            "https://placehold.co/400x600/111111/FFFFFF?text=Image+Not+Found")
        }
      />
    ),
  },
  // --- Duplicated cards for smooth looping ---
  {
    category: "CEO RocketOps",
    title: "Sami Zoabi",
    linkedinUrl: "https://www.linkedin.com/in/sami-zoabi-a0048654/",
    logoContent: (
      <img
        src={"/home/team/sami.png"}
        alt={"Sami Zoabi"}
        className="absolute inset-0 w-full h-full rounded-lg object-cover object-center"
        onError={(e) =>
          (e.currentTarget.src =
            "https://placehold.co/400x600/111111/FFFFFF?text=Image+Not+Found")
        }
      />
    ),
  },
  {
    category: "AI Engineer",
    title: "Syed Umair Ul Hassan",
    linkedinUrl: "https://www.linkedin.com/in/syed-umair-ul-hassan-03412b100/",
    logoContent: (
      <img
        src={"/home/team/umair.png"}
        alt={"Syed Umair Ul Hassan"}
        className="absolute inset-0 w-full h-full rounded-lg object-cover object-center"
        onError={(e) =>
          (e.currentTarget.src =
            "https://placehold.co/400x600/111111/FFFFFF?text=Image+Not+Found")
        }
      />
    ),
  },
];

// --- Reusable Card Component ---
const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  category,
  title,
  logoContent,
  linkedinUrl, // <-- Get the URL from props
}) => {
  return (
    // This is the Embla "slide"
    // 'pl-4' creates the gutter/spacing between cards
    <div className="embla__slide flex-none w-10/12 sm:w-2/3 md:w-1/3 lg:w-[33%] pl-4">
      <div className="bg-black rounded-lg h-full flex flex-col">
        {/*
          The parent div is relative, so the absolutely positioned <img>
          and <a> tags will be positioned correctly relative to this box.
        */}
        <div className="bg-[#111111] border border-gray-500 h-72 md:min-h-[480px] lg:h-98 flex relative items-center justify-center rounded-lg p-6 overflow-hidden">
          {logoContent}

          {/* --- NEW: LinkedIn Icon Link --- */}
          <a
            href={linkedinUrl}
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            aria-label={`${title}'s LinkedIn Profile`}
            // Styling the link as a round, white button in the bottom-right
            className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-lg transition-transform duration-200 hover:scale-110"
            // Stop the click from triggering a carousel drag
            onClick={(e) => e.stopPropagation()}
          >
            <LinkedInIcon />
          </a>
          {/* ------------------------------- */}
        </div>
        <div className="pt-6">
          <span className="text-purple-400 text-[14px] font-light uppercase tracking-wider">
            {category}
          </span>
          <h3 className="text-white text-2xl font-light mt-2 hover:underline cursor-pointer">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

// --- Main Section Component ---
const Team: React.FC = () => {
  // --- Set up Autoplay Plugin ---
  const autoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: false, // Set to true if you want it to pause on hover
      playOnInit: true,
    })
  );

  // --- Set up Embla Carousel ---
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
    },
    [autoplay.current]
  );

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="pb-[60px]">
          {/* Header Text (no change) */}
          <div className="text-center mb-8">
            <span className="text-white text-xs font-light tracking-widest uppercase">
              Meet Our Team
            </span>
          </div>

          {/* Main Heading (no change) */}
          <h2 className="text-center text-4xl md:text-5xl font-light mb-4">
            A Team of Leading Industry Experts
          </h2>
        </div>

        {/* --- Embla Carousel Viewport --- */}
        <div
          className="embla overflow-hidden no-scrollbar cursor-grab"
          ref={emblaRef}
        >
          {/* Embla Carousel Container */}
          <div className="embla__container flex">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                category={study.category}
                title={study.title}
                logoContent={study.logoContent}
                linkedinUrl={study.linkedinUrl} // <-- Pass the URL prop
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;