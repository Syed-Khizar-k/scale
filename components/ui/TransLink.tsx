import Link from "next/link";
import React from "react";

// Define the types for the component's props
interface TransLinkProps {
 href: string;
 children: React.ReactNode; // This will be the text inside the link
}

/**
 * A reusable link component with a transparent hover effect.
 */
const TransLink: React.FC<TransLinkProps> = ({ href, children }) => {
 return (
  <Link
   href={href}
   className="text-sm font-medium text-white transition-colors hover:opacity-80">
   {children}
  </Link>
 );
};
export default TransLink;
