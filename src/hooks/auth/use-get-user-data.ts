import { useToken } from "@/context/auth/token";
import { getUserData } from "@/lib/apis/auth/get-user-data.api";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "use-intl";

export function useGetUserData() {
  // Translations
  const t = useTranslations();

// Context
const { token } = useToken();

 // Query
  const { data, isLoading, refetch } = useQuery<User, Error>({
    queryKey: ["userData", token],
    queryFn: async () => {
      if (!token) {
        throw new Error(t("no-authentication-token"));
      }
      
      const user = await getUserData(token);
      return user;
    },
    enabled: !!token,
    retry: 1
  });

  return {
    user: data,
    isLoading,
    refetch
  };
}
