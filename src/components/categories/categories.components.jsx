import "./categories.styles.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/product.context";

const Categories = () => {
  const { categories } = useContext(ProductsContext);

  return (
    <div className="categories-grid row row-cols-2 row-cols-md-3 g-4">
      {categories.map((category) => (
        <div key={category.name} className="categories-col col">
          <Link
            to={`/plants/category/${category.name}`}
            className="categories-cardLink"
          >
            <div className="categories-card card">
              <div className="categories-imgWrapper">
                <img
                  src={category.image}
                  className="categories-img card-img-top"
                  alt={category.name}
                />
              </div>

              <div className="categories-body card-body">
                <h5 className="categories-title">{category.name}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
