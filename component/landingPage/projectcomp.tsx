"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  image: StaticImageData | string;
  headline: string;
  highlight: string;
  description: string;
  codeLink: string;
  liveLink: string;
}

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const linkVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  headline,
  highlight,
  description,
  codeLink,
  liveLink,
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image}
            alt="Project Image"
            className="w-full h-full object-cover pr-[1rem] pl-[1rem] md:pr-[0rem] md:pl-[0rem]"
            priority={true}
          />
        </motion.div>

        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-[2rem] font-bold text-center uppercase w-[75%] leading-[1.1em]">
            {headline}
            <span className="text-[#E9B63A] font-black"> {highlight}</span>
          </p>
        </div>
      </div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-row pt-[1rem]"
      >
        <div className="flex flex-col">
          <p className="mr-[1rem] md:mr-[0] ml-[1rem] text-[1.2rem] leading-[1.1em] font-medium">
            {description}
          </p>
          <div className="flex flex-row gap-3 pt-[1rem] uppercase font-bold target-black pb-[1rem] ml-[1rem] md:ml-[0rem]">
            <motion.div
              custom={0}
              variants={linkVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <Link href={codeLink} target="_blank" rel="noopener noreferrer">
                Code
              </Link>
            </motion.div>

            <motion.div
              custom={1}
              variants={linkVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                Live
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="ml-auto">{/* <OpenSec /> */}</div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
