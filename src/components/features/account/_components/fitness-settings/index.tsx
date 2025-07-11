import { useState } from "react";
import { useTranslations } from "use-intl";
import { FaArrowsRotate } from "react-icons/fa6";
import SettingsDialog from "./components/settings-dialog";
import { Button } from "@/components/ui/button";
import { useGetUserData } from "@/hooks/auth/use-get-user-data";
import { FaSpinner } from "react-icons/fa";

type SettingType = "goal" | "level" | "weight";

type SettingState = {
  type: SettingType;
  value: string;
};

export default function FitnessSettings() {
  // Translations
  const t = useTranslations();

  // Query
  const { user, isLoading, refetch } = useGetUserData();

  // States
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [currentSetting, setCurrentSetting] = useState<SettingState>({
    type: "goal",
    value: "",
  });

  // Functions
  const handleSettingClick = (settingType: "goal" | "level" | "weight", currentValue: string) => {
    setCurrentSetting({ type: settingType, value: currentValue });
    setOpenDialog(true);
  };

  // Variables
  const topSettings = [
    {
      title: t("your-goal"),
      value: user?.goal,
      type: "goal" as const,
      onClick: () => handleSettingClick("goal", user?.goal ?? ""),
    },
    {
      title: t("level"),
      value: user?.activityLevel,
      type: "level" as const,
      onClick: () => handleSettingClick("level", user?.activityLevel ?? ""),
    },
    {
      title: t("weight"),
      value: user?.weight,
      type: "weight" as const,
      onClick: () => handleSettingClick("weight", user?.weight?.toString() ?? ""),
    },
  ];

  return (
    <>
      {/* Top Settings Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 font-baloo text-dark-gray-800 dark:text-white">
        {topSettings.map((setting, index) => (
          <div key={index} className="text-center w-60">
            {/* Title */}
            <h3 className=" text-3xl font-extrabold">{setting.title}</h3>

            {/* Tap to change setting button */}
            <Button
              onClick={() => handleSettingClick(setting.type, (setting.value ?? "").toString())}
              className="text-base font-thin underline underline-offset-2 mb-3 bg-transparent text-dark-gray-800 dark:text-white hover:bg-transparent"
            >
              {t("tap-to-change")}
            </Button>

            {/* Change setting button */}
            <Button
              onClick={() => handleSettingClick(setting.type, (setting.value ?? "").toString())}
              className="
              bg-flame-orange-500 w-full max-w-60 h-12 rounded-2xl border 
              border-dark-gray-800 dark:border-white flex justify-between items-center
              px-4 capitalize font-bold text-base transition-all duration-250
              text-dark-gray-800 dark:text-white hover:bg-transparent hover:text-flame-orange-500 hover:border-flame-orange-500
            "
            >
              {isLoading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <>
                  {setting.value}
                  <FaArrowsRotate />
                </>
              )}
            </Button>
          </div>
        ))}
      </div>

      {/* Setting Dialog(NOTE: to be common in the future) */}
      <SettingsDialog
        open={openDialog}
        onOpenChange={setOpenDialog}
        settingType={currentSetting.type}
        currentValue={currentSetting.value}
        onRefresh={refetch}
      />
    </>
  );
}
