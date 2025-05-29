import { IntlProvider } from "use-intl";
import { useParams } from "react-router-dom";
import { messages } from "./messages";
import { locales, type Locale } from "./locales";
// import { AuthProvider } from "@/context/auth-context";

export default function Provider({ children }: { children: React.ReactNode }) {
  const { locale } = useParams();

  if (!locale || !locales.includes(locale as Locale)) {
    return;
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale as Locale]}>
      {/* <AuthProvider> */}
      {children}
      {/* /</IntlProvider></AuthProvider> */}
    </IntlProvider>
  );
}
