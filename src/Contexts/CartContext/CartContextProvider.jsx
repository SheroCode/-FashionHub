import { useState } from "react";
import { CartStore } from "./CartContext";

// CartContextProvider provides cart state and actions to its children via context
export function CartContextProvider({ children }) {
  // State to hold cart items
  const [cart, setCart] = useState([]);

  // Add a product to the cart or increase its quantity if it already exists
  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        // If product exists, increase its quantity
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        // If product does not exist, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  // Increase the quantity of a product in the cart
  function increaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart.map((p) =>
        p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  }

  // Decrease the quantity of a product in the cart or remove it if quantity is 1
  function decreaseQuantity(productId) {
    setCart((prevCart) => {
      const product = prevCart.find((p) => p.id === productId);
      if (product.quantity === 1) {
        // Remove product if quantity is 1
        return prevCart.filter((p) => p.id !== productId);
      } else {
        // Otherwise, decrease its quantity
        return prevCart.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        );
      }
    });
  }

  // Calculate total number of items in the cart
  const totalItems = cart.reduce((total, p) => total + p.quantity, 0);

  // Provide cart state and actions to children
  return (
    <CartStore.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
      }}
    >
      {children}
    </CartStore.Provider>
  );
}
