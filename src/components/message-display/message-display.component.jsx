import "./message-display.styles.css";
import Button from "../button/button.component";
import PropTypes from "prop-types";

const MessageDisplay = ({
  isSuccess,
  message,
  buttonText = null,
  onButtonClick = null,
}) => {
  return (
    <div className={`message-display ${isSuccess ? "success" : "failure"}`}>
      <p>{isSuccess ? "Success" : "Failure"}</p>
      <p>{message}</p>
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
};

export default MessageDisplay;
