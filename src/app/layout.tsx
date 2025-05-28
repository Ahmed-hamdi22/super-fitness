import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* React Query Developer tools */}
      <ReactQueryDevtools initialIsOpen={false} />

      <>
        <main>
          <Outlet />
        </main>
        <Toaster position="top-center" />
      </>
    </QueryClientProvider>
  );
}
