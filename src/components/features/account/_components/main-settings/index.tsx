import { useContext } from "react";
import { MdLanguage, MdOutlinePublishedWithChanges, MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { GiCogLock } from "react-icons/gi";
import { BsShieldExclamation } from "react-icons/bs";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useTranslations } from "use-intl";
import { ThemeContext } from "@/context/components/theme/context";
import { LanguageContext } from "@/context/components/language/context";
import { useLogout } from "@/hooks/auth/use-logout";
import { Button } from "@/components/ui/button";

export default function MainSettings() {
  // Translations
  const t = useTranslations();

  // Context
  const { lang, toggleLang } = useContext(LanguageContext);
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);

  // Hooks
  const { logout } = useLogout();

  // Functions
  const handleLogout = () => {
    logout();
  };

  // Variables
  const menuItems = [
    {
      icon: <MdOutlinePublishedWithChanges className="text-customOrange text-2xl" />,
      title: t("change-password"),
      hasValue: false,
    },
    {
      icon: <MdLanguage className="text-customOrange text-2xl" />,
      title: t("select-language"),
      value: lang === "en" ? "English" : "العربية",
      hasValue: true,
      onClick: toggleLang,
    },
    {
      icon: isDark ? (
        <FaMoon className="text-customOrange text-2xl" />
      ) : (
        <MdSunny className="text-customOrange text-2xl" />
      ),
      title: t("mood"),
      hasValue: true,
      value: theme,
      toggle: isDark,
      onClick: toggleTheme,
      isThemeToggle: true,
    },
    {
      icon: <GiCogLock className="text-customOrange text-2xl" />,
      title: t("security"),
    },
    {
      icon: <BsShieldExclamation className="text-customOrange text-2xl" />,
      title: t("privacy-policy"),
    },
    {
      icon: <IoMdHelpBuoy className="text-customOrange text-2xl" />,
      title: t("help"),
    },
  ];

  return (
    <div className="font-baloo flex flex-col items-center">
      {/* Menu items grid */}
      <div className="grid grid-cols-3 gap-4 mt-8 mb-4">
        {menuItems.map((item, index) => (
          // Buttons of menu items
          <Button
            key={index}
            className="bg-transparent border border-darkGray1 dark:border-white rounded-2xl w-52 h-40 transition-colors group hover:bg-transparent"
            onClick={item.onClick}
          >
            {/* Buttons container */}
            <div className="flex flex-col items-center text-center">
              {/* Icon and title container */}
              <div className="w-25 h-16 flex flex-col justify-center items-center text-lg font-semibold">
                {/* Icon */}
                <span>{item.icon}</span>

                {/* Title */}
                <span className="text-darkGray1 dark:text-white">{item.title}</span>

                {/* If item has a value */}
                {item.hasValue && (
                  <span className="text-darkGray1 dark:text-white">
                    (<span className="text-customOrange capitalize">{item.value}</span>)
                  </span>
                )}
              </div>

              {/* If item has a toggle button */}
              {item.toggle !== undefined && (
                <div className="mt-2">
                  <div
                    className={`w-8 h-5 rounded-full flex justify-start items-center ${item.toggle ? "bg-customOrange" : "bg-darkGray1"} relative transition-colors`}
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
        className="bg-transparent border border-darkGray1 dark:border-white rounded-2xl w-52 h-40 transition-colors group hover:bg-transparent"
        onClick={handleLogout}
      >
        {/* Buttons container */}
        <div className="flex flex-col items-center text-center">
          {/* Icon and title container */}
          <div className="w-25 h-16 flex flex-col justify-center items-center text-lg font-semibold">
            {/* Icon */}
            <span>
              <IoArrowForwardCircleOutline className="text-customOrange text-2xl" />
            </span>

            {/* Title */}
            <span className="text-darkGray1 dark:text-white">{t("logout")}</span>
          </div>
        </div>
      </Button>
    </div>
  );
}
