import AboutUsPage from "./_components/about-us/page";
import FitnessClassPage from "./_components/fitness-class/page";
import HealthyNutrltioPage from "./_components/healthy-nutrltions/page";
import HeroPage from "./_components/hero/page";
import WhyUsPage from "./_components/why-us/page";

export default function App() {
  return (
    <main className="">
      {/* Hero */}
      <HeroPage />

      {/* About us */}
      <AboutUsPage />

      {/* Fitness class */}
      <FitnessClassPage />

      {/* Why us */}
      <WhyUsPage />

      {/* Healthy nutrltio */}
      <HealthyNutrltioPage />
    </main>
  );
}
