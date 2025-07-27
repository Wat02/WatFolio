import React from "react";
import TImeline from "@/component/projects/timeline";

function hero() {
  return (
    <section className="bg-[#000000] text-white pt-[1rem]">
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <TImeline />
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;