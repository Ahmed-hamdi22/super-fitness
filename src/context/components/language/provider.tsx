import { useState, useEffect, type ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LanguageContext } from "./context";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const initialLang = location.pathname.startsWith("/ar/")
    ? "ar"
    : location.pathname.startsWith("/ar")
      ? "ar"
      : "en";

  const [lang, setLang] = useState<string>(initialLang);
  const [isAr, setIsAr] = useState<boolean>(initialLang === "ar");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
  }, [lang, isAr]);

  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    setIsAr(newLang === "ar");

    const newPath = location.pathname.replace(/^\/(en|ar)/, `/${newLang}`);
    navigate(newPath);

    localStorage.setItem("lang", newLang);
  };

  const value = {
    lang,
    toggleLang,
    isAr,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
