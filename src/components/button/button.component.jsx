import PropTypes from "prop-types";
import "./button.styles.css";

const BUTTON_TYPE_CLASSES = {
  google: "btn btn-primary",
  generic: "btn btn-light",
  cart: "btn btn-outline-dark",
  payment: "btn btn-payment",
};

const Button = ({
  children,
  buttonType = "generic",
  isLoading,
  ...otherProps
}) => {
  return (
    <button
      className={`btn ${BUTTON_TYPE_CLASSES[buttonType]}`}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(["google", "generic", "cart", "payment"])
    .isRequired,
  isLoading: PropTypes.bool,
};

export default Button;
