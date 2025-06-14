import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import SettingForm from "./settings-form";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  settingType: "goal" | "level" | "weight";
  currentValue: string;
  onRefresh: () => void;
}

export default function SettingsDialog({
  open,
  onOpenChange,
  settingType,
  currentValue,
  onRefresh
}: SettingsDialogProps) {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-darkGray1 border-none"
      >
        {/* <DialogHeader>
          <DialogTitle>{titles[settingType]}</DialogTitle>
        </DialogHeader> */}
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
