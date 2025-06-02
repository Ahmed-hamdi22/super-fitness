// import axios from "axios";

// export const forgotPassword = async (email: string) => {
  
//   const response = await axios.post(

//     `${import.meta.env.VITE_API_URL}/auth/forgotPassword`,
//     { email }
//   );

//   const payload: APIResponse<ForgotPasswordResponse> = await response.data;
//   return payload;
// };

// export async function verifyOtp(fields: VerifyOTPFields) {
//   const apiUrl = import.meta.env.VITE_API_URL;
//   const response = await fetch(`${apiUrl}/auth/verifyResetCode`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(fields),
//   });

//   const payload: APIResponse<VerifyOTPResponse> = await response.json();

//   return payload;
// }

/**
 * 
 * "use server";

import { AUTH_COOKIE } from "@/lib/constants/auth.constant";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function editProfileAction(fields: ProfileFields) {
  const tokenCookies = cookies().get(AUTH_COOKIE)?.value;
  const token = await decode({ token: tokenCookies, secret: process.env.NEXTAUTH_SECRET! });

  const apiUrl = `${process.env.API}/auth/editProfile`;

  const response = await fetch(apiUrl, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.token}`,
    },
    body: JSON.stringify(fields),
  });

  const payload: APIResponse<ProfileResponse> = await response.json();

  return payload;
}
 */