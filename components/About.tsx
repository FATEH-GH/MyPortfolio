"use client";

import Image from "next/image";
import { DivMotion } from "./FramerMotion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import HeroGeometric from "./ui/ShapesHero";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Download } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="Aboutme"
      className=" text-white max-w-8xl mx-auto font-semibold"
    >
      <DivMotion
        className="flex items-center justify-center mx-8 "
        initial={{ opacity: 0, x: -30 }}
        transition={{ duration: 1 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
      >
        <div className="my-10 flex-col items-center justify-center w-full ">
          <Badge className="mx-auto flex items-center justify-center max-w-fit mb-6">
            About Me
          </Badge>

          <div
            className="flex flex-col gap-8 lg:flex-row justify-between items-center  px-2 sm:px-4"
            ref={ref}
          >
            <div className="">
              <h2 className=" mb-4 text-2xl sm:text-4xl lg:text-5xl font-bold ">
                Passionate about creating impactful web experiences
              </h2>
              <p className="text-black dark:text-[#ADB7BE] transiton duration-300  px-2 sm:text-lg mb-6 lg:text-xl  lg:max-w-[600px] leading-7 z-10">
                With over 2 years of experience in Frontend development, I
                specialize in building scalable web applications using modern
                technologies. My expertise includes React, Node.js, and cloud
                architecture. I&apos;m passionate about creating elegant
                solutions to complex problems and sharing knowledge with the
                developer community.
              </p>
              <Link
                target="_blank"
                href="/GHRIBI Fateh Abdennour.pdf"
                className=" flex gap-2 rounded-full bg-customColor hover:bg-customColorHover text-black dark:text-white mx-4 p-2 font-semibold w-fit"
              >
                <Download />
                Download CV
              </Link>
            </div>
            <HeroGeometric />
          </div>
        </div>
      </DivMotion>
    </section>
  );
};

export default About;
