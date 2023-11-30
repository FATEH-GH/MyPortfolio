import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-evenly">
        <div className="flex flex-col gap-4">
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
          <p className="text-[#ADB7BE] text-base px-2 sm:text-lg mb-6  max-w-lg">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <h3 className="font-montserrat font-extrabold text-xl  sm:text-lg lg:text-xl xl:text-3xl mb-6 text-white">
            Social
          </h3>
          <div className="flex gap-4">
            <Link href="github.com">
              <Image
                src="/GitHubIcon.svg"
                alt="Github Icon"
                height={50}
                width={50}
              />
            </Link>
            <Link href="linkedin.com">
              <Image
                src="/LinkedIn.svg"
                alt="Linkedin Icon"
                height={50}
                width={50}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-1 h-1 bg-white  flex justify-center mx-10 mb-6 sm:mb-12" />
      <div className="mb-4">
        <p className="text-white text-xs sm:text-sm text-center">
          &copy; Copyright 2023. Made by{" "}
          <Link href="/" className="font-bold">
            ABDENNOUR FATEH GHRIBI
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
