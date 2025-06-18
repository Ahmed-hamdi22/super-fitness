import { useLocale } from "@/i18n/provider";
import { useNavigate } from "react-router-dom";
import { useTranslations } from "use-intl";

export default function About() {
  const { locale, setLocale } = useLocale();
  const t = useTranslations();
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/healthy")}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Go to About
      </button>
      <div className="space-x-2">
        <button onClick={() => setLocale("en")} disabled={locale === "en"}>
          English
        </button>
        <button onClick={() => setLocale("ar")} disabled={locale === "ar"}>
          العربية
        </button>
      </div>
      <h1>{t("home-title")}</h1>
      <p>{t("greeting", { name: "Rana" })}</p>
    </div>
  );
}
