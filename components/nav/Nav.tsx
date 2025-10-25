"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TransLink from "../ui/TransLink";
import WhiteBtn from "../ui/WhiteBtn";

const navLinks = [
 { href: "/", label: "Home" },
 { href: "/about", label: "About" },
 { href: "/services", label: "Services" },
 { href: "/team", label: "Team" },
 { href: "/contact", label: "Contact" },
];

const Nav = () => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 return (
  <header className="w-full border-b border-white/10 bg-black">
   <div className="container mx-auto flex min-h-14 items-center justify-between px-6 md:px-8 lg:relative lg:min-h-[88px]">
    {/* ======== Logo & Mobile Toggle ======== */}
    <div
     className="flex w-full items-center justify-between lg:w-auto lg:flex-1"
     style={{ color: "#fff" }}>
     <Link href="/">
      <Image
       src="/logo.png"
       alt="RocketOps Logo"
       width={140}
       height={40}
       className="h-auto w-[140px]"
       priority
      />
     </Link>
     <div
      className="flex cursor-pointer items-center lg:hidden"
      onClick={() => setIsSidebarOpen(true)}>
      <svg className="h-auto w-6 fill-current text-white" viewBox="0 0 24 12">
       <rect height="2" width="24" />
       <rect height="2" width="24" y="5" />
       <rect height="2" width="24" y="10" />
      </svg>
     </div>
    </div>

    {/* ======== Centered Desktop Navigation ======== */}
    <div className="pointer-events-none hidden lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center">
     <nav className="pointer-events-auto">
      <ul className="flex gap-x-6">
       {navLinks.map((link) => (
        <li key={link.href}>
         <Link
          href={link.href}
          className="py-1 text-sm font-normal leading-5"
          style={{ color: "#bbdef2" }} // 🌟 Nav link color
         >
          {link.label}
         </Link>
        </li>
       ))}
      </ul>
     </nav>
    </div>

    {/* ======== Right-side Action Buttons (Desktop) ======== */}
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
     <WhiteBtn href={"https://calendly.com/sami-rocketops/30min"}>
      Book a Demo
     </WhiteBtn>
    </div>
   </div>

   {/* ======== Mobile Sidebar ======== */}
   {isSidebarOpen && (
    <div className="fixed w-full inset-0 z-50 bg-black/30 backdrop-blur-sm lg:hidden">
     <div className="h-full w-full px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between pb-4">
       <Link href="/">
        <Image height="40" width="120" src="/logo.png" alt="RocketOps Logo" />
       </Link>
       <button onClick={() => setIsSidebarOpen(false)}>
        <svg
         className="h-6 w-6 text-white"
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg">
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"></path>
        </svg>
       </button>
      </div>

      {/* Sidebar Navigation Links */}
      <nav className="mt-4 flex flex-col gap-y-6">
       {navLinks.map((link) => (
        <Link
         key={link.href}
         href={link.href}
         className="flex items-center justify-between text-lg font-medium"
         style={{ color: "#bbdef2" }} // 🌟 Mobile nav link color
         onClick={() => setIsSidebarOpen(false)}>
         {link.label}
        </Link>
       ))}
      </nav>

      {/* Sidebar "Book a Demo" Button */}
      <div className="mt-8">
       <Link
        href="https://calendly.com/sami-rocketops/30min"
        className="group relative block w-full rounded-xl focus-visible:outline focus-visible:outline-[rgba(255,255,255,0.64)] focus-visible:outline-offset-[3px]"
        onClick={() => setIsSidebarOpen(false)}>
        <div className="flex h-full rounded-[10px] cursor-pointer items-center justify-center whitespace-nowrap bg-white px-4 py-3 text-lg font-medium text-black">
         Book a Demo
         <span className="ml-2 inline-block w-fit font-normal transition-transform duration-300 group-hover:translate-x-1">
          →
         </span>
        </div>
       </Link>
      </div>
     </div>
    </div>
   )}
  </header>
 );
};

export default Nav;
