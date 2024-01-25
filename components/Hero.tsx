"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { DivMotion } from "./FramerMotion";

const Hero = () => {
  return (
    <section className="lg:py-4 flex flex-col gap-10 lg:flex-row lg:justify-evenly min-h-screen my-10 ">
      <DivMotion
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className=" mx-auto lg:pt-14"
      >
        <h1 className="ml-4 text-black dark:text-white transiton duration-300 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
          <span className=" bg-clip-text text-black dark:text-white transiton duration-300">
            Hello, I&apos;m{" "}
          </span>
          <br></br>
          <TypeAnimation
            sequence={[
              1500,
              "Fateh",
              2000,
              "Web Developer",
              2000,
              "Frontend Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="relative z-0"
          />
        </h1>
        <p className="ml-4 text-black dark:text-[#ADB7BE] transiton duration-300 font-bold px-2 sm:text-lg mb-6 lg:text-xl max-w-2xl">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row items-center  xl:mt-12">
          <Link
            href="#contact"
            className="rounded-full bg-slate-700 hover:bg-slate-500 text-white mx-4 px-8 p-2 font-bold "
          >
            Hire Me
          </Link>
          <Link
            target="_blank"
            href="/GHRIBI Fateh Abdennour.pdf"
            className="rounded-full bg-slate-700 hover:bg-slate-500 text-white mx-4 p-2 font-bold "
          >
            Download CV
          </Link>
        </div>
      </DivMotion>
      <DivMotion
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="flex items-start justify-start mx-auto"
      >
        <Image
          src="/Hero.png"
          alt="hero image"
          className="z-10"
          width={500}
          height={500}
        />
      </DivMotion>
    </section>
  );
};

export default Hero;
