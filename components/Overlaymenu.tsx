import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import DarkModeCard from "./DarkModeCard";
import { Icons } from "./Icons";

const Overlaymenu = () => {
  const MotionLink = motion(Link);

  return (
    <div>
      <nav className=" absolute z-10 top-10 left-0  opacity-80 text-lg font-bold  flex flex-col gap-4  text-center w-full   ">
        <MotionLink
          href="#Aboutme"
          className="dark:text-white text-black  transition-colors   py-2 px-1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.75 }}
        >
          About
        </MotionLink>

        <MotionLink
          href="#Projects"
          className=" dark:text-white text-black  transition-colors  py-2 px-1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.75 }}
        >
          Projects
        </MotionLink>

        <MotionLink
          href="#contact"
          className="dark:text-white text-black  transition-colors  py-2 px-1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.75 }}
        >
          Contact
        </MotionLink>
      </nav>
      <motion.div
        className="absolute z-10 top-[30%] left-20 flex items-center justify-center flex-row gap-10 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Link href="https://github.com/FATEH-GH">
          <Icons.gitHub className="h-8 w-8" />
        </Link>

        <Link href="https://www.linkedin.com/in/fateh-ghribi/">
          <Icons.linkedIn className="h-8 w-8" />
        </Link>
        <DarkModeCard />
      </motion.div>
    </div>
  );
};

export default Overlaymenu;
