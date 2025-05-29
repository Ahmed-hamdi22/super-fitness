import axios from "axios";

type NewPasswordInput = {
  email: string;
  password: string;
};

export const newPassword = async ({ email, password }: NewPasswordInput) => {
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/auth/resetPassword`,
    { email, password }
  );
  console.log("response", response);
  const payload: NewPasswordResponse = await response.data;
  console.log("payload", payload);
  return payload;
};
