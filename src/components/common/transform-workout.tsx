import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import { useRandomMuscles } from "@/hooks/use-random-muscles";
import Card from "./card";
import ArrowRight from "@/components/common/arrow-right";

export default function MuscleGroupList({ variant }: { variant?: "carousel" | "grid" }) {
  // Translations
  const t = useTranslations();

  // State
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate
  const [searchParams] = useSearchParams();
  const [api, setApi] = useState<CarouselApi | null>(null);
  const navigate = useNavigate();

  // Get selected muscle
  const selectedMuscleId = searchParams.get("muscleGroup");

  // Fetch muscles
  const { data: muscles = [], isLoading, isError } = useRandomMuscles();
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

  // Function to get carousel items based on the variant
  function getCarouselItems() {
    if (variant === "carousel") {
      return displayedMuscles.map((muscle) => (
        <CarouselItem
          key={muscle._id}
          className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
        >
          <div onClick={() => navigate(`/classes/${muscle._id}`)} className="cursor-pointer">
            <Card
              title={muscle.name}
              image={muscle.image}
              actionLabel={t("explore")}
              actionIcon={<ArrowRight />}
              className="w-[320px] h-[397px] sm:w-[400px]"
              mode="Exploer"
            />
          </div>
        </CarouselItem>
      ));
    }

    // Create muscles grid layout
    return Array.from({ length: Math.ceil(displayedMuscles.length / 2) }, (_, i) => {
      const grid = displayedMuscles.slice(i * 2, i * 2 + 2);
      return (
        <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
          <div className="flex flex-col gap-6 w-full max-w-[403px] mx-auto cursor-pointer">
            {grid.map((muscle: Muscle) => (
              <div key={muscle._id} onClick={() => navigate(`/classes/${muscle._id}`)}>
                <Card
                  title={muscle.name}
                  image={muscle.image}
                  actionLabel={t("explore")}
                  actionIcon={<ArrowRight />}
                  className="w-[380px] h-[350px] bg-white/50 backdrop-blur-md "
                  mode="Exploer"
                />
              </div>
            ))}
          </div>
        </CarouselItem>
      );
    });
  }

  return (
    <div className="px-16 py-10">
      {/* Carousel */}
      <div className="relative">
        <Carousel opts={{ align: "start", slidesToScroll: 1 }} setApi={setApi} className="w-full">
          {/*  Carousel content */}
          <CarouselContent className="-ml-4">{getCarouselItems()}</CarouselContent>
        </Carousel>

        {/* Dots  */}
        <div className="mt-5 flex justify-center">
          <CarouselDots
            totalSlides={
              variant === "carousel"
                ? displayedMuscles.length
                : Math.ceil(displayedMuscles.length / 3)
            }
            currentSlide={currentIndex}
            onDotClick={(index) => api?.scrollTo(index)}
            dotClassName={(index) =>
              `w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-flame-orange-500 w-5" : "bg-soft-gray-900"
              }`
            }
          />
        </div>
      </div>
    </div>
  );
}
