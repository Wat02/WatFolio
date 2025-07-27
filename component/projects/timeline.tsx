"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Agency from "@/public/Agency.png";
import Tetraflow from "@/public/tetaflow.png";
import klikergroup from "@/public/klikergroup.png";
import Horzion from "@/public/banking.png";
import brainwave from "@/public/Brainwave.png";
import Homedecor from "@/public/homeDecor.png";
import inter from "@/public/design.png";
import doctor from "@/public/DoctorProject2.png";
import finance from "@/public/finance.png";
import digital from "@/public/digitalmarketing.png";
import gradient from "@/public/gradient.png";
import juice from "@/public/juice.png";
import marketing from "@/public/marketing.png";
import Digital from "@/public/digital2.png";

type Project = {
  Image: string | StaticImageData;
  link: string;
  description: string;
  hoverText: string;
};

type TimelineItem = {
  year: number;
  content: string;
  projects: Project[];
};

const timelineData: TimelineItem[] = [
  {
    year: 2025,
    content: "",
    projects: [
      {
        Image: Tetraflow,
        link: "https://www.tetraflow.dev/",
        description: "01: TetaFlow Agency — Designed and Developed",
        hoverText:
          "Designed & developed with Next.js, Tailwind CSS, TypeScript, framer-motion and shadcn/ui.",
      },
      {
        Image: klikergroup,
        link: "#",
        description:
          "KlikeGroup — Full backend optimization system (currently in development).",
        hoverText:
          "Designed & developed with Next.js, Tailwind CSS, TypeScript, framer-motion and shadcn/ui.",
      },
      {
        Image: Homedecor,
        link: "https://home-decor-psi.vercel.app/",
        description: "HomeDecor — Ecommerce Design",
        hoverText:
          "Designed & developed with Next.js, Tailwind CSS, TypeScript, framer-motion and shadcn/ui.",
      },
    ],
  },
  {
    year: 2024,
    content: "",
    projects: [
      {
        Image: Agency,
        link: "https://tetra-flow.vercel.app/",
        description: "01: Creative Agency — Branding Project",
        hoverText:
          "Designed & developed with Next.js, Tailwind CSS, TypeScript, and shadcn/ui.",
      },
      {
        Image: Horzion,
        link: "https://horizon-five-theta.vercel.app/",
        description: "01: Horizon - full banking system",
        hoverText:
          "Designed & developed with Next.js, Tailwind CSS, TypeScript, and shadcn/ui.",
      },
      {
        Image: brainwave,
        link: "https://brainwave-teal-eight.vercel.app/",
        description: "Brainwave — UI & Landing Design",
        hoverText:
          "Designed & developed with Next.js, Tailwind CSS, TypeScript, and shadcn/ui.",
      },
      {
        Image: inter,
        link: "https://interior-design2-sigma.vercel.app/",
        description: "Design Showcase — Concept and UI",
        hoverText:
          "Designed & developed with Next.js, Tailwind CSS, TypeScript, and shadcn/ui.",
      },
      {
        Image: doctor,
        link: "https://doctor-sigma.vercel.app/",
        description: "Full doctor design system with form",
        hoverText:
          "Designed & developed with Next.js, Tailwind CSS, TypeScript, and shadcn/ui.",
      },
      {
        Image: marketing,
        link: "https://agency-one-theta.vercel.app/",
        description: "Marketing agency with modern design",
        hoverText: "Designed & developed with React, Tailwind CSS, Javascript",
      },
    ],
  },
  {
    year: 2023,
    content: "",
    projects: [
      {
        Image: finance,
        link: "https://wat02.github.io/Finance-website/",
        description: "Finance Website — Concept, UI design, and animation ",
        hoverText:
          "Built with HTML, CSS, and Bootstrap, with animations powered by AOS.",
      },
      {
        Image: digital,
        link: "https://wat02.github.io/Digital-marketing-agency-website-2/",
        description: "Digital Marketing Agency — Responsive UI built ",
        hoverText:
          "Built with HTML, CSS, and Bootstrap, with animations powered by AOS.",
      },
      {
        Image: gradient,
        link: "https://wat02.github.io/Baking-website/",
        description: "Baking Website — A modern, responsive design built ",
        hoverText:
          "Built with HTML, CSS, and Bootstrap, with animations powered by AOS.",
      },
      {
        Image: juice,
        link: "https://wat02.github.io/Juice-website/",
        description: "Juice Website — A modern, responsive design built",
        hoverText:
          "Built with HTML, CSS, and Bootstrap, with animations powered by AOS.",
      },
      {
        Image: Digital,
        link: "https://wat02.github.io/Digital-marketing-agency-website/",
        description: "Digital marketing agency",
        hoverText:
          "Built with HTML, CSS, and Bootstrap, with animations powered by AOS.",
      },
    ],
  },
];

export default function Timeline() {
  const [activeYear, setActiveYear] = useState(timelineData[0].year);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveYear(timelineData[index].year);
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && refs.current[index])
          observer.unobserve(refs.current[index]!);
      });
    };
  }, []);

  return (
    <div className="flex w-full bg-black text-white">
      <div className="w-1/4 hidden md:flex flex-col items-start ml-[1rem] sticky top-0 h-screen pt-[15%] z-10">
        <div className="flex flex-col gap-10">
          {timelineData.map((item, i) => (
            <Link key={item.year} href={`#year-${item.year}`}>
              <div className="flex items-center gap-3 group">
                <div
                  className={clsx(
                    "h-4 w-4 rounded-full border-2 transition-colors duration-300",
                    item.year === activeYear
                      ? "border-white bg-white"
                      : "border-gray-500 bg-transparent"
                  )}
                />
                <span
                  className={clsx(
                    "text-[2rem] font-bold transition-colors duration-300",
                    item.year === activeYear ? "text-white" : "text-[#7C7C7C]"
                  )}
                >
                  {item.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full md:w-3/4 px-6 space-y-32 py-12 scroll-smooth">
        {timelineData.map((item, index) => (
          <section
            key={item.year}
            id={`year-${item.year}`}
            ref={(el: HTMLDivElement | null) => {
              refs.current[index] = el;
            }}
            className="scroll-mt-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-[4rem] font-bold leading-[1.1em] mb-4">
                {item.year}
              </h2>
              <p className="mb-6">{item.content}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {item.projects.map((project, i) => (
                  <Link
                    key={i}
                    href={project.link}
                    target="blank"
                    className="group rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                  >
                    <Image
                      src={project.Image}
                      alt={project.description}
                      width={159}
                      height={150}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <p className="font-semibold text-[0.9rem] leadin-[1.1em]">
                        {project.description}
                      </p>
                      <p className="text-white text-sm group-hover:opacity-100 opacity-0 transition-opacity duration-200">
                        {project.hoverText}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}
