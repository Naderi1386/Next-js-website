import { MdArrowRightAlt } from "react-icons/md";
import Button from "./Button";
import PortfolioItems from "./PortfolioItems";
import Title from "./Title";

const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <div className="px-8 sm:px-18 py-20 bg-[#0c0a09]">
        <div className="text-center text-white relative">
          <Title>PORTFOLIO</Title>
          <h2 className="font-bold md:w-[582px] md:mx-auto text-[34px]  md:text-[45px] leading-[58px]">
            Gallery, Previews and Portfolio
          </h2>
          <p className="mt-7 md:mx-auto md:w-[640px] text-[#79808a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
      </div>
      <div className="bg-[#0c0a09]">
        <PortfolioItems />
        <div className="flex justify-center py-8">
          <Button color="blue">
            <span className="flex items-center gap-2">
              See More Projects <MdArrowRightAlt size={22} color="white" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
