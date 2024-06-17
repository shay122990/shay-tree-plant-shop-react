import { useParams } from "react-router-dom";
import { categories, plants } from "../../plants-data";
import PlantCard from "../plant-card/plant-card.components";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const category = categories.find((cat) => cat.name === categoryName);

  if (!category) {
    return <div>Category not found</div>;
  }

  const categoryPlants = plants.filter((plant) =>
    category.plantIds.includes(plant.id)
  );

  return (
    <div>
      <h2>{category.name}</h2>
      <PlantCard plants={categoryPlants} />
    </div>
  );
};

export default CategoryPage;
