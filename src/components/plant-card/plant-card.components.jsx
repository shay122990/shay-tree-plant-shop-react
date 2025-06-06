import "./plant-card.styles.css";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../cart-icon/cart-icon.component";
import Button from "../button/button.component";

const PlantCard = ({ plant }) => {
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const handleGoToCheckout = () => {
    navigate("/checkout");
  };
  const [buttonState, setButtonState] = useState({
    buttonText: "Add To Cart",
    showCheckoutButton: false,
  });

  const handleAddToCart = () => {
    addItemToCart(plant);
    setButtonState({ buttonText: "Item added", showCheckoutButton: true });
    setTimeout(() => {
      setButtonState((prevState) => ({
        ...prevState,
        buttonText: "Add To Cart",
      }));
    }, 1000);
  };

  return (
    <div className="card h-200 my-10">
      <img src={plant.image} className="card-img-top" alt={plant.name} />
      <div className="card-body h-auto">
        <h2 className="card-title">{plant.name}</h2>
        <p className="card-text">{plant.description}</p>
        <div className="card-description">
          Price: ${plant.price.toFixed(2)} <CartIcon />
        </div>
        <div className="d-flex flex-column cart-btn-container gap-2">
          <Button buttonType="cart" onClick={handleAddToCart}>
            {buttonState.buttonText}
          </Button>
          {buttonState.showCheckoutButton && (
            <Button buttonType="cart" onClick={handleGoToCheckout}>
              Checkout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

PlantCard.propTypes = {
  plant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default PlantCard;
