import FeatureList from "./FeatureList";
import Title from "./Title";

const SecondSection = () => {
  return (
    <section id="features">
      <div className="px-8 sm:px-18 py-40 bg-[#0c0a09]">
        <div className="text-center text-white relative">
          <Title>Feature</Title>
          <h2 className="font-bold md:w-[582px] md:mx-auto text-[34px]  md:text-[45px] leading-[58px]">
            Essential Integrations with Modern Design
          </h2>
          <p className="mt-7 md:mx-auto md:w-[640px] text-[#79808a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
        <div className="mt-16">
          <FeatureList />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
