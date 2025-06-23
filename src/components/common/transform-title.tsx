import { useTranslations } from "use-intl";

export default function TransformTitle({
  className = "",
}: {
  className?: string;
}) {
  // Translation
  const t = useTranslations();
  return (
   <div className="flex justify-center">
      <h2
        className={`text-center max-w-[850px] text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-8 leading-tight ${className}`}
      >
        {t.rich("transform-headline", {
          br: () => <br />,
          span: (v) => <span className="text-flame-orange-500">{v}</span>,
        })}
      </h2>
    </div>
  );
}