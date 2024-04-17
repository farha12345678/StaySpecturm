import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import LogIn from "../Components/Pages/LogIn";
import Register from "../Components/Pages/Register";


import EstateDetails from "../Components/Estates/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Components/Navbar/UpdateProfile";
import Contact from "../Components/Pages/Contact";
import ErrorPage from "../Components/Pages/ErrorPage";
import UserProfile from "../Components/Pages/UserProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
            loader: () => fetch('/data.json')
        
        },
        {
            path:"/login",
            element:<LogIn></LogIn>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/contact",
            element:<PrivateRoute><Contact></Contact></PrivateRoute>
        },
        {
          path:"/details/:id",
          element:<PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
          loader: () => fetch('/data.json'),
        },
        {
          path: "/update",
          element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path:"/user",
          element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        }

      ]
    },
  ]);

  export default router;
