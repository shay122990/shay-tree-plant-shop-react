import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
  plants as initialPlants,
  categories as initialCategories,
} from "../data/plants-data";

export const ProductsContext = createContext({
  plants: [],
  categories: [],
  setPlants: () => {},
  setCategories: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [plants, setPlants] = useState(initialPlants);
  const [categories, setCategories] = useState(initialCategories);

  const value = { plants, categories, setPlants, setCategories };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
