import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./app/[locale]/(homepage)/page";
import AboutPage from "./app/[locale]/about/page";
import HealthyPage from "./app/[locale]/healthy/page";
import ClassesPage from "./app/[locale]/classes/page";
import RootLayout from "./app/layout";
import Provider from "./i18n/provider";
import NotFound from "./app/[locale]/not-found";
import VerifyOTPForm from "./app/[locale]/auth/_components/verify-otp";
import LoginForm from "./app/[locale]/auth/_components/login-form";
import AuthLayout from "./app/[locale]/auth/layout";
import DummyRegister from "./app/[locale]/auth/_components/dummy-register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/en" replace />,
  },
  {
    path: "/:locale",
    element: (
      <Provider>
        <RootLayout />
      </Provider>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "healthy", element: <HealthyPage /> },
      { path: "classes", element: <ClassesPage /> },
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <LoginForm /> },
          { path: "verifyotp", element: <VerifyOTPForm /> },
          // { path: "register", element: <DummyRegister /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
