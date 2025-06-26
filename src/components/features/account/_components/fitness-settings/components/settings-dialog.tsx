import { Dialog, DialogContent } from "@/components/ui/dialog";
import SettingForm from "./settings-form";

type SettingsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  settingType: "goal" | "level" | "weight";
  currentValue: string;
  onRefresh: () => void;
};

export default function SettingsDialog({
  open,
  onOpenChange,
  settingType,
  currentValue,
  onRefresh,
}: SettingsDialogProps) {
  return (
    // Dialog
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Dialog content */}
      <DialogContent className="bg-dark-gray-900 border-none">
        {/* Setting form */}
        <SettingForm
          settingType={settingType}
          currentValue={currentValue}
          onCancel={() => onOpenChange(false)}
          onRefresh={onRefresh}
        />
      </DialogContent>
    </Dialog>
  );
}
