import "./category.styles.css";

import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../contexts/product.context";
import PlantCard from "../../components/plant-card/plant-card.components";

const Category = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { categories, plants } = useContext(ProductsContext);

  const category = categories.find((cat) => cat.name === categoryName);

  if (!category) {
    return <div>Category not found</div>;
  }

  const categoryPlants = plants.filter((plant) =>
    category.plantIds.includes(plant.id)
  );

  return (
    <div className="container category-container">
      <div className="d-flex justify-content-between w-100 align-items-center py-2 ">
        <h2 className="m-2">{category.name}</h2>
        <button
          type="button"
          className="btn btn-outline-secondary m-2"
          onClick={() => navigate("/plants")}
        >
          Back to Plants
        </button>
      </div>
      <div className="row row-cols-2 row-cols-md-3 g-4">
        {categoryPlants.map((plant) => (
          <div key={plant.id} className="col">
            <PlantCard plant={plant} />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="btn btn-outline-secondary m-2"
        onClick={() => navigate("/plants")}
      >
        Back to Plants
      </button>
    </div>
  );
};

export default Category;
