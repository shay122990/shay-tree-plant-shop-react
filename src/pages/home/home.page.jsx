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
        <CarouselComponent carouselData={carouselData} />
      </div>
    </div>
  );
};

export default Home;
