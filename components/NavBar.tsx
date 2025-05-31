"use client";

import Link from "next/link";
import Overlaymenu from "./Overlaymenu";
import DarkModeCard from "./DarkModeCard";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigation } from "@/constants";
import { FloatingNav } from "./ui/floating-navbar";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Button } from "./ui/Button";

const NavBar = () => {
  const { scrollYProgress } = useScroll();

  const [visiblenav, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      if (scrollYProgress.get() === 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });
  return (
    <section className=" ">
      <div className="flex justify-end md:justify-center items-center mx-auto  max-w-6xl p-1 ">
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex flex-col gap-0.5 justify-center items-center lg:hidden cursor-pointer border-4 mr-4 mt-6 sticky">
              <span
                className="md:hidden bg-black dark:bg-slate-200  block transition-all duration-300 ease-out 
                      h-1 w-6 rounded-sm "
              ></span>
              <span
                className="md:hidden bg-black dark:bg-slate-200 block transition-all duration-300 ease-out 
                    h-1 w-6 rounded-sm my-0.5 "
              ></span>
              <span
                className="md:hidden bg-black dark:bg-slate-200 block transition-all duration-300 ease-out 
                    h-1 w-6 rounded-sm "
              ></span>
            </div>
          </SheetTrigger>
          <SheetContent className="dark:bg-[#35353b]  bg-slate-300">
            {" "}
            <Overlaymenu />
          </SheetContent>
        </Sheet>

        <motion.nav
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            y: visiblenav ? 0 : -100,
            opacity: visiblenav ? 1 : 0,
          }}
          transition={{
            duration: 0.1,
          }}
          className=" hidden  text-xl font-bold md:flex gap-20 text-black dark:text-slate-200 transition duration-300 mx-2"
        >
          {navigation.map((nav) => (
            <Link
              href={nav.href}
              key={nav.name}
              className="hover:text-[#f0be6d] hover:scale-110 trasition-all duration-150"
            >
              {nav.name}
            </Link>
          ))}
          {visiblenav ? <DarkModeCard /> : <></>}
        </motion.nav>
        <FloatingNav
          navItems={navigation}
          className="font-bold flex gap-20 text-black dark:text-slate-200 transition duration-300 "
        />
      </div>
    </section>
  );
};

export default NavBar;
