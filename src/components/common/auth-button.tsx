import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

type Props = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
};
export default function AuthButton({
  label,
  onClick,
  type = "submit",
  disabled = false,
  isLoading = false,
  className = "w-[311px] h-12",
}: Props) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`bg-flame-orange-500 hover:bg-flame-orange-700 rounded-3xl text-white font-semibold capitalize transition-colors ${className}`}
    >
      {isLoading ? <Loader className="animate-spin w-5 h-5" /> : label}
    </Button>
  );
}
