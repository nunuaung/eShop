import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ads.css";
import Slider1 from "../../asset/image/ads/ads-1.jpg";
import Slider2 from "../../asset/image/ads/ads-2.jpg";
import Slider3 from "../../asset/image/ads/ads-3.jpg";

const Ads = () => {
  const settings = {
    className: "center",
    className: "ads-slider",
    autoplay: true,
    cssEase: "linear",
    speed: 1000,
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "270px",
    slidesToShow: 1,
    slideToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          centerPadding: "190px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "85px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="col3-slider mb-30">
      <Slider {...settings}>
        <div className="ads-slide">
          <img src={Slider1} alt="ads-1" />
        </div>
        <div className="ads-slide">
          <img src={Slider2} alt="ads-2" />
        </div>
        <div className="ads-slide">
          <img src={Slider3} alt="ads-3" />
        </div>
        <div className="ads-slide">
          <img src={Slider1} alt="ads-1" />
        </div>
        <div className="ads-slide">
          <img src={Slider2} alt="ads-2" />
        </div>
        <div className="ads-slide">
          <img src={Slider3} alt="ads-3" />
        </div>
      </Slider>
    </div>
  );
};

export default Ads;
