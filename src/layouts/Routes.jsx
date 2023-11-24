import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../layouts/Layout.jsx';
import Home from '../web/Home/Home.jsx';
import Categories from '../web/categories/Categories.jsx';
import Loyoutdashbord from '../layouts/Layoutdashbord.jsx';
import Dhome from '../dashboard/Home/Home.jsx';
import Dcategories from '../dashboard/categories/Categories.jsx';
import Register from "../web/registers/Register.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:'register',
        element:<Register />
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path:'*',
        element:<h2>404 page not found----web</h2>
      },
    ],
  },
  {
    path:"/admin",
    element:<Loyoutdashbord />,
    children:[{
      path:"home",
      element: <Dhome />,
    },
    {
      path:'categories',
      element: <Dcategories />,
    },
    {
      path:'*',
      element:<h2>404 page not found----admin</h2>
    },
  ]
  }
]);

export default function Routes() {
  return (
      <RouterProvider router={router} />
  );
}
