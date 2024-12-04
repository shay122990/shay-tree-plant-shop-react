import "./about.page.styles.css";
import CarouselComponent from "../../components/carousel/carousel.component";
import aboutCarouselData from "../../data/about-carousel-data";
import ImageCard from "../../components/image-card/image-card.component";
import imageCardData from "../../data/about-image-card-data";

const About = () => {
  return (
    <div className="container px-2ß">
      <CarouselComponent carouselData={aboutCarouselData} />
      <div className="d-flex flex-column m-2">
        <h1 className="mt-4">About Shay&#39;s Tree</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          lacus eget justo ultricies, sed condimentum justo consectetur. Nullam
          hendrerit purus at semper pulvinar.
        </p>
        <p>
          Sed interdum, arcu vel consectetur imperdiet, metus nunc pharetra
          ligula, ut convallis sem neque non ipsum. Donec rutrum, ex sed aliquet
          tristique, arcu ipsum aliquet neque, vel vulputate justo sapien in
          velit.
        </p>
        <p>
          Nulla facilisi. Donec sagittis, ipsum eget fermentum cursus, ligula
          nunc dignissim mauris, at ultricies neque lectus vel odio. Sed quis
          pellentesque felis.
        </p>
      </div>
      <div className="d-flex justify-content-center flex-wrap align-items-center">
        {imageCardData.map((card, index) => (
          <div
            className="image-card-wrapper col-12 col-md-6 col-lg-4 mb-3 w-300"
            key={index}
          >
            <ImageCard imageSrc={card.imageSrc} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
