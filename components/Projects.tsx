import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      className=" text-white my-20  flex flex-col items-center justify-center"
      id="Projects"
    >
      <div>
        <h3 className="text-black  dark:text-[#ADB7BE] transition duration-300 flex justify-center text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
          Projects
        </h3>
        <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300  max-w-[100px] flex justify-center m-auto mb-6 sm:mb-12" />
      </div>
      <ProjectCard />
    </section>
  );
};

export default Projects;
