import React, { useState, useEffect, useCallback } from 'react';
import '../MainWeb/Main.css';
import image1 from '../../images/news1.jpeg';
import image2 from '../../images/news2.jpg';
import image3 from '../../images/news3.jpg';
import image4 from '../../images/news4.jpg';
import image5 from '../../images/news5.avif';

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2, image3, image4, image5];

  const goToNextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPreviousSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Chuyển ảnh sau mỗi 3 giây

    return () => clearInterval(interval); // Clear interval khi component bị unmount
  }, [goToNextSlide]); // Chỉ chạy effect khi goToNextSlide thay đổi

  return (
    <div className="slider">
      <button className="nav-button left" onClick={goToPreviousSlide}>&#8249;</button>
      <img src={images[currentImageIndex]} alt="Slide" />
      <button className="image-overlay-button" onClick={() => alert('Button clicked!')}>
        <p className="words">Click Me</p>
      </button>
      <button className="nav-button right" onClick={goToNextSlide}>&#8250;</button>
    </div>
  );
};

export default Main;
