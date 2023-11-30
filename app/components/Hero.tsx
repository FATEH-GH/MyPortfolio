"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:py-4 flex flex-col gap-10 lg:flex-row lg:justify-evenly lg:mb-52 ">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className=" text-center lg:pt-14"
      >
        <h1 className="text-black dark:text-white transiton duration-300 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
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
        <p className="text-black dark:text-[#ADB7BE] transiton duration-300 font-bold px-2 sm:text-lg mb-6 lg:text-xl">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-center xl:mt-24">
          <Link
            href="#contact"
            className="rounded-full bg-slate-700 hover:bg-slate-500 text-white mx-4 px-8 p-2 font-bold "
          >
            Hire Me
          </Link>
          <Link
            target="_blank"
            href="/dummy.pdf"
            className="rounded-full bg-slate-700 hover:bg-slate-500 text-white mx-4 p-2 font-bold "
          >
            Download CV
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="flex items-center justify-center mx-auto"
      >
        <Image
          src="/Hero.png"
          alt="hero image"
          className="pt-4"
          width={800}
          height={800}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
