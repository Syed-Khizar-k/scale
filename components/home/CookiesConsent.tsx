"use client";

import React, { useState, useEffect } from "react";

// --- Helper Functions for Cookies ---

/**
 * Sets a cookie.
 * @param name The name of the cookie.
 * @param value The value of the cookie.
 * @param days The number of days until the cookie expires.
 */
const setCookie = (name: string, value: string, days: number) => {
 let expires = "";
 if (days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  expires = "; expires=" + date.toUTCString();
 }
 // Ensure cookie is set for the entire site
 document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

/**
 * Gets a cookie by name.
 * @param name The name of the cookie.
 * @returns The cookie value or null if not found.
 */
const getCookie = (name: string): string | null => {
 const nameEQ = name + "=";
 const ca = document.cookie.split(";");
 for (let i = 0; i < ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) === " ") c = c.substring(1, c.length);
  if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
 }
 return null;
};

// 'X' icon for the close button
const CloseIcon = () => (
 <svg
  className="w-5 h-5"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg">
  <path
   strokeLinecap="round"
   strokeLinejoin="round"
   strokeWidth={2}
   d="M6 18L18 6M6 6l12 12"
  />
 </svg>
);

const CookieConsent: React.FC = () => {
 const [isVisible, setIsVisible] = useState(false);

 // Check for existing cookie on component mount (client-side only)
 useEffect(() => {
  // Check if consent was already given
  const consent = getCookie("cookie_consent");
  if (!consent) {
   // Only show the dialog if no cookie is found
   setIsVisible(true);
  }
 }, []);

 if (!isVisible) {
  return null;
 }

 // --- Handlers ---

 // Handle Reject or Close
 const handleReject = () => {
  // Set a cookie to remember rejection for 1 year
  setCookie("cookie_consent", "rejected", 365);
  setIsVisible(false);
  console.log("Cookie consent rejected.");
 };

 // Handle Accept
 const handleAccept = () => {
  // Set a cookie to remember acceptance for 1 year
  setCookie("cookie_consent", "accepted", 365);
  setIsVisible(false);
  console.log("Cookie consent accepted.");
 };

 return (
  <div className="fixed bottom-0 left-0 right-0 w-full bg-black border-t border-gray-700 z-50 px-6 py-10 shadow-2xl">
   <div className="container mx-auto max-w-7xl relative">
    <button
     onClick={handleReject}
     className="absolute -top-8 -right-2 md:-top-10 md:right-0 text-gray-400 hover:text-white p-2"
     aria-label="Close cookie consent">
     <CloseIcon />
    </button>
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
     {/* Close Button (also counts as reject) */}

     {/* Text Content */}
     <div className="text-gray-300 text-sm font-light text-center md:text-left pr-0 md:pr-10">
      <p>
       We use cookies to enhance your browsing experience, analyze site traffic,
       and personalize content. By clicking "Accept Cookies", you consent to our
       use of cookies. Read our{" "}
       <a
        href="/cookies-policy"
        className="text-purple-400 hover:underline font-normal">
        Cookie Policy
       </a>{" "}
       for more information.
      </p>
     </div>

     {/* Action Buttons */}
     <div className="flex-shrink-0 flex items-center md:flex-row flex-col gap-4 mt-4 md:mt-0 w-full md:w-auto">
      <button
       onClick={handleReject}
       className="w-1/2 md:w-auto px-6 py-2 rounded-lg text-white font-normal text-sm bg-gray-700 hover:bg-gray-600 transition-colors">
       Reject All
      </button>
      <button
       onClick={handleAccept}
       className="w-1/2 md:w-auto px-6 py-2 rounded-lg text-black font-normal text-sm bg-white hover:bg-gray-300 transition-colors">
       Accept Cookies
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default CookieConsent;
