import { API_URL } from "@/lib/constants/api.constant";
import axios from "axios";

export async function changePassword(token: string, fields: ChangePasswordFields) {
  const apiUrl = `${API_URL}/auth/change-password`;

  const response = await axios.patch(apiUrl, fields, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const payload: APIResponse<ChangePasswordResponse> = await response.data;

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}