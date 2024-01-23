import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import EmailSection from "@/components/EmailSection";
import DStar from "@/components/DStar";

export default function Home() {
  return (
    <main>
      <Hero />
      <DStar />
      <About />
      <Projects />
      <EmailSection />
    </main>
  );
}
