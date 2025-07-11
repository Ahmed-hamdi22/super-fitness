import WorkoutsLogo from "@/components/common/logo";
import DumbbellIcon from "@/components/common/dumbbell";
import TransformTitle from "@/components/common/transform-title";
import TabFitness from "@/components/common/tab-transform";
import MuscleGroupList from "@/components/common/transform-workout";
import { useTranslations } from "use-intl";

export default function TransformWorkout() {
  // Translation
  const t = useTranslations();
  return (
    <>
      {/* Main section */}
      <section className="relative py-12 bg-[url('/src/assets/images/transform-bg.jpg')] bg-center bg-no-repeat h-[880px] md:h-[800px]">
        {/* Content container */}
        <div className="relative z-10  text-center">
          {/* Header content */}
          <div className=" bg-light-silver-300/50 dark:bg-dark-gray-900/50 backdrop-blur-[86px] h-[420px] md:h-96 py-16 px-8 ">
            {/* Workoutslogo */}
            <div className="absolute -top-6 left-0 right-0 flex justify-center items-center gap-2 mb-8 ">
              <WorkoutsLogo text={t("about-us-title")} />

              {/* Icon and label for fitness */}
              <div className="relative z-10 flex items-center gap-2 -bottom-2 capitalize ">
                <DumbbellIcon text={t("fitness")} />
              </div>
            </div>

            {/* Main headline */}
            <TransformTitle />
            {/* Tabs */}
            <div className="">
              <TabFitness />
            </div>
          </div>
        </div>

        {/* Muscle slider  */}
        <div className="absolute md:top-16 top-40 left-0 right-0 transform translate-y-1/2 z-20">
          <MuscleGroupList variant="carousel" />
        </div>
      </section>
    </>
  );
}
