import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "@/context/auth/use-context";
import { AuthProvider as ProviderNewPassword } from "@/context/use-context";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/context";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <>
      {/* Context provider */}
      <Providers>
      <AuthProvider>
        <ProviderNewPassword>
          <QueryClientProvider client={queryClient}>
            {/* React Query Developer tools */}
            <ReactQueryDevtools initialIsOpen={false} />

            <>
              <main>
                <Outlet />
              </main>

              {/* Toaster */}
              <Toaster position="top-center" />
            </>
          </QueryClientProvider>
        </ProviderNewPassword>
      </AuthProvider>
      </Providers>
    </>
  );
}
