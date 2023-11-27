import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Overlaymenu = () => {
  const MotionLink = motion(Link);
  const boolean = true;
  return (
    <nav className=" absolute z-10 top-14 left-0 text-white text-lg font-bold font-montserrat bg-slate-700 flex flex-col gap-4  text-center w-full   ">
      <AnimatePresence>
        <motion.div
          className="block bg-white w-full h-0.5"
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{
            duration: 0.75,
          }}
        />

        <MotionLink
          href="#Aboutme"
          className=" py-2 px-1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.75 }}
        >
          About
        </MotionLink>
        <motion.div
          className="block bg-white w-full h-0.5"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.75 }}
        />
        <MotionLink
          href="#Projects"
          className=" py-2 px-1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.75 }}
        >
          Projects
        </MotionLink>
        <motion.div
          className="block bg-white w-full h-0.5"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -90 }}
          transition={{ duration: 0.75 }}
        />
        <MotionLink
          href="/"
          className="py-2 px-1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.75 }}
        >
          Contact
        </MotionLink>
        <motion.div
          className="block bg-white w-full h-0.5"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.75 }}
        />
      </AnimatePresence>
    </nav>
  );
};

export default Overlaymenu;
