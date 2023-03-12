import { createBrowserRouter } from "react-router-dom";
import AppLayout from "layouts/AppLayout";
import Home from "smart/Home";
import FoodDetails from "smart/FoodDetails";
import AllMenu from "smart/AllMenu";
import Contact from "smart/Contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout />
    ),
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/menu-details/:type/:menuId",
        element: <FoodDetails />,
      },
      {
        path: "/menu",
        element: <AllMenu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

    ],
  },
]);
