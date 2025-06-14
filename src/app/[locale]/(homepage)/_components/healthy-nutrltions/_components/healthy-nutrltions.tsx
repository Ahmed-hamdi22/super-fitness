import FoodCard from "@/components/common/card";
import { IoCloseSharp } from "react-icons/io5";
import QueryStateHandler from "@/components/common/query-state-handler";
import useMealsCategories from "@/lib/apis/meals-categories.api";
import { useTranslations } from "use-intl";
import ArrowRight from "@/components/common/arrow-right";

export default function HealthyNutrltions() {
  // Translation
  const t = useTranslations();

  const { data: meals, isLoading, error } = useMealsCategories();

  // Selecting the first three categories
  const firstthreemeals = meals?.slice(0, 3) || [];

  return (
    <div className="relative w-full">
      <div className="absolute inset-0">
        {/* Background image */}
        <div className="w-full h-full bg-healthy-nutrltions bg-cover bg-center" />

        {/* Layout */}
        <div className="absolute top-14 left-0 right-0 h-3/5 bg-white/60 backdrop-blur-[86px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-6 lg:px-20 py-20">
        <div className="text-center mb-16">
          {/* Text */}
          <h2 className="text-2xl md:text-4xl font-bold uppercase mt-5">
            {t("fuel-your-fitness-journey-with")}
          </h2>

          {/* Text */}
          <h2 className="text-2xl md:text-4xl font-baloo uppercase">
            {t("customized")}{" "}
            <span className="text-custom-orange">{t("meal-plavs")} </span>
            {t("for-you")}
          </h2>
        </div>

        {/* Handling loading and error  */}
        <QueryStateHandler isLoading={isLoading} error={error}>
          {/* Card */}
          <div className="flex flex-wrap justify-center gap-8">
            {firstthreemeals.map((meal) => (
              <FoodCard
                key={meal.idCategory}
                title={meal.strCategory}
                image={meal.strCategoryThumb}
                description={meal.strCategoryDescription}
                actionLabel={t("read-more")}
                actionIcon={<ArrowRight />}
                hideIcon={<IoCloseSharp />}
                className="h-[397px] w-full sm:w-[403px] bg-white/50 backdrop-blur-md"
              />
            ))}
          </div>
        </QueryStateHandler>
      </div>
    </div>
  );
}
