import CarouselComponent from "../../components/carousel/carousel.component";
import aboutCarouselData from "../../data/about-carousel-data";

const About = () => {
  return (
    <div>
      <CarouselComponent carouselData={aboutCarouselData} />
    </div>
  );
};

export default About;
