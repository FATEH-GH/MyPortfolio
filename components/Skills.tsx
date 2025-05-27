"use client";

import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaNode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import { HoverEffect } from "./ui/Card-hover-effect";

const Skills = () => {
  return (
    <section id="Skills" className="font-montserrat text-white ">
      <div className="flex flex-col items-center justify-center mx-8">
        <div className=" w-full">
          <h3 className=" flex text-black dark:text-[#ADB7BE] transition duration-300 justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Skills
          </h3>
          <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300  max-w-[100px] sm:max-w-[150px] flex justify-center m-auto mb-6 sm:mb-12" />
        </div>
        <HoverEffect items={IconSkills} />
      </div>
    </section>
  );
};

const IconSkills = [
  {
    icon: FaHtml5,
    label: "HTML",
    color: "#f16b31",
  },
  {
    icon: FaCss3Alt,
    label: "CSS",
    color: "#2d52e4",
  },
  {
    icon: IoLogoJavascript,
    label: "Javascipt",
    color: "yellow",
  },

  {
    icon: SiTailwindcss,
    label: "Tailwindcss",
    color: "#0ea4e8",
  },

  {
    icon: LiaDocker,
    label: "Docker",
    color: "#2bbbeb",
  },

  {
    icon: FaGitAlt,
    label: "Git",
    color: "#f05438",
  },

  {
    icon: BsFiletypeSql,
    label: "SQL",
    color: "orange",
  },

  {
    icon: BiLogoMongodb,
    label: "MongoDB",
    color: "white",
  },

  {
    icon: FaReact,
    label: "ReactJs",
    color: "#2bbbeb",
  },

  {
    icon: FaNode,
    color: "green",
    label: "Node.js",
  },
  {
    icon: TbBrandNextjs,
    color: "white",
    label: "NEXT.JS",
  },
];

export default Skills;
