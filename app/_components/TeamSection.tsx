import DevelopersList from "./DevelopersList";
import Section from "./Section";
const TeamSection = () => {
  return (
    <section>
      <Section
        titleText="OUR"
        mainTitle="Meet With Our Creative Dedicated Team"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus."
      >
        <DevelopersList />;
      </Section>
    </section>
  );
};

export default TeamSection;
