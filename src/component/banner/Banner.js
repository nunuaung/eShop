import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import Banner1 from "../../asset/image/banner/banner1.jpg";
import Banner2 from "../../asset/image/banner/banner2.jpg";
import Banner3 from "../../asset/image/banner/banner3.jpg";

const Banner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    cssEase: "linear",
    speed: 600,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    autoplay: true,
  };
  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="slide slide1">
          <img src={Banner1} alt="banner1" className="pc-banner" />
          {/* <img src={Banner1} alt="sp-banner1" className="sp-banner" /> */}
        </div>
        <div className="slide slide2">
          <img src={Banner2} alt="banner2" className="pc-banner" />
          {/* <img src={Banner2} alt="sp-banner2" className="sp-banner" /> */}
        </div>
        <div className="slide slide3">
          <img src={Banner3} alt="banner3" className="pc-banner" />
          {/* <img src={Banner3} alt="sp-banner3" className="sp-banner" /> */}
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
