import { useParams, useNavigate } from "react-router-dom";
import { categories, plants } from "../../plants-data";
import PlantCard from "../../components/plant-card/plant-card.components";

const Category = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const category = categories.find((cat) => cat.name === categoryName);

  if (!category) {
    return <div>Category not found</div>;
  }

  const categoryPlants = plants.filter((plant) =>
    category.plantIds.includes(plant.id)
  );

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => navigate("/plants")}
      >
        Back to Categories
      </button>
      <h2>{category.name}</h2>
      <PlantCard plants={categoryPlants} />
    </div>
  );
};

export default Category;
