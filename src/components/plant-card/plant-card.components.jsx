import PropTypes from "prop-types";
import { useContext, useState } from "react";
import "./plant-card.styles.css";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

const PlantCard = ({ plants }) => {
  const { addItemToCart } = useContext(CartContext);

  // Local state to manage button text
  const [buttonText, setButtonText] = useState("Add To Cart");

  // Function to handle adding item to cart
  const handleAddToCart = (plant) => {
    addItemToCart(plant);
    setButtonText("Item added");

    // Set timeout to revert button text after 2 seconds
    setTimeout(() => {
      setButtonText("Add To Cart");
    }, 2000); // Adjust the timeout duration as needed
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {plants.map((plant) => (
          <div key={plant.id} className="col">
            <div className="card h-100">
              <img
                src={plant.image}
                className="card-img-top"
                alt={plant.name}
              />
              <div className="card-body">
                <h2 className="card-title">{plant.name}</h2>
                <p className="card-text">{plant.description}</p>
                <p className="card-text">Price: ${plant.price.toFixed(2)}</p>
                <Button
                  buttonType="cart"
                  onClick={() => handleAddToCart(plant)}
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

PlantCard.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PlantCard;
