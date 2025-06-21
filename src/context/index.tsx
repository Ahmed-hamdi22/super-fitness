import { RegistrationProvider } from "./auth/register/_components/provider";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
    <RegistrationProvider>

      {children}
    </RegistrationProvider>
    </>
  )
}
