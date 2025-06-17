import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./app/[locale]/(homepage)/page";
import AboutPage from "./app/[locale]/about/page";
import HealthyPage from "./app/[locale]/healthy/page";

import RootLayout from "./app/layout";
import Provider from "./i18n/provider";
import ExercisesPage from "./app/[locale]/classes/_components/[primeMoverMuscleId]/page";

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
          <Route path="classes/:primeMoverMuscleId" element={<ExercisesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
