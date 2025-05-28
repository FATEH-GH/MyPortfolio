"use client";

import Image from "next/image";
import { DivMotion } from "./FramerMotion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import HeroGeometric from "./ui/ShapesHero";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="Aboutme"
      className="font-montserrat text-white max-w-7xl mx-auto"
    >
      <DivMotion
        className="flex items-center justify-center mx-8"
        initial={{ opacity: 0, x: -30 }}
        transition={{ duration: 1 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
      >
        <div className="my-10  w-full ">
          <h3 className=" flex text-black dark:text-[#ADB7BE] transition duration-300 justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            About Me
          </h3>
          <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300  max-w-[100px] flex justify-center m-auto mb-6 sm:mb-12" />

          <div
            className="flex flex-col gap-8 lg:flex-row justify-between items-center"
            ref={ref}
          >
            <HeroGeometric />
            <p className="text-black dark:text-[#ADB7BE] transiton duration-300 font-extrabold  px-2 sm:text-lg mb-6 lg:text-xl  lg:max-w-[600px] leading-7 z-10">
              Hi, my name is fateh and I am a Software Engineer and a Front-End
              Developer from Algeria. I am excited about creating stunning
              websites, my expertise lies in translating desings into fully
              functional websites while utilizing my developement skills to
              enhance and customize their features. My end goal is to craft
              visually appealing user-friendly websites that provide a seamless
              browsing experience.
            </p>
          </div>
        </div>
      </DivMotion>
      <DivMotion
        className="flex items-center justify-center mx-8"
        initial={{ opacity: 0, x: 30 }}
        transition={{ duration: 1 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
      >
        <div className=" my-10 w-full">
          <h3 className="flex text-black dark:text-[#ADB7BE]  transition duration-300 justify-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Get to know me
          </h3>
          <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300 max-w-[100px] flex justify-center m-auto mb-6 sm:mb-12 " />
          <div className="flex flex-col gap-8 lg:flex-row justify-between items-center">
            <p className="text-black dark:text-[#ADB7BE] transiton duration-300 font-bold px-2 sm:text-lg mb-6 lg:text-xl lg:max-w-[800px] leading-7">
              I&apos;m a Frontend Web Developer building the Front-end of
              Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the Projects
              section.
              <br />
              I&apos;m open to Job opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don&apos;t hesitate to contact me.
            </p>
            <Image
              src="/dog.svg"
              alt="just an image"
              width={400}
              height={500}
            />
          </div>
        </div>
      </DivMotion>
    </section>
  );
};

export default About;
