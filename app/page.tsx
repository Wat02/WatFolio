import HeroSectiom from "@/component/landingPage/HeroSectiom";
import Project from "@/component/landingPage/Project";
import Special from "@/component/landingPage/Special";

export default function Home() {
  return (
    <section>
      <div>
        <HeroSectiom />
        <Project />
        <Special />
      </div>
    </section>
  );
}