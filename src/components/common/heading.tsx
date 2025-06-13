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
        <span className="text-[24px] font-normal  text-white font-baloo capitalize ">
          {welcomeText}
        </span>
        <h2 className="text-lg font-extrabold mt-1  text-white font-baloo">
          {subtitle}
        </h2>
      </div>

      {/* Main title */}
      <h1 className="text-[24px] font-bold text-white font-baloo">
        {mainTitle}
      </h1>
    </div>
  );
}
