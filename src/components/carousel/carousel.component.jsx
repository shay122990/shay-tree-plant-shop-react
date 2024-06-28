import "./carousel.styles.css";
import Carousel from "react-bootstrap/Carousel";
import carouselData from "../../data/carousel-data";

const CarouselComponent = () => {
  return (
    <Carousel>
      {carouselData.map((carouselItem) => (
        <Carousel.Item key={carouselItem.id}>
          <img
            className="d-block w-100 carousel-image"
            src={carouselItem.image}
            alt={carouselItem.image}
          />
          <Carousel.Caption>
            <p className="carousel-text">{carouselItem.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
