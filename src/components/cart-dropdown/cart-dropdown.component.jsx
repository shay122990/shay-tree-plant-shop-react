import "./cart-dropdown.styles.css";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <span className="empty-message">Your cart is empty</span>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        )}
      </div>
      <Button buttonType="cart">Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
