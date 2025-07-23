import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ImageMotion } from "./FramerMotion";

const ProjectCard = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 grid-flow-row items-center  gap-10 sm:gap-20 mx-auto my-20 ">
      {projects.map((project) => (
        <div className="flex flex-col items-center gap-10" key={project.title}>
          <div className="flex relative rounded-3xl hover:border-4  overflow-hidden hover:scale-105 duration-200 hover:border-customColor ">
            <Image
              src={project.mainProject}
              alt="project image"
              height={600}
              width={600}
            />

            <ImageMotion
              src={project.subProject1}
              alt="project image"
              height={100}
              width={100}
              className="absolute right-0 top-10 shadow-2xl rounded-2xl hover:rotate-12"
              initial={{ rotate: 0, x: 100, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileInView={{ rotate: -30, x: 0, y: 0 }}
            />

            <ImageMotion
              src={project.subProject2}
              alt="project image"
              height={100}
              width={100}
              className="absolute left-0 top-10 shadow-2xl rounded-2xl"
              initial={{ rotate: 0, x: -100, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileInView={{ rotate: 30, x: 0, y: 0 }}
            />
          </div>
          <div className="max-w-xl mx-4  text-black dark:text-[#ADB7BE]  transition duration-300 ">
            <h3 className="font-semibold text-xl dark:text-white ">
              {" "}
              {project.title}{" "}
            </h3>
            <p className="my-3 font-semibold ">{project.describtion}</p>
            <Link
              href={project.link}
              className="bg-customColor hover:bg-customColorHover flex items-center justify-center p-2 sm:p-4 group gap-4 w-40 rounded-full mx-auto group"
              target="_blank"
            >
              <p className="font-semibold text-white">Preview</p>
              <Image
                src="/RightIcon.svg"
                alt="right icon"
                height={24}
                width={24}
                className="group-hover:translate-x-3 duration-300 "
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
