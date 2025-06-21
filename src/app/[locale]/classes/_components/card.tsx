import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Card from "@/components/common/card";
import { IoCloseSharp } from "react-icons/io5";
import useMealsCategories from "@/lib/apis/meals-categories.api";
import QueryStateHandler from "@/components/common/query-state-handler";
import { useTranslations } from "use-intl";
import ArrowRight from "@/components/common/arrow-right";

export default function ClassesCard() {
  // Translation
  const t = useTranslations();

  const { data: categories, isLoading, error } = useMealsCategories();

  return (
    // Handling loading and error
    <QueryStateHandler isLoading={isLoading} error={error}>
      {/* Card */}
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {categories?.map((category: Meals) => (
            <CarouselItem className="basis-[75%] sm:basis-1/2 lg:basis-2/5">
              <Card
                key={category.idCategory}
                title={category.strCategory}
                image={category.strCategoryThumb}
                description={category.strCategoryDescription}
                actionLabel={t("read-more")}
                actionIcon={<ArrowRight />}
                hideIcon={<IoCloseSharp />}
                className="h-[397px] w-[403px] bg-white/50 backdrop-blur-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </QueryStateHandler>
  );
}
