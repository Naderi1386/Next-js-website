import About from "./About";
import Section from "./Section";

const ThirdSection = () => {
  return (
    <section id="about">
      <Section
        caption=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus."
        titleText="About"
        mainTitle="Know Details About Our Company"
      />
      <div className=" px-8 sm:px-18 pb-20  bg-gradient-to-t from-[#0f172b] to-[#0c0a09]">
        <About />
      </div>
    </section>
  );
};

export default ThirdSection;
