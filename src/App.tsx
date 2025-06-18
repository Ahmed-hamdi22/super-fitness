import { RouterProvider } from "react-router-dom";
import router from "./routers";
import Provider from "./i18n/provider";

export default function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}
