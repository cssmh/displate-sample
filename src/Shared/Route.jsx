import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Cart from "../Pages/Cart";
import BrowseCollections from "../Pages/BrowseCollections";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/browse-collections",
        element: <BrowseCollections />,
      },
    ],
  },
]);

export default Route;
