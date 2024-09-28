import React from 'react'
import Slider from 'react-slick';

export const SliderImg = ({children}) => {

    const img=["../../../../public/backgrounds-main/background-main.webp"]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
        };
    return (
        <div className="slider-container flex flex-w">
            <Slider {...settings}>
                {img.map(item=>(
                    <img src={item} />
                ))}
            </Slider>
        </div>
    )
}