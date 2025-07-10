import Card from "@/components/common/card";
import { IoCloseSharp } from "react-icons/io5";
import QueryStateHandler from "@/components/common/query-state-handler";
import useMealsCategories from "@/lib/apis/meals/meals-categories.api";
import { useTranslations } from "use-intl";
import ArrowRight from "@/components/common/arrow-right";
import WorkoutsLogo from "@/components/common/workouts-logo";
import DumbbellIcon from "@/components/common/dumbbell";

export default function HealthyNutrltions() {
  // Translation
  const t = useTranslations();

  // Hooks
  const { data: meals, isLoading, error } = useMealsCategories();

  const threeMeals = meals?.slice(0, 3) || [];

  return (
    <div className="relative w-full">
      <div className="absolute inset-0">
        {/* Healthy logo */}
        <div className="absolute top-12 left-0 right-0 z-10 flex justify-center items-center gap-2 mb-8">
          <WorkoutsLogo text={t("healthy")} />

          {/* Healthy nutrltions icon */}
          <div className="relative z-10 flex items-center top-8 left-4">
            <DumbbellIcon text={t("healthy-nutrltions")} />
          </div>
        </div>

        {/* Background image */}
        <div className="w-full h-full bg-healthy-nutrltions bg-cover bg-center" />

        {/* Layout */}
        <div className="absolute top-20 left-0 right-0 h-[414px] bg-light-silver-300/50 dark:bg-dark-gray-900/50 backdrop-blur-[86px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-6 lg:px-20 py-20 ">
        <div className="text-center mb-10">
          {/* Text */}
          <h2 className="text-2xl md:text-4xl font-bold font-baloo uppercase mt-12 text-dark-gray-800 dark:text-light-silver-300 ">
            {t("fuel-your-fitness-journey-with")}
          </h2>

          {/* Text */}
          <h2 className="text-2xl md:text-4xl font-baloo uppercase text-dark-gray-800 dark:text-light-silver-300">
            {t("customized")} <span className="text-flame-orange-500">{t("meal-plavs")} </span>
            {t("for-you")}
          </h2>
        </div>

        {/* Handling loading and error  */}
        <QueryStateHandler isLoading={isLoading} error={error}>
          {/* Card */}
          <div className="flex flex-wrap justify-center gap-8">
            {threeMeals.map((meal: Meals) => (
              <Card
                key={meal.idCategory}
                title={meal.strCategory}
                image={meal.strCategoryThumb}
                description={meal.strCategoryDescription}
                actionLabel={t("read-more")}
                actionIcon={<ArrowRight />}
                hideIcon={<IoCloseSharp />}
                className="h-[397px] w-full sm:w-[403px] bg-light-silver-300/50 backdrop-blur-md"
              />
            ))}
          </div>
        </QueryStateHandler>
      </div>
    </div>
  );
}
