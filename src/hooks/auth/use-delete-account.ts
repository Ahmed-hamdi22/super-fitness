import { useToken } from "@/context/auth/token";
import { deleteAccount } from "@/lib/apis/auth/delete-account.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "use-intl";

export function useDeleteAccount() {
  // Translation
  const t = useTranslations();

  // Context
  const { token } = useToken();

  // Mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async () => {
      if (!token) throw new Error("No authentication token available");

      const payload = await deleteAccount(token);

      if ("error" in payload) {
        throw new Error(String(payload.error));
      }

      return payload;
    },

    onSuccess: () => {
      toast.success(t('account-deleted-successfully'));
    },
  });

  return { deleteAccount: mutate, isPending, error };
}
