"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TransLink from "../ui/TransLink";
import WhiteBtn from "../ui/WhiteBtn";

// Navigation links are stored here for easy management
const navLinks = [
 { href: "/products", label: "Products" },
 { href: "/leaderboards", label: "Leaderboards" },
 { href: "/enterprise/agentic-solutions", label: "Enterprise" },
 { href: "/public-sector", label: "Government" },
 { href: "/customers", label: "Customers" },
 { href: "/resources", label: "Resources" },
];

const Nav = () => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 return (
  <header className="w-full border-b border-white/10 bg-black">
   <div className="container mx-auto flex min-h-14 items-center justify-between px-6 md:px-8 lg:relative lg:min-h-[88px]">
    {/* ======== Logo & Mobile Toggle ======== */}
    <div className="flex w-full items-center justify-between lg:w-auto lg:flex-1">
     <Link href="/">
      <h2 className="sr-only">Scale AI logo</h2>
      <Image
       height="20"
       width="63"
       src={"/nav/nav_logo.svg"}
       alt={"nav_logo"}
      />
     </Link>
     {/* Mobile menu button - Toggles sidebar visibility */}
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
         <Link href={link.href} className="py-1 text-sm font-normal leading-5">
          {link.label}
         </Link>
        </li>
       ))}
      </ul>
     </nav>
    </div>

    {/* ======== Right-side Action Buttons (Desktop) ======== */}
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
     <WhiteBtn href={"/demo"}>Book a Demo</WhiteBtn>
     <TransLink href="/login">Log In</TransLink>
    </div>
   </div>

   {/* ======== Mobile Sidebar ======== */}
   {isSidebarOpen && (
    <div className="fixed w-full inset-0 z-50 bg-black/30 backdrop-blur-sm lg:hidden">
     <div className=" h-full  w-full px-6 py-4 shadow-lg">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-4">
       <Link href="/">
        <Image
         height="20"
         width="63"
         src={"/nav/nav_logo.svg"}
         alt={"nav_logo"}
        />
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
         className="flex items-center justify-between text-lg font-medium text-white"
         onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
        >
         {link.label}
         {/* Optional arrow icon for some links, uncomment if needed */}
         {/* {(link.label === "Products" || link.label === "Customers" || link.label === "Resources") && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  )} */}
        </Link>
       ))}
       <Link
        href="https://dashboard.scale.com/login"
        className="flex items-center justify-between text-lg font-medium text-white"
        onClick={() => setIsSidebarOpen(false)}>
        Sign In
       </Link>
      </nav>

      {/* Sidebar "Book a Demo" Button */}
      <div className="mt-8">
       <Link
        href="/demo"
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
