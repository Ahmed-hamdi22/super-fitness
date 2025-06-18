export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

// get locale from localStorage
export function getInitialLocale(): Locale {
  const saved = localStorage.getItem("locale") as Locale;

  return locales.includes(saved)
    ? saved
    : navigator.language.startsWith("ar")
    ? "ar"
    : "en";
}
