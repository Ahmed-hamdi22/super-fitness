import AboutUsPage from "./_components/about-us/page";
import HealthyNutrltioPage from "./_components/healthy-nutrltions/page";
import HeroPage from "./_components/hero/page";
import WhyUsPage from "./_components/why-us/page";
import TransformWorkout from "./_components/transform-workout/page";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero */}
      <HeroPage />
      {/* About us */}
      <AboutUsPage />
      {/* Transform workout */}
      <TransformWorkout />

      {/* Healthy nutrltio */}
      <HealthyNutrltioPage />
      {/* Why us */}
      <WhyUsPage />
    </main>
  );
}
