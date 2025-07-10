import { useToken } from "@/context/auth/token";
import { uploadPhoto } from "@/lib/apis/auth/upload-photo.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "use-intl";

export function useUploadPhoto() {
  // Translation
  const t = useTranslations();

  // Context
  const { token } = useToken();

  // Mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (fields: UploadPhotoFields) => {
      if (!token) throw new Error("No authentication token available");

      const payload = await uploadPhoto(token, fields);

      if ("error" in payload) {
        throw new Error(String(payload.error));
      }

      return payload;
    },

    onSuccess: () => {
      toast.success(t('photo-uploaded-successfully'));
    },
    onError: (error) => {
      const errorMessage = error instanceof Error ? error.message : "An error occurred while uploading photo";
      toast.error(errorMessage);
    }
  });

  return { uploadPhoto: mutate, isPending, error };
}
