import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ProjectCard = () => {
  const [onView, setOnView] = useState(false);

  const ImageMotion = motion(Image);
  const LinkMotion = motion(Link);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setOnView(true);
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
    <motion.div
      className=" flex flex-col lg:flex-row gap-10 sm:gap-20 mx-auto my-20 "
      ref={ref}
    >
      <div className="flex flex-col gap-10">
        <div className="flex relative rounded-3xl border-4 border-blue-100 overflow-hidden hover:border-blue-300 ">
          <ImageMotion
            src="/bg-project-1.png"
            alt="project image"
            height={600}
            width={600}
          />

          <ImageMotion
            src="/project-1-1.png"
            alt="project image"
            height={100}
            width={100}
            className="absolute right-0 top-10 shadow-2xl rounded-2xl"
            initial={{ rotate: 0, x: 200, y: -100 }}
            variants={variants2}
            animate={onView ? "open" : ""}
          />

          <ImageMotion
            src="/project-1-2.png"
            alt="project image"
            height={100}
            width={100}
            className="absolute left-0 top-10 shadow-2xl rounded-2xl"
            initial={{ rotate: 0, x: -200, y: 100 }}
            variants={variants}
            animate={onView ? "open" : ""}
          />
        </div>
        <motion.div className="max-w-xl mx-4  text-black dark:text-[#ADB7BE]  transition duration-300 ">
          <h3 className="font-extrabold text-xl">Adidas</h3>
          <p className="my-3 font-bold font-montserrat">
            Discover stylish Adidas arrivals, quality confort, and innovation
            for your active life. A nodern adidas landing page that i chose to
            remake, which is responsive across all devices (tablets, laptops,
            mobile...) hope you like it :) .
          </p>
          <LinkMotion
            href="https://adidas-gamma.vercel.app/"
            className="bg-slate-700 hover:bg-slate-500 flex items-center justify-center p-2 sm:p-4 group gap-4 w-40 rounded-full mx-auto group"
            target="_blank"
          >
            <p className="font-bold text-white">Preview</p>
            <ImageMotion
              src="/RightIcon.svg"
              alt="right icon"
              height={24}
              width={24}
              className="group-hover:translate-x-3 duration-300"
            />
          </LinkMotion>
        </motion.div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex relative rounded-3xl border-4 border-blue-100 overflow-hidden hover:border-blue-300">
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
            className="absolute left-0 top-10 shadow-2xl rounded-2xl"
            initial={{ rotate: 0, x: -200, y: 100 }}
            variants={variants}
            animate={onView ? "open" : ""}
          />
          <ImageMotion
            src="/project-2-1.png"
            alt="project image"
            height={100}
            width={100}
            className="absolute right-0 top-10 shadow-2xl rounded-2xl"
            initial={{ rotate: 0, x: 200, y: -100 }}
            variants={variants2}
            animate={onView ? "open" : ""}
          />
        </div>
        <motion.div className="max-w-xl mx-4  text-black dark:text-[#ADB7BE]  transition duration-300 ">
          <h3 className="font-extrabold text-xl">Hilink</h3>
          <p className="my-3 font-bold font-montserrat">
            Only with the hilink application you will no longer get lost,
            because we already support offline maps when there is no internet
            connection in the field, i helped designing the website.
          </p>
          <Link
            href="https://travel-sigma-fawn.vercel.app/ "
            className="bg-slate-700 hover:bg-slate-500 flex items-center justify-center p-2 sm:p-4 group gap-4 w-40 rounded-full mx-auto group"
            target="_blank"
          >
            <p className="font-bold text-white">Preview</p>
            <Image
              src="/RightIcon.svg"
              alt="right icon"
              height={24}
              width={24}
              style={{ color: "white" }}
              className="group-hover:translate-x-3 duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
