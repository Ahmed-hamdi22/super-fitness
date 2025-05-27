import { useTranslations } from "use-intl";

export default function Healthy() {
  const t = useTranslations();

  return <h1>{t("welcome-to-healthy")}</h1>;
}
