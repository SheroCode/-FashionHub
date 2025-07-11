import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Register from "./pages/Register/Register";
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
          element: <Cart />,
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
