import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./components/Banner/Banner.css";
import "./components/ProductCard/ProductCard.css";
import { CartContextProvider } from "./Contexts/CartContext/CartContextProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
        <App />
    </CartContextProvider>
  </StrictMode>
);
