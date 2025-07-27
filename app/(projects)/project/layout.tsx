import React from "react";
import Pricing from "./page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Project – Creative Next.js Developer | Animated & Scalable Web Experiences",
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
};

function layout() {
  return (
    <section>
      <div>
        <Pricing />
      </div>
    </section>
  );
}

export default layout;
