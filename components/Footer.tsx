import Link from "next/link";
import { Icons } from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-200 to-slate-400 dark:from-[#28282d] dark:to-[#101012] p-4 rounded-t-xl">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-evenly">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-montserrat font-extrabold lg:p-4 p-2 lg:max-w-[60px] max-w-[60px] text-lg sm:text-lg lg:text-xl  rounded-full bg-[#f0be6d] text-black dark:text-slate-200 "
          >
            FG
          </Link>
          <p className="text-[16px] sm:text-lg xl:text-xl font-bold text-white transition duration-300">
            ABDENNOUR FATEH GHRIBI
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
      <div className="mt-1 h-1 bg-[#f0be6d]  flex justify-center mx-10 mb-6 " />
      <div className="">
        <p className="text-white text-xs sm:text-sm text-center">
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
