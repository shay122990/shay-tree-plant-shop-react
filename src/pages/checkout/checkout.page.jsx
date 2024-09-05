import "./checkout.page.styles.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/shays-tree.jpg";
import Button from "../../components/button/button.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const {
    cartTotal,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  } = useContext(CartContext);

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/plants");
  };

  const handleAddItemToCart = (cartItem) => {
    addItemToCart(cartItem);
  };

  const handleRemoveItemFromCart = (cartItem) => {
    removeItemFromCart(cartItem);
  };

  const handleClearItemFromCart = (cartItem) => {
    clearItemFromCart(cartItem);
  };
  return (
    <main className="container-fluid d-flex flex-column justify-content-center align-items-center  px-1">
      <div className="py-5 text-center">
        <img src={logo} className="checkout-img d-block mx-auto mb-4" />
        <h2>Checkout Form</h2>
        <p className="lead">
          Please fill our the form to receive your green friends!{" "}
        </p>
      </div>
      <div className="container d-flex flex-column w-sm-100 w-md-75 px-5 py-3 border border-secondary rounded">
        <h6 className="cart">Your Cart</h6>
        {cartItems.map((cartItem) => (
          <div key={cartItem.id}>
            <ul
              className="list-group d-flex justify-content-between align-items-center mb-3"
              key={cartItem.id}
            >
              <li className="list-group-item d-flex justify-content-between lh-sm w-100">
                <h6 className="my-0 w-50">{cartItem.name}</h6>
                <small>${cartItem.price}</small>
                <span onClick={() => handleAddItemToCart(cartItem)}>
                  <i className="bi bi-plus"></i>
                </span>
                <span onClick={() => handleRemoveItemFromCart(cartItem)}>
                  <i className="bi bi-dash"></i>
                </span>
                <span onClick={() => handleClearItemFromCart(cartItem)}>
                  <i className="bi bi-x"></i>
                </span>
                <span className="badge bg-secondary rounded-pill">
                  {cartItem.quantity}
                </span>
              </li>
            </ul>
          </div>
        ))}
        <span>
          <h6 className="total">Total: ${cartTotal}</h6>
        </span>
      </div>
      <Button buttonType="cart" onClick={handleRedirect}>
        Get More Plants
      </Button>
      <PaymentForm />
    </main>
  );
};

export default Checkout;
