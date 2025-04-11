import Button from "./Button";
import { MdArrowRightAlt } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

const FirstSectionAbout = () => {
  return (
    <div className="basis-full text-center custome-lg:text-left custome-lg:basis-[50%] text-white">
      <div className="inline-flex items-center gap-2 rounded-3xl py-3 px-4 bg-white/10 mb-8 ">
        <div className="w-[8px] h-[8px] rounded-[100%] bg-blue-500"></div>
        <span className="block font-semibold">
          Next.js Starter for Business
        </span>
      </div>
      <h1 className="font-bold text-3xl sm:text-5xl  sm:w-[510px] custome-lg:w-[500px] leading-[45px] sm:leading-[60px] mb-6">
        Next.js Boilerplate for Your Business
      </h1>
      <p className="text-[#79808a] sm:w-[530px] mb-14">
        Handcrafted Next.js starter for your next - Startup, Business, Agency or
        SaaS Website. Comes with refreshing design, integrations and everything
        you need to kickstart your next web project.
      </p>
      <div className="flex justify-center custome-lg:justify-start items-center gap-5">
        <Button color="blue">
          <span className="flex items-center gap-2">
            Get Started <MdArrowRightAlt size={22} color="white" />
          </span>
        </Button>
        <Button color="noColor">
          <span className="flex items-center gap-2 text-white hover:text-[#4a6cf7] transition-all duration-150">
            <FaPlay size={22} /> How It Work
          </span>
        </Button>
      </div>
    </div>
  );
};

export default FirstSectionAbout;
