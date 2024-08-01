import "./cart-dropdown.styles.css";
import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button buttonType="cart">Go To Checkout</Button>
    </div>
  );
};
export default CartDropdown;
