import Link from "next/link";
import { Icons } from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-200 to-slate-400 dark:from-[#28282d] dark:to-[#101012] p-4 rounded-t-xl ">
      <div className="flex  gap-10 sm:gap-16 lg:gap-44 items-center justify-center">
        <Link
          href="/"
          className=" relative top-0 left-0 font-montserrat font-extrabold lg:p-4 p-2 lg:max-w-[60px] max-w-[60px] text-lg sm:text-lg lg:text-xl  rounded-full bg-[#f0be6d] text-black dark:text-slate-200 "
        >
          FG
        </Link>
        <div className="flex gap-4 items-center  justify-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <h3 className="font-montserrat font-extrabold text-xl  sm:text-lg lg:text-xl xl:text-3xl  text-black dark:text-slate-200">
              Social
            </h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com/FATEH-GH"
                className="hover:opacity-70"
              >
                <Icons.gitHub className="h-10 w-10 text-black dark:text-slate-200 " />
              </Link>
              <Link
                href="https://www.linkedin.com/in/fateh-ghribi/"
                className="hover:opacity-70"
              >
                <Icons.linkedIn className="h-10 w-10 text-black dark:text-slate-200" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-4 items-center justify-center text-xl font-bold  text-black dark:text-slate-200">
          <Link
            href="#Aboutme"
            className="hover:text-[#f0be6d] hover:scale-110 trasition-all duration-150"
          >
            About
          </Link>
          <Link
            href="#Skills"
            className="hover:text-[#f0be6d] hover:scale-110 trasition-all duration-150"
          >
            Skills
          </Link>
          <Link
            href="#Projects"
            className="hover:text-[#f0be6d] hover:scale-110 trasition-all duration-150"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#f0be6d] hover:scale-110 trasition-all duration-150"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-1 h-1 bg-[#f0be6d]  flex justify-center mx-10 mb-6 " />
      <div>
        <p className="text-black dark:text-slate-200 text-xs sm:text-sm text-center">
          &copy; Copyright 2024. Made by{" "}
          <Link href="/" className="font-bold">
            ABDENNOUR FATEH GHRIBI
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
