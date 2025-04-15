import Title from "./Title";

const ClientSection = () => {
  return (
    <section className="">
      <div className="px-8 sm:px-18 py-20 bg-[#0c0a09]">
        <div className="text-center text-white relative">
          <Title>TESTIMONIAL</Title>
          <h2 className="font-bold md:w-[582px] md:mx-auto text-[34px]  md:text-[45px] leading-[58px]">
            What Our Clients Say About Us
          </h2>
          <p className="mt-7 md:mx-auto md:w-[640px] text-[#79808a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ClientSection