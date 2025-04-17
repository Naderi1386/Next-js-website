import FeatureList from "./FeatureList";
import Section from "./Section";
 
const SecondSection = () => {
  return (
    <section id="features">
      <Section
        titleText="Feature"
        mainTitle="Essential Integrations with Modern Design"
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
      >
        <div className="mt-16">
          <FeatureList />
        </div>
        ;
      </Section>
    </section>
  );
};

export default SecondSection;
