import { forgotPassword } from "@/lib/apis/auth/forgot-password.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "use-intl";

export function useForgotPassword() {
  // Translation
  const t = useTranslations();

  // Mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (email: string) => {
      const payload = await forgotPassword(email);

      // Handel error
      if ("error" in payload) {
        throw new Error(payload.error);
      }

      return payload;
    },

    // Handel success
    onSuccess: () => {
      toast.success(t('otp-has-been-sent-successfully'));
    },

    //Handel error
    onError: (error: any) => {
      console.error(error);
      toast.error(t("sent-faild"));
    },
  });

  return {
    mutate,
    isPending,
    error,
  };
}
