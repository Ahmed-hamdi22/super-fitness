import { Dialog, DialogContent } from "@/components/ui/dialog";
import ChangePasswordDialog from "./change-password-dialog";

type SettingsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function SettingsDialog({
  open,
  onOpenChange,
}: SettingsDialogProps) {
  return (
    // Dialog
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Dialog content */}
      <DialogContent className="bg-dark-gray-900 border-none">
        {/* Setting form */}
        <ChangePasswordDialog
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
