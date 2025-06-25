import axios from "axios";

export const getAllExercies = async (primeMoverMuscleId: string, difficultyLevelId: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/exercises/by-muscle-difficulty`,
    {
      params: {
        primeMoverMuscleId,
        difficultyLevelId,
      },
    }
  );

  const payload: APIResponse<ExerciesResponse> = await response.data;
  return payload;
};
