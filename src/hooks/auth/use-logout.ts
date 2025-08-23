import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { logout } from "@/lib/apis/auth/logout.api";
import { useToken } from "@/context/auth/token";

export function useLogout() {
  // Navigate
  const navigate = useNavigate();

  // Context
  const { token, logout: logoutContext } = useToken();

  // Mutation
  const { mutate, error } = useMutation<{ message: string }, Error>({
    mutationFn: async () => {
      if (!token) {
        throw new Error("No token available");
      }
      return await logout(token);
    },
    onSuccess: (data) => {
      toast.success(data.message || "Logout Succeeded");
      logoutContext();
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    logout: mutate,
    error,
  };
}
