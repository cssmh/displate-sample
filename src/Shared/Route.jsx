import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export default Route;
