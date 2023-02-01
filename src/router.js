import { createBrowserRouter, redirect } from "react-router-dom";
import AppLayout from "layouts/AppLayout";
import Home from "smart/Home";
import Login from "smart/Login";
import Register from "smart/Register";
import Dashboard from "smart/Dashboard";
import Profile from "smart/Profile";
import Logout from "smart/Logout";
import ShowUserDetails from "smart/ShowUserDatails";
import { AppProvider } from "contexts/app.context";
import LoginAndRegisterLayout from "layouts/LoginAndRegisterLayout";
import { checkIsAuth } from "helpers/auth.helper";
import { notification } from "helpers/notification.helper";
import FoodDetails from "smart/FoodDetails";
import PrivateRoute from "smart/PrivateRoute";
import AllMenu from "smart/AllMenu";
import Contact from "smart/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppProvider>
        <AppLayout />
      </AppProvider>
    ),
    //   errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/logout", element: <Logout /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user/:userId",
        element: <ShowUserDetails />,
      },
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
      {
        element: <LoginAndRegisterLayout />,
        loader: () => {
          const isAuth = checkIsAuth();
          if (isAuth) {
            notification({
              type: "warning",
              message: "Warning",
              description: "You already have loged in into the system!",
            });
            return redirect("/dashboard");
          }
          return null;
        },
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
