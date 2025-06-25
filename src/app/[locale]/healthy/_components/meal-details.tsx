import CategoriesTabs from "@/components/common/categories-tabs";
import { extractIngredients, IngredientItem } from "@/components/common/Ingredients";
import QueryStateHandler from "@/components/common/query-state-handler";
import useCategoriesCarousel from "@/hooks/use-categories-carousel";
import useMealDetails from "@/lib/apis/meal-details.api";
import { useNavigate, useParams } from "react-router-dom";

export default function Modal() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { isLoading, data, error } = useMealDetails(id || "");
  const { categories, selectedCategory, setSelectedCategory, limitedMeals } =
    useCategoriesCarousel();

  const meal = data?.[0];

  return (
    <div className="flex gap-6">
     
      <div className="w-[409px] rounded-3xl border-2 border-darkGray3 min-h-screen px-3 py-6">
        {/* Levels */}
        <div className="flex flex-wrap gap-4 mb-4">
          <CategoriesTabs
            categories={categories.slice(0, 3)}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        <QueryStateHandler isLoading={isLoading} error={error}>
          <div className="space-y-4 mt-10">
            {limitedMeals.map((meal) => (
              <div
                key={meal.idMeal}
                onClick={() => navigate(`/mealsdetails/${meal.idMeal}`)}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-darkGray2 cursor-pointer"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-base font-semibold">{meal.strMeal}</h3>
                </div>
              </div>
            ))}
          </div>
        </QueryStateHandler>
      </div>
      <div className="flex-1 ">
        <QueryStateHandler isLoading={isLoading} error={error}>
          {meal && (
            <div className="relative w-full h-[340px] mb-6 rounded-3xl overflow-hidden">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full max-h-full object-cover "
              />

              
              <div className="absolute inset-0 flex flex-col  gap-4 justify-center items-center px-6 text-white">
                <h1 className="text-5xl font-medium mb-2">{meal.strMeal}</h1>
                <p className="text-gray-200 text-lg font-normal mb-4 max-w-2xl ">
                  Lorem ipsum dolor sit amet consectetur. Tempus volutpat Ut nisl morbi.
                </p>

                <div className="flex gap-6 mb-2">
                  <div className="text-center border border-soft-gray-400 w-16 h-14 flex flex-col justify-center items-center rounded-3xl">
                    <span className="text-base text-gray-200">100 kC</span>
                    <p className="font-semibold text-base text-custom-orange-500">Energy</p>
                  </div>
                  <div className="text-center w-16 h-14 border border-soft-gray-400 flex flex-col justify-center items-center rounded-3xl">
                    <span className="text-base text-gray-200">15 g</span>
                    <p className="font-semibold text-base text-custom-orange-500">Protein</p>
                  </div>
                  <div className="text-center w-16 h-14 border border-soft-gray-400 flex flex-col justify-center items-center rounded-3xl">
                    <span className="text-base text-gray-200">36 g</span>
                    <p className="font-semibold text-base text-custom-orange-500">Carbs</p>
                  </div>
                  <div className="text-center text-base border border-soft-gray-400 w-16 h-14 flex flex-col justify-center items-center rounded-3xl">
                    <span className="text-sm text-gray-200">20 g</span>
                    <p className="font-semibold text-base text-custom-orange-500">Fat</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </QueryStateHandler>
        
        {/* Ingredients */}
        <h2 className="text-2xl font-bold mb-3">Ingredients</h2>
        <div className="grid grid-cols-2  gap-x-12 gap-y-2 text-sm">
          {extractIngredients(meal).map((item, i) => (
            <IngredientItem key={i} ingredient={item.ingredient} measure={item.measure}  />
          ))}
        </div>
      </div>
    </div>
  );
}
