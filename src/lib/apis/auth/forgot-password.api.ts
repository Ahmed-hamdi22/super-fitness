import axios from "axios";

export const forgotPassword = async (email: string) => {

  const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`, { email });
  console.log("response", response);
  const payload: ForgotPasswordResponse = await response.data;
  console.log("payload", payload);
  return payload;
};
