import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth/Auth.jsx";
import Home from "./pages/Home/Home.jsx";
import Error from "./pages/Error/Error.jsx";
import Application from "./pages/Application/Application.jsx";
import Events from "./pages/Events/Events.jsx";
import { Provider } from "react-redux";
import appStore from "./config/appStore.js";
import Description from "./pages/Description/Description.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/authentication",
        element: <Auth />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/application",
        element: <Application />,
      },
      {
        path: "/add-events",
        element: <Events />,
      },
      {
        path: "/event/:id",
        element: <Description />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
