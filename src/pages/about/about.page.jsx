import "./about.page.styles.css";
import CarouselComponent from "../../components/carousel/carousel.component";
import aboutCarouselData from "../../data/about-carousel-data";
import ImageCard from "../../components/image-card/image-card.component";

import img1 from "../../assets/carousel-images/carousel-1.webp";
import img2 from "../../assets/carousel-images/carousel-2.jpg";
import img3 from "../../assets/carousel-images/carousel-3.jpg";

const About = () => {
  const imageCardData = [
    {
      imageSrc: img1,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      imageSrc: img2,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      imageSrc: img3,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ];

  return (
    <div className="container">
      <CarouselComponent carouselData={aboutCarouselData} />
      <div className="company-info">
        <h1 className="mt-4">About Shay&#39;s Tree</h1>
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
      <div className="container-fluid d-flex w-100 h-75 gap-2  p-0 ">
        {imageCardData.map((card, index) => (
          <ImageCard key={index} imageSrc={card.imageSrc} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default About;
