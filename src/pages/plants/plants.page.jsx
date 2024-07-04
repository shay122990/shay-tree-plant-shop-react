import "./plants-page.styles.css";
import { Routes, Route } from "react-router-dom";
import Categories from "../../components/categories/categories.components";
import Category from "../../components/category/category.component";
import CarouselComponent from "../../components/carousel/carousel.component";
import plantsCarouselData from "../../data/about-carousel-data";

const Plants = () => {
  return (
    <div className="plants-page-container">
      {/* <h1>Plants</h1> */}
      <CarouselComponent carouselData={plantsCarouselData} />
      <div className="plants-page-categories">
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="category/:categoryName" element={<Category />} />
        </Routes>
      </div>
    </div>
  );
};

export default Plants;
