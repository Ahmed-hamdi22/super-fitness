type HeadingProps = {
  mainTitle?: string;
  welcomeText?: string;
  subtitle?: string;
  headTitle?: string;
  discripton?: string;
};

export default function Heading({
  mainTitle,
  welcomeText,
  subtitle,
  headTitle,
  discripton,
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
      <h2 className="text-lg font-normal   text-white font-baloo">
        {discripton}
      </h2>
      {/* Main title */}
      <h1 className="text-[24px]  font-bold text-white font-baloo">
        {mainTitle}
      </h1>

      {/* // Head title */}
      <h1 className=" text-5xl font-bold text-white font-baloo">{headTitle}</h1>
    </div>
  );
}
