import { useTranslations } from "use-intl";
import MuscleGroupList from "./_components/fitness-services";
import TabFitness from "./_components/tab-fitness-services";
import { Dumbbell } from "lucide-react";

export default function HealthyNutritionPage() {
  // Translations
  const t = useTranslations();

  return (
    <>
      {/* Main section */}
      <section className="relative py-12 bg-[url('/assets/images/transform-bg.jpg')] bg-center bg-no-repeat h-[770px]">
        {/* Content container */}
        <div className="relative z-10  text-center">
          {/* Header content */}
          <div className="bg-light-silver-400/90 h-[380px] backdrop-blur-sm py-16 px-8 ">
            <div className="absolute -top-6 left-0 right-0 flex justify-center items-center gap-2 mb-8">
              <h2 className="absolute  text-5xl sm:text-7xl font-extrabold font-montserrat uppercase text-gray-200 opacity-30 ">
                {t("about-us-title")}
              </h2>

              {/* Icon and label for fitness */}
              <div className="relative z-10 flex items-center gap-2 -bottom-2 ">
                <Dumbbell className="w-5 h-5 text-flame-orange-500 rotate-45" />
                <span className="text-sm font-semibold text-flame-orange-500">
                  {t("fitness")}
                </span>
              </div>
            </div>

            {/* Main headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white mb-8 leading-tight">
              {t.rich("transform-headline", {
                span: (v) => <span className="text-flame-orange-500">{v}</span>,
              })}
            </h2>

            {/* Tabs */}
            <div className="">
              <TabFitness />
            </div>
          </div>
        </div>

        {/* Muscle Slider  */}
        <div className="absolute bottom-60 left-0 right-0 transform translate-y-1/2 z-20">
          <MuscleGroupList />
        </div>
      </section>
    </>
  );
}
