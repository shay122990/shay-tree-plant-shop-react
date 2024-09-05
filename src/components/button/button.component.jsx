import PropTypes from "prop-types";
import "./button.styles.css";

const BUTTON_TYPE_CLASSES = {
  google: "btn btn-primary",
  generic: "btn btn-light",
  cart: "btn btn-outline-dark",
  payment: "btn btn-info",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`btn ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(["google", "generic", "cart"]).isRequired,
};

export default Button;
