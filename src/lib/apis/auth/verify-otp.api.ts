export async function verifyOtp(fields: VerifyOTPFields) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/auth/verifyResetCode`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });

  const payload: APIResponse<VerifyOTPResponse> = await response.json();

  return payload;
}
