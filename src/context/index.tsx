import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EmailProvider } from "./auth/email/components/provider";
import { RegistrationProvider } from "./auth/register/components/provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "./theme/components/provider";

type ProvidersProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
    <EmailProvider>
      <RegistrationProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
        </QueryClientProvider>
      </RegistrationProvider>
    </EmailProvider>
    </ThemeProvider>
  );
}
