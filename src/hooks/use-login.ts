import { useMutation } from "@tanstack/react-query";
import { loginAction } from "@/lib/apis/auth/login.api";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useLogin() {
  // Navigate
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: loginAction,
    onSuccess: (data) => {
      //   Store token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login successful");
      navigate("/");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  return {
    login: mutate,
    isPending,
    error,
    isLoading: isPending,
  };
}

// import { useMutation } from "@tanstack/react-query";
// import { loginAction } from "@/lib/apis/auth/login.api";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import { useAuth } from "@/context/auth-context";

// export function useLogin() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const mutation = useMutation({
//     mutationFn: loginAction,
//     onSuccess: (data) => {
//       login(data.user, data.token);
//        toast.success("Login successful");
//       navigate("/");
//     },
//     onError: (error: Error) => {
//       toast.error(error.message || "Something went wrong");
//     },
//   });

//   return {
//     login: mutation.mutate,
//     isPending: mutation.isPending,
//     error: mutation.error,
//     isSuccess: mutation.isSuccess,
//     isLoading: mutation.isPending,
//   };
// }
