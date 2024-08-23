import React, { useRef, useEffect } from 'react';
import './VisionMission.css'; // Import the CSS file for styles

const VisionMission = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="vision-mission-container">
      <div className="vision-mission-row">
        <div className="vision-mission-card col-md-4 card-3" ref={(el) => (cardRefs.current[0] = el)}>
          <p className="vm-heading">Vision</p>
          <p className="vm-text">Our vision is to lead the construction and fabrication industry through innovation, sustainability, and superior craftsmanship, creating inspiring spaces for a better future.</p>
        </div>
        <div className="vision-mission-card col-md-4 card-1" ref={(el) => (cardRefs.current[1] = el)}>
          <p className="vm-heading">Mission</p>
          <p className="vm-text">Our mission is to deliver top-quality construction, fabrication, and interior services, transforming visions into reality with excellence, integrity, and customer satisfaction.</p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
