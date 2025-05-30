import Slider from "@/components/common/slider-comp";
import { useTranslations } from "use-intl";

export default function AboutPage() {
  // Translations
  const t = useTranslations();


  // age array
  const ages = Array.from({ length: 81 }, (_, i) => i + 1);

  // weight array
  const weight = Array.from({ length: 121 }, (_, i) => i + 20);

  // height array
  const height = Array.from({ length: 190 }, (_, i) => i + 20);

  return (
    <div className="flex flex-row">
      {/* Test. will remove in merge */}
      <Slider
        title={t("how-old-are-you")}
        range={ages}
        measure={t("years-old")}
        step={2}
      />
      <Slider
        title={t("what-is-your-weight")}
        range={weight}
        measure={t("kg")}
        step={3}
      />
      <Slider
        title={t("what-is-your-height")}
        range={height}
        measure={t("cm")}
        step={4}
      />
    </div>
  );
}
