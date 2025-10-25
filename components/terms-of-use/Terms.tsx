import React from "react";

// A simple arrow icon for the contact link
// (You can move this to a shared 'icons' file if you use it in multiple places)
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

const TermsOfUse: React.FC = () => {
 return (
  <section className="bg-black text-white py-16 md:py-24 font-light">
   <div className="container mx-auto px-6 md:px-8 max-w-5xl">
    {/* Page Header */}
    <h1 className="text-center text-4xl md:text-5xl font-light mb-4">
     Terms of Use
    </h1>
    <p className="text-center text-gray-400 text-sm mb-12 md:mb-16">
     Last updated: October 26, 2024
    </p>

    <div className="space-y-8 text-gray-300 leading-relaxed">
     <p>
      Welcome to RocketOps ("we," "us," or "our"). These Terms of Use ("Terms")
      govern your access to and use of our website and our AI automation
      services (collectively, the "Services"). By accessing or using our
      Services, you agree to be bound by these Terms and our Privacy Policy.
     </p>

     {/* Section 1 */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       1. Acceptance of Terms
      </h2>
      <p>
       By using our Services, you affirm that you are of legal age to enter into
       this agreement and that you accept and are bound by these Terms. If you
       are using the Services on behalf of an organization, you are agreeing to
       these Terms for that organization and representing that you have the
       authority to bind that organization to these Terms.
      </p>
     </section>

     {/* Section 2 */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       2. Use of Our Services
      </h2>
      <p>
       You agree to use our Services only for lawful purposes and in accordance
       with these Terms. You are granted a limited, non-exclusive,
       non-transferable, revocable license to access and use the Services
       strictly for your business or personal use.
      </p>
      <div>
       <h3 className="text-xl text-white font-normal mb-2">User Conduct</h3>
       <p>You agree not to:</p>
       <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
        <li>
         Use the Services in any way that violates any applicable federal,
         state, local, or international law or regulation.
        </li>
        <li>
         Reverse engineer, decompile, disassemble, or attempt to discover the
         source code of any software used to provide the Services.
        </li>
        <li>
         Introduce any viruses, trojan horses, worms, or other material that is
         malicious or technologically harmful.
        </li>
        <li>
         Attempt to gain unauthorized access to, interfere with, damage, or
         disrupt any parts of the Services, the server on which the Services are
         stored, or any server, computer, or database connected to the Services.
        </li>
       </ul>
      </div>
     </section>

     {/* Section 3 */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       3. Intellectual Property Rights
      </h2>
      <p>
       The Services and all of their original content, features, and
       functionality (including but not limited to all information, software,
       text, displays, images, video, and audio, and the design, selection, and
       arrangement thereof) are owned by RocketOps, its licensors, or other
       providers of such material and are protected by international copyright,
       trademark, patent, trade secret, and other intellectual property or
       proprietary rights Access-Control-Allow-Origin: *
      </p>
      <p>
       Our name, "RocketOps", our logo, and all related names, logos, product
       and service names, designs, and slogans are trademarks of RocketOps or
       its affiliates or licensors. You must not use such marks without our
       prior written permission.
      </p>
     </section>

     {/* Section 4 */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       4. Client Data
      </h2>
      <p>
       For clients using our AI automation services, you retain all rights,
       title, and interest in and to your data, project specifications, and any
       other information you provide to us ("Client Data"). We will only use
       Client Data to the extent necessary to provide the Services to you, as
       described in our Services Agreement and Privacy Policy.
      </p>
     </section>

     {/* Section 5 */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       5. Disclaimers and Limitation of Liability
      </h2>
      <div>
       <h3 className="text-xl text-white font-normal mb-2">
        Disclaimer of Warranties
       </h3>
       <p>
        THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES
        OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
        IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE
        UNINTERRUPTED, ERROR-FREE, OR SECURE.
       </p>
      </div>
      <div>
       <h3 className="text-xl text-white font-normal mb-2">
        Limitation of Liability
       </h3>
       <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL ROCKETOPS, ITS
        AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS,
        OFFICERS, OR DIRECTORS BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH
        YOUR USE, OR INABILITY TO USE, THE SERVICES.
       </p>
      </div>
     </section>

     {/* Section 6 */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       6. Governing Law
      </h2>
      <p>
       All matters relating to the Services and these Terms shall be governed by
       and construed in accordance with the laws of the United Arab Emirates
       (UAE) and the Emirate of Dubai, without giving effect to any choice or
       conflict of law provision or rule.
      </p>
     </section>

     {/* Section 7 */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       7. Changes to These Terms
      </h2>
      <p>
       We may update these Terms of Use from time to time. We will notify you of
       any material changes by posting the new Terms on this page and updating
       the "Last updated" date. Your continued use of the Services after such
       changes constitutes your acceptance of the new Terms.
      </p>
     </section>

    </div>
   </div>
  </section>
 );
};

export default TermsOfUse;
