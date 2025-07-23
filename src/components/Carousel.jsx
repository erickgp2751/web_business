
import React, { useState } from 'react';
import './Carousel.css';

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={goToPrevious}>
        &#10094;
      </button>
      
      <div className="carousel-item">
        {items[currentIndex]}
      </div>
      
      <button className="carousel-button right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
