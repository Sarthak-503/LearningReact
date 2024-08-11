import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CounterProvider } from "./context/Counter.jsx";
import { CartProvider } from "./context/Cart.jsx";

createRoot(document.getElementById("root")).render(
  <CounterProvider>
  <CartProvider>
      <App />
  </CartProvider>
    // </CounterProvider>
      // <StrictMode>
  // </StrictMode>
);
