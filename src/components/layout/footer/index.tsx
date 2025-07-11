import { Mail, Phone } from "lucide-react";
import LogoImg from "@/assets/logo.png";
import { useTranslations } from "use-intl";

const Footer = () => {
  // Translations
  const t = useTranslations();

  return (
    <footer className="px-8 p-8 text-dark-gray-800 dark:text-light-silver-300 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 bg-[#F3F3F4] dark:bg-[#232424] font-baloo">
      {/* Logo & Message */}
      <div className="flex flex-col md:items-start">
        <img src={LogoImg} className="w-[87px]" />
        <p>
          {t("push-harder-go-further-your")} <br /> {t("fitness-journey-starts-today")}!
        </p>
      </div>

      {/* Contact Us */}
      <div>
        <h3 className="text-lg font-bold mb-4">{t("contact-us")}</h3>
        <ul className="space-y-3">
          <li className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-full border dark:border-light-silver-300 flex items-center justify-center">
              <Phone />
            </div>
            <p>+91 123 456 789</p>
          </li>

          <li className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-full border dark:border-light-silver-300 flex items-center justify-center">
              <Mail />
            </div>
            <p>info@gmail.com</p>
          </li>
        </ul>
      </div>

      {/* Gym Timing */}
      <div>
        <h3 className="text-lg font-bold mb-4">{t("our-gym-timing")}</h3>
        <ul className="space-y-2 text-sm">
          <li>Mon - Fri : 08:00 AM - 10:00 PM</li>
          <li>Sat - Sun : 08:00 AM - 09:00 PM</li>
        </ul>
      </div>

      {/* Location */}
      <div>
        <h3 className="text-lg font-bold mb-4">{t("our-location")}</h3>
        <p className="text-sm">
          2715 Ash Dr. San Jose, South <br /> Dakota 83475
        </p>
      </div>
    </footer>
  );
};

export default Footer;
