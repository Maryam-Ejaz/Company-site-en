import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SliderDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SliderDetail = React.memo(() => {
  const location = useLocation();
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current slide

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const slidesParam = queryParams.get('slides');
    
    if (slidesParam) {
      try {
        const slidesData = JSON.parse(decodeURIComponent(slidesParam));
        setSlides(slidesData);
        setCurrentIndex(0); // Reset to the first slide when new data is loaded
      } catch (e) {
        console.error('Failed to parse slides data:', e);
      }
    }
  }, [location.search]);

  useEffect(() => {
    // Add animation class to trigger animations on slide change
    const content = document.querySelector('.slider-detail-content');

    if (content) {
      content.classList.add('animate');
      
      // Remove animation class after animation ends
      const handleAnimationEnd = () => {
        content.classList.remove('animate');
        content.removeEventListener('animationend', handleAnimationEnd);
      };
      
      content.addEventListener('animationend', handleAnimationEnd);
    }
  }, [currentIndex]);

  // Function to go to the previous slide
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Function to go to the next slide
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  if (slides.length === 0) {
    return <div>No slides available</div>;
  }

  const currentSlide = slides[currentIndex]; // Get the current slide

  return (

    <div id="slider-detail-main" style={{
        backgroundImage: `linear-gradient(rgba(46, 41, 41, 0.8), rgba(46, 41, 41, 0.8)),url(${currentSlide.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="slider-detail-container" >
        <div className="slider-detail-slide">
          <div
            className="slider-detail-item"
            style={{
              backgroundImage: `url(${currentSlide.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="slider-detail-content">
              <div className="slider-detail-name">{currentSlide.name}</div>
              <div className="slider-detail-desc">{currentSlide.description}</div>
              {/* <button className="slider-detail-button">More Info</button> */}
            </div>
          </div>
        </div>
        <div className="slider-detail-button-container">
          <button className="slider-detail-prev" title="Previous" onClick={handlePrevClick}>
            <FontAwesomeIcon icon={faArrowLeft} className='sd-icon'/>
          </button>
          <button className="slider-detail-next" title="Next" onClick={handleNextClick}>
            <FontAwesomeIcon icon={faArrowRight} className='sd-icon' />
          </button>
        </div>
      </div>
    </div>

  );
});

export default SliderDetail;
