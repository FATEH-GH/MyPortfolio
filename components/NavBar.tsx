"use client";

import Link from "next/link";
import Overlaymenu from "./Overlaymenu";
import DarkModeCard from "./DarkModeCard";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigation } from "@/constants";

const NavBar = () => {
  return (
    <section
      className="lg:pt-4  fixed  
    w-full top-0 left-0 z-10 backdrop-blur-md"
    >
      <div className="flex justify-between items-center mx-auto  max-w-4xl p-1 ">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-montserrat font-extrabold lg:p-4 p-2 lg:max-w-[60px] max-w-[60px] text-lg sm:text-lg lg:text-xl  rounded-full bg-[#f0be6d] text-black dark:text-slate-200 "
          >
            FG
          </Link>
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

        <nav className="max-lg:hidden  text-xl font-bold flex gap-20 text-black dark:text-slate-200 transition duration-300">
          {navigation.map((nav) => (
            <Link
              href={nav.href}
              key={nav.name}
              className="hover:text-[#f0be6d] hover:scale-110 trasition-all duration-150"
            >
              {nav.name}
            </Link>
          ))}
          <DarkModeCard />
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
