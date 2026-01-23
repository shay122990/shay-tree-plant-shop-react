import PropTypes from "prop-types";
import "./image-card.styles.css";

const ImageCard = ({ imageSrc, text }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imageSrc} alt="Card image cap" />
      <div className="card-body">
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
