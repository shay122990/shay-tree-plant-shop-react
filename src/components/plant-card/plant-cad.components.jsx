import { plants } from "../../plants-data";
import "./plant-card.styles.css";
const PlantCard = () => {
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCard;
