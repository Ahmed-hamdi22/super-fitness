import { IntlProvider } from "use-intl";
import { useParams } from "react-router-dom";
import { messages } from "./messages";
import { locales, type Locale } from "./locales";

export default function Provider({ children }: { children: React.ReactNode }) {
  const { locale } = useParams();

  if (!locale || !locales.includes(locale as Locale)) {
    return;
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale as Locale]}>
      {children}
    </IntlProvider>
  );
}
