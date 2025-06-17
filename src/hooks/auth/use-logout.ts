import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@/context/use-context";
import { logout } from "@/lib/apis/auth/logout.api";

export function useLogout() {
  // Navigate
  const navigate = useNavigate();

  // Context
  const { token, logout: logoutContext } = useAuth();

  // Mutation
  const { mutate, error } = useMutation({
    mutationFn: async () => {
      if (!token) {
        throw new Error("No token available");
      }
      const payload = await logout(token);

      if ("error" in payload) {
        throw new Error(payload.error);
      }

      return payload;
    },
    onSuccess: () => {
      toast.success("Logout Succeeded");
      logoutContext();
      navigate("/login");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return {
    logout: mutate,
    error,
  };
}
