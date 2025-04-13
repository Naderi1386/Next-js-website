import About from "./About";
import Title from "./Title";

const ThirdSection = () => {
  return (
    <section id="about">
      <div className="px-8 sm:px-18 py-20 bg-[#0c0a09]">
        <div className="text-center text-white relative ">
          <Title>About</Title>
          <h2 className="font-bold md:w-[582px] md:mx-auto text-[34px]  md:text-[45px] leading-[58px]">
            Know Details About Our Company
          </h2>
          <p className="mt-7 md:mx-auto md:w-[640px] text-[#79808a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
      </div>
      <div className=" px-8 sm:px-18 pb-20 pt-28 bg-gradient-to-t from-[#0f172b] to-[#0c0a09]">
        <About />
      </div>
    </section>
  );
}

export default ThirdSection