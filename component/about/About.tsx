"use client";

import React from "react";
import Image from "next/image";
import Values from "@/component/about/value";
import { motion, Variants } from "framer-motion";
import Art from "@/public/ar2.jpg";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function CoreValues() {
  return (
    <section className="bg-black text-white pt-[3rem] md:pt-[7rem]">
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12 ml-[1rem] md:ml-[8rem]">
            <div className="flex flex-row">
              <motion.h4
                className="text-[2rem] md:text-[4rem] leading-[1.1em] font-semibold pt-[4.8rem] tracking-tight"
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Its art
              </motion.h4>
              <div>
                <Image
                  src={Art}
                  width={220}
                  height={220}
                  alt="tetaflow"
                  className="ml-[1rem] rounded-[1rem]"
                />
              </div>
            </div>

            <motion.h4
              className="text-[3rem] md:text-[4rem] leading-[1.1em] font-semibold tracking-tight"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              - in next.js.
            </motion.h4>

            <motion.p
              className="text-[1rem] leading-[1.6em] font-medium w-full md:w-[20%] ml-[1rem] md:ml-[7.3rem] pt-[1rem] hidden md:flex"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              We love pushing the limits of whats possible.
            </motion.p>

            <div className="col-span-12 md:col-span-12">
              <Values />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
