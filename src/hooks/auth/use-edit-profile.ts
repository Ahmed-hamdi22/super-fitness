import { useToken } from "@/context/auth/token";
import { editProfile } from "@/lib/apis/auth/edit-profile.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "use-intl";

export function useEditProfile() {
  // Translation
  const t = useTranslations();

  // Context
  const { token } = useToken();

  // Mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: ProfileFields) => {
      if (!token) throw new Error("No authentication token available");

      const payload = await editProfile(token, fields);

      if ("error" in payload) {
        throw new Error(String(payload.error));
      }

      return payload;
    },

    onSuccess: () => {
      toast.success(t('your-data-has-been-changed-successfully'));
    },
  });

  return { editProfile: mutate, isPending, error };
}
