"use client";

import React from "react";
import Client from "@/component/ui/clients";
import { motion, Variants } from "framer-motion";

const fadeSlideVariant: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const popVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Values() {
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-4 pt-[5rem] md:pt-[0]">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-12 flex items-end justify-end space-x-6">
            <motion.h4
              className="text-[1.rem] md:text-[2.5rem] leading-[1.1em] md:leading-[2.5em] font-semibold uppercase"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeSlideVariant}
            >
              Core values
            </motion.h4>
            <motion.h4
              className="text-[5rem] md:text-[30rem] leading-[0.8em] font-bold text-[#eaeaea] ml-[9rem]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={popVariant}
            >
              5
            </motion.h4>
          </div>
        </div>

        <div className="flex items-center justify-center pl-[0] md:pl-[36%] pt-[1rem]">
          <div className="w-[100%] border-t-2 border-[#333333]" />
        </div>

        <div className="grid grid-cols-12 gap-1">
          {[
            "1. Every detail pulses with passion and originality, turning abstract art into vibrant, animated web experiences that truly stand out.",
            "2. I help startups and visionaries craft memorable digital identities that not only look stunning but connect deeply with their audience.",
            "3. Design and code come together effortlessly to create intuitive, smooth user journeys that engage and convert without friction.",
            "4. More than aesthetics, I focus on meaningful design that reflects your brands purpose and speaks to your audiences soul.",
            "5. Using cutting-edge tools like Next.js, Framer Motion, and Python/Django, I constantly push boundaries to deliver forward-thinking digital products.",
          ].map((text, i) => {
            const isLast = i === 4;
            return (
              <motion.div
                key={i}
                className="col-span-12 md:col-span-12 flex items-end justify-end mx-auto pt-[1.5rem]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={isLast ? popVariant : fadeSlideVariant}
              >
                <h4
                  className={`${
                    isLast
                      ? "md:w-[44%] w-full"
                      : i === 0
                      ? "md:w-[64%] w-full"
                      : i === 1
                      ? "md:w-[44%] w-full"
                      : "md:w-[58%] w-full"
                  } text-[1.5rem] md:text-[2rem] leading-[1.1em] font-semibold`}
                >
                  {text}
                </h4>
              </motion.div>
            );
          })}
          <div className="col-span-12 md:col-span-12 pt-[2rem]">
            <Client />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
