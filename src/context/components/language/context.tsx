import { createContext } from "react";

export type LanguageContextType = {
  lang: string;
  toggleLang: () => void;
  isAr: boolean;
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  isAr: false,
});

