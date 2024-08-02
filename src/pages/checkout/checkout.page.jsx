import "./checkout.page.styles.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartTotal, cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div className="container">
      <h2>Checkout</h2>
      <div>
        {cartItems.map((cartItem) => (
          <div key={cartItem.id}>
            <p>
              {cartItem.name}: ${cartItem.price}
            </p>
            <p>Quantity: {cartItem.quantity}</p>
            <span onClick={() => addItemToCart(cartItem)}>add </span>
            <br />
            <span onClick={() => removeItemFromCart(cartItem)}> remove</span>
          </div>
        ))}
      </div>
      <div className="cart-total">Total: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;
