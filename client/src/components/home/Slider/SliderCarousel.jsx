import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import "./SliderCarousel.css"; // Import your custom CSS file

const SliderCarousel = () => {
  const [isPlay, setIsPlay] = useState(true);
  let sliderRef = useRef(null);
  const play = () => {
    setIsPlay(true);
    sliderRef.slickPlay();
  };
  const pause = () => {
    setIsPlay(false);
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: () => (
      <div className="custom-dot">
        <button className="dot-button"></button>
      </div>
    ),
    appendDots: (dots) => (
      <div className="dots-container">
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="slider-container">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div className="">
          <img
            className=""
            src="https://www.bkash.com/uploaded_contents/banners/desktop/website-1920x500_1717679913441.webp"
            alt="Banner"
          />
        </div>
        <div>
          <img
            src="https://www.bkash.com/uploaded_contents/banners/desktop/website-1920x500_1717679913441.webp"
            alt="Banner"
          />
        </div>
        <div>
          <img
            src="https://www.bkash.com/uploaded_contents/banners/desktop/website-1920x500_1717679913441.webp"
            alt="Banner"
          />
        </div>
      </Slider>
      <div className="controls-container">
        {isPlay ? (
          <FaPause className="button text-3xl mt-6" onClick={pause} />
        ) : (
          <FaPlay className="button text-2xl mt-6" onClick={play} />
        )}
      </div>
    </div>
  );
};

export default SliderCarousel;
