import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "../ui/button";
import { MdOutlineKeyboardReturn } from "react-icons/md";

type ErrorComponentProps = {
  message?: string;
  onRetry?: () => void;
  onGoHome?: () => void;
  onRedirect?: () => void;
};

export default function ErrorComponent({
  message,
  onRetry,
  onGoHome,
  onRedirect,
}: ErrorComponentProps) {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full space-y-6">
        {/* Error icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
        </div>

        {/* Error title */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Oops! Something went wrong
        </h1>

        {/* Error message */}
        <div className="px-4 py-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <p className="text-red-600 dark:text-red-400 text-sm capitalize">
            {message || "An unexpected error occurred. Please try again."}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-flame-orange-500 hover:bg-flame-orange-600 text-white rounded-lg transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          )}

          {onRedirect && (
            <Button
              onClick={onRedirect}
              className="flex items-center justify-center px-6 py-3 bg-flame-orange-500 hover:bg-flame-orange-600 text-white rounded-lg transition-colors"
            >
              <MdOutlineKeyboardReturn className="w-4 h-4" />
              <span>Return to Register Form</span>
            </Button>
          )}

          {onGoHome && (
            <button
              onClick={onGoHome}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors"
            >
              <Home className="w-4 h-4" />
              Go Home
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
