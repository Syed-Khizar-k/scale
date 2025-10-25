import Link from "next/link";
import React from "react";

// A simple arrow icon for the contact link
const ArrowRightIcon = () => (
 <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="currentColor"
  className="w-5 h-5 inline-block ml-1">
  <path
   fillRule="evenodd"
   d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
   clipRule="evenodd"
  />
 </svg>
);

const PrivacyPolicy: React.FC = () => {
 return (
  <section className="bg-black text-white py-16 md:py-24 font-light">
   <div className="container mx-auto px-6 md:px-8 max-w-5xl">
    {/* Page Header */}
    <h1 className="text-center text-4xl md:text-5xl font-light mb-12 md:mb-16">
     Privacy Policy
    </h1>

    <div className="space-y-8 text-gray-300 leading-relaxed">
     <p>
      At RocketOps, we are committed to protecting your privacy and ensuring the
      security of your personal information. This Privacy Policy explains how we
      collect, use, disclose, and safeguard your data when you visit our website
      or use our AI automation services.
     </p>

     {/* Section: Information We Collect */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       Information We Collect
      </h2>
      <div>
       <h3 className="text-xl text-white font-normal mb-2">
        Personal Information
       </h3>
       <p>
        When you contact us or use our services, we may collect personal
        information including but not limited to: name, email address, phone
        number, company name, job title, and business requirements.
       </p>
      </div>
      <div>
       <h3 className="text-xl text-white font-normal mb-2">
        Automatically Collected Information
       </h3>
       <p>
        We automatically collect certain information about your device and usage
        patterns, including IP address, browser type, operating system,
        referring URLs, pages viewed, and timestamps of visits.
       </p>
      </div>
      <div>
       <h3 className="text-xl text-white font-normal mb-2">
        Project & Technical Data
       </h3>
       <p>
        For clients using our AI automation services, we may collect and process
        technical data, project specifications, workflow information, and
        performance metrics necessary to deliver our services.
       </p>
      </div>
     </section>

     {/* Section: How We Use Your Information */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       How We Use Your Information
      </h2>
      <ul className="list-disc list-outside ml-5 space-y-2">
       <li>To provide, maintain, and improve our AI automation services</li>
       <li>
        To respond to your inquiries, consultations, and service requests
       </li>
       <li>
        To send you technical updates, security alerts, and administrative
        messages
       </li>
       <li>To analyze usage patterns and improve our website and services</li>
       <li>To send marketing communications (with your consent)</li>
       <li>To comply with legal obligations and protect our legal rights</li>
      </ul>
     </section>

     {/* Section: Data Security */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       Data Security
      </h2>
      <p>
       We implement industry-standard security measures to protect your personal
       information from unauthorized access, disclosure, alteration, and
       destruction. These measures include:
      </p>
      <ul className="list-disc list-outside ml-5 space-y-2">
       <li>Encryption of data in transit and at rest</li>
       <li>Regular security audits and vulnerability assessments</li>
       <li>Access controls and authentication protocols</li>
       <li>Employee training on data protection and privacy</li>
      </ul>
     </section>

     {/* Section: Information Sharing */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       Information Sharing
      </h2>
      <p>
       We do not sell, rent, or trade your personal information. We may share
       your information only in the following circumstances:
      </p>
      <ul className="list-disc list-outside ml-5 space-y-2">
       <li>
        With service providers who assist in our operations (under strict
        confidentiality agreements)
       </li>
       <li>When required by law or to protect our legal rights</li>
       <li>
        In connection with a business transaction (merger, acquisition, etc.)
       </li>
       <li>With your explicit consent</li>
      </ul>
     </section>

     {/* Section: Your Privacy Rights */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       Your Privacy Rights
      </h2>
      <p>
       Under applicable data protection laws, including UAE regulations, you
       have the following rights:
      </p>
      <ul className="list-none ml-0 space-y-2">
       <li>
        <strong className="text-white">Access:</strong> Request access to your
        personal information
       </li>
       <li>
        <strong className="text-white">Correction:</strong> Request correction
        of inaccurate data
       </li>
       <li>
        <strong className="text-white">Deletion:</strong> Request deletion of
        your personal information
       </li>
       <li>
        <strong className="text-white">Opt-out:</strong> Unsubscribe from
        marketing communications
       </li>
       <li>
        <strong className="text-white">Data Portability:</strong> Request
        transfer of your data
       </li>
      </ul>
     </section>

     {/* Section: Cookies and Tracking */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       Cookies and Tracking
      </h2>
      <p>
       We use cookies and similar tracking technologies to improve your browsing
       experience, analyze website traffic, and understand user preferences. You
       can control cookie settings through your browser preferences.
      </p>
     </section>

     {/* Section: International Data Transfers */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       International Data Transfers
      </h2>
      <p>
       As a UAE-based company, your data is primarily stored and processed
       within the UAE. If we transfer data internationally, we ensure
       appropriate safeguards are in place to protect your S information in
       accordance with applicable laws.
      </p>
     </section>

     {/* Section: Changes to This Policy */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       Changes to This Policy
      </h2>
      <p>
       We may update this Privacy Policy from time to time. We will notify you
       of any material changes by posting the new policy on this page and
       updating the "Last updated" date.
      </p>
     </section>

     {/* Section: Contact Us */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       Contact Us
      </h2>
      <p>
       If you have any questions about this Privacy Policy or wish to exercise
       your privacy rights, please contact us:
      </p>
      <ul className="list-none ml-0 space-y-2">
       <li>
        <strong className="text-white">Email:</strong>{" "}
        <Link
         href="mailto:sami@rocketops.ai"
         className="text-purple-400 hover:underline">
         sami@rocketops.ai
        </Link>
       </li>
       <li>
        <strong className="text-white">Email:</strong>{" "}
        <Link
         href="mailto:umair@rocketops.ai"
         className="text-purple-400 hover:underline">
         umair@rocketops.ai
        </Link>
       </li>
       <li>
        <strong className="text-white">Phone:</strong>{" "}
        <Link
         href="tel:+971-55-305-5243"
         className="text-purple-400 hover:underline">
         +971-55-305-5243
        </Link>
       </li>
       <li>
        <strong className="text-white">Location:</strong> Dubai, UAE
       </li>
      </ul>
      <div className="pt-4">
       <Link
        href="/contact" // Assuming this is your contact page route
        className="text-purple-400 text-lg hover:underline">
        Visit our Contact Page
        <ArrowRightIcon />
       </Link>
      </div>
     </section>
    </div>
   </div>
  </section>
 );
};

export default PrivacyPolicy;
