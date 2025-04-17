import React from "react";
import Brands from "./Brands";

const FinallSection = () => {
  return (
    <section>
      <div className="px-8 sm:px-18 pt-40 pb-20 bg-[#0c0a09]">
        <div className="text-center text-white relative">
          <h2 className="font-bold md:w-[582px] md:mx-auto text-[34px]  md:text-[45px] leading-[58px]">
            Trusted by Global <br className="hidden md:block" /> Brands
          </h2>
          <p className="mt-7 md:mx-auto md:w-[640px] text-[#79808a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
        <div className="mt-24 border-b border-solid border-white/15 pb-28">
          <Brands />
        </div>
      </div>
    </section>
  );
};

export default FinallSection;
