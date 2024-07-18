import "./form-input.styles.scss";
import PropTypes from "prop-types";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input className="form-control" {...otherProps} />
    </div>
  );
};
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
};
export default FormInput;
