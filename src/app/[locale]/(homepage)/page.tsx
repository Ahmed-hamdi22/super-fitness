import AboutUsPage from "./_components/about-us/page";
import HealthyNutrltioPage from "./_components/healthy-nutrltions/page";
import HeroPage from "./_components/hero/page";
import WhyUsPage from "./_components/why-us/page";
import TransformWorkout from "./_components/transform-workout/page";
import AutoScrollBanner from "@/components/common/auto-scroll";

export default function App() {
  return (
    <main className="">
      {/* Hero */}
      <HeroPage />
      <AutoScrollBanner />

      {/* About us */}
      <AboutUsPage />

      {/* Transform workout */}
      <TransformWorkout />

      {/* Why us */}
      <WhyUsPage />

      {/* Healthy nutrltio */}
      <HealthyNutrltioPage />
    </main>
  );
}
