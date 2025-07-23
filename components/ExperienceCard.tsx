import Image from "next/image";
import { CheckIcon } from "./ui/Icons/Check";

interface Props {
  image: string;
  title: string;
  degree: string;
  date: string;
  speciality: string;
  skills?: string[];
  work?: {
    icon: string;
    role: string;
  }[];
}

const ExperienceCard = ({
  image,
  title,
  degree,
  date,
  speciality,
  skills,
  work,
}: Props) => {
  return (
    <li className="relative ml-0 py-4 space-y-6">
      <div className="absolute -left-5 sm:-left-6 top-0 flex items-center justify-center bg-white rounded-full">
        <div className="border size-12 m-auto relative flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-full">
          <Image
            width={570}
            height={50}
            src={image}
            alt={title}
            className="object-contain aspect-square h-full w-full"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1 my-4 p-2">
        <h2 className=" text-customColor m-2 font-semibold sm:text-2xl">
          {title}
        </h2>
        {date && (
          <time className="text-xs sm:text-[18px] text-black  dark:text-white flex justify-end ">
            {date}
          </time>
        )}
        {degree && (
          <p className="text-sm text-customColor my-2  font-semibold sm:text-lg">
            {degree}
          </p>
        )}
        {speciality && (
          <span className=" font-semibold text-sm sm:text-xl text-customColor">
            {speciality}
          </span>
        )}
        <ul className={skills?.length ? " my-2 flex flex-col gap-2" : "hidden"}>
          <span className="mb-1 text-black dark:text-white font-semibold sm:text-xl">
            Acquired skills :{" "}
          </span>
          {skills?.map((skill) => (
            <li
              className="font-semibold text-sm sm:text-lg text-black dark:text-[#ADB7BE] flex sm:ml-4"
              key={skill}
            >
              <CheckIcon />
              {skill}
            </li>
          ))}
        </ul>
        <ul className={work ? " my-2 flex flex-col gap-2" : "hidden"}>
          {work?.map((work) => (
            <li
              key={work.role}
              className="font-semibold text-sm sm:text-lg text-black dark:text-[#ADB7BE] flex sm:ml-4"
            >
              {work.icon} {work.role}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ExperienceCard;
