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
import Category from "./web/products/Category.jsx";
import Product from "./web/products/Product.jsx";
import { CartConterxtProvider } from "./web/context/Cart.jsx";
import Cart from "./web/cart/Cart.jsx";
import ProductRoute from "./web/prodtuctRoute/ProductRoute.jsx";
import Profile from "./web/profile/Profile.jsx";
import Sendcode from "./web/sendcode/Sendcode.jsx";
import Forgot from "./web/sendcode/Forgot.jsx";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "cart",
          element: 
            <ProductRoute>
              <Cart />
            </ProductRoute>
          
        },
        {
          path:'profile',
          element:<Profile />
        },
        {
          path:'auth/sendcode',
          element:<Sendcode />
        },
        {
          path:'auth/forgotPassword',
          element:<Forgot />
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "/products/category/:_id",
          element: <Category />,
        },
        {
          path: "/product/:_id",
          element: <Product />,
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
  return (
    
      <CartConterxtProvider>
        <RouterProvider router={router} />;
      </CartConterxtProvider>
  );
}
