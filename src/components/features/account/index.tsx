import FitnessSettings from "./_components/fitness-settings";
import MainSettings from "./_components/main-settings";

export default function AccountModal() {
  return (
    <div className="bg-opacity-60">
      <div className="flex justify-center items-center flex-col gap-4 p-4 container">
        {/* Fitness Settings */}
        <FitnessSettings />

        {/* Main Settings */}
        <MainSettings />
      </div>
    </div>
  );
}
