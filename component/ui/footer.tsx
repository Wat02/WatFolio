import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-[5rem] relative z-10">
      <div className="mx-auto px-6 md:px-16">
        <div className="flex flex-col items-end text-right md:mr-[5rem]">
          <h3 className="pb-[1rem] text-[1rem] leading-[1.1em] font-bold">
            Socials
          </h3>
          <Link
            className="text-[3.2rem] font-semibold leading-[1.3em]"
            href="http://linkedin.com/in/jovan-jeremic-1252b3286"
            target="blank"
          >
            LinkedIn
          </Link>
          <Link
            className="text-[3.2rem] font-semibold leading-[1.3em]"
            href="https://github.com/Wat02?tab=overview&from=2025-07-01&to=2025-07-27"
            target="blank"
          >
            GitHub
          </Link>
        </div>
      </div>
      <div className="w-full pt-[2rem]">
        <h1 className="text-[18vw] md:text-[15vw] font-bold tracking-tight uppercase text-white text-center whitespace-nowrap opacity-10 pointer-events-none">
          Watfolio
        </h1>
      </div>
      <div className="w-full border-t border-[#333] px-6 md:px-[1rem] py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white">© Watfolio. All rights reserved.</p>

          <p className="text-white text-center">
            Design by Jovan Jeremic & TetraFlow Studio
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
