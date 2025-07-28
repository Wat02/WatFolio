"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/component/components/ui/sheet";
import clsx from "clsx";
import Link from "next/link";

function ContactForm() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollTop = scrollRef.current.scrollTop;
        setIsScrolled(scrollTop > 10);
      }
    };

    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll);

    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <Sheet>
              <SheetTrigger className="text-[1.5rem] uppercase md:capitalize md:text-[0.9rem] leading-[1.1em] font-medium md:font-bold text-white">
                Contact
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className={clsx(
                  "transition-all duration-300 max-w-full overflow-hidden w-full md:w-[70%] ",
                  isScrolled ? "h-screen" : "h-[70vh]"
                )}
              >
                <div ref={scrollRef} className="h-full overflow-y-auto pr-2 ">
                  <SheetHeader>
                    <SheetTitle className="text-[1.5rem] md:text-[3rem] w-full md:w-[70%] leading-[1.1em] mt-[2rem] font-bold">
                      Watfolio — Launch Your Digital Presence
                    </SheetTitle>
                    <p className="text-[1rem] mt-[0.5rem] font-medium">
                      Niš, Serbia
                    </p>
                    <div>
                      <div className="flex items-center justify-start pt-[3%]">
                        <div className="w-[5%] border-t-2 border-[#333333]" />
                      </div>
                      <p className="text-[1rem] font-medium mt-2 ">
                        {dateTime}
                      </p>
                    </div>
                  </SheetHeader>

                  <div className="flex flex-row mt-6  space-y-4 ml-[1rem] pt-[1rem] md:pt-[6rem]">
                    <div>
                      <p className="w-full md:w-[50%] text-[1rem] md:text-[1.3rem] leading-[1.1em] font-semibold">
                        Bringing visions to life with clean, animated, and
                        innovative web design—crafted to not just look good, but
                        to feel right, engage deeply, and leave a lasting
                        impression.
                      </p>
                    </div>
                  </div>
                  <div className="pt-[8rem] text-center">
                    <h4 className="text-[1rem] leading-[1.1em] font-medium uppercase">
                      mail to
                    </h4>
                    <p className="text-[1.5rem] leading-[1.1em] mt-[1rem] font-bold underline underline-offset-8">
                      jovanjeremic7@gmail.com
                    </p>
                  </div>

                  <div className="mx-auto pt-[5rem] pr-[1rems] ml-[1rem] pb-[3rem]">
                    <div className="flex flex-col items-start text-right md:ml-[1rem]">
                      <h3 className="pb-[1rem] text-[1rem] leading-[1.1em] font-bold  ">
                        Socials
                      </h3>
                      <Link
                        className="text-[2rem] font-semibold leading-[1.3em]"
                        href="http://linkedin.com/in/jovan-jeremic-1252b3286"
                      >
                        LinkedIn
                      </Link>
                      <Link
                        className="text-[2rem] font-semibold leading-[1.3em]"
                        href="https://github.com/Wat02?tab=overview&from=2025-07-01&to=2025-07-27"
                      >
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
