import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SliderImg = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    cssEase: "linear",
    fade:true,
    // lazyLoad:true
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className='focus:outline-none' >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className='md:w-11/12 mx-auto h-[30rem] md:h-[60rem] object-cover object-bottom'
          />
        </div>
      ))}
    </Slider>
  );
};

