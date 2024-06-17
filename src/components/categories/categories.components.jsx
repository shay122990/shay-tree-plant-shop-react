import { Link } from "react-router-dom";
import { categories } from "../../plants-data";

const Categories = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {categories.map((category) => (
          <div key={category.name} className="col">
            <div className="card h-100">
              <Link to={`/plants/category/${category.name}`}>
                <img
                  src={category.image}
                  className="card-img-top"
                  alt={category.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
