import "./message-display.styles.css";
import Button from "../button/button.component";
import PropTypes from "prop-types";

const MessageDisplay = ({
  isSuccess,
  message,
  buttonText = null,
  onButtonClick = null,
  className = "",
}) => {
  return (
    <div
      className={`message-display ${
        isSuccess ? "success" : "failure"
      } ${className}`}
    >
      <p>
        {isSuccess ? "Success: " : "Failure: "}
        {message}
      </p>
      {buttonText && (
        <Button buttonType="generic" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

MessageDisplay.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  className: PropTypes.string,
};

export default MessageDisplay;
