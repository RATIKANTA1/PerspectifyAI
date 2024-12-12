import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/Gallary/img1.png';
import img2 from '../assets/Gallary/img2.png';
import img3 from '../assets/Gallary/img3.png';
import img4 from '../assets/Gallary/img4.png';
import img5 from '../assets/Gallary/img5.png';
import img6 from '../assets/Gallary/img6.png';

import "./Carousel.css"
const Carousel = () => {
  const images = [
    {
      src: `${img1}`,
      alt: "Image 1",
    },
    {
      src: ` ${img2}`,
      alt: "Image 2",
    },
    {
      src:  `${img3}`,
      alt: "Image 3",
    },
    {
      src:  `${img4}`,
      alt: "Image 4",
    },
    {
      src:  `${img5}`,
      alt: "Image 5",
    },
    {
      src:  `${img6}`,
      alt: "Image 6",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 py-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
