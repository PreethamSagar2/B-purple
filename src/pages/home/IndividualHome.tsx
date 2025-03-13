
import HeroSection from "@/components/home/individual/HeroSection";
import FeaturesGrid from "@/components/home/individual/FeaturesGrid";
import StatsSection from "@/components/home/individual/StatsSection";

const IndividualHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
      <HeroSection />
      <FeaturesGrid />
      <StatsSection />
    </div>
  );
};

export default IndividualHome;
