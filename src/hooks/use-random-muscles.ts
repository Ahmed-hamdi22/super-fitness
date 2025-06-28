import { GetRandomMuscle } from "@/lib/apis/muscle-group.api";
import { useQuery } from "@tanstack/react-query";

export function useRandomMuscles() {
  return useQuery({
    queryKey: ["randomMuscles"],
    queryFn: GetRandomMuscle,
  });
}
