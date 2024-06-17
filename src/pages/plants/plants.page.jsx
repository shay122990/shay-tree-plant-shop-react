import "./plants-page.styles.css";
import { Routes, Route } from "react-router-dom";
import Categories from "../../components/categories/categories.components";
import Category from "../../components/category/category.component";

const Plants = () => {
  return (
    <div className="plants-page-container">
      <h1>Plants</h1>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="category/:categoryName" element={<Category />} />
      </Routes>
    </div>
  );
};
console.log(Plants());
export default Plants;
