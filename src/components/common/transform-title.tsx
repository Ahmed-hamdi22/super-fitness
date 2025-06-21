import { useTranslations } from "use-intl";

export default function TransformTitle({
  className = "",
}: {
  className?: string;
}) {
  // Translation
  const t = useTranslations();
  return (
    <h2
      className={`text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-8 leading-tight ${className}`}
    >
      {t.rich("transform-headline", {
        span: (v) => <span className="text-custom-orange-500">{v}</span>,
      })}
    </h2>
  );
}
