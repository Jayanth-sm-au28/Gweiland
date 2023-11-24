"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import carousel from "../../public/carousel.svg";
import carousel_1 from "../../public/carousel_1.svg";
import carousel_2 from "../../public/carousel_2.svg";
import carousel_3 from "../../public/carousel_3.svg";
import carousel_4 from "../../public/carousel_4.svg";





const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1));
  };


  const carouselItems = [
    { src: carousel, alt: "bravo", text: "Heretiage Hoddies" },
    { src: carousel_1, alt: "bravo", text: "Heretiage Premium Hoddies" },
    { src: carousel_2, alt: "bravo", text: "Premium Tees" },
    { src: carousel_3, alt: "bravo", text: "Heretiage Women's Tanks " },
    { src: carousel_4, alt: "bravo", text: "Heritage Tees" },
    // Add more items as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 5000); // Change the duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="relative w-full group">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0"
            } transition-transform duration-700 transform translate-x-${index - currentSlide} ease-in-out`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              layout="responsive"
              width={1920}
              height={1080}
              objectFit="cover"
            />
            <div className={`absolute text-white text-center ${index === carouselItems.length - 1 ? "bottom-4 right-1/2 transform translate-x-1/2" : "bottom-4 left-1/2 transform -translate-x-1/2"}`}>
              <h2 className="text-2xl font-bold">{item.text}</h2>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 start-0 z-30 flex items-center justify-center h-10 px-4 ml-4 bg-gray-800 text-white rounded-full cursor-pointer group focus:outline-none bg-shark opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        onClick={handlePrevSlide}
      >
        {"<"}
      </button>
      <button
        type="button"
        className="absolute top-1/2 end-0 z-30 flex items-center justify-center h-10 px-4 mr-4 bg-gray-800 text-white rounded-full cursor-pointer group focus:outline-none bg-shark opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        onClick={handleNextSlide}
      >
        {">"}
      </button>
    </div>
  );
};

export default HeroBanner;




