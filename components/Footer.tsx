import Link from "next/link";
import { Icons } from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-evenly">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-montserrat font-extrabold lg:p-4 p-2 lg:max-w-[60px] max-w-[60px] text-lg sm:text-lg lg:text-xl  rounded-full bg-slate-500 text-black dark:text-slate-200 hover:bg-slate-400"
            >
              FG
            </Link>
            <p className="text-[16px] sm:text-lg xl:text-xl font-bold text-white transition duration-300">
              ABDENNOUR FATEH GHRIBI
            </p>
          </div>
          <p className="text-[#ADB7BE] text-base px-2 sm:text-lg mb-6  max-w-lg">
            A Frontend Web Developer that specialize in creating intuitive user
            interfaces and visually appealing to improve overall user
            experience.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <h3 className="font-montserrat font-extrabold text-xl  sm:text-lg lg:text-xl xl:text-3xl  text-white">
            Social
          </h3>
          <div className="flex gap-4">
            <Link
              href="https://github.com/FATEH-GH"
              className="hover:opacity-70"
            >
              <Icons.gitHub className="h-10 w-10 text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fateh-ghribi/"
              className="hover:opacity-70"
            >
              <Icons.linkedIn className="h-10 w-10 text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-1 h-1 bg-white  flex justify-center mx-10 mb-6 sm:mb-12" />
      <div className="mb-4">
        <p className="text-white text-xs sm:text-sm text-center">
          &copy; Copyright 2023. Made by{" "}
          <Link href="/" className="font-bold">
            ABDENNOUR FATEH GHRIBI
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
