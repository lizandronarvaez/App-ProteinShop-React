import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SliderImg = ({ images }) => {
  const settings = {
    // puntos para elegir la imagen
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} >
          <img 
            src={image} 
            alt={`Slide ${index + 1}`} 
            className='w-full h-[30rem] md:h-[60rem] object-cover object-center'
          />
        </div>
      ))}
    </Slider>
  );
};

