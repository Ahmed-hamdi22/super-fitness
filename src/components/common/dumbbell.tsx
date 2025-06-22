import { Dumbbell } from "lucide-react";
type Props = {
  text: string;

};

export default function DumbbellIcon( { text }: Props) {
  return (
    <>
      <Dumbbell className="w-8 h-5 text-flame-orange-500 rotate-45 z-50 underline" />
      <span className="text-sm font-semibold text-flame-orange-500">
        {text}
      </span>
    </>
  );
}
