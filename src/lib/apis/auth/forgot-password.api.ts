import axios from "axios";

export const forgotPassword = async (email: string) => {
  
  const response = await axios.post(

    `${import.meta.env.VITE_API_URL}/auth/forgotPassword`,
    { email }
  );

  const payload: APIResponse<ForgotPasswordResponse> = await response.data;
  return payload;
};
