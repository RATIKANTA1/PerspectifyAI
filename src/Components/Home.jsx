import React from "react";
import Slider from "react-slick";
import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-600 z-20"
    >
      &#10094;
    </button>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-600 z-20"
    >
      &#10095;
    </button>
  );
}

function Home() {
  const images = [img1, img2, img3];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="bg-gray-800 text-center py-3 relative" id="home">
      <div className="relative w-full overflow-hidden">
        <div className="w-full h-[350px] md:h-[500px]">
          <Slider {...settings} >
            {images.map((image, index) => (
              <div key={index} >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-600 text-center">
            Guiding your financial journey.
          </h2>
          <p className="text-sm sm:text-base md:text-md lg:text-xl mb-8 text-white text-center max-w-2xl leading-relaxed">
            Discover personalized financial mentorship tailored to your goals.
            Our expertise and support will pave the way to financial security
            and success, ensuring you are equipped to make informed decisions on
            your path to prosperity.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
