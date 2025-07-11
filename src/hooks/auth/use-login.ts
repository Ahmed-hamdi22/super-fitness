import { useMutation } from "@tanstack/react-query";
import { loginAction } from "@/lib/apis/auth/login.api";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useToken } from "@/context/auth/token";

export function useLogin() {
  // Navigate
  const navigate = useNavigate();

  // useToken
  const { login } = useToken();

  // Mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: loginAction,
    onSuccess: (data) => {
      //   Store token in localStorage
      login(data.token);
      
      toast.success(data.message);

      navigate("/");
    },
    onError: (error: Error) => {
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
