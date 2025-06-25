import { createContext, useContext, useEffect, useState } from "react";
import { IntlProvider } from "use-intl";
import en from "./messages/en.json";
import ar from "./messages/ar.json";
import { getInitialLocale, type Locale } from "./config";

type LocaleContextProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextProps | null>(null);

const messages: Record<Locale, any> = { en, ar };

// Custom hook to access locale context
export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be use LocaleProvider");
  return context;
}

export default function Provider({ children }: { children: React.ReactNode }) {
  // State
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  // Update document  and save locale to localStorage
  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    // SetLocale to the entire app
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
