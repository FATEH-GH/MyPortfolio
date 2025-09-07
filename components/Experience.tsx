import { experience } from "@/constants";
import ExperienceCard from "./ExperienceCard";
import { Badge } from "./ui/badge";

const Experience = () => {
  return (
    <section id="Experience" className=" text-white ">
      <div className="flex flex-col items-center justify-center mx-8">
        {/* <div className=" w-full">
          <h3 className=" flex text-black dark:text-[#ADB7BE] transition duration-300 justify-center text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
            Experience
          </h3>
          <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300  max-w-[100px] sm:max-w-[150px] flex justify-center m-auto mb-6 sm:mb-12" />
        </div> */}
        <div className="flex flex-col items-center justify-center w-full">
          <Badge className="mx-auto flex items-center justify-center max-w-fit mb-6">
            Experience
          </Badge>
          <h2 className=" mb-4 text-2xl sm:text-4xl lg:text-5xl font-bold ">
            Professional Journey
          </h2>
          <p className="text-black text-center dark:text-[#ADB7BE] transiton duration-300  px-2 sm:text-lg mb-6 lg:text-xl  ading-7 z-10">
            A timeline of my professional growth and key achievements
          </p>
        </div>
        <ul className="mb-4 ml-0 divide-y-2 divide-dashed divide-customColor dark:divide- border-l-2 border-customColor">
          {experience.map((exp, id) => (
            <ExperienceCard
              key={id}
              image={exp.image}
              title={exp.title}
              degree={exp.degree}
              date={exp.date}
              speciality={exp.speciality}
              skills={exp.skills}
              work={exp.work}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
