import { EmailProvider } from "./auth/email/_components/provider";
import { RegistrationProvider } from "./auth/register/_components/provider";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <EmailProvider>
      <RegistrationProvider>{children}</RegistrationProvider>
    </EmailProvider>
  );
}
