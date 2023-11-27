"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
      transition: { duration: 0.75 },
    },
  };
  const variants2 = {
    open: {
      rotate: -30,
      x: 0,
      y: 0,
      transition: { duration: 0.75 },
    },
  };

  return (
    <section
      className="font-montserrat text-white my-16 h-screen flex items-center justify-center"
      id="Projects"
    >
      <div>
        <div>
          <h3 className="flex justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Projects
          </h3>
          <div className="mt-1 h-1 bg-white max-w-[100px] flex justify-center m-auto mb-6 sm:mb-12" />
        </div>
        <motion.div
          className=" flex flex-col lg:flex-row gap-10 mx-auto "
          ref={ref}
        >
          <LinkMotion
            href="/"
            className="flex relative rounded-3xl border-4 border-blue-100 overflow-hidden hover:border-blue-300 "
            onHoverStart={() => setOnHover(true)}
            onHoverEnd={() => setOnHover(false)}
          >
            <ImageMotion
              src="/bg-project-2.png"
              alt="project image"
              height={600}
              width={600}
            />

            <ImageMotion
              src="/project-2-2.png"
              alt="project image"
              height={100}
              width={100}
              className="absolute z-10 left-0 top-10 shadow-2xl rounded-2xl"
              initial={{ rotate: 0, x: -200, y: 100 }}
              variants={variants}
              animate={onHover ? "open" : "closed"}
            />
            <ImageMotion
              src="/project-2-1.png"
              alt="project image"
              height={100}
              width={100}
              className="absolute z-10 right-0 top-10 shadow-2xl rounded-2xl"
              initial={{ rotate: 0, x: 200, y: -100 }}
              variants={variants2}
              animate={onHover ? "open" : ""}
            />
          </LinkMotion>
          <LinkMotion
            href="/"
            className="flex relative rounded-3xl border-4 border-blue-100 overflow-hidden hover:border-blue-300 "
            onHoverStart={() => setOnHover(true)}
            onHoverEnd={() => setOnHover(false)}
          >
            <ImageMotion
              src="/bg-project-1.png"
              alt="project image"
              height={600}
              width={600}
            />

            <ImageMotion
              src="/project-1-2.png"
              alt="project image"
              height={100}
              width={100}
              className="absolute z-10 left-0 top-10 shadow-2xl rounded-2xl"
              initial={{ rotate: 0, x: -200, y: 100 }}
              variants={variants}
              animate={onHover ? "open" : ""}
            />
            <ImageMotion
              src="/project-1-1.png"
              alt="project image"
              height={100}
              width={100}
              className="absolute z-10 right-0 top-10 shadow-2xl rounded-2xl"
              initial={{ rotate: 0, x: 200, y: -100 }}
              variants={variants2}
              animate={onHover ? "open" : "closed"}
            />
          </LinkMotion>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
