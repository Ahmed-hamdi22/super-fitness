import {
  MdLanguage,
  MdOutlinePublishedWithChanges,
  MdSunny,
} from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { GiCogLock } from "react-icons/gi";
import { BsShieldExclamation } from "react-icons/bs";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import FitnessSettings from "./_components/fitness-settings";

export default function AccountModal() {
  return (
    <div className="h-screen bg-[url(/assets/bg-form.png)] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center items-center flex-col gap-4 p-4 bg-main-color bg-opacity-90 backdrop-blur-2xl h-screen">
        {/* Goal */}
        <FitnessSettings />

        {/* Level */}

        {/* Weight */}

        {/* Change Password */}
        <MdOutlinePublishedWithChanges />

        {/* Select Language */}
        {/* <MdLanguage /> */}
        <MdLanguage />

        {/* Dark Mode */}
        <MdSunny />
        <FaMoon />

        {/* Security */}
        <GiCogLock />

        {/* Privacy Policy */}
        <BsShieldExclamation />

        {/* Help */}
        <IoMdHelpBuoy />

        {/* Logout */}
        <IoArrowForwardCircleOutline />
      </div>
    </div>
  );
}
