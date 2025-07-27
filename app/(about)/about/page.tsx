import CoreValues from "@/component/about/About";
import HeroSection from "@/component/about/herosection";
import React from "react";

function about() {
  return (
    <section>
      <div>
        <HeroSection />
        <CoreValues />
      </div>
    </section>
  );
}

export default about;