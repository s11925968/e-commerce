import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../layouts/Layout.jsx';
import Home from '../web/Home/Home.jsx';
import Categories from '../web/categories/Categories.jsx';
import Loyoutdashbord from '../layouts/Layoutdashbord.jsx';
import Dhome from '../dashboard/Home/Home.jsx';
import Dcategories from '../dashboard/categories/Categories.jsx';
import Register from "../web/registers/Register.jsx";
import Login from "../web/login/Login.jsx";

export default function Routes() {
  return (
      <RouterProvider router={router} />
  );
}
