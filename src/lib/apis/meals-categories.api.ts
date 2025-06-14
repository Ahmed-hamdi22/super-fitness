import { getMealsCategories } from "@/app/api/Meals/Meals";
import { useQuery } from "@tanstack/react-query";

export default function useMealsCategories() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["meals"],
    queryFn: getMealsCategories,
  });

  return { isLoading, data, error };
}
