import PropTypes from "prop-types";
import "./image-card.styles.css";

const ImageCard = ({ imageSrc, text }) => {
  return (
    <div className="card image-card">
      <img
        className="card-img-top image-card__img"
        src={imageSrc}
        alt="Card image cap"
      />
      <div className="card-body image-card__body">
        <p className="card-text image-card__text">{text}</p>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImageCard;
