import { MdArrowRightAlt } from "react-icons/md";
import Button from "./Button";
import PortfolioItems from "./PortfolioItems";
import Section from "./Section";

const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <Section
        mainTitle="Gallery, Previews and Portfolio"
        titleText="PORTFOLIO"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus."
      />
      <div className="bg-[#0c0a09]">
        <PortfolioItems />
        <div className="flex justify-center pt-8 pb-20">
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
