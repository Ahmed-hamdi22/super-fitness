import { useTranslations } from "use-intl";

export default function WorkoutsLogo() {
  // Translation
  const t = useTranslations();
  return (
    <h2 className="absolute  text-5xl sm:text-7xl font-extrabold font-montserrat uppercase text-gray-200 opacity-30 ">
      {t("about-us-title")}
    </h2>
  );
}
