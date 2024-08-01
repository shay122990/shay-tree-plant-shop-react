import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../contexts/product.context";
import PlantCard from "../../components/plant-card/plant-card.components";
import "./category.styles.css";

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
      <h2>{category.name}</h2>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => navigate("/plants")}
      >
        Back to Plants
      </button>
      <PlantCard plants={categoryPlants} />
    </div>
  );
};

export default Category;
