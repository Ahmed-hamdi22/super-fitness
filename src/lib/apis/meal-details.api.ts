import { useQuery } from "@tanstack/react-query";
import { getMealDetails } from "./../../app/api/Meals/Meals";

export default function useMealDetails(id: string) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["meal", id],
    queryFn: () => getMealDetails(id),
  });
  return { isLoading, data, error };
}
