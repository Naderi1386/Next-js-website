import React from "react";
import Brands from "./Brands";
import Section from "./Section";

const FinallSection = () => {
  return (
    <section>
      <Section
        mainTitle={
          <>
            Trusted by Global <br className="hidden md:block" /> Brands
          </>
        }
        caption="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus."
      >
        {" "}
        <div className="mt-24 border-b border-solid border-white/15 pb-28">
          <Brands />
        </div>
      </Section>
    </section>
  );
};

export default FinallSection;
