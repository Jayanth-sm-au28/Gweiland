"use client"
import React, { useState, useEffect } from "react";

import Image from "next/image";
import carousel from "../../public/carousel.svg";
import carousel_1 from "../../public/carousel_1.svg";
import carousel_2 from "../../public/carousel_2.svg";
// import carousel_3 from "../../public/carousel_3.svg";
// import carousel_4 from "../../public/carousel_4.svg";

const images = [carousel, carousel_1, carousel_2, ];

const HeroBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full transform transition-transform duration-200 ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Image src={image} alt={`Carousel Image ${index}`} />
          </div>
        ))}
      </div>
      <h1 className="text-lg text-black text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Hero Banner
      </h1>
    </div>
  );
};

export default HeroBanner;
