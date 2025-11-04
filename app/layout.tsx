import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookiesConsent from "@/components/home/CookiesConsent";
import Script from "next/script";

const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"],
});

const geistMono = Geist_Mono({
 variable: "--font-geist-mono",
 subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "RocketOps.ai - Automate. Save. Scale.",
 description: "RocketOps",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <Script
     src="https://www.googletagmanager.com/gtag/js?id=G-7EY4JE9TQN"
     strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
     {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7EY4JE9TQN');
          `}
    </Script>
    <CookiesConsent />
    {children}
   </body>
  </html>
 );
}
