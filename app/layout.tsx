// app/layout.tsx

import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/ui/NavBar";
import Footer from "@/component/ui/footer";
import { ReactNode } from "react";
import { Metadata } from "next";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--IBM",
});

export const metadata: Metadata = {
  title:
    "Watfolio – Creative Next.js Developer | Animated & Scalable Web Experiences",
  description:
    "Watfolio by Jovan is a Niš-based Next.js developer crafting bold, animated, and high-performing web solutions using Next.js, TypeScript, Tailwind, and Framer Motion. Bringing visionary brands to life globally with seamless design and code.",
  keywords: [
    "Next.js Developer",
    "Front-End Developer",
    "Next.js Portfolio",
    "Animated Web Design",
    "Tailwind CSS",
    "TypeScript Developer",
    "Framer Motion",
    "Webflow Designer",
    "Creative Web Development",
    "Global Web Developer",
  ],
  openGraph: {
    title: "Watfolio – Creative Next.js Developer & Designer",
    description:
      "Crafting scalable, animated web experiences with Next.js, Tailwind, and Framer Motion. Building seamless digital products that inspire and convert.",
    url: "https://your-portfolio-url.com/",
    siteName: "Watfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Watfolio – Next.js Developer Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watfolio – Creative Next.js Developer & Designer",
    description:
      "Next.js powered animated and scalable web experiences built to elevate your brand and engage users worldwide.",
    images: ["https://your-portfolio-url.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
