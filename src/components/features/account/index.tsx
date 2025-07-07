import FitnessSettings from "./_components/fitness-settings";
import MainSettings from "./_components/main-settings";

export default function AccountModal() {
  return (
    <div className="bg-orange-300">
      <div className="flex justify-center items-center flex-col gap-4 p-4  h-screen">
        {/* Fitness Settings */}
        <FitnessSettings />

        {/* Main Settings */}
        <MainSettings />
      </div>
    </div>
  );
}
