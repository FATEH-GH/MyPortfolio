import Link from "next/link";
import { motion } from "framer-motion";
import DarkModeCard from "./DarkModeCard";
import { Icons } from "./Icons";
import { navigation } from "@/constants";

const Overlaymenu = () => {
  return (
    <>
      <nav className=" absolute z-10 top-20 left-0  opacity-80 text-lg font-bold  flex flex-col gap-4  text-center w-full ">
        {navigation.map((nav) => (
          <Link
            key={nav.name}
            href={nav.href}
            className="dark:text-white text-black  transition-colors   py-2 px-1"
          >
            {nav.name}
          </Link>
        ))}
      </nav>
      <div className="absolute z-10 top-[50%] left-[50%] right-[50%] flex items-center justify-center flex-row gap-10 ">
        <Link href="https://github.com/FATEH-GH">
          <Icons.gitHub className="h-8 w-8" />
        </Link>

        <Link href="https://www.linkedin.com/in/fateh-ghribi/">
          <Icons.linkedIn className="h-8 w-8" />
        </Link>
        <DarkModeCard />
      </div>
    </>
  );
};

export default Overlaymenu;
