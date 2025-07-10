// Import necessary dialog components from your UI library
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"

  type PolicyDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
  };

export default function PolicyDialog({
    open,
    onOpenChange,

  }:PolicyDialogProps) {

    return(
        // Dialog
        <Dialog open={open} onOpenChange={onOpenChange}>
            {/* Dialog content container */}
        <DialogContent className="font-baloo bg-dark-gray-900 border-none max-h-[80vh] overflow-y-auto">
          {/* Dialog header section */}
          <DialogHeader>
            {/* Dialog title */}
            <DialogTitle className="text-white">Website Policies</DialogTitle>

            {/* Dialog description */}
            <DialogDescription className="text-gray-400">
              Please read and agree to our terms before continuing
            </DialogDescription>
          </DialogHeader>
  
          {/* Main policy content */}
          <div className="space-y-4 text-gray-300">
            {/* Policy 1: Content Use */}
            <div>
              <h3 className="font-medium text-white mb-2">1. Content Use</h3>
              <p className="text-sm">
                Workouts, meal plans, and advice are for informational purposes only. 
                Consult a doctor before starting any new fitness/diet program.
              </p>
            </div>
  
            {/* Policy 2: Privacy */}
            <div>
              <h3 className="font-medium text-white mb-2">2. Privacy</h3>
              <p className="text-sm">
                We collect minimal data (email, goals) to personalize your experience.
                No spam or data sales—ever.
              </p>
            </div>
  
            {/* Policy 3: No Guarantees */}
            <div>
              <h3 className="font-medium text-white mb-2">3. No Guarantees</h3>
              <p className="text-sm">
                Results vary based on effort and commitment. You're responsible for 
                your own health and safety.
              </p>
            </div>
  
            {/* Policy 4: Changes */}
            <div>
              <h3 className="font-medium text-white mb-2">4. Changes</h3>
              <p className="text-sm">
                Policies may update; continued use means you agree.
              </p>
            </div>
          </div>
  
          {/* Dialog footer with acceptance note */}
          <DialogFooter className="mt-4">
            <p className="text-sm text-gray-400">
              By using this site, you accept these terms.
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
}