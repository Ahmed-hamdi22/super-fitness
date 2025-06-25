import { useTranslations } from "use-intl";

export default function Classes() {
  const t = useTranslations();
  return <h1>{t("welcome-to-classes")}</h1>;
}
