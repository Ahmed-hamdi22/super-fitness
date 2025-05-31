import axios from "axios";

type NewPasswordInput = {
  email: string;
  newPassword: string;
};

export const newPassword = async ({ email, newPassword }: NewPasswordInput) => {
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/auth/resetPassword`,
    { email, newPassword }
  );

  const payload: NewPasswordResponse = await response.data;
  return payload;
};
