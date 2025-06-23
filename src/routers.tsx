import { createBrowserRouter } from "react-router-dom";
import HomePage from "./app/[locale]/(homepage)/page";
import AboutPage from "./app/[locale]/about/page";
import HealthyPage from "./app/[locale]/healthy/page";
import ClassesPage from "./app/[locale]/classes/page";
import RootLayout from "./app/layout";
import NotFound from "./app/[locale]/not-found";
import VerifyOTPForm from "./app/[locale]/auth/_components/forgot-password/_components/verify-otp-form";
import LoginForm from "./app/[locale]/auth/_components/login-form";
import AuthLayout from "./app/[locale]/auth/layout";
import LevelForm from "./app/[locale]/auth/_components/level-form";
import GoalForm from "./app/[locale]/auth/_components/goal-form";
import NewPasswordForm from "./app/[locale]/auth/_components/forgot-password/_components/new-password-form";
import RegisterPage from "./app/[locale]/auth/_components/register-form";
import ForgotPasswordPage from "./app/[locale]/auth/_components/forgot-password";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
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
          { path: "goal", element: <GoalForm /> },
          { path: "forgot-password", element: <ForgotPasswordPage /> },
          { path: "level", element: <LevelForm /> },
          { path: "newpassword", element: <NewPasswordForm /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
