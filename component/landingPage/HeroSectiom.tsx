"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const charVariant: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.95, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const lineVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const containerVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

function HeroSection() {
  const title = "Watfolio";

  return (
    <section className="bg-[#000000] text-white pt-[1rem] overflow-hidden">
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <motion.div
            className="col-span-12 md:col-span-12 flex flex-wrap"
            variants={containerVariant}
            initial="hidden"
            animate="show"
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={charVariant}
                className="text-[4rem] md:text-[20rem] font-semibold leading-[1.1em]"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-12"
            variants={lineVariant}
            custom={0}
            initial="hidden"
            animate="show"
          >
            <p className="text-[1.1rem] md:text-[2.1rem] w-[95%] md:w-full leading-[1.6em] font-bold tracking-normal md:tracking-[0.9] mr-[1rem] ml-[1rem]">
              <motion.span
                variants={lineVariant}
                custom={1}
                className="mr-[1rem] md:mr-[26rem] text-[1rem] md:text-[1.2rem] tracking-[0.8] uppercase leading-[1.6em] underline underline-offset-8 underline-[#808080]"
              >
                Digital place
              </motion.span>
              <motion.span variants={lineVariant} custom={2}>
                Bringing visions to life with clean, animated, and innovative
                web design—crafted to not just look good, but to feel right,
                engage deeply, and leave a lasting impression.
              </motion.span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
