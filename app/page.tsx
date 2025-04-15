import ClientSection from "./_components/ClientSection";
import FirstSection from "./_components/FirstSection";
import PortfolioSection from "./_components/PortfolioSection";
import SecondSection from "./_components/SecondSection";
import TeamSection from "./_components/TeamSection";
import ThirdSection from "./_components/ThirdSection";

export default function Home() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <TeamSection />
      <PortfolioSection />
      <ClientSection/>
    </div>
  );
}
