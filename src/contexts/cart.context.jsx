import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
