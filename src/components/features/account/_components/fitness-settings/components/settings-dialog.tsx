import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import SettingForm from "./settings-form";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useTranslations } from "use-intl";

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
  // Translations
  const t = useTranslations();
  return (
    // Dialog
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Dialog content */}
      <DialogContent className="bg-dark-gray-900 border-none">
        {/* Header read on server only */}
        <DialogHeader className="sr-only">
          <DialogTitle>{t("dialog-title")}</DialogTitle>
          <DialogDescription>{t("dialog-description")}</DialogDescription>
        </DialogHeader>

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
