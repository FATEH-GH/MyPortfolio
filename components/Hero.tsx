"use client";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { DivMotion } from "./FramerMotion";
import { BoxReveal } from "./ui/BoxReveal";

const Hero = () => {
  return (
    <section className="h-screen lg:py-4 flex flex-col justify-center items-center z-10  ">
      <DivMotion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" mx-auto lg:pt-14"
      >
        <BoxReveal duration={0.5} boxColor="#f0be6d">
          <h1 className="ml-4 text-[#f0be6d] transiton mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold ">
            <span className=" bg-clip-text text-black dark:text-white">
              Hello👋, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                1500,
                "Fateh",
                2000,
                "Software Engenieer",
                2000,
                "Web Developer",
                2000,
                "Front-End Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="relative z-0"
            />
          </h1>
        </BoxReveal>
        <BoxReveal duration={0.5} boxColor="#f0be6d">
          <p className="ml-4 text-black dark:text-[#ADB7BE] transiton font-bold px-2 sm:text-lg mb-6 lg:text-xl max-w-2xl">
            A focused Frontend Web Developer building the Frontend of Websites
            and Web Applications that lead to the success of the overall
            product.
          </p>
        </BoxReveal>
        <BoxReveal
          duration={0.5}
          boxColor="#f0be6d"
          className="flex flex-col gap-4 sm:flex-row items-center justify-center  xl:mt-12  h-12"
        >
          <Link
            target="_blank"
            href="/GHRIBI Fateh Abdennour.pdf"
            className="rounded-xl bg-[#f0be6d] hover:bg-[#e9b157] text-black dark:text-white mx-4 p-2 font-bold"
          >
            Download CV
          </Link>
        </BoxReveal>
      </DivMotion>
    </section>
  );
};

export default Hero;
