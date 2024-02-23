import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import EmailSection from "@/components/EmailSection";
import Skills from "@/components/Skills";
import { TracingBeam } from "@/components/ui/TracingBeam";

export default function Home() {
  return (
    <main>
      <TracingBeam>
        <div className=" mx-auto antialiased pt-4 relatived">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <EmailSection />
        </div>
      </TracingBeam>
    </main>
  );
}
