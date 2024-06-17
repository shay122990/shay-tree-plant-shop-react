/* eslint-disable react/prop-types */
import AddToCart from "../addToCart/addToCart.component";
import "./plant-card.styles.css";

// eslint-disable-next-line react/prop-types
const PlantCard = ({ plants }) => {
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
                <h5 className="card-title">{plant.name}</h5>
                <p className="card-text">{plant.description}</p>
                <p className="card-text">Price: ${plant.price.toFixed(2)}</p>
                <AddToCart />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCard;
