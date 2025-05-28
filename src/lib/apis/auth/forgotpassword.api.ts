import axios from "axios";

export const forgotPassword = async (email: string) => {
  const response = await axios.post(
    "https://fitness.elevateegy.com/api/v1/auth/forgotPassword",
    { email }
  );
  console.log("response", response);
  const payload: ForgotPasswordResponse = await response.data;
  console.log("payload", payload);
  return payload;
};
