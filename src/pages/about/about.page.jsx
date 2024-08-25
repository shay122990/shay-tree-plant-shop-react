import "./about.page.styles.css";
import CarouselComponent from "../../components/carousel/carousel.component";
import aboutCarouselData from "../../data/about-carousel-data";
import img from "../../assets/carousel-images/carousel-1.webp";
const About = () => {
  return (
    <div className="container">
      <CarouselComponent carouselData={aboutCarouselData} />
      <div className="company-info">
        <h1>About Shay&#39;s Tree</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          lacus eget justo ultricies, sed condimentum justo consectetur. Nullam
          hendrerit purus at semper pulvinar. Quisque vel orci id sem dapibus
          consectetur vel eu lectus.
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
      <div className="plants-info-container">
        <div className="card">
          <img className="card-img-top" src={img} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
