import "./plants-page.styles.css";
import { Routes, Route } from "react-router-dom";
import Categories from "../../components/categories/categories.components";
import Category from "../../components/category/category.component";
import CarouselComponent from "../../components/carousel/carousel.component";
import plantsCarouselData from "../../data/plants-carousel-data";

const Plants = () => {
  return (
    <div className="container px-2">
      <CarouselComponent carouselData={plantsCarouselData} />
      <div className="py-5">
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="category/:categoryName" element={<Category />} />
        </Routes>
      </div>
    </div>
  );
};

export default Plants;
