import { API_URL } from "@/lib/constants/api.constant";
import axios from "axios";

export async function deleteAccount(token: string) {
  const apiUrl = `${API_URL}/auth/deleteMe`;

  const response = await axios.delete(apiUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const payload: APIResponse<DeleteAccountResponse> = await response.data;

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}