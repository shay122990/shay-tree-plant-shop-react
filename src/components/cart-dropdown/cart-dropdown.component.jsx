import "./cart-dropdown.styles.css";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <span className="empty-message">Your cart is empty</span>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        )}
      </div>
      <Button buttonType="cart" onClick={navigate("/checkout")}>
        Go To Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
