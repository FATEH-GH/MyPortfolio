import { BiLogoMongodb } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { LiaDocker } from "react-icons/lia";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const projects = [
  {
    mainProject: "/bg-project-6.png",
    subProject1: "/project-6-1.png",
    subProject2: "/project-6-2.png",
    title: "Weather",
    link: "https://weather-nu-nine.vercel.app/",
    describtion:
      "Weather is a sleek and user-friendly weather application designed to provide real-time weather updates at your fingertips. With a clean and intuitive interface, users can effortlessly access accurate weather information for any location around the globe..",
  },
  {
    mainProject: "/bg-project-3.png",
    subProject1: "/project-3-1.png",
    subProject2: "/project-3-2.png",
    title: "GYMANIA",
    link: "https://gymania.vercel.app/",
    describtion:
      "Welcome to GYMANIA, your go-to destination for a diverse and dynamic collection of gym exercises!  our website is designed to empower you with a wealth of workout options tailored to meet your goals.",
  },

  {
    mainProject: "/bg-project-5.png",
    subProject1: "/project-5-1.png",
    subProject2: "/project-5-2.png",
    title: "Dropbox2.0",
    link: "https://dropbox-zeta.vercel.app/",
    describtion:
      "Dropbox has proven to be extremely useful for social networks, so i tried to make a clone. Feel free to test it your self you can sign up to have the the full user experience (your data will be deleted as soon as you sign out) enjoy :P.",
  },
  {
    mainProject: "/bg-project-1.png",
    subProject1: "/project-1-1.png",
    subProject2: "/project-1-2.png",
    title: "Adidas",
    link: "https://adidas-gamma.vercel.app/",
    describtion:
      "Discover stylish Adidas arrivals, quality confort, and innovation for your active life. A nodern adidas landing page that i chose to remake, which is responsive across all devices (tablets, laptops, mobile...) hope you like it :) .",
  },
  {
    mainProject: "/bg-project-2.png",
    subProject1: "/project-2-1.png",
    subProject2: "/project-2-2.png",
    title: "Hilink",
    link: "https://travel-sigma-fawn.vercel.app/",
    describtion:
      "Only with the hilink application you will no longer get lost, because we already support offline maps when there is no internet connection in the field, i helped designing the website.",
  },
];

export const navigation = [
  { name: "About", href: "#Aboutme" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Experience", href: "#Experience" },
];

export const IconSkills = [
  {
    icon: FaHtml5,
    label: "HTML",
    color: "#f16b31",
  },
  {
    icon: FaCss3Alt,
    label: "CSS",
    color: "#2d52e4",
  },
  {
    icon: IoLogoJavascript,
    label: "Javascipt",
    color: "yellow",
  },

  {
    icon: SiTailwindcss,
    label: "Tailwindcss",
    color: "#0ea4e8",
  },

  {
    icon: LiaDocker,
    label: "Docker",
    color: "#2bbbeb",
  },

  {
    icon: FaGitAlt,
    label: "Git",
    color: "#f05438",
  },

  {
    icon: BsFiletypeSql,
    label: "SQL",
    color: "orange",
  },

  {
    icon: BiLogoMongodb,
    label: "MongoDB",
    color: "white",
  },

  {
    icon: FaReact,
    label: "ReactJs",
    color: "#2bbbeb",
  },

  {
    icon: FaNode,
    color: "green",
    label: "Node.js",
  },
  {
    icon: TbBrandNextjs,
    color: "white",
    label: "NEXT.JS",
  },
];

export const experience = [
  {
    image: "/Gendarmerie.png",
    title: "MDN",
    degree: "GAP YEAR | Military Service",
    date: "May 2024-May 2025",
    speciality: "ACADEMIC BACKGROUND IN ISOFTWARE ENGINEERING",
    skills: [],
    work: [
      {
        icon: "🎖️",
        role: "Served in military, focusing on teamwork and discipline.",
      },
      {
        icon: "💻",
        role: "Worked as a software engineer",
      },
      {
        icon: "👨‍🏫",
        role: "Taught part-time.",
      },
    ],
  },
  {
    image: "/USTHB.jpg",
    title: "HOUARI BOUMEDIENE UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    degree: "Master 2",
    date: "Sep 2022-Jun 2023",
    speciality: "ACADEMIC BACKGROUND IN SOFTWARE ENGINEERING",
    skills: [
      "Software Engineering",
      "Advanced database structures ",
      "Design of software architecture and interfaces",
      "design efficient, scalable, and maintainable software systems to solve them.",
      "Work in teams with other engineers, product managers, designers, and stakeholders.",
    ],
    work: [
      {
        icon: "",
        role: "",
      },
    ],
  },
  {
    image: "/USTHB.jpg",
    title: "HOUARI BOUMEDIENE UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    degree: "BACHELOR'S",
    date: "Sep 2020-Jun 2021",
    speciality:
      "ACADEMIC BACKGROUND IN INFORMATION SYSTEMS AND SOFTWARE ENGINEERING",
    skills: [
      "Algorithms and data Structures",
      "Software Engineering",
      "Databases and problem solving",
      "Design and manage databases, write queries, and ensure data integrity and performance.",
    ],
    work: [
      {
        icon: "",
        role: "",
      },
    ],
  },
  {
    image: "/highschool.png",
    title: "Kasdi Merbah High School",
    degree: "BACHELOR'S",
    date: "Sep 2017-Jun 2018",
    speciality: "DEGREE IN EXPERIMENTAL SCIENCES",
    skills: [],
    work: [
      {
        icon: "",
        role: "",
      },
    ],
  },
];
