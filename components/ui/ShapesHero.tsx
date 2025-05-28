"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-linear-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-0 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(240,190,109,1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_100%_100%,rgba(240,190,109,1),transparent_100%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroGeometric() {
  return (
    <div className="relative h-[250px] lg:h-[320px] w-full flex items-center justify-center overflow-visible z-0">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-visible  ">
        <ElegantShape
          delay={0.3}
          width={300}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] lg:top-[35%] xl:top-[20%] hidden md:block "
        />

        <ElegantShape
          delay={0.5}
          width={250}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:-right-[0%] top-[35%] md:top-[75%] lg:top-[60%] xl:top-[75%] hidden md:block"
        />

        <ElegantShape
          delay={0.4}
          width={150}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%]  md:block"
        />

        <ElegantShape
          delay={0.6}
          width={100}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={100}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[15%] md:left-[25%] top-[15%] md:top-[10%]"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  );
}
