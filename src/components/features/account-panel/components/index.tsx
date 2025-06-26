import { SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import FitnessSettings from "./fitness-settings";
import MainSettings from "./main-settings";
import Header from "@/components/layout/header";

export default function AccountPanel() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center flex-col gap-4 p-4">
        {/* Fitness Settings */}
        <FitnessSettings />

        {/* Main Settings */}
        <MainSettings />
      </div>
    </>
  );
}
