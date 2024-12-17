import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path:"/",
        element: <Home />
      }
    ]
  },
]);

export default Route;
