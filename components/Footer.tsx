import Link from "next/link";
import { navigation } from "@/constants";
import { GithubIcon } from "./GItHub";
import { LinkedinIcon } from "./LinkedInIcon";
import { XIcon } from "./X";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b  p-4 rounded-t-xl bg-radial-dot-pattern ">
      <div className="flex items-center justify-evenly">
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <h3 className="font-montserrat font-extrabold text-xl  sm:text-lg lg:text-xl xl:text-3xl  text-black dark:text-slate-200">
            Socials
          </h3>
          <div className="flex gap-4">
            <Link
              href="https://github.com/FATEH-GH"
              className="hover:opacity-70"
            >
              <GithubIcon className="h-10 w-10 text-black dark:text-slate-200" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fateh-ghribi/"
              className="hover:opacity-70"
            >
              <LinkedinIcon className="h-10 w-10 text-black dark:text-slate-200" />
            </Link>
            <Link href="https://x.com/GhribiFateh">
              <XIcon className="h-8 w-8" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-xl p-4 items-center justify-evenly  text-black dark:text-slate-200">
          {navigation.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="hover:text-[#f0be6d] hover:scale-110 trasition-all duration-150 text-xl  sm:text-lg lg:text-xl xl:text-3xl"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-1 h-1 bg-[#f0be6d]  flex justify-center mx-10 mb-6 " />
      <div>
        <p className="text-black dark:text-slate-200 text-xs sm:text-sm text-center">
          &copy; Copyright 2025. Made by{" "}
          <Link href="/" className="font-bold">
            ABDENNOUR FATEH GHRIBI
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
