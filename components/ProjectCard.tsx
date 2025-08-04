"use client";

import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Projectproject = () => {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10 p-4"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.div
              layoutId={`project-${active.title}-${id}`}
              ref={ref}
              className=" relative w-full max-w-[800px]  h-screen md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden p-4 "
            >
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className=" absolute top-2 right-2 flex-1 items-center justify-center rounded-full h-6 w-6 md:h-10 md:w-10 hover:scale-105 cursor-pointer text-customColor"
                onClick={() => setActive(null)}
              >
                <span className="h-6 w-6 md:h-10 md:w-10 font-bold">X</span>
              </motion.button>
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="rounded-2xl"
              >
                <Image
                  width={600}
                  height={600}
                  src={active.mainProject}
                  alt={active.title}
                  className="w-full h-50 lg:h-80 object-contain object-center"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-semibold text-xl text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                  </div>

                  <Link
                    href={active.link}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-customColor hover:bg-customColorHover text-white"
                  >
                    View
                  </Link>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-black dark:text-[#ADB7BE] text-sm md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-center gap-4 overflow-auto "
                  >
                    <p>{active.description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full gap-4">
        {projects.map((project, index) => (
          <motion.div
            layoutId={`project-${project.title}-${id}`}
            key={`project-${project.title}-${id}`}
            onClick={() => setActive(project)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${project.title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={project.mainProject}
                  alt={project.title}
                  className="rounded-lg object-contain object-top"
                />
              </motion.div>
              <div className="flex items-center justify-center">
                <motion.h3
                  layoutId={`title-${project.title}-${id}`}
                  className="font-semibold text-xl dark:text-white text-neutral-800 text-center md:text-left"
                >
                  {project.title}
                </motion.h3>
              </div>
            </div>
            <motion.button
              layoutId={`button-${project.title}-${id}`}
              className="px-4 py-2  rounded-full font-bold bg-customColor   hover:bg-customColorHover  mt-4 md:mt-0"
            >
              View
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
};

export default Projectproject;

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="orange"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 md:h-8 md:w-8 hover:scale-105 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
