import React from "react";
import Contactform from "@/component/Contact/contactForm";
import Link from "next/link";
import MobileNav from "@/component/ui/MobileNav";

function Navbar() {
  return (
    <div className="bg-[#000000] text-white">
      <div className=" mx-auto">
        <div className="grid grid-cols-12 gap-1 ">
          <div className="col-span-6 md:col-span-4 pt-[1rem]">
            <p className="text-[0.9rem] ml-[1rem] font-semibold hidden md:flex">
              jovanjeremic7@gmail.com
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 justify-center text-center mx-auto pt-[1.1rem] hidden md:flex">
            <div className="flex flex-row gap-3">
              <Link
                className="text-[0.9rem] leading-[1.1em] font-bold uppercase  pt-[0.2rem]"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-[0.9rem] leading-[1.1em] font-medium text-[#808080] pt-[0.2rem]"
                href="/about"
              >
                About
              </Link>
              <Link className="text-[0.9rem] leading-[1.1em] font-medium text-[#808080]  pt-[0.2rem]"  href="/project"  >
                Projects
              </Link>
              <Contactform />
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 text-right  pt-[1rem] hidden md:block">
            <p className="text-[0.9rem] mr-[1rem] font-medium">
              Based in Niš, Serbia,
            </p>
          </div>
        </div>
      </div>
      <div className="justify-end mx-auto text-end">
        <MobileNav />
      </div>
    </div>
  );
}

export default Navbar;