import "./checkout.page.styles.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import logo from "../../assets/shays-tree.jpg";

const Checkout = () => {
  const { cartTotal, cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <main>
      <div className="py-5 text-center">
        <img src={logo} className="checkout-img d-block mx-auto mb-4" />
        <h2>Checkout Form</h2>
        <p className="lead">
          Please fill our the form to receive your green friends!{" "}
        </p>
      </div>
      <div>
        <span>Your Cart</span>
        {cartItems.map((cartItem) => (
          <div className="col-md-5 col-lg-4 order-md-last" key={cartItem.id}>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span
                onClick={() => {
                  addItemToCart(cartItem);
                }}
              >
                add
              </span>
              <span
                onClick={() => {
                  removeItemFromCart(cartItem);
                }}
              >
                remove
              </span>
              <span className="badge bg-secondary rounded-pill">
                {cartItem.quantity}
              </span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <h6 className="my-0">{cartItem.name}</h6>
                <small>${cartItem.price}</small>
              </li>
            </ul>
          </div>
        ))}
        <span>
          <span>Total: ${cartTotal}</span>
        </span>
      </div>
    </main>
  );
};

export default Checkout;
