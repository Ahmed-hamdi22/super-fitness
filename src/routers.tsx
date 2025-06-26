import { createBrowserRouter } from "react-router-dom";
import HomePage from "./app/[locale]/(homepage)/page";
import HealthyPage from "./app/[locale]/healthy/page";
import RootLayout from "./app/layout";
import NotFound from "./app/[locale]/not-found";
import Classes from "./app/[locale]/classes/page";
import AboutPage from "./app/[locale]/about";
import LoginForm from "./app/[locale]/auth/_components/login-form";
import AuthLayout from "./app/[locale]/auth/layout";
import RegisterPage from "./app/[locale]/auth/_components/register-form";
import ForgotPasswordPage from "./app/[locale]/auth/_components/forgot-password";
import AccountModal from "./components/features/account";
import ChangePasswordPage from "./app/[locale]/auth/_components/change-password";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "healthy", element: <HealthyPage /> },
      { path: "classes", element: <Classes /> },
      { path: "account", element: <AccountModal /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginForm /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "change-password", element: <ChangePasswordPage /> }
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
