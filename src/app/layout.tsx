import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/context";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <>
      {/* Context provider */}
      <Providers>
        <QueryClientProvider client={queryClient}>
          {/* React Query Developer tools */}
          <ReactQueryDevtools initialIsOpen={false} />
          <main>
            <Outlet />
          </main>

          {/* Toaster */}
          <Toaster position="top-center" />
        </QueryClientProvider>
      </Providers>
    </>
  );
}
