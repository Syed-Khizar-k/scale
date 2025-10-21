import Link from "next/link";
import React from "react";

// Define the props the component will accept
interface ActionButtonProps {
 href: string;
 children: React.ReactNode; // 'children' will be the text inside the button
}

const WhiteBtn: React.FC<ActionButtonProps> = ({ href, children }) => {
 return (
  <Link
   href={href}
   className="group relative inline-block rounded-xl focus-visible:outline focus-visible:outline-[rgba(255,255,255,0.64)] focus-visible:outline-offset-[3px]">
   <div className="flex h-full cursor-pointer items-center justify-center whitespace-nowrap rounded-[10px] bg-white px-[17px] py-[8px] text-sm font-medium text-black">
    {children}
    <span className="ml-1 inline-block w-fit font-normal duration-300 group-hover:translate-x-1">
     →
    </span>
   </div>
  </Link>
 );
};

export default WhiteBtn;
