"use client";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}




export default function FaqSection({faqs}: {faqs: FaqItem[]}) {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const toggle = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
 };

 return (
  <section className="bg-black py-20" id="faqs">
   <div className="max-w-3xl mx-auto px-6 text-center">
    <h2 className="text-center text-4xl md:text-5xl font-light mb-4">
     Frequently Asked Questions
    </h2>
    <p className="text-white mb-12">
     Find answers to common questions about RocketOps automation, AI agents, and
     integrations.
    </p>

    <div className="space-y-4 text-left">
     {faqs.map((faq, i) => {
      const isOpen = openIndex === i;
      return (
       <div
        key={i}
        className="border border-gray-200 bg-white rounded-2xl shadow-sm transition-all">
        <button
         className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
         onClick={() => toggle(i)}>
         <span className="text-lg font-medium text-gray-900">
          {faq.question}
         </span>
         <svg
          className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
           isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           d="M19 9l-7 7-7-7"
          />
         </svg>
        </button>
        <div
         className={`px-5 pb-5 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
         }`}>
         <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
}
