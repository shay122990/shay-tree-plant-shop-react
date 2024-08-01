import "./cart-item.styles.css";
import PropTypes from "prop-types";

const CartItem = ({ cartItem }) => {
  const { image, price, name, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={image} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
