"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import { IconType } from "react-icons";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    icon: IconType;
    label: string;
    color: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-wrap justify-center max-w-2xl  ", className)}>
      {items.map((item, idx) => (
        <div
          key={item?.label}
          className="relative group   p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-customColor block  rounded-3xl -z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className=" bg-[#3f3f40]  rounded-lg w-[100px] flex flex-col gap-2 items-center justify-center p-4 sm:w-[125px] ">
            <item.icon size="50px" color={item.color} />
            <span>{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
