import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "use-intl";

export function useEditProfile() {
  // Translation
  const t = useTranslations();

  // Mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: ProfileFields) => {
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