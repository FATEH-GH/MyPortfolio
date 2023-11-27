import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main
      className="
    scroll-smooth"
    >
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
