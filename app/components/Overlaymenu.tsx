import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import DarkModeCard from "./DarkModeCard";

const Overlaymenu = () => {
  const MotionLink = motion(Link);
  const boolean = true;
  return (
    <div>
      <nav className=" absolute z-10 top-20 left-0 text-white text-lg font-bold bg-slate-700 flex flex-col gap-4  text-center w-full   ">
        <AnimatePresence>
          <motion.div
            className="block bg-black dark:bg-white   w-full h-0.5"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{
              duration: 0.75,
            }}
          />

          <MotionLink
            href="#Aboutme"
            className="dark:text-white text-black transition-colors   py-2 px-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.75 }}
          >
            About
          </MotionLink>
          <motion.div
            className="block bg-black dark:bg-white   w-full h-0.5"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.75 }}
          />
          <MotionLink
            href="#Projects"
            className=" dark:text-white text-black transition-colors  py-2 px-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.75 }}
          >
            Projects
          </MotionLink>
          <motion.div
            className="block bg-black dark:bg-white   w-full h-0.5"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.75 }}
          />
          <MotionLink
            href="/contact"
            className="dark:text-white text-black transition-colors  py-2 px-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.75 }}
          >
            Contact
          </MotionLink>
          <motion.div
            className="block bg-black dark:bg-white  w-full h-0.5"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.75 }}
          />
        </AnimatePresence>
      </nav>
      <motion.div
        className="absolute z-10 top-[40%] left-28 flex items-center justify-center flex-row gap-10 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Link href="github.com">
          <Image
            src="/GitHubIcon.svg"
            alt="Github Icon"
            height={40}
            width={40}
          />
        </Link>
        <Link href="linkedin.com">
          <Image
            src="/LinkedIn.svg"
            alt="Linkedin Icon"
            height={40}
            width={40}
          />
        </Link>
        <DarkModeCard />
      </motion.div>
    </div>
  );
};

export default Overlaymenu;
