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
    <>
      <div className="w-100 d-flex flex-column text-center justify-content-center home-container mb-4">
        <section className="hero">
          <div className="hero__content">
            <span className="hero__eyebrow">Curated Greens</span>
            <h1 className="hero__title">Shay’s Tree</h1>
            <p className="hero__subtitle">
              Beautiful, easy-care plants for cozy corners and sunlit nooks.
            </p>
            <Link to="/plants" className="hero__cta">
              Shop Plants
            </Link>
          </div>
        </section>
      </div>
      <section className="best-sellers">
        <div className="best-sellers__head">
          <h2 className="best-sellers__title">Best Sellers</h2>
          <p className="best-sellers__subtitle">
            Our most loved green companions
          </p>
        </div>

        <div className="best-sellers__grid">
          {categories.slice(0, 4).map((category) => (
            <Link
              key={category.name}
              to={`/plants/category/${category.name}`}
              className="best-sellers__card"
            >
              <div
                className="best-sellers__image"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="best-sellers__overlay" />
              <div className="best-sellers__name">{category.name}</div>
            </Link>
          ))}
        </div>

        <div className="best-sellers__carousel">
          <CarouselComponent carouselData={carouselData} />
        </div>
      </section>
    </>
  );
};

export default Home;
