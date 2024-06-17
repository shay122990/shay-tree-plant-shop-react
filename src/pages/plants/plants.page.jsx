import { Routes, Route } from "react-router-dom";
import Categories from "../../components/categories/categories.components";
import Category from "../../components/category/category.component";

const Plants = () => {
  return (
    <div>
      <h1>Plants</h1>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="category/:categoryName" element={<Category />} />
      </Routes>
    </div>
  );
};

export default Plants;
