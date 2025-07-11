import type { LevelsResponse } from "@/lib/types/levels";
import axios from "axios";

export const getLevelsByPrimeMover = async (primeMoverMuscleId: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/levels/difficulty-levels/by-prime-mover`,
    {
      headers: {
        "Accept-Language": localStorage.getItem("locale") || "en",
      },
  
      params: {
        primeMoverMuscleId,
      },
    }
  );

  const payload: APIResponse<LevelsResponse> = await response.data;

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
};
