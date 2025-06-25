import WorkoutsLogo from "@/components/common/workouts-logo";
import DumbbellIcon from "@/components/common/dumbbell";
import TransformTitle from "@/components/common/transform-title";
import MuscleGroupList from "../../../components/common/transform-workout";
import TabFitness from "@/components/common/tab-transform";
import { useTranslations } from "use-intl";

export default function Classes() {
  // useTranslation
  const t = useTranslations();
  return (
    <>
      {/* Main section */}
      <section className="bg-gray- bg-opacity-50 backdrop-blur-2xl relative py-12">
        {/* Content container */}
        <div className="relative z-10  text-center">
          {/* Header content */}
          <div className="absolute -top-6 left-0 right-0 flex justify-center items-center gap-2 mb-8">
            <WorkoutsLogo text={t("about-us-title")} />

            {/* Icon and label for fitness */}
            <div className="relative z-10 flex items-center gap-2 -bottom-4 capitalize ">
              <DumbbellIcon text={t("fitness")} />
            </div>
          </div>

          {/* Main headline */}
          <div className="pt-8">
            <TransformTitle />
          </div>
          {/* Tabs */}
          <div>
            <TabFitness />
          </div>
        </div>
        {/* Muscle Slider */}
        <MuscleGroupList variant="grid" />
      </section>
    </>
  );
}
