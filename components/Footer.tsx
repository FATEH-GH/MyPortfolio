import Link from "next/link";
import { navigation } from "@/constants";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { DotPattern } from "./ui/dot-pattern";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="relative">
      <DotPattern
        glow={true}
        className={cn(
          "sm:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] ",
          "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="flex items-center justify-center">
        <div className="flex  w-xl p-4 items-center justify-center gap-4  text-black dark:text-slate-200">
          {navigation.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="hover:text-customColor hover:scale-110 trasition-all duration-150 text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-1 h-0.5 bg-customColor  flex justify-center mx-10 sm:max-w-6xl sm:mx-auto mb-6 " />
      <div className="flex flex-col sm:flex-row-reverse items-center sm:justify-evenly justify-center">
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <div className="flex gap-4">
            <Link
              href="https://github.com/FATEH-GH"
              className="hover:opacity-70"
            >
              <FaGithub className="h-8 w-8 text-black dark:text-slate-200" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fateh-ghribi/"
              className="hover:opacity-70"
            >
              <FaLinkedin className="h-8 w-8 text-black dark:text-slate-200" />
            </Link>
            <Link href="https://x.com/GhribiFateh">
              <FaXTwitter className="h-8 w-8" />
            </Link>
          </div>
        </div>
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
