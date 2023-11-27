"use client";

import Link from "next/link";
import { useState } from "react";
import Overlaymenu from "./Overlaymenu";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="mx-2 lg:mx-6 my-2 lg:my-8 ">
      <div className="flex justify-between gap-10">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-montserrat font-extrabold lg:p-4 p-2 lg:max-w-[60px] max-w-[60px] text-lg sm:text-lg lg:text-xl  rounded-full bg-slate-500 text-white hover:bg-slate-400"
          >
            F&nbsp;G
          </Link>
          <p className="font-montserrat text-[16px] sm:text-lg xl:text-xl text-white">
            ABDENNOUR FATEH GHRIBI
          </p>
        </div>

        {isOpen && <Overlaymenu />}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col justify-center items-center sm:hidden"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
          ></span>
        </button>

        <nav className="max-sm:hidden font-montserrat text-xl font-bold flex gap-20  mr-40 text-white">
          <Link
            href="#Aboutme"
            className="hover:text-slate-400 hover:scale-110 trasition-all duration-150"
          >
            About
          </Link>
          <Link
            href="#Projects"
            className="hover:text-slate-400 hover:scale-110 trasition-all duration-150"
          >
            Projects
          </Link>
          <Link
            href="/"
            className="hover:text-slate-400 hover:scale-110 trasition-all duration-150"
          >
            Contact
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
