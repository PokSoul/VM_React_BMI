import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home";
import Chart from "../views/chart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/chart",
    element: <Chart />
  },
]);

export default Router;
