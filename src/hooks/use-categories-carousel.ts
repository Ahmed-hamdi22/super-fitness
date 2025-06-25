import { useEffect, useState } from "react";
import useMealsByCategory from "@/lib/apis/meals/meals-by-category.api";
import useCategories from "@/lib/apis/meals/meals-categories.api";
import { type CarouselApi } from "@/components/ui/carousel";

export default function useCategoriesCarousel() {
  const { data: categories = [] } = useCategories();

  // State
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Automatically select the first category
  useEffect(() => {
    if (!selectedCategory && categories.length > 0) {
      setSelectedCategory(categories[0].strCategory);
    }
  }, [categories, selectedCategory]);

  // Fetch meals for the selected category
  const { data: meals = [], isLoading, error } = useMealsByCategory(selectedCategory || "");

  // display six meals
  const chunkedMeals = [];
  for (let i = 0; i < meals.length; i += 6) {
    chunkedMeals.push(meals.slice(i, i + 6));
  }
  const limitedMeals = chunkedMeals[0] ?? [];

  // Carousel select event to track active slide
  useEffect(() => {
    if (!api) return;

    const updateIndex = () => setCurrent(api.selectedScrollSnap());

    api.on("select", updateIndex);
    setCount(api.scrollSnapList().length);
    updateIndex();

    return () => {
      api.off("select", updateIndex);
    };
  }, [api]);

  // shadcn carousel
  useEffect(() => {
    api?.scrollTo(0);
    setCurrent(0);
  }, [selectedCategory]);

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    chunkedMeals,
    limitedMeals,
    isLoading,
    error,
    setApi,
    current,
    count,
    scrollTo: (index: number) => api?.scrollTo(index),
  };
}
