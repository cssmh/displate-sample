import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Cart from "../Pages/Cart";
import BrowseCollections from "../Pages/BrowseCollections";
import Wishlist from "../Pages/Wishlist";
import Gifts from "../Pages/Gifts/Gifts";
import SIgnin from "../Components/SIgnin";
import CLub from "../Pages/CLub";
import Register from "../Components/Register";
import DisplateDetails from "../Pages/DisplateDetails/DisplateDetails";

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
        path: "/auth/signin",
        element: <SIgnin />,
      },
      {
        path: "/auth/signin/register-user",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/browse-collections",
        element: <BrowseCollections />,
      },
      {
        path: "/displate/:id",
        element: <DisplateDetails />,
      },
      {
        path: "/lp/gifts",
        element: <Gifts />,
      },
      {
        path: "/join-displate-club",
        element: <CLub />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

export default Route;
