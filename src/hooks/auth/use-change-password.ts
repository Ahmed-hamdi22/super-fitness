import { useToken } from "@/context/auth/token";
import { changePassword } from "@/lib/apis/auth/change-password.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "use-intl";

export function useChangePassword() {
  // Translation
  const t = useTranslations();

  // Context
  const { token, login } = useToken();

  // Mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: ChangePasswordFields) => {
      if (!token) throw new Error("No authentication token available");

      const payload = await changePassword(token, fields);

      if ("error" in payload) {
        throw new Error(payload.error);
      }

      return payload;
    },

    onSuccess: (payload) => {
      if (payload?.token) {
        login(payload.token);
      }
      toast.success(t("your-password-has-been-changed-successfully"));
    },
  });

  return { changePassword: mutate, isPending, error };
}
