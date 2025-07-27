"use client";

import React from "react";
import Tetraflow from "@/public/avatar.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const popVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-1 pt-[3rem] md:pt-[8rem]">
          <div className="col-span-12 md:col-span-12 relative pt-[15.492vw]">
            <motion.h2
              className="absolute top-0 left-0 w-full text-[3rem] md:text-[8rem] leading-[0.95] tracking-[-0.4414vw]  z-30 pointer-events-none font-bold"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                "Hey, 👋🏼",
                "Im Jovan",
                "— Next. js Developer & Designer with a creative edge.",
              ].map((text, idx) => (
                <motion.span
                  key={idx}
                  className={`flex pl-[7.1892vw] ${
                    idx === 2
                      ? "text-[2rem] md:text-[4rem] w-full md:w-[70%]"
                      : ""
                  }`}
                  variants={popVariant}
                >
                  {text}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div
              className="relative mt-0 ml-auto w-full md:w-[56vw] pt-[5.5rem] aspect-[1.778/1] z-20"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={popVariant}>
                <Image
                  src={Tetraflow}
                  alt="tetraflow"
                  width={200}
                  height={200}
                  className=" object-cover hidden md:flex "
                  priority
                />
              </motion.div>

              <motion.div
                className="pt-[4rem] md:pt-[2rem] ml-[1rem]"
                variants={popVariant}
              >
                <h4 className="text-[0.8rem] md:text-[1rem] leading-[1.3em] font-medium w-[95%] uppercase">
                  about
                  <span className="ml-[2rem] text-[1.2rem] md:text-[1.8rem] leading-[1.3em] lowercase">
                    Im Jovan — the creative mind behind Watfolio, a Niš-based,
                    globally focused studio where abstract visuals meet clean
                    code. With 3+ years of experience, I craft bold, animated,
                    and seamless web experiences.
                  </span>
                </h4>
              </motion.div>

              <motion.div className="pt-[2rem]" variants={popVariant}>
                <p className=" text-[1.2rem] md:text-[1.5rem] leading-[1.3em] justify-end mx-auto w-[90%]">
                  Specialized in crafting bold, animated, and high-performing
                  digital experiences using Next.js, TypeScript, Tailwind CSS,
                  Framer Motion, Webflow, and Figma — blending front-end
                  development with thoughtful, modern design.
                </p>
              </motion.div>

              <motion.div
                className="pt-[3rem] md:pt-[5rem]"
                variants={popVariant}
              >
                <h4 className="text-[2rem] md:text-[2.5rem] w-full md:w-[55%] leading-[1.1em] ml-[1rem] md:ml-[13.5rem] font-bold">
                  "Driven by a passion for abstract art and{" "}
                  <span className="uppercase text-[#7c7c7c] ">clean code</span>
                  ".
                </h4>
                <div className="hidden md:flex items-center justify-center pt-[3%] ">
                  <div className="w-[48%] border-t-2 border-[#333333]" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
