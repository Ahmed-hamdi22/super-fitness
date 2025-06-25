import { API_URL } from "@/lib/constants/api.constant";
import axios from "axios";

export async function editProfile(token: string, fields: ProfileFields) {
  const apiUrl = `${API_URL}/auth/editProfile`;

  const response = await axios.put(apiUrl, fields, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const payload: APIResponse<ProfileResponse> = await response.data;

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload.user;
}