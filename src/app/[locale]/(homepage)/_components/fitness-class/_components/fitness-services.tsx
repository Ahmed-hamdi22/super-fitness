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


  const t = useTranslations();

    const [currentIndex, setCurrentIndex] = useState(0);

  const [searchParams] = useSearchParams();
  const [api, setApi] = useState<CarouselApi | null>(null);


    const selectedMuscleId = searchParams.get("muscleGroup");

  const {
    data: muscles = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["randomMuscles"],
    queryFn: GetRandomMuscle,
  });
const displayedMuscles = selectedMuscleId
  ? muscles.filter((muscle: Muscle) => muscle._id === selectedMuscleId)
  : muscles;

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

  if (isLoading) return <p>Loading muscles...</p>;
  if (isError) return <p>Something went wrong while fetching muscles.</p>;
  if (!muscles.length) return <p>No muscles found.</p>;

  return (
    <div className="px-16 py-10">
      <div className="relative">
        <Carousel
          opts={{ align: "start" }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {displayedMuscles.map((muscle: Muscle) => (
              <CarouselItem
                key={muscle._id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="rounded-xl overflow-hidden shadow-lg border hover:scale-[1.02] transition bg-white">
                  <img
                    src={muscle.image}
                    alt={muscle.name}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between h-20">
                    <h3 className="text-xl font-semibold uppercase  items-start text-darkGray1 mb-2">
                      {muscle.name}
                    </h3>
                    <button className="text-base font-baloo text-orange-600 flex items-center gap-1">
                      {t("explore")}
                      <ArrowUpRight className="w-5 h-5 bg-flame-orange-500 text-darkGray1 rounded-full p-1" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

            {/* Arrow Left */}
<CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-0 z-10 rounded-full border border-orange-300 text-orange-500 hover:bg-orange-100" />

    {/* Arrow Right */}
<CarouselNext className="absolute top-1/2 -translate-y-1/2 right-0 z-10 rounded-full border border-orange-300 text-orange-500 hover:bg-orange-100" />
  </Carousel>

        {/* Dots under carousel */}
        <div className="mt-6 flex justify-center">
          <CarouselDots
            totalSlides={displayedMuscles.length}
            currentSlide={currentIndex}
            onDotClick={(index) => api?.scrollTo(index)}
            dotClassName={(index) =>
              `w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
              }`
            }
          />
        </div>
      </div>
    </div>
  );
}
