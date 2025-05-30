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
      toast.success(data.message);

      navigate("/");
    },
    onError: (error: Error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  return {
    login: mutate,
    isPending,
    error,
    isLoading: isPending,
  };
}
