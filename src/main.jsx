import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth/Auth.jsx";
import Home from "./pages/Home/Home.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/authentication",
        element: <Auth />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
