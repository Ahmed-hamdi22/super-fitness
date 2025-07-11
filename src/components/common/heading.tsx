type HeadingProps = {
  mainTitle?: string;
  welcomeText?: string;
  subtitle?: string;
  headTitle?: string;
  discripton?: string;
  question?: string;
};

export default function Heading({
  mainTitle,
  welcomeText,
  subtitle,
  headTitle,
  discripton,
  question,
}: HeadingProps) {
  return (
    <div className="text-center space-y-2">
      {/* Welcome text and subtitle */}
      <div className="flex flex-col items-center">
        <span className="text-2xl font-normal  text-white font-baloo capitalize ">
          {welcomeText}
        </span>
        <h2 className="text-lg font-extrabold mt-1  text-white font-baloo">{subtitle}</h2>
      </div>
      {/* Question */}
      <h2 className="text-4xl font-extrabold text-white font-baloo">{question}</h2>

      <p className="text-lg font-normal text-white font-baloo">{discripton}</p>
      {/* Main title */}
      <p className="text-2xl font-normal text-white font-baloo">{mainTitle}</p>
      {/* // Head title */}
      <h1 className=" text-5xl font-bold text-white font-baloo">{headTitle}</h1>
    </div>
  );
}
