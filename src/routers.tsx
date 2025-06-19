import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./app/[locale]/(homepage)/page";
import AboutPage from "./app/[locale]/about/page";
import HealthyPage from "./app/[locale]/healthy/page";
import RootLayout from "./app/layout";
import Provider from "./i18n/provider";
import NotFound from "./app/[locale]/not-found";
import Classes from "./app/[locale]/classes/page";

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
      { path: "classes", element: <Classes /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
