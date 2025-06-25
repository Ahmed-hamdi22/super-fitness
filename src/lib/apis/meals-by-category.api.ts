import { getMealsByCategory } from "@/app/api/Meals/Meals";
import { useQuery } from "@tanstack/react-query";

export default function useMealsByCategory(category: string) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["meals", category],
    queryFn: () => getMealsByCategory(category),
  });
  return { isLoading, data, error };
}
