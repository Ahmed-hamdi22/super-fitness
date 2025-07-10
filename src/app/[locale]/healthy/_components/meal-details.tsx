import CategoriesTabs from "@/components/common/categories-tabs";
import { extractIngredients, IngredientItem } from "@/components/common/Ingredients";
import QueryStateHandler from "@/components/common/query-state-handler";
import WorkoutsLogo from "@/components/common/workouts-logo";
import Header from "@/components/layout/header";
import useCategoriesCarousel from "@/hooks/use-categories-carousel";
import useMealDetails from "@/lib/apis/meals/meal-details.api";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslations } from "use-intl";


export default function Mealdetails() {
  // Translations
  const t = useTranslations();

  // Navigation
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Hooks
  const { isLoading, data, error } = useMealDetails(id || "");
  const { categories, selectedCategory, setSelectedCategory, limitedMeals } =
    useCategoriesCarousel();

  const meal = data?.[0];

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-16 py-5 dark:bg-dark-gray-900 dark:text-light-silver-300">
      {/* Header */}
      <div className="mb-32">
        <Header />

        {/* Logo */}
        <div className="flex flex-col justify-center items-center relative">
          <div className="absolute -top-6 flex justify-center pointer-events-none">
            <WorkoutsLogo text={t("healthy")} />
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6 mt-3">
          {/* Sidebar (Categories + Meals) */}
          <div className="w-full lg:w-[409px] rounded-3xl border border-soft-gray-500 px-4">
            {/* Tabs */}
            <div className="mt-3">
              <CategoriesTabs
                categories={categories.slice(0, 3)}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>

            {/* Meals */}
            <QueryStateHandler isLoading={isLoading} error={error}>
              <div className="flex flex-col divide-y divide-dark-gray-900 dark:divide-soft-gray-500">
                {limitedMeals.map((meal) => (
                  <div
                    key={meal.idMeal}
                    onClick={() => navigate(`/mealsdetails/${meal.idMeal}`)}
                    className="flex items-center gap-4 px-2 py-4 cursor-pointer"
                  >
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-16 h-16 rounded-3xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-base font-semibold">{meal.strMeal}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </QueryStateHandler>
          </div>

          {/* Meal details */}
          <div className="flex-1 mt-6 lg:mt-0">
            <QueryStateHandler isLoading={isLoading} error={error}>
              {meal && (
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[536px] mb-6 rounded-3xl overflow-hidden">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center px-6 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-2">
                      {meal.strMeal}
                    </h1>
                    <p className="text-base sm:text-lg font-normal mb-4 max-w-2xl">
                      Lorem ipsum dolor sit amet consectetur. Tempus volutpat Ut nisl morbi.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-2">
                      <div className="text-center border border-soft-gray-400 w-20 h-16 flex flex-col justify-center items-center rounded-3xl">
                        <span className="text-sm">100 kC</span>
                        <p className="font-semibold text-sm text-flame-orange-500">Energy</p>
                      </div>
                      <div className="text-center border border-soft-gray-400 w-20 h-16 flex flex-col justify-center items-center rounded-3xl">
                        <span className="text-sm">15 g</span>
                        <p className="font-semibold text-sm text-flame-orange-500">Protein</p>
                      </div>
                      <div className="text-center border border-soft-gray-400 w-20 h-16 flex flex-col justify-center items-center rounded-3xl">
                        <span className="text-sm">36 g</span>
                        <p className="font-semibold text-sm text-flame-orange-500">Carbs</p>
                      </div>
                      <div className="text-center border border-soft-gray-400 w-20 h-16 flex flex-col justify-center items-center rounded-3xl">
                        <span className="text-sm">20 g</span>
                        <p className="font-semibold text-sm text-flame-orange-500">Fat</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </QueryStateHandler>

            {/* Ingredients */}
            <h2 className="text-2xl font-bold mb-3">Ingredients</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 text-sm">
              {extractIngredients(meal).map((item, i) => (
                <IngredientItem key={i} ingredient={item.ingredient} measure={item.measure} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
