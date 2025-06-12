import { useTranslations } from "use-intl";
import MuscleGroupList from "./_components/fitness-services";
import TabFitness from "./_components/tab-fitness-services";

export default function HealthyNutritionPage() {

  // Translations
  const t = useTranslations();

  return (
    <>
      {/* Main Section */}
      <section className="relative py-12 bg-[url('/assets/images/transform-bg.jpg')] bg-center bg-no-repeat h-[770px]">

        {/* Content Container */}
        <div className="relative z-10  text-center">
          {/* Header Content */}
          <div className="bg-light-silver-400/90 h-[420px] backdrop-blur-sm py-16 px-8 ">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white mb-8 leading-tight">
              {t.rich("transform-headline", {
                span: (v) => <span className="text-orange-500">{v}</span>,
              })}
            </h2>

            {/* Tabs */}
            <div className="">
              <TabFitness />
            </div>
          </div>
        </div>

        {/* Muscle Slider  */}
        <div className="absolute bottom-48 left-0 right-0 transform translate-y-1/2 z-20">
            <MuscleGroupList />
        </div>
      </section>
    </>
  );
}