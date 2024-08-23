import React from 'react';
import './VisionMission.css'; // Import the CSS file for styles

const VisionMission = () => {
  return (
    <div className="vision-mission-container">
      <div className="vision-mission-row">
      <div className="vision-mission-card col-md-4 card-3">
          <p className="vm-heading">Vision</p>
          <p className="vm-text">Our vision is to lead the construction and fabrication
industry through innovation, sustainability,
and superior craftsmanship, creating inspiring spaces
for a better future.
</p>
        </div>
        <div className="vision-mission-card col-md-4 card-1">
          <p className="vm-heading">Mission</p>
          <p className="vm-text">Our mission is to deliver topquality construction, fabrication, and interior services,
transforming visions into reality with excellence,
integrity, and customer satisfaction.</p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
