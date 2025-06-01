import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "use-intl";
import { verifyOtp } from "../../lib/apis/auth/verify-otp.api";

export function useVerifyOtp() {
  // Translation
  const t = useTranslations();

  // Mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: VerifyOTPFields) => {
      const payload = await verifyOtp(fields);

      if ("error" in payload) {
        throw new Error(payload.error);
      }

      return payload;
    },

    onSuccess: () => {
      toast.success(t('you-can-reset-your-password'));

    },
  });

  return { verifyOTP: mutate, isPending, error };
}