import { IntlProvider } from "use-intl";
import { useParams } from "react-router-dom";
import en from "./messages/en.json";
import ar from "./messages/ar.json";

const messages = { en, ar };

export default function Provider({ children }: { children: React.ReactNode }) {
  const { locale } = useParams();
  const currentLocale = locale === "ar" ? "ar" : "en";
  const dir = currentLocale === "ar" ? "rtl" : "ltr";

  return (
    <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
      <div dir={dir}>{children}</div>
    </IntlProvider>
  );
}
