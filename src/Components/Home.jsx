import React, { useState, useEffect, useCallback } from "react";
import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.webp";

function Home() {
  const images = [img3, img1, img2, img3, img1]; // Clone last and first images
  const [currentIndex, setCurrentIndex] = useState(1); // Start from the actual first image
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [isTransitioning]);

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 2); // Jump to the last actual image
    } else if (currentIndex === images.length - 1) {
      setCurrentIndex(1); // Jump to the first actual image
    }
  };

  return (
    <section className="bg-gray-800 text-center py-3 relative" id="home">
      <div className="relative w-full h-[400px] md:h-[507px] xl:h-[700px] overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out h-full ${
            isTransitioning ? "" : "transition-none"
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-45 p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-900 text-center">
            Guiding your financial Journey.
          </h2>
          <p className="text-sm sm:text-base md:text-md lg:text-xl mb-8 text-bold text-white text-center max-w-2xl leading-relaxed">
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

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-800 text-white px-3 py-2 rounded-full hover:bg-blue-600 z-20"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-800 text-white px-3 py-2 rounded-full hover:bg-blue-600 z-20"
      >
        &#10095;
      </button>
    </section>
  );
}

export default Home;
