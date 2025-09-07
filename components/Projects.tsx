import ProjectCard from "./ProjectCard";
import { Badge } from "./ui/badge";

const Projects = () => {
  return (
    <section className=" text-white my-20" id="Projects">
      <div className="flex flex-col items-center justify-center w-full">
        {/* <h3 className="text-black  dark:text-[#ADB7BE] transition duration-300 flex justify-center text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
          Projects
        </h3>
        <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300  max-w-[100px] flex justify-center m-auto mb-6 sm:mb-12" /> */}
        <Badge className="mx-auto flex items-center justify-center max-w-fit mb-6">
          Projects
        </Badge>
        <h2 className=" mb-4 text-2xl sm:text-4xl lg:text-5xl font-bold ">
          Featured Work
        </h2>
        <p className="text-black text-center dark:text-[#ADB7BE] transiton duration-300  px-2 sm:text-lg mb-6 lg:text-xl  ading-7 z-10">
          Showcasing some of my best projects and technical achievements
        </p>
      </div>
      <ProjectCard />
    </section>
  );
};

export default Projects;
