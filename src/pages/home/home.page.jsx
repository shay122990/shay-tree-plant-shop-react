import "./home.page.styles.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/product.context";
import CarouselComponent from "../../components/carousel/carousel.component";

const Home = () => {
  const { plants, categories } = useContext(ProductsContext);

  const bestSellersCategory = categories.find(
    (category) => category.name === "Best Sellers"
  );

  const bestSellersPlants = plants.filter((plant) =>
    bestSellersCategory.plantIds.includes(plant.id)
  );

  const carouselData = bestSellersPlants.map((plant) => ({
    image: plant.image,
    text: plant.name,
    description: plant.description || "",
  }));

  return (
    <div className="container d-flex flex-column">
      <div className="d-flex  flex-column text-center justify-content-center home-container">
        <main className="px-3 cover-container">
          <h1>Shay&#39;s Tree</h1>
          <p className="lead">
            Transform your space with our curated selection of beautiful,
            easy-care indoor and outdoor plants. <br /> Discover your green
            oasis today!
          </p>
          <p>
            <Link
              to="/plants"
              className="btn btn-lg btn-light border-white bg-white"
            >
              Show Me Plants
            </Link>
          </p>
        </main>
      </div>
      <div className="container d-flex flex-column text-center mt-4">
        <h2 className="block mb-4">Best Sellers</h2>
        <div className="container text-center my-5">
          <div className="row justify-content-center">
            {categories.slice(0, 4).map((category) => (
              <div key={category.name} className="col-6 col-md-3 mb-4">
                <Link
                  to={`/plants/category/${category.name}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="border rounded shadow-sm p-4 h-100 d-flex align-items-center justify-content-center category-tile">
                    <span className="fw-semibold">{category.name}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <CarouselComponent carouselData={carouselData} />
      </div>
    </div>
  );
};

export default Home;
