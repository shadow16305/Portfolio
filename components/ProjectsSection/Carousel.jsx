import Slider from "react-slick";
import CarouselCards from "../UI/CarouselCards";

const Carousel = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3.3,
    swipeToSlide: true,
  };

  return (
    <div>
      <Slider className="flex overflow-hidden" {...settings}>
        <CarouselCards />
      </Slider>
    </div>
  );
};

export default Carousel;
