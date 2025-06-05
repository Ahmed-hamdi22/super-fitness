import { useAuth } from "@/context/use-context";
import { API_URL } from "@/lib/constants/api.constant";
import axios from "axios";

export async function fetchUserData() {
  const apiUrl = `${API_URL}/auth/profile-data`;
  const { token } = useAuth();

  const response = await axios(apiUrl, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.token}`,
    },
    cache: "no-store",
  });
  const payload: APIResponse<ProfileResponse> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload.user;
}

/**
 * 
 * export async function verifyOtp(fields: VerifyOTPFields) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/auth/verifyResetCode`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });

  const payload: APIResponse<VerifyOTPResponse> = await response.json();

  return payload;
}
 */