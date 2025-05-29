import axios from "axios";

export type LoginForm = {
  email: string;
  password: string;
};

export async function loginAction(data: LoginForm): Promise<LoginSuccess> {
  try {
    const response = await axios.post<APIResponse<LoginSuccess>>(
      `${import.meta.env.VITE_API_URL}/auth/signin`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if ("error" in response.data) {
      throw new Error((response.data as ErrorResponse).error || "Login failed");
    }
    return response.data as LoginSuccess;
  } catch (error: any) {
    const message =
      error.response?.data?.error || "Login failed Please try again.";

    throw new Error(message);
  }
}

// import axios from "axios";

// export type LoginForm = {
//   email: string;
//   password: string;
// };

// export async function loginAction(data: LoginForm): Promise<LoginSuccess> {
//   try {
//     const response = await axios.post<LoginSuccess>(
//       `${import.meta.env.VITE_API_URL}/auth/signin`,
//       data,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return response.data;
//   } catch (error: any) {
//     const message = error.response?.data?.error || "Login failed. Please try again.";
//     throw new Error(message);
//   }
// }
