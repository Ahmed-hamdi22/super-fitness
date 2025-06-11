import { API_URL } from "@/lib/constants/api.constant";
import axios from "axios";

export async function getUserData(token: string) {
  const apiUrl = `${API_URL}/auth/profile-data`;

  const response = await axios.get(apiUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  });
  const payload: APIResponse<ProfileResponse> = await response.data;

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload.user;
}