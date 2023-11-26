import { RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Register from "./web/registers/Register.jsx";
import Login from "./web/login/Login.jsx";
import Home from "./web/Home/Home.jsx";
import Categories from "./web/categories/Categories.jsx";
import DashboardLayout from "./layouts/Layoutdashbord.jsx";
import HomeDashboard from "./dashboard/Home/Home.jsx";
import CategoriesDashboard from "./dashboard/categories/Categories.jsx";
import { createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
export default function App() {
  const [users, setUser] = useState(null);
  const saveCurrentUser = () => {
    const token = localStorage.getItem("userToken");
    const decode = jwtDecode(token);
    setUser(decode);
  };
  useEffect(()=>{
    if(localStorage.getItem("userToken")){
      saveCurrentUser();
    }
  },[])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout users={users} setUser={setUser}/>,
      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login saveCurrentUser={saveCurrentUser} />,
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
          path: "*",
          element: <h2>page not found --- web</h2>,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "home",
          element: <HomeDashboard />,
        },
        {
          path: "categories",
          element: <CategoriesDashboard />,
        },
        {
          path: "*",
          element: <h2>page not found --- dashboard</h2>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
