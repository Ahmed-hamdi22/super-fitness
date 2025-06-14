import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";
import { GetRandomMuscle } from "@/lib/apis/auth/muscle-group.api";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ArrowUpRight from "@/components/common/arrow-long-right";
import { useTranslations } from "use-intl";

export default function MuscleGroupList() {
  // Translations
  const t = useTranslations();

  // State
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate
  const [searchParams] = useSearchParams();
  const [api, setApi] = useState<CarouselApi | null>(null);

  // Get selected muscle
  const selectedMuscleId = searchParams.get("muscleGroup");

  // Fetch muscles
  const {
    data: muscles = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["randomMuscles"],
    queryFn: GetRandomMuscle,
  });
  // Filter muscles based by id
  const displayedMuscles = selectedMuscleId
    ? muscles.filter((muscle: Muscle) => muscle._id === selectedMuscleId)
    : muscles;

  // Effect to update current index
  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Handle loading, error, or empty data

  if (isLoading) return <p>{t("loading")}</p>;
  if (isError) return <p>{t("is-error")}</p>;
  if (!muscles.length) return <p>{t("not-found")}</p>;

  return (
    <div className="px-16 py-10">
      <div className="relative">
        {/* Carousel wrapper */}
        <Carousel opts={{ align: "start" }} setApi={setApi} className="w-full">
          <CarouselContent className="-ml-4">
            {displayedMuscles.map((muscle: Muscle) => (
              <CarouselItem
                key={muscle._id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3"
              >
                {/* Muscle card   */}
                <div className="rounded-xl  hover:scale-[1.02] transition bg-soft-gray-200">
                  <img
                    src={muscle.image}
                    alt={muscle.name}
                    className="w-full h-[250px] object-cover"
                  />

                  {/*  Card content */}
                  <div className="p-4 flex flex-col justify-between h-20">
                    <h3 className="text-xl font-semibold uppercase  items-start text-darkGray1 mb-2">
                      {muscle.name}
                    </h3>

                    {/* Description */}
                    <div className="flex items-center gap-2 mb-2">
                      <button className="text-lg  font-medium capitalize font-baloo text-flame-orange-500  gap-1">
                        {t("explore")}
                      </button>
                      {/* Icon */}
                      <ArrowUpRight className="w-5 h-5 bg-flame-orange-500 text-dark-gray-1 rounded-full p-1" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel navigation arrows */}
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-0 z-10 rounded-full border border-flame-orange-300 text-flame-orange-500 hover:bg-flame-orange-200" />
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-0 z-10 rounded-full border border-flame-orange-300 text-flame-orange-500 hover:bg-flame-orange-200" />
        </Carousel>

        {/* Dots  */}
        <div className="mt-6 flex justify-center">
          <CarouselDots
            totalSlides={displayedMuscles.length}
            currentSlide={currentIndex}
            onDotClick={(index) => api?.scrollTo(index)}
            dotClassName={(index) =>
              `w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-flame-orange-500"
                  : "bg-soft-gray-300"
              }`
            }
          />
        </div>
      </div>
    </div>
  );
}
