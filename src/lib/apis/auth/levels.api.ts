import type { LevelsResponse } from "@/lib/types/levels";
import axios from "axios";

export const getLevelsByPrimeMover = async (primeMoverMuscleId: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/levels/difficulty-levels/by-prime-mover`,
    {
      params: {
        primeMoverMuscleId,
      },
    }
  );

  const payload: APIResponse<LevelsResponse> = await response.data;

  return payload;
};
