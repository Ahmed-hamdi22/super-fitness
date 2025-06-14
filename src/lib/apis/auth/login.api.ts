import axios, { AxiosError } from "axios";

export type LoginForm = {
  email: string;
  password: string;
};

export async function loginAction(data: LoginForm) {
  try {
    const response = await axios.post<LoginSuccess>(
      `${import.meta.env.VITE_API_URL}/auth/signin`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ error?: string }>;

    const message = error.response?.data?.error;

    throw new Error(message);
  }
}
