import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { TracingBeam } from "@/components/ui/TracingBeam";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <TracingBeam className="max-w-[1500px] mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </TracingBeam>
    </main>
  );
}
