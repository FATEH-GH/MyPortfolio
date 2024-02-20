import { DivMotion } from "./FramerMotion";

const Skills = () => {
  return (
    <section id="Skills" className="font-montserrat text-white my-36">
      <DivMotion
        className="flex items-center justify-center mx-8"
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="my-10 w-full">
          <h3 className=" flex text-black dark:text-[#ADB7BE] transition duration-300 justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Skills
          </h3>
          <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300  max-w-[100px] flex justify-center m-auto mb-6 sm:mb-12" />
        </div>
      </DivMotion>
    </section>
  );
};

export default Skills;
