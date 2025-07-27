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
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title:
    "Watfolio – Next.js Developer Portfolio | Bold, Animated Web Experiences",
  description:
    "Watfolio is the digital home of Jovan, a creative developer based in Niš, Serbia. Specializing in animated, scalable web experiences using Next.js, TypeScript, Tailwind CSS, and Framer Motion to bring ideas to life.",
  keywords: [
    "Next.js Developer",
    "Creative Front-End Developer",
    "Animated Websites",
    "Tailwind CSS",
    "TypeScript",
    "Framer Motion",
    "Interactive UI",
    "Personal Portfolio",
    "Web Design Niš",
    "Watfolio",
  ],
  openGraph: {
    title: "Watfolio – Next.js Developer Portfolio",
    description:
      "Explore Watfolio: A creative developer's portfolio built with Next.js, Tailwind, and Framer Motion. Smooth animations. Scalable design. Global impact.",
    url: "https://www.watfolio.dev/",
    siteName: "Watfolio",
    images: [
      {
        url: "https://www.watfolio.dev/og-image.jpg",
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
    title: "Watfolio – Next.js Developer Portfolio",
    description:
      "Scalable, animated web experiences crafted with Next.js, Framer Motion & Tailwind. Built to inspire and convert.",
    images: ["https://www.watfolio.dev/og-image.jpg"],
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
