import DumbbellIcon from "@/components/common/dumbbell";
import WorkoutsLogo from "@/components/common/workouts-logo";
import Header from "@/components/layout/header";
import ProfileInformation from "./_components/profile-information";
import DeleteAccount from "./_components/delete-account";
import { useTranslations } from "use-intl";

export default function SettingsPage() {
  // Translations
  const t = useTranslations();

  return (
    <>
      {/* Header */}
      <Header />
      <div className=" font-baloo py-5 dark:bg-dark-gray-900">
        <div className="container">
          <div className="relative mb-8">
            {/* Title  */}
            <span className="absolute sm:-top-4 ltr:left-0 rtl:right-0 rtl:left-auto ">
              <WorkoutsLogo text={t("settings")} />
            </span>

            {/* Icon and label for about us */}
            <div className="relative z-10 flex items-center gap-2 -bottom-6 capitalize ">
              <DumbbellIcon text={t("manage-your-account-and-preferences")} />
            </div>
          </div>

          {/* Editing */}
          <div className="text-dark-gray-900 dark:text-white">
            <div className="p-6">
              {/* Profile information */}
              <ProfileInformation />

              {/* Delete account */}
              <DeleteAccount />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
