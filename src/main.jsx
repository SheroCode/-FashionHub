import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./components/Banner/Banner.css";
import "./components/ProductCard/ProductCard.css";
import { CartContextProvider } from "./Contexts/CartContext/CartContextProvider.jsx";
import "./index.css";
import { AuthProvider } from "./Contexts/AuthContext/AuthContextProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>
);
