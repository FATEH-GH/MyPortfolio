import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <EmailSection />
      <Footer />
    </main>
  );
}
