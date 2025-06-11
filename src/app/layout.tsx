import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "@/context/use-context";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/context/components/theme/provider";
import { LanguageProvider } from "@/context/components/language/provider";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <LanguageProvider>
    <ThemeProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        {/* React Query Developer tools */}
        <ReactQueryDevtools initialIsOpen={false} />

        <>
          <main className="bg-white">
            <Outlet />
          </main>

          {/* Toaster */}
          <Toaster position="top-center" />
        </>
      </QueryClientProvider>
    </AuthProvider>
    </ThemeProvider>
    </LanguageProvider>
  );
}