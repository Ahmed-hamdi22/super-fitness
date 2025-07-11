import { ErrorBoundary } from "@/components/layout/error";
import Providers from "@/context";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[url(/src/assets/bg-form.png)] bg-cover bg-center bg-no-repeat">
      {/* Left side: Logo and image */}
      <div className="hidden md:flex bg-main-color bg-opacity-90 backdrop-blur-2xl flex-col justify-center items-center border-e border-flame-orange-alpha-50">
        {/* Logo */}
        <div className="relative">
          <img
            src="/src/assets/logo.png"
            alt="GUPER FITNESS Logo"
            width={180}
            height={60}
            className="mx-auto"
          />
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="/src/assets/menfitness.png"
            alt="Fitness "
            width={380}
            height={360}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Main content area for forms */}
      <div className="flex items-center justify-center p-4 md:p-8  bg-main-color bg-opacity-90 backdrop-blur-2xl">
        <div className="w-full max-w-md">
          <ErrorBoundary>
            <Providers>
              <Outlet />
            </Providers>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
