import ClientInfo from "./ClientInfo";
import Section from "./Section";

const ClientSection = () => {
  return (
    <section>
      <Section
        titleText="TESTIMONIAL"
        mainTitle="What Our Clients Say About Us"
        caption=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus."
      />
      <div className="bg-gradient-to-t from-[#1d293d] to-[#0c0a09] px-10 md:px-28 lg:px-52 py-10 overflow-hidden">
        <div>
          <ClientInfo />
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
