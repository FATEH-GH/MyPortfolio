"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [onHover, setOnHover] = useState(false);
  const ImageMotion = motion(Image);
  const LinkMotion = motion(Link);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setOnHover(true);
    }
  }, [inView]);

  const variants = {
    open: {
      rotate: 30,
      x: 0,
      y: 0,
      transition: { duration: 1 },
    },
  };
  const variants2 = {
    open: {
      rotate: -30,
      x: 0,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <section
      className=" text-white my-20  flex flex-col items-center justify-center"
      id="Projects"
    >
      <div>
        <div>
          <h3 className="text-black font-montserrat dark:text-[#ADB7BE] transition duration-300 flex justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Projects
          </h3>
          <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300  max-w-[100px] flex justify-center m-auto mb-6 sm:mb-12" />
        </div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
