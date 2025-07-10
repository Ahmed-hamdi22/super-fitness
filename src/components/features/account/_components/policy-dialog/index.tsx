// Import necessary dialog components from your UI library
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { useTranslations } from "use-intl";

type PolicyDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function PolicyDialog({ open, onOpenChange }: PolicyDialogProps) {
  // Translations
  const t = useTranslations();

  return (
    // Dialog
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Dialog content container */}
      <DialogContent className="font-baloo bg-dark-gray-900 border-none overflow-y-auto">
        {/* Dialog header section */}
        <div className="text-center mb-8">
          {/* Title */}
          <h1 className="text-5xl text-white mb-2 font-extrabold capitalize">
          {t('website-policies')}
          </h1>

          {/* Description */}
          <p className="text-white capitalize text-lg">{t('please-read-and-agree-to-our-terms-before-continuing')}</p>
        </div>

        {/* Main policy content */}
        <div className="space-y-4 text-gray-300">
          {/* Policy 1: Content Use */}
          <div>
            <h3 className="font-medium text-white mb-2">{t('1-content-use')}</h3>
            <p className="text-sm">
              {t('policy-1')}
            </p>
          </div>

          {/* Policy 2: Privacy */}
          <div>
            <h3 className="font-medium text-white mb-2">{t('2-privacy')}</h3>
            <p className="text-sm">
              {t('policy-2')}
            </p>
          </div>

          {/* Policy 3: No guarantees */}
          <div>
            <h3 className="font-medium text-white mb-2">{t('3-no-guarantees')}</h3>
            <p className="text-sm">
              {t('policy-3')}
            </p>
          </div>

          {/* Policy 4: Changes */}
          <div>
            <h3 className="font-medium text-white mb-2">{t('4-changes')}</h3>
            <p className="text-sm">{t('policy-4')}</p>
          </div>
        </div>

        {/* Dialog footer with acceptance note */}
        <DialogFooter className="mt-4">
          <p className="text-sm text-gray-400">{t('by-using-this-site-you-accept-these-terms')}</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
