"use client";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { BoxReveal } from "./ui/BoxReveal";
import { Badge } from "./ui/badge";
import { Download, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <motion.section
      className="h-screen lg:py-4 flex flex-col justify-center items-center relative  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-60%] h-[200%] skew-y-12 border-2  border-amber-500"
        )}
      />
      <Badge className="text-lg font-bold my-4">
        <Zap size={20} />
        <p className=" font-bold "> Frontend Web Developer</p>
      </Badge>
      <div className=" mx-auto lg:pt-14">
        <BoxReveal duration={0.5} boxColor="#f59f0a " className=" mx-auto">
          <h1 className=" text-customColor transiton mb-4 text-3xl sm:text-5xl lg:text-6xl font-bold text-center">
            <span className=" bg-clip-text text-black dark:text-white ">
              Hello👋, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                1500,
                "Fateh",
                2000,
                "Software Engenieer",
                2000,
                "Web Developer",
                2000,
                "Frontend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="relative z-0"
            />
          </h1>
        </BoxReveal>
        <BoxReveal duration={0.5} boxColor="#f59f0a ">
          <p className="ml-4 text-black dark:text-[#ADB7BE] transiton font-semibold px-2 sm:text-lg mb-6 lg:text-xl max-w-4xl">
            Hey there! I&apos;m Fateh, a Frontend Developer passionate about
            crafting modern, responsive, and user-friendly web experiences. From
            building pixel-perfect UIs to optimizing performance and
            accessibility, I bring ideas to life with clean code and thoughtful
            design. Let’s build something amazing together! 🚀
          </p>
        </BoxReveal>
      </div>
    </motion.section>
  );
};

export default Hero;
