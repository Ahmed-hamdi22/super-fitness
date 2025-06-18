import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { CarouselDots } from "@/components/ui/carousel-dots";
import FoodCard from "@/components/common/card";
import CategoriesTabs from "@/components/common/categories-tabs";
import useCategoriesCarousel from "@/hooks/use-categories-carousel";
import QueryStateHandler from "@/components/common/query-state-handler";
import { useTranslations } from "use-intl";
import ArrowRight from "@/components/common/arrow-right";

export default function CategoriesCarousel() {
  // Translation
  const t = useTranslations();

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
    <div className="relative w-full">
      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <div className="w-full h-full bg-healthy bg-cover bg-center" />

        {/* Layout */}
        <div className="absolute top-0 left-0 right-0 h-full bg-white bg-opacity-60 backdrop-blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-6 lg:px-20 py-20">
        <div className="text-center mb-8">
          {/* Text */}
          <h2 className="text-2xl md:text-4xl font-bold uppercase mt-3">
            {t("fuel-your-fitness-journey-with")}
          </h2>

          {/* Text */}
          <h2 className="text-2xl md:text-4xl font-baloo uppercase">
            {t("customized")}{" "}
            <span className="text-custom-orange-500">{t("meal-plavs")} </span>
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
              className="w-full max-w-7xl mx-auto overflow-hidden mt-10"
            >
              <CarouselContent className="flex flex-row rtl:flex-row-reverse">
                {chunkedMeals.map((group, index) => (
                  <CarouselItem key={index}>
                    {/* Card */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {group.map((meal) => (
                        <FoodCard
                          key={meal.idMeal}
                          title={meal.strMeal}
                          image={meal.strMealThumb}
                          actionLabel={t("explore")}
                          actionIcon={<ArrowRight />}
                          className="h-[397px] w-full sm:w-[403px]"
                          mode="Exploer"
                          onClick={() => meal.idMeal}
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
                        ? "bg-custom-orange-500 w-5"
                        : "bg-white"
                    )
                  }
                />
              </div>
            </Carousel>
          )}
        </QueryStateHandler>
      </div>
    </div>
  );
}
