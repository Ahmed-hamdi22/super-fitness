import AboutUsPage from "./_components/about-us/page";
import FitnessClassPage from "./_components/fitness-class/page";
import HealthyNutrltioPage from "./_components/healthy-nutrltions/page";
import HeroPage from "./_components/hero/page";
import WhyUsPage from "./_components/why-us/page";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero */}
      <HeroPage />

      {/* About us */}
      <AboutUsPage />

      {/* Fitness class */}
      <FitnessClassPage />

      {/* Healthy nutrltio */}
      <HealthyNutrltioPage />

      {/* Why us */}
      <WhyUsPage />
    </main>
  );
}
