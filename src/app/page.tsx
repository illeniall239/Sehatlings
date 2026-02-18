import HeroSplit from "@/components/home/HeroSplit";
import StatsCounter from "@/components/home/StatsCounter";
import SolutionsStack from "@/components/home/SolutionsStack";
import TelehealthFeature from "@/components/home/TelehealthFeature";
import MuainaVital from "@/components/home/MuainaVital";
import ImmersiveCTA from "@/components/home/ImmersiveCTA";

export default function Home() {
  return (
    <main key="home" className="bg-cream">
      {/* COMPLETE REDESIGN - All New Components */}
      <HeroSplit />
      <StatsCounter />
      <SolutionsStack />
      <TelehealthFeature />
      <MuainaVital />
      <ImmersiveCTA />
    </main>
  );
}
