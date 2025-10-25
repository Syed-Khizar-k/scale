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

const CookiePolicy: React.FC = () => {
 return (
  <section className="bg-black text-white py-16 md:py-24 font-light">
   <div className="container mx-auto px-6 md:px-8 max-w-5xl">
    {/* Page Header */}
    <h1 className="text-center text-4xl md:text-5xl font-light mb-4">
     Cookie Policy
    </h1>
    <p className="text-center text-gray-400 text-sm mb-12 md:mb-16">
     Last updated: October 26, 2024
    </p>

    <div className="space-y-8 text-gray-300 leading-relaxed">
     <p>
      This Cookie Policy explains how RocketOps ("we," "us," or "our") uses
      cookies and similar tracking technologies on our website. By continuing to
      browse or use our site, you are agreeing to our use of cookies as
      described in this policy.
     </p>

     {/* Section 1: What Are Cookies? */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       1. What Are Cookies?
      </h2>
      <p>
       Cookies are small text files that are placed on your device (computer,
       tablet, or mobile phone) by websites that you visit. They are widely used
       to make websites work, or work more efficiently, as well as to provide
       information to the site owners. Cookies help us improve your experience
       on our website by, for example, remembering your preferences and
       measuring your interaction with the site.
      </p>
     </section>

     {/* Section 2: How We Use Cookies */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       2. How We Use Cookies
      </h2>
      <p>
       We use cookies for several purposes. They can be categorized as follows:
      </p>
      <div>
       <h3 className="text-xl text-white font-normal mb-2">
        a) Strictly Necessary Cookies
       </h3>
       <p>
        These cookies are essential for you to navigate our website and use its
        core features. For example, they may be used for security purposes, to
        manage network traffic, or to allow you to fill out forms. You cannot
        opt out of these cookies as the website cannot function properly without
        them.
       </p>
      </div>
      <div>
       <h3 className="text-xl text-white font-normal mb-2">
        b) Performance and Analytics Cookies
       </h3>
       <p>
        These cookies collect information about how you use our website, such as
        which pages you visit most often and if you receive any error messages.
        The information collected is aggregated and anonymous, and it helps us
        understand our website traffic and improve its performance. We may use
        third-party services like Google Analytics for this purpose.
       </p>
      </div>
      <div>
       <h3 className="text-xl text-white font-normal mb-2">
        c) Functionality Cookies
       </h3>
       <p>
        These cookies allow our website to remember choices you make (such as
        your language preference or the region you are in) and provide enhanced,
        more personalized features. For example, they can be used to remember
        your preferences for text size or other customizable parts of the site.
       </p>
      </div>
     </section>

     {/* Section 3: Third-Party Cookies */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       3. Third-Party Cookies
      </h2>
      <p>
       In addition to our own cookies, we may also use various third-party
       cookies (e.g., Google Analytics) to report usage statistics of the
       website. These third-party services have their own privacy and cookie
       policies, which we do not control.
      </p>
     </section>

     {/* Section 4: Your Choices and Managing Cookies */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       4. Your Choices and Managing Cookies
      </h2>
      <p>
       You have the right to decide whether to accept or reject non-essential
       cookies. You can control your cookie preferences through your web browser
       settings. Most modern browsers allow you to:
      </p>
      <ul className="list-disc list-outside ml-5 space-y-2">
       <li>See what cookies you have and delete them individually.</li>
       <li>Block third-party cookies.</li>
       <li>Block cookies from particular sites.</li>
       <li>Block all cookies from being set.</li>
       <li>Delete all cookies when you close your browser.</li>
      </ul>
      <p>
       Please note that if you choose to block all cookies (including strictly
       necessary ones), you may not be able to access all or parts of our
       website, and some features may not function correctly.
      </p>
     </section>

     {/* Section 5: Changes to This Cookie Policy */}
     <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl text-white font-light pt-4 border-t border-gray-700">
       5. Changes to This Cookie Policy
      </h2>
      <p>
       We may update this Cookie Policy from time to time to reflect, for
       example, changes to the cookies we use or for other operational, legal,
       or regulatory reasons. We will notify you of any material changes by
       posting the new policy on this page and updating the "Last updated" date.
      </p>
     </section>
    </div>
   </div>
  </section>
 );
};

export default CookiePolicy;
