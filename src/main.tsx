import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./app/[locale]/(homepage)/page";
import AboutPage from "./app/[locale]/about/page";
import HealthyPage from "./app/[locale]/healthy/page";
import ClassesPage from "./app/[locale]/classes/page";
import RootLayout from "./app/layout";
import Provider from "./i18n/provider";
import ForgotPasswordPage from "./app/[locale]/forgotpassword/page";
import OTPPage from "./app/[locale]/otp/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Redirect root to /en */}
        <Route path="/" element={<Navigate to="/en" />} />

        {/* Locale-based routing with IntlProvider */}
        <Route
          path=":locale/*"
          element={
            <Provider>
              <RootLayout />
            </Provider>
          }
        >
          {/* Home */}
          <Route index element={<App />} />

          {/* About */}
          <Route path="about" element={<AboutPage />} />

          {/* Forgot password */}
          <Route path="forgotpassword" element={<ForgotPasswordPage />} />

          <Route path="otp" element={<OTPPage />} />

          {/* Healthy */}
          <Route path="healthy" element={<HealthyPage />} />

          {/* Classes */}
          <Route path="classes" element={<ClassesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
