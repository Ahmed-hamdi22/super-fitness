import axios from "axios";

export async function GetRandomMuscle() {
  const response = await axios.get<
    APIResponse<PaginatedResponse<{ muscles: Muscle[] }>>
  >(`${import.meta.env.VITE_API_URL}/muscles/random`, {
    headers: {
      "Accept-Language": localStorage.getItem("lang") || "en",
    },
  });

  if ("error" in response.data) {
    throw new Error("Failed to fetch muscle groups");
  }

  return response.data.muscles;
}
