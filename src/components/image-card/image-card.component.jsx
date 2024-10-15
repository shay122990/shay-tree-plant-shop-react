import PropTypes from "prop-types";
import "./image-card.styles.css";

const ImageCard = ({ imageSrc, text }) => {
  return (
    <div className="card w-75 h-75">
      <img
        className="card-img-top w-100 h-75"
        src={imageSrc}
        alt="Card image cap"
      />
      <div className="card-body h-95 image-card-info">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImageCard;
