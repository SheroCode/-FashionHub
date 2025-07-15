import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProtectedRoute from "./routes/ProtectedRoute";
import { lazy, Suspense } from "react";
import { TbTruckLoading } from "react-icons/tb";

const Cart = lazy(() => import("./pages/Cart/Cart"));
const WishList = lazy(() => import("./pages/WishList/WishList"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Suspense
                fallback={
                  <h3 className='text-center'>
                    {" "}
                    <TbTruckLoading />
                    Loading Cart...
                  </h3>
                }>
                <Cart />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "wishlist",
          element: (
            <Suspense
              fallback={
                <h3 className='text-center'>
                  {" "}
                  <TbTruckLoading />
                  Loading Wishlist...
                </h3>
              }>
              <WishList />
            </Suspense>
          ),
        },
        {
          path: "login",
          element: (
            <Suspense
              fallback={
                <h3 className='text-center'>
                  {" "}
                  <TbTruckLoading />
                  Loading Login...
                </h3>
              }>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense
              fallback={
                <h3 className='text-center'>
                  {" "}
                  <TbTruckLoading />
                  Loading Register...
                </h3>
              }>
              <Register />
            </Suspense>
          ),
        },
        {
          path: "product/:id",
          element: <ProductDetails />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
