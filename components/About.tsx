import { DivMotion } from "./FramerMotion";
const About = () => {
  return (
    <section id="Aboutme" className="font-montserrat text-white my-16">
      <DivMotion
        className="flex items-center justify-start"
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="my-10">
          <h3 className=" flex text-black dark:text-[#ADB7BE] transition duration-300 justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            About Me
          </h3>
          <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300  max-w-[100px] flex justify-center m-auto mb-6 sm:mb-12" />
          <p className="text-black dark:text-[#ADB7BE] transiton duration-300 font-extrabold text-base px-2 sm:text-lg mb-6 lg:text-xl text-center lg:max-w-xl mx-auto">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
      </DivMotion>
      <DivMotion
        className="flex items-end justify-end"
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div>
          <h3 className="flex text-black dark:text-[#ADB7BE]  transition duration-300 justify-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Get to know me
          </h3>
          <div className="mt-1 h-1 bg-black dark:bg-[#ADB7BE]  transition duration-300 max-w-[100px] flex justify-center m-auto mb-6 sm:mb-12 " />
          <p className="text-black dark:text-[#ADB7BE] transiton duration-300 font-bold px-2 sm:text-lg mb-6 lg:text-xl lg:max-w-[800px]  mx-auto text-center ">
            I&apos;m a Frontend Web Developer building the Front-end of Websites
            and Web Applications that leads to the success of the overall
            product. Check out some of my work in the Projects section.
            <br />
            I&apos;m open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don&apos;t hesitate to contact me.
          </p>
        </div>
      </DivMotion>
      <div className="w-full sm:h-screen relative flex items-center justify-center rounded-full  bg-circularSmLight dark:bg-circularSmDark  xl:bg-circularLight xl:dark:bg-circularDark xl:bg-circulartLight py-20 mx-auto my-10 lg:my-24 -z-20">
        <DivMotion className="flex items-center justify-center rounded-full font-extrabold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black p-2 shadow-white cursor-pointer overflow-hidden max-w-xs">
          Web
        </DivMotion>

        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black sm:py-3 sm:px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "-15vw", y: "7vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          HTML
        </DivMotion>
        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white sm:dark:text-black text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "-5vw", y: "-10vw" }}
          transition={{
            duration: 1,

            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          CSS
        </DivMotion>

        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "35vw", y: "0vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          JavaScript
        </DivMotion>

        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "-5vw", y: "20vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          tailwind CSS
        </DivMotion>

        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "-30vw", y: "-15vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          NextJS
        </DivMotion>

        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "20vw", y: "-10vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          ReactJS
        </DivMotion>

        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "-32vw", y: "-5vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          Express Basics
        </DivMotion>

        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "0vw", y: "-20vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          SQL Basics
        </DivMotion>

        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "20vw", y: "7vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          Responsive Design
        </DivMotion>

        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "18vw", y: "18vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          GitHub
        </DivMotion>
        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "-30vw", y: "15vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          Framer Motion
        </DivMotion>
        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "-35vw", y: "5vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          Docker
        </DivMotion>

        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "-15vw", y: "-15vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          Supabase
        </DivMotion>
        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "0vw", y: "10vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          Rest Api
        </DivMotion>
        <DivMotion
          className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black dark:text-white text-black sm:dark:text-black py-3 px-6 shadow-black cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "20vw", y: "-20vw" }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          }}
        >
          Firebase
        </DivMotion>
      </div>
    </section>
  );
};

export default About;
