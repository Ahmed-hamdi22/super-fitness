import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "@/context/authcontext";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <>
      {/* Auth provider */}
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}
