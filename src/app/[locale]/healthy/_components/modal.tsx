import CategoriesTabs from "@/components/common/categories-tabs";
import QueryStateHandler from "@/components/common/query-state-handler";
import useCategoriesCarousel from "@/hooks/use-categories-carousel";

export default function Modal() {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    limitedMeals,
    error,
    isLoading,
  } = useCategoriesCarousel();

  return (
    <div className=" rounded-3xl border-2 border-darkGray3 min-h-screen w-[409px] px-3 py-6">
      {/* Levels */}
      <div className="flex flex-wrap gap-4 mb-4">
        {/* Categories tabs */}
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
              className="flex items-center gap-4  p-4 rounded-xl"
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

      {/* Video section */}

      <div className="relative w-full h-full  flex  justify-center items-center rounded-3xl">
        <img
          src={`/hqdefault.jpg`}
          alt="Exercise Thumbnail"
          className="absolute  w-full h-full object-cover opacity-50 rounded-3xl"
        />

        {/* Youtube link */}
        <div className="relative text-center z-10">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center bg-customOrange w-16 h-16 rounded-full text-white text-2xl "
          ></a>

          <h2 className="text-white text-3xl font-bold mb-4"></h2>
        </div>
      </div>
    </div>
  );
}
