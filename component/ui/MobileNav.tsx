"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Example } from "@/component/ui/Example";

import Contactform from "@/component/Contact/contactForm";

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const liquidVariants: Variants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  exit: { scaleY: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

export default function LiquidSideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {!isOpen && (
        <button
          aria-label="Open Menu"
          className="text-white z-50"
          onClick={() => setIsOpen(true)}
        >
          <Example />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white origin-top scale-y-0"
              variants={liquidVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />

            <div className="text-start justify-start mx-auto pl-[5%]">
              <button
                aria-label="Close Menu"
                className="absolute top-6 right-6 text-white text-3xl"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
              <div className="pt-[5rem] flex flex-col">
                <Link
                  href="/"
                  className="text-[1.5rem] md:text-[2.5rem] font-medium leading-[1.6em] text-start pb-[1.5rem] md:pb-[0] uppercase"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-[1.5rem] md:text-[2.5rem] font-medium leading-[1.6em] text-start pb-[1.5rem] md:pb-[0] uppercase"
                >
                  About
                </Link>
                <Link
                  href="/project"
                  className="text-[1.5rem] md:text-[2.5rem] font-medium leading-[1.6em] text-start pb-[1.5rem] md:pb-[0] uppercase"
                >
                  Projects
                </Link>
                <h3 className="text-[1.5rem] md:text-[2.5rem] font-medium leading-[1.6em] text-start pb-[1.5rem] md:pb-[0] uppercase">
                  <Contactform />
                </h3>

                <div className="pt-[1rem] text-start justify-start">
                  <h4 className="text-[1rem] font-normal leading-[1.6em] pt-[3rem] uppercase">
                    Say Hello
                  </h4>
                  <p className="text-[0.9rem] md:text-[1.4rem] font-medium leading-[1.6em] pt-[1rem]">
                    Based in Niš, Serbia,
                  </p>
                  <p className="text-[0.9rem] md:text-[1.4rem] font-medium leading-[1.6em] ">
                    jovanjeremic7@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
