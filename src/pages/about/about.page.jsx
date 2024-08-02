import "./about.page.styles.css";
import CarouselComponent from "../../components/carousel/carousel.component";
import aboutCarouselData from "../../data/about-carousel-data";

const About = () => {
  return (
    <div className="about-page-container">
      <CarouselComponent carouselData={aboutCarouselData} />
    </div>
  );
};

export default About;
