import { experience } from "@/constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="Experience" className="font-montserrat text-white ">
      <div className="flex flex-col items-center justify-center mx-8">
        <div className=" w-full">
          <h3 className=" flex text-black dark:text-[#ADB7BE] transition duration-300 justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Experience
          </h3>
          <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300  max-w-[100px] sm:max-w-[150px] flex justify-center m-auto mb-6 sm:mb-12" />
        </div>
        <ul className="mb-4 ml-0 divide-y-2 divide-dashed divide-[#f0be6d] dark:divide- border-l-2 border-[#f0be6d]">
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
