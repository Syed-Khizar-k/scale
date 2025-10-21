import React from "react";
import Link from "next/link";

// Data for the footer links, making it easier to manage
const footerSections = [
 {
  title: "Products",
  links: [
   { href: "/data-engine", text: "Scale Data Engine" },
   { href: "/genai-platform", text: "Scale GenAI Platform" },
   { href: "/donovan", text: "Scale Donovan" },
  ],
  // Special nested section for 'Government' as in the original structure
  nested: {
   title: "Government",
   links: [{ href: "/public-sector", text: "Public Sector" }],
  },
 },
 {
  title: "Company",
  links: [
   { href: "/about", text: "About" },
   { href: "/careers", text: "Careers" },
   { href: "/security", text: "Security" },
   { href: "/legal/terms", text: "Terms" },
   { href: "/legal/privacy", text: "Privacy" },
  ],
 },
 {
  title: "Resources",
  links: [
   { href: "/blog", text: "Blog" },
   { href: "/contact-us", text: "Contact Us" },
   { href: "/customers", text: "Customers" },
   { href: "/events", text: "Events" },
   { href: "/docs", text: "Documentation" },
   { href: "/guides", text: "Guides" },
   { href: "https://exchange.scale.com/", text: "Community" },
   { href: "/ai-readiness-report", text: "AI Readiness Report 2024" },
   { href: "/research", text: "Research" },
  ],
 },
 {
  title: "Guides",
  links: [
   { href: "/guides/data-labeling-annotation-guide", text: "Data Labeling" },
   { href: "/guides/model-training-building", text: "ML Model Training" },
   { href: "/guides/diffusion-models-guide", text: "Diffusion Models" },
   { href: "/guides/ai-for-ecommerce", text: "Guide to AI for eCommerce" },
   { href: "/guides/computer-vision", text: "Computer Vision Applications" },
   { href: "/guides/large-language-models", text: "Large Language Models" },
  ],
 },
];

// Data for social media links
const socialLinks = [
 {
  label: "Twitter",
  href: "https://x.com/scale_ai",
  icon: (
   <path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.45-6.231h.002zm-1.16 17.52h1.832L7.045 4.126H5.078L17.044 19.77z" />
  ),
 },
 {
  label: "Facebook",
  href: "https://www.facebook.com/scaleapi",
  icon: (
   <path d="M24.147 12.073C24.147 5.405 18.74 0 12.073 0S0 5.405 0 12.073C0 18.1 4.415 23.094 10.187 24v-8.437H7.12v-3.49h3.066v-2.66c0-3.025 1.802-4.697 4.56-4.697 1.32 0 2.703.236 2.703.236v2.971h-1.523c-1.5 0-1.967.93-1.967 1.887v2.263h3.348l-.535 3.49H13.96V24c5.772-.906 10.187-5.9 10.187-11.927z" />
  ),
 },
 {
  label: "LinkedIn",
  href: "https://www.linkedin.com/company/scaleai",
  icon: (
   <path d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0zM7.12 20.452H3.558V8.995H7.12v11.457zM5.34 7.434a2.064 2.064 0 110-4.125 2.063 2.063 0 010 4.125zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286z" />
  ),
 },
];

const Footer = () => {
 return (
  <footer className="w-full bg-black">
   <div className="container mx-auto px-[24px] md:px-[32px] pt-12 md:pt-20 md:pb-20">
    <nav>
     <ul className="grid grid-cols-2 gap-y-2 gap-x-10 md:gap-10 xl:gap-0 md:grid-cols-3 xl:justify-between xl:flex xl:flex-wrap">
      {/* Main Link Sections */}
      {footerSections.map((section) => (
       <li key={section.title} className="mb-8 md:w-auto md:mb-0">
        <h2 className="mb-4 text-xs font-medium tracking-widest uppercase text-neutral-400 sm:text-sm md:mb-6">
         {section.title}
        </h2>
        <ul>
         {section.links.map((link) => (
          <li key={link.href} className="flex mb-3 text-xs md:text-sm md:mb-3">
           <Link
            className="font-normal text-neutral-400 hover:text-white"
            href={link.href}>
            {link.text}
           </Link>
          </li>
         ))}
         {/* Handling the nested 'Government' section */}
         {section.nested && (
          <li className="mb-8 md:w-auto md:mb-0 mt-8 ">
           <h2 className="mb-4 text-xs font-medium tracking-widest uppercase text-neutral-400 sm:text-sm md:mb-6">
            {section.nested.title}
           </h2>
           <ul>
            {section.nested.links.map((link) => (
             <li
              key={link.href}
              className="flex mb-3 text-xs md:text-sm md:mb-3">
              <Link
               className="font-normal text-neutral-400 hover:text-white"
               href={link.href}>
               {link.text}
              </Link>
             </li>
            ))}
           </ul>
          </li>
         )}
        </ul>
       </li>
      ))}
      {/* Follow Us Section */}
      <li className="mb-8 md:w-auto md:mb-0">
       <h2 className="mb-4 text-xs font-medium tracking-widest uppercase text-neutral-400 sm:text-sm md:mb-6">
        Follow Us
       </h2>
       <ul>
        <li className="flex gap-3 mt-8 text-neutral-400">
         {socialLinks.map((social) => (
          <Link key={social.label} aria-label={social.label} href={social.href}>
           <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            role="img"
            className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white">
            {social.icon}
           </svg>
          </Link>
         ))}
        </li>
       </ul>
      </li>
     </ul>
    </nav>
    <div className="flex text-xs md:text-sm justify-between flex-col md:flex-row pt-6 md:mt-12 pb-12 border-neutral-800 border-t">
     <span className="text-neutral-400">
      Copyright © 2025 Scale AI, Inc. All rights reserved.
     </span>
     <span className="mt-4 md:mt-0 text-neutral-400">
      <Link className="text-neutral-400 font-normal" href="/legal/terms">
       Terms of Use
      </Link>{" "}
      &amp;{" "}
      <Link className="text-neutral-400 font-normal" href="/legal/privacy">
       Privacy Policy
      </Link>
     </span>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
