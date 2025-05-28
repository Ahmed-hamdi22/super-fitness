type HeadingProps = {
  mainTitle?: string;
  welcomeText?: string;
  subtitle?: string;
};

export default function Heading({
  mainTitle,
  welcomeText,
  subtitle,
}: HeadingProps) {
  return (
    <div className="mb-8  text-center space-y-2">
      {/* Welcome text and subtitle */}
      <div className="flex flex-col items-center">
        <span className="text-xl font-normal  text-white">{welcomeText}</span>
        <h2 className="text-2xl font-extrabold mt-1  text-white">{subtitle}</h2>
      </div>

      {/* Main title */}
      <h1 className="text-4xl font-bold text-white">{mainTitle}</h1>
    </div>
  );
}
