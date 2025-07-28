"use client";

import React from "react";
import ProjectCard from "@/component/landingPage/projectcomp";
import Tetaflow from "@/public/tetaflow.png";
import Design from "@/public/design.png";
import Homedecor from "@/public/homeDecor.png";
import Doctor from "@/public/banking.png";
import Brainwave from "@/public/Brainwave.png";
import Agency from "@/public/Agency.png";

function Project() {
  const projects = [
    {
      image: Tetaflow,
      headline: "Inspire with motion",
      highlight: "Designs brought to life with code and creativity",
      description: "TetaFlow Agency — Designed and Developed",
      codeLink: "https://github.com/Wat02/TetraFlow2",
      liveLink: "https://www.tetraflow.dev/",
      colSpan: "md:col-span-7",
    },
    {
      image: Design,
      headline: "Build with purpose",
      highlight: "Digital experiences crafted for bold, visionary brands",
      description: "Design Showcase — Concept and UI",
      codeLink: "https://github.com/Wat02/Interior-Design2",
      liveLink: "https://interior-design2-sigma.vercel.app/",
      colSpan: "md:col-span-5",
    },
    {
      image: Doctor,
      headline: "Stand out online",
      highlight: "Custom web design for creators who lead, not follow",
      description: "Horizon - Full banking app",
      codeLink: "https://github.com/Wat02/Horizon",
      liveLink: "https://horizon-five-theta.vercel.app/",
      colSpan: "md:col-span-5",
    },
    {
      image: Homedecor,
      headline: "Code that feels",
      highlight: "Interfaces designed to move, connect, and convert",
      description: "HomeDecor — Ecommerce Design",
      codeLink: "https://github.com/Wat02/HomeDecor",
      liveLink: "https://home-decor-psi.vercel.app/",
      colSpan: "md:col-span-7",
    },
    {
      image: Agency,
      headline: "Design beyond trends",
      highlight: "Timeless, scalable, and beautifully performant",
      description: "Creative Agency — Branding Project",
      codeLink: "https://github.com/Wat02/TetraFlow",
      liveLink: "https://tetra-flow.vercel.app/",
      colSpan: "md:col-span-7",
    },
    {
      image: Brainwave,
      headline: "Shape digital stories",
      highlight: "Interactive experiences made for impact and emotion",
      description: "Brainwave — UI & Landing Design",
      codeLink: "https://github.com/Wat02/Brainwave",
      liveLink: "https://brainwave-teal-eight.vercel.app/",
      colSpan: "md:col-span-5",
    },
  ];

  return (
    <div className="bg-[#000000] text-white pt-[3rem] md:pt-[7rem]">
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`col-span-12 ${project.colSpan} ${
                index > 1 ? "pt-[3rem]" : ""
              } ${index % 2 === 0 ? "mr-[0.5rem] ml-[1rem]" : "mr-[1rem]"}`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center pt-[3%]">
        <div className="w-[95%] border-t-2 border-[#333333]" />
      </div>
    </div>
  );
}

export default Project;
