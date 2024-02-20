import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import EmailSection from "@/components/EmailSection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <EmailSection />
    </main>
  );
}
