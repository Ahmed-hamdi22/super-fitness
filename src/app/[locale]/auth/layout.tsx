import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[url(/assets/bg-form.png)] bg-cover bg-center bg-no-repeat">
      {/* Left side: Logo and image */}
      <div className="hidden md:flex p-8 bg-main-color bg-opacity-90 backdrop-blur-2xl flex-col justify-center items-center border-r border-flame-orange-alpha-50">
        {/* Image */}
        <div className="relative">
          <img
            src="/assets/logofitness.png"
            alt="GUPER FITNESS Logo"
            width={180}
            height={60}
            className="mx-auto"
          />
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="/assets/menfitness.png"
            alt="Fitness "
            width={350}
            height={360}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Main content area for forms */}
      <div className="flex items-center justify-center p-4 md:p-8  bg-main-color bg-opacity-90 backdrop-blur-2xl">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
