import { useTranslations } from "use-intl";

const AutoScrollBanner = () => {
  const t = useTranslations();

  return (
    <div className="overflow-hidden whitespace-nowrap bg-orange-600 py-3">
      <div className="inline-block animate-scroll text-white font-semibold text-sm">
        <span className="mx-4">{t("classes")}</span> ✦
        <span className="mx-4">{t("outdoor-and-online-trainers")}</span> ✦
        <span className="mx-4">{t("personal-training")}</span> ✦
        <span className="mx-4">{t("live-classes")}</span> ✦
        <span className="mx-4">{t("personal-trainers")}</span> ✦
        <span className="mx-4">{t("fitness-tips")}</span> ✦
        <span className="mx-4">{t("nutrition-plans")}</span> ✦
        <span className="mx-4">{t("classes")}</span> ✦
        <span className="mx-4">{t("outdoor-and-online-trainers")}</span> ✦
        <span className="mx-4">{t("personal-training")}</span> ✦
        <span className="mx-4">{t("live-classes")}</span> ✦
        <span className="mx-4">{t("personal-trainers")}</span> ✦
        <span className="mx-4">{t("fitness-tips")}</span> ✦
        <span className="mx-4">{t("nutrition-plans")}</span> ✦
      </div>
    </div>
  );
};

export default AutoScrollBanner;
