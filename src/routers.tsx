import { createBrowserRouter } from "react-router-dom";
import HomePage from "./app/[locale]/(homepage)/page";
import AboutPage from "./app/[locale]/about/page";
import HealthyPage from "./app/[locale]/healthy/page";
import RootLayout from "./app/layout";
import NotFound from "./app/[locale]/not-found";
import ExercisesPage from "./app/[locale]/classes/_components/[primeMoverMuscleId]/page";
import Classes from "./app/[locale]/classes/_components/classes/classes";
import MealDetails from "./app/[locale]/healthy/_components/meal-details";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "healthy", element: <HealthyPage /> },
      { path: "/mealsdetails/:id", element: <MealDetails /> },
      { path: "classes", element: <Classes /> },
      { path: "classes/:primeMoverMuscleId", element: <ExercisesPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
