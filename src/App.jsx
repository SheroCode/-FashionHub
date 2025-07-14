import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Register from "./pages/Register/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import { lazy, Suspense } from "react";
const Cart = lazy(() => {
  import("./pages/Cart/Cart");
});
const WishList = lazy(() => {
  import("./pages/WishList/WishList");
});

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
              <Suspense>
                {" "}
                <Cart />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <Suspense>
                {" "}
                <WishList />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
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

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
