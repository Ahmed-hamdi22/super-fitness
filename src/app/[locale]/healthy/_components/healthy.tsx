import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { CarouselDots } from "@/components/ui/carousel-dots";
import Card from "@/components/common/card";
import CategoriesTabs from "@/components/common/categories-tabs";
import useCategoriesCarousel from "@/hooks/use-categories-carousel";
import QueryStateHandler from "@/components/common/query-state-handler";
import { useTranslations } from "use-intl";
import ArrowRight from "@/components/common/arrow-right";
import { useNavigate } from "react-router-dom";
import WorkoutsLogo from "@/components/common/workouts-logo";
import DumbbellIcon from "@/components/common/dumbbell";
import Header from "@/components/layout/header";

export default function CategoriesCarousel() {
  // Translation
  const t = useTranslations();

  // Navigate
  const navigate = useNavigate();

  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    chunkedMeals,
    setApi,
    current,
    count,
    error,
    isLoading,
    scrollTo,
  } = useCategoriesCarousel();

  return (
    <>
      <div className="bg-light-silver-200 py-5 dark:bg-dark-gray-900">
        <Header />
      </div>

      <div className="relative w-full bg-white">
        <div className="absolute inset-0 z-0">
          {/* Healthy logo */}
          <div className="absolute -top-6 left-0 z-10 right-0 flex justify-center items-center gap-2">
            <WorkoutsLogo text={t("healthy")} />

            {/* Icon and label for healthy nutrltions */}
            <div className="relative z-10 flex items-center top-4 left-4">
              <DumbbellIcon text={t("healthy-nutrltions")} />
            </div>
          </div>

          {/* Background image */}
          <div className="w-full h-full bg-healthy bg-cover bg-center hidden dark:block" />

          {/* Layout */}
          <div className="absolute top-0 hidden dark:block left-0 right-0 h-full bg-light-silver-300 bg-opacity-60 inset-0 backdrop-blur-2xl dark:bg-dark-gray-900/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto px-6 lg:px-20 py-10">
          <div className="text-center mb-4">
            {/* Text */}
            <h2 className="text-2xl md:text-4xl font-bold font-baloo uppercase mt-3 text-dark-gray-800 dark:text-light-silver-300">
              {t("fuel-your-fitness-journey-with")}
            </h2>

            {/* Text */}
            <h2 className="text-2xl md:text-4xl font-baloo uppercase text-dark-gray-800 dark:text-light-silver-300">
              {t("customized")} <span className="text-flame-orange-500">{t("meal-plavs")} </span>
              {t("for-you")}
            </h2>
          </div>

          {/* Categories tabs */}
          <CategoriesTabs
            categories={categories.slice(0, 3)}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {/* Handling loading and error  */}
          <QueryStateHandler isLoading={isLoading} error={error}>
            {chunkedMeals.length > 0 && (
              <Carousel
                setApi={setApi}
                opts={{ slidesToScroll: 1, align: "start", loop: true }}
                className="w-full max-w-7xl mx-auto overflow-hidden mt-5"
              >
                <CarouselContent className="flex flex-row rtl:flex-row-reverse">
                  {chunkedMeals.map((meals) => (
                    <CarouselItem key={meals[0].idMeal}>
                      {/* Card */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {meals.map((meal: MealByCategory) => (
                          <Card
                            key={meal.idMeal}
                            title={meal.strMeal}
                            image={meal.strMealThumb}
                            actionLabel={t("explore")}
                            actionIcon={<ArrowRight />}
                            className="h-[397px] w-full sm:w-[403px] cursor-pointer"
                            mode="Exploer"
                            onClick={() => navigate(`/mealsdetails/${meal.idMeal}`)}
                            onActionClick={() => navigate(`/mealsdetails/${meal.idMeal}`)}
                          />
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Carousel dots */}
                <div className="w-full flex justify-center mt-5">
                  <CarouselDots
                    totalSlides={count}
                    currentSlide={current}
                    onDotClick={scrollTo}
                    className="my-4"
                    dotClassName={(index) =>
                      cn(
                        "w-2 h-2 rounded-full transition-all mx-1",
                        current === index
                          ? "bg-flame-orange-500 w-5"
                          : "bg-dark-gray-800 dark:bg-white",
                      )
                    }
                  />
                </div>
              </Carousel>
            )}
          </QueryStateHandler>
        </div>
      </div>
    </>
  );
}
