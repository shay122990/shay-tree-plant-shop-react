import "./message-display.styles.css";
import Button from "../button/button.component";
import PropTypes from "prop-types";

const MessageDisplay = ({
  isSuccess,
  message,
  buttonText = "Click Here",
  onButtonClick = null,
}) => {
  return (
    <div className={`message-display ${isSuccess ? "success" : "failure"}`}>
      <h1>{isSuccess ? "Success" : "Failure"}</h1>
      <p>{message}</p>
      {isSuccess && (
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