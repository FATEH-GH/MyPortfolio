"use client";

import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="Aboutme" className="font-montserrat text-white my-16">
      <div className="my-10">
        <h3 className=" flex justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          About Me
        </h3>
        <div className="mt-1 h-1 bg-white max-w-[100px] flex justify-center m-auto mb-6 sm:mb-12" />
        <p className="text-[#ADB7BE] text-base px-2 sm:text-lg mb-6 lg:text-xl text-center lg:max-w-lg mx-auto">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div>
        <div>
          <h3 className="flex justify-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Get to know me
          </h3>
          <div className="mt-1 h-1 bg-white max-w-[100px] flex justify-center m-auto mb-6 sm:mb-12 " />
          <p className="text-[#ADB7BE] text-base px-2 sm:text-lg mb-6 lg:text-xl lg:max-w-[700px]  mx-auto text-center">
            I&apos;m a Frontend Web Developer building the Front-end of Websites
            and Web Applications that leads to the success of the overall
            product. Check out some of my work in the Projects section.
            <br />
            I&apos;m open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don&apos;t hesitate to contact me.
          </p>
        </div>
        <div className="w-full sm:h-screen relative flex items-center justify-center rounded-full bg-circularLight xl:bg-circularLightSm py-20 mx-auto my-10 lg:my-24">
          <motion.div className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black text-white p-2 shadow-white cursor-pointer overflow-hidden max-w-xs">
            Web
          </motion.div>

          <motion.div
            className="flex items-center justify-center rounded-full font-semibold sm:sm:bg-white bg-transparent sm:text-black text-white sm:py-3 sm:px-6 shadow-black cursor-pointer absolute"
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
          </motion.div>
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black text-white py-3 px-6 shadow-black cursor-pointer absolute"
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
          </motion.div>

          <motion.div
            className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black text-white py-3 px-6 shadow-black cursor-pointer absolute"
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
          </motion.div>

          <motion.div
            className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black text-white py-3 px-6 shadow-black cursor-pointer absolute"
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
          </motion.div>

          <motion.div
            className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black text-white py-3 px-6 shadow-black cursor-pointer absolute"
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
          </motion.div>

          <motion.div
            className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black text-white py-3 px-6 shadow-black cursor-pointer absolute"
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
          </motion.div>

          <motion.div
            className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black text-white py-3 px-6 shadow-black cursor-pointer absolute"
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
          </motion.div>

          <motion.div
            className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black text-white py-3 px-6 shadow-black cursor-pointer absolute"
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
          </motion.div>

          <motion.div
            className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black text-white py-3 px-6 shadow-black cursor-pointer absolute"
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
          </motion.div>

          <motion.div
            className="flex items-center justify-center rounded-full font-semibold sm:bg-white bg-transparent sm:text-black text-white py-3 px-6 shadow-black cursor-pointer absolute"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
