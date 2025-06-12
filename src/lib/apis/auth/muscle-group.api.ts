
import axios from "axios";
export type Muscle = {
  _id: string;
  name: string;
  image: string;
  description?: string;
} & DatabaseFields;


export async function fetchMuscleGroups() {
  const response = await axios.get<APIResponse<PaginatedResponse<{ muscles: Muscle[] }>>>(
    "https://fitness.elevateegy.com/api/v1/muscles/random"
  );

  if ("error" in response.data || !response.data.muscles) {
    throw new Error("Failed to fetch muscle groups");
  }

  return response.data.muscles;
}
export async function GetRandomMuscle() {
  const response = await axios.get<APIResponse<PaginatedResponse<{ muscles: Muscle[] }>>>(
    "https://fitness.elevateegy.com/api/v1/muscles/random"
  );

  if ("error" in response.data || !response.data.muscles) {
    throw new Error("Failed to fetch muscle groups");
  }

  return response.data.muscles;
}
