import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "use-intl";
import { register } from "../../lib/apis/auth/register.api";

export function useRegister() {
  // Translation
  const t = useTranslations();

  // Mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: RegisterFields) => {
      const payload = await register(fields);

      if ("error" in payload) {
        throw new Error(payload.error);
      }

      return payload;
    },

    onSuccess: () => {
      toast.success(t('welcome-to-super-fitness'));
    },
  });

  return { register: mutate, isPending, error };
}