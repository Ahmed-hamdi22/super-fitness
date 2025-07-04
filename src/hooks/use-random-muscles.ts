import { useQuery } from "@tanstack/react-query";
import { GetRandomMuscle } from "@/lib/apis/auth/muscle-group.api";

export function useRandomMuscles() {
  return useQuery({
    queryKey: ["randomMuscles"],
    queryFn: GetRandomMuscle,
  });
}