import { DivMotion } from "./FramerMotion";
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaNode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";
import { BsFiletypeSql } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="Skills" className="font-montserrat text-white  ">
      <DivMotion
        className="flex flex-col items-center justify-center mx-8"
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className=" w-full">
          <h3 className=" flex text-black dark:text-[#ADB7BE] transition duration-300 justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Skills
          </h3>
          <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300  max-w-[100px] sm:max-w-[150px] flex justify-center m-auto mb-6 sm:mb-12" />
        </div>
        <div className="flex flex-col gap-6 mx-auto p-4 sm:p-20 rounded-xl font-bold">
          <div className="flex flex-wrap gap-4 itmes-center justify-center">
            <div className=" bg-[#3f3f40]  rounded-lg w-[100px] flex flex-col gap-2 items-center justify-center p-4 sm:w-[125px]">
              <FaHtml5 size="50px" color="red" />
              <span>html</span>
            </div>
            <div className="bg-[#3f3f40] rounded-lg w-[100px] flex flex-col items-center justify-center p-4 sm:w-[125px]">
              <FaCss3Alt size="50" color="#2d52e4" />
              <span>Css</span>
            </div>
            <div className="bg-[#3f3f40] rounded-lg w-[100px] flex flex-col items-center justify-center p-4 sm:w-[125px]">
              <IoLogoJavascript size="50" color="yellow" />
              <span>javascript</span>
            </div>
            <div className="bg-[#3f3f40] rounded-lg w-[100px] flex flex-col items-center justify-center p-4 sm:w-[125px]  ">
              <SiTailwindcss size="50" color="#0ea4e8" />
              <span>Tailwindcss</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 itmes-center justify-center">
            <div className="bg-[#3f3f40] rounded-lg w-[100px] flex flex-col items-center justify-center p-4 sm:w-[125px]">
              <LiaDocker size="50" color="#2bbbeb" />
              <span>Docker</span>
            </div>
            <div className="bg-[#3f3f40] rounded-lg w-[100px] flex flex-col items-center justify-center p-4 sm:w-[125px]">
              <FaGitAlt size="50" color="#f05438" />
              <span>Git</span>
            </div>

            <div className="bg-[#3f3f40] rounded-lg w-[100px] flex flex-col items-center justify-center p-4 sm:w-[125px]">
              <BsFiletypeSql size="50" color="orange" />
              <span>SQL</span>
            </div>
            <div className="bg-[#3f3f40] rounded-lg w-[100px] flex flex-col items-center justify-center p-4 sm:w-[125px]">
              <SiFramer size="50" color="white" />
              <span>Framer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 itmes-center justify-center">
            <div className="bg-[#3f3f40] rounded-lg w-[100px] flex flex-col items-center justify-center p-4 sm:w-[125px]">
              <FaReact size="50" color="#2bbbeb" />
              <span>ReactJs</span>
            </div>
            <div className="bg-[#3f3f40] rounded-lg w-[100px] flex flex-col items-center justify-center p-4 sm:w-[125px]">
              <FaNode size="75" color="green" />
              <span>Node.js</span>
            </div>
            <div className="bg-[#3f3f40] rounded-lg w-[100px] flex flex-col items-center justify-center p-4 sm:w-[125px]">
              <TbBrandNextjs size="50" color="white" />
              <span>NextJs</span>
            </div>
          </div>
        </div>
      </DivMotion>
    </section>
  );
};

export default Skills;
