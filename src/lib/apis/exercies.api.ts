import axios from "axios";

export const getAllExercies = async (primeMoverMuscleId: string, difficultyLevelId: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/exercises/by-muscle-difficulty`,
    {
        headers: {
        "Accept-Language": localStorage.getItem("locale") || "en",
      },
      params: {
        primeMoverMuscleId,
        difficultyLevelId,
      },
    },
  );

  const payload: APIResponse<ExercisesResponse> = await response.data;
  return payload;
};


