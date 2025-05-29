import { newPassword } from "@/lib/apis/auth/new-password.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "use-intl";

type NewPasswordInput = {
  email: string;
  password: string;
};

export function useNewPassword() {
  // Translation
  const t = useTranslations();

  // Mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (data: NewPasswordInput) => {
      const payload = await newPassword(data);

      // Handel error
      if ("error" in payload) {
        throw new Error(payload.error);
      }

      return payload;
    },

    // Handel success
    onSuccess: () => {
      toast.success(t("new-password-is-created"));
    },

    //Handel error
    onError: (error: any) => {
      console.error(error);
      toast.error(t("create-password-is-failed"));
    },
  });

  return {
    mutate,
    isPending,
    error,
  };
}
