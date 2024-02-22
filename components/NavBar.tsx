"use client";

import Link from "next/link";
import Overlaymenu from "./Overlaymenu";
import DarkModeCard from "./DarkModeCard";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
  return (
    <section className="mx-2 lg:mx-6 my-2 lg:my-8  ">
      <div className="flex justify-between gap-10 ">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-montserrat font-extrabold lg:p-4 p-2 lg:max-w-[60px] max-w-[60px] text-lg sm:text-lg lg:text-xl  rounded-full bg-[#f0be6d] text-black dark:text-slate-200 "
          >
            FG
          </Link>
          {/* <p className="text-[16px] sm:text-lg xl:text-xl dark:text-slate-200 font-bold text-black transition duration-300">
            ABDENNOUR FATEH GHRIBI
          </p> */}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <div className="flex flex-col gap-0.5 justify-center items-center lg:hidden cursor-pointer">
              <span
                className="bg-black dark:bg-slate-200  block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm "
              ></span>
              <span
                className="bg-black dark:bg-slate-200 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 "
              ></span>
              <span
                className="bg-black dark:bg-slate-200 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm "
              ></span>
            </div>
          </SheetTrigger>
          <SheetContent className="dark:bg-[#35353b]  bg-slate-300">
            {" "}
            <Overlaymenu />
          </SheetContent>
        </Sheet>

        <nav className="max-lg:hidden  text-xl font-bold flex gap-20  mr-40 text-black dark:text-slate-200 transition duration-300">
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

          <DarkModeCard />
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
