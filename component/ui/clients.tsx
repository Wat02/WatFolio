import React from "react";
import kliker from "@/public/kliker beli.png";
import Image from "next/image";
import Link from "next/link";

function clients() {
  return (
    <div className="col-span-12 md:col-span-12 text-center justify-center mx-auto pt-[6rem]">
      <h4 className="text-start pb-[2rem] text-[0.9rem] leading-[1.1em] font-medium">
        Client
      </h4>
      <div>
        <Link href="https://kliker.group/" target="blank">
          <Image src={kliker} alt="KlikerGropu logo" width={200} height={200} />
        </Link>
      </div>
    </div>
  );
}

export default clients;
