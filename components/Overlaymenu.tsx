import Link from "next/link";
import { motion } from "framer-motion";
import DarkModeCard from "./DarkModeCard";
import { Icons } from "./Icons";

const Overlaymenu = () => {
  const MotionLink = motion(Link);

  return (
    <>
      <nav className=" absolute z-10 top-20 left-0  opacity-80 text-lg font-bold  flex flex-col gap-4  text-center w-full ">
        <MotionLink
          href="#Aboutme"
          className="dark:text-white text-black  transition-colors   py-2 px-1"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          About
        </MotionLink>

        <MotionLink
          href="#Skills"
          className="dark:text-white text-black  transition-colors   py-2 px-1"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Skills
        </MotionLink>

        <MotionLink
          href="#Projects"
          className=" dark:text-white text-black  transition-colors  py-2 px-1"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          Projects
        </MotionLink>

        <MotionLink
          href="#contact"
          className="dark:text-white text-black  transition-colors  py-2 px-1"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          Contact
        </MotionLink>
      </nav>
      <motion.div
        className="absolute z-10 top-[50%] left-[50%] right-[50%] flex items-center justify-center flex-row gap-10 "
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeInOut" }}
      >
        <Link href="https://github.com/FATEH-GH">
          <Icons.gitHub className="h-8 w-8" />
        </Link>

        <Link href="https://www.linkedin.com/in/fateh-ghribi/">
          <Icons.linkedIn className="h-8 w-8" />
        </Link>
        <DarkModeCard />
      </motion.div>
    </>
  );
};

export default Overlaymenu;
