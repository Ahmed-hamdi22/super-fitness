import { useTranslations } from "use-intl";

export default function AboutUs() {
  const t = useTranslations();

  return <h1 className=" text-customOrange">{t("about-us")}</h1>;
}
