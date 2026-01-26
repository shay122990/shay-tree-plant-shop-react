import "./categories.styles.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/product.context";

const Categories = () => {
  const { categories } = useContext(ProductsContext);

  return (
    <div className="row row-cols-2 row-cols-md-3 g-4">
      {categories.map((category) => (
        <div key={category.name} className="col">
          <Link to={`/plants/category/${category.name}`} className="card-link">
            <div className="card category-card">
              <img
                src={category.image}
                className="card-img-top category-img"
                alt={category.name}
              />
              <div className="card-body">
                <h5 className="category-card-title">{category.name}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
