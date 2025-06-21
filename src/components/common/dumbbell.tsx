import { useTranslations } from "use-intl";

import { Dumbbell } from "lucide-react";

export default function DumbbellIcon() {
  // Translation
  const t = useTranslations();
  return (
    <>
      <Dumbbell className="w-5 h-5 text-flame-orange-500 rotate-45" />
      <span className="text-sm font-semibold text-flame-orange-500">
        {t("fitness")}
      </span>
    </>
  );
}
