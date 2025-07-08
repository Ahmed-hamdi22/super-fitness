import DumbbellIcon from "@/components/common/dumbbell";
import WorkoutsLogo from "@/components/common/workouts-logo";
import Header from "@/components/layout/header";
import ProfileInformation from "./_components/profile-information";
import DeleteAccount from "./_components/delete-account";

export default function SettingsPage() {

  return (
    <>
      <Header />
      <div className="container font-baloo">
        <div className="relative mb-8   ">
          {/* Title  */}
          <span className="absolute sm:-top-4 ltr:left-0 rtl:right-0 rtl:left-auto ">
            <WorkoutsLogo text={"Settings"} />
          </span>

          {/* Icon and label for about us */}
          <div className="relative z-10 flex items-center gap-2 -bottom-6 capitalize ">
            <DumbbellIcon text={"Manage your account and preferences"} />
          </div>
        </div>

        {/* Editing */}
        <div className="bg-gray-900 text-white">

          <div className="p-6">

            <ProfileInformation />

            {/* Delete account */}
            <DeleteAccount />
          </div>

        </div>
      </div>
    </>
  );
}
