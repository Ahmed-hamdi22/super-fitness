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
import Formpage from "./app/(auth)/login/page";
import AuthLayout from "./app/(auth)/layout";
import AccountModal from "./components/features/account";

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

          {/* Healthy */}
          <Route path="healthy" element={<HealthyPage />} />

          {/* Classes */}
          <Route path="classes" element={<ClassesPage />} />

          {/* Auth Routes*/}
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Formpage />} />
          </Route>
          <Route path="account" element={<AccountModal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
