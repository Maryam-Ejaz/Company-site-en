import React from 'react';
import './HomeServiceSlider.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faScrewdriverWrench, faTape, faScrewdriver } from '@fortawesome/free-solid-svg-icons'; // Import desired icons

const textSlides = [
  "Domestic Construction",
  "Interior Work",
  "Electrical Work",
  "Fabrication",
  "Commercial Construction",
  "Renovation",
  "Underground Construction",
  "Signage Boards",
  "Metal Structures"
];

const iconSlides = [
  faHammer,
  faScrewdriverWrench,
  faTape,
  faScrewdriver,
];

const HomeServiceSlider = () => {
  return (
    <div className="sslider">
      <div className="sslide-track">
        {textSlides.map((text, index) => (
          <div className="sslide" key={`text-${index}`}>
            <div className="text-icon-container">
              <div className="stext-slide">{text}</div>
              <div className="sicon-slide">
                <FontAwesomeIcon icon={iconSlides[index % iconSlides.length]} size="1x" />
              </div>
            </div>
          </div>
        ))}
        {/* Duplicate slides for continuous effect */}
        {textSlides.map((text, index) => (
          <div className="sslide" key={`text-duplicate-${index}`}>
            <div className="text-icon-container">
              <div className="stext-slide">{text}</div>
              <div className="sicon-slide">
                <FontAwesomeIcon icon={iconSlides[index % iconSlides.length]} size="1x" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServiceSlider;
