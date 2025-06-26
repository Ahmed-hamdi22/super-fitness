import { useContext, useState } from "react";
import { MdLanguage, MdOutlinePublishedWithChanges, MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { HiOutlineCog } from "react-icons/hi";
import { BsShieldExclamation } from "react-icons/bs";
import { useTranslations } from "use-intl";
import { LanguageContext } from "@/context/components/language/context";
import { useLogout } from "@/hooks/auth/use-logout";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/theme";
import { IoArrowForwardCircleOutline, IoHelpBuoy } from "react-icons/io5";
import SettingsDialog from "./components/main-settings-dialog";

export default function MainSettings() {
  // Translations
  const t = useTranslations();

  // Context
  const { lang, toggleLang } = useContext(LanguageContext);
  const { theme, toggleTheme, isDark } = useTheme();

  // States
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  // Hooks
  const { logout } = useLogout();

  // Functions
  const handleLogout = () => {
    logout();
  };

  const toggleChangePassword = () => {
    setOpenDialog(true);
  }

  // Variables
  const menuItems = [
    {
      icon: (
        <MdOutlinePublishedWithChanges
          className="text-flame-orange-500"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: t("change-password"),
      hasValue: false,
      onClick: toggleChangePassword,
    },
    {
      icon: (
        <MdLanguage className="text-flame-orange-500" style={{ width: "24px", height: "24px" }} />
      ),
      title: t("select-language"),
      value: lang === "en" ? "English" : "العربية",
      hasValue: true,
      onClick: toggleLang,
    },
    {
      icon: isDark ? (
        <FaMoon className="text-flame-orange-500" style={{ width: "24px", height: "24px" }} />
      ) : (
        <MdSunny className="text-flame-orange-500" style={{ width: "24px", height: "24px" }} />
      ),
      title: t("mood"),
      hasValue: true,
      value: theme,
      toggle: isDark,
      onClick: toggleTheme,
      isThemeToggle: true,
    },
    {
      icon: (
        <HiOutlineCog  className="text-flame-orange-500" style={{ width: "24px", height: "24px" }} />
      ),
      title: t('settings'),
    },
    {
      icon: (
        <BsShieldExclamation
          className="text-flame-orange-500"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: t("privacy-policy"),
    },
    {
      icon: (
        <IoHelpBuoy className="text-flame-orange-500" style={{ width: "24px", height: "24px" }} />
      ),
      title: t("help"),
    },
  ];

  return (
    <>
    <div className="font-baloo flex flex-col items-center">
      {/* Menu items grid */}
      <div className="grid grid-cols-3 gap-4 mt-8 mb-4">
        {menuItems.map((item, index) => (
          // Buttons of menu items
          <Button
            key={index}
            className="bg-transparent border border-dark-gray-800 dark:border-white rounded-2xl w-52 h-40 transition-colors group hover:bg-transparent"
            onClick={item.onClick}
          >
            {/* Buttons container */}
            <div className="flex flex-col items-center text-center">
              {/* Icon and title container */}
              <div className="w-25 h-16 flex flex-col justify-center items-center text-lg font-semibold">
                {/* Icon */}
                <span>{item.icon}</span>

                {/* Title */}
                <span className="text-dark-gray-800 dark:text-white">{item.title}</span>

                {/* If item has a value */}
                {item.hasValue && (
                  <span className="text-dark-gray-800 dark:text-white">
                    (<span className="text-flame-orange-500 capitalize">{item.value}</span>)
                  </span>
                )}
              </div>

              {/* If item has a toggle button */}
              {item.toggle !== undefined && (
                <div className="mt-2">
                  <div
                    className={`w-8 h-5 rounded-full flex justify-start items-center ${item.toggle ? "bg-flame-orange-500" : "bg-dark-gray-800"} relative transition-colors`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full absolute transition-transform ${item.toggle ? "translate-x-3 rtl:-translate-x-3" : "translate-x-0.5 rtl:-translate-x-0.5"}`}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </Button>
        ))}
      </div>

      {/* Logout button */}
      <Button
        className="bg-transparent border border-dark-gray-800 dark:border-white rounded-2xl w-52 h-40 transition-colors group hover:bg-transparent"
        onClick={handleLogout}
      >
        {/* Buttons container */}
        <div className="flex flex-col items-center text-center">
          {/* Icon and title container */}
          <div className="w-25 h-16 flex flex-col justify-center items-center text-lg font-semibold">
            {/* Icon */}
            <span>
              <IoArrowForwardCircleOutline
                className="text-flame-orange-500"
                style={{ width: "24px", height: "24px" }}
              />
            </span>

            {/* Title */}
            <span className="text-dark-gray-800 dark:text-white">{t("logout")}</span>
          </div>
        </div>
      </Button>
    </div>

    <SettingsDialog
            open={openDialog}
            onOpenChange={setOpenDialog}
    />
    </>
  );
}
