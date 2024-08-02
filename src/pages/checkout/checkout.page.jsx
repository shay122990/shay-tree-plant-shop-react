import "./checkout.page.styles.css";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartTotal } = useContext(CartContext);
  return (
    <div className="container">
      <h2>Checkout</h2>
      <div className="cart-total">Total: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;
