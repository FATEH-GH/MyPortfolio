"use client";

import { Badge } from "./ui/badge";
import { HoverEffect } from "./ui/Card-hover-effect";
import { IconSkills } from "@/constants";

const Skills = () => {
  return (
    <section id="Skills" className=" text-white my-10">
      <div className="flex flex-col items-center justify-center mx-8">
        <div className=" w-full">
          {/* <h3 className=" flex text-black dark:text-[#ADB7BE] transition duration-300 justify-center text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
            Skills
          </h3>
          <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300  max-w-[100px] sm:max-w-[150px] flex justify-center m-auto mb-6 sm:mb-12" /> */}
          <Badge className="mx-auto font-bold flex items-center justify-center max-w-fit mb-6">
            Skills
          </Badge>
        </div>
        <HoverEffect items={IconSkills} />
      </div>
    </section>
  );
};

export default Skills;
