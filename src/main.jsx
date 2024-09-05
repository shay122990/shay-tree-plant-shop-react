import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import { UserProvider } from "./contexts/user.context.jsx";
import { ProductsProvider } from "./contexts/product.context.jsx";
import { CartProvider } from "./contexts/cart.context.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe.utils";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);
