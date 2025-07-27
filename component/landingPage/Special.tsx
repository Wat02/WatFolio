"use client";

import Image from "next/image";
import React from "react";
import Client from "@/component/ui/clients";
import Art from "@/public/art.jpg";
import { motion, Variants } from "framer-motion";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Special() {
  return (
    <section className="bg-[#000000] text-white pt-[3rem]">
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <motion.div
            className="col-span-12 md:col-span-12 pb-[5rem]"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-[1.1rem] md:text-[2.3rem] leading-[1.3em] font-bold mr-[1rem] ml-[1rem]">
              <span className="mr-[1rem] md:mr-[10rem] tracking-[0.8] text-[1rem] md:text-[0.7rem] uppercase leading-[1.3em]">
                We turn your vision into reality
              </span>
              At Watfolio, I bring your ideas to life with clean, innovative,
              and animated designs—crafting digital experiences that go beyond
              visuals to truly engage and inspire.
            </p>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-5 ml-[1rem]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.p
              className="text-[1rem] uppercase font-bold underline underline-offset-8 pb-[2rem]"
              variants={fadeUpItem}
            >
              Core values{" "}
            </motion.p>

            {[
              "1. Creative Energy in Every Pixel",
              "2. Building Bold, Impactful Brands",
              "3. Flawless Flow, Seamless Interaction",
              "4. Vision Beyond the Surface",
              "5. Limit-Pushing Innovation",
            ].map((item, i) => (
              <motion.h4
                key={i}
                className="text-[0.9rem] underline underline-offset-8 pb-[0.8rem] font-semibold leading-[1.1em]"
                variants={fadeUpItem}
              >
                {item}
              </motion.h4>
            ))}
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src={Art}
                width={800}
                height={800}
                alt="passion"
                className="rounded-[1rem] pr-[1rem] pl-[1rem] mt-[1rem] mb-[1rem]"
              />
            </motion.div>

            <motion.h4
              className="text-[1.5rem] md:text-[2.3rem] pt-[2rem] leading-[1.3em] font-bold w-[89%] ml-[1rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              Driven by a passion for abstract art and striking visuals, I blend
              design and code to create dynamic.
            </motion.h4>
          </motion.div>

          <div className="col-span-12 md:col-span-12 text-center justify-center mx-auto pt-[0] md:pt-[2rem]">
            <Client />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Special;
