import WorkoutsLogo from "@/components/common/workouts-logo";
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
      <section className="relative py-12 bg-[url('/assets/images/transform-bg.jpg')] bg-center bg-no-repeat h-[800px]">
        {/* Content container */}
        <div className="relative z-10  text-center">
          {/* Header content */}
          <div className="bg-light-silver-400/90 h-[380px] backdrop-blur-sm py-16 px-8 ">
            {/* Workoutslogo */}
            <div className="absolute -top-6 left-0 right-0 flex justify-center items-center gap-2 mb-8 ">
              <WorkoutsLogo text={t("about-us-title")} />

              {/* Icon and label for fitness */}
              <div className="relative z-10 flex items-center gap-2 -bottom-2 ">
                <DumbbellIcon text={t("fitness")} />
              </div>
            </div>

            {/* Main headline */}
            <TransformTitle className="text-dark-gray-800" />
            {/* Tabs */}
            <div className="">
              <TabFitness />
            </div>
          </div>
        </div>

        {/* Muscle slider  */}
        <div className="absolute md:top-12 top-16 left-0 right-0 transform translate-y-1/2 z-20">
          <MuscleGroupList variant="carousel" />
        </div>
      </section>
    </>
  );
}
