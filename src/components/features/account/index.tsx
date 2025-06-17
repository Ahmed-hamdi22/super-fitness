import FitnessSettings from "./_components/fitness-settings";
import MainSettings from "./_components/main-settings";

export default function AccountModal() {
  return (
    <div className="bg-[url(/assets/bg-form.png)] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center items-center flex-col gap-4 p-4 bg-white bg-opacity-60 dark:bg-darkGray1 dark:bg-opacity-60 backdrop-blur-2xl h-screen">
        {/* Fitness Settings */}
        <FitnessSettings />

        {/* Main Settings */}
        <MainSettings />
      </div>
    </div>
  );
}
