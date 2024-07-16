import React from 'react';
import './HomeClients.css'; // Import your CSS file for styling

// Import your images
import image_1 from "../../assets/l1.png";
import image_2 from "../../assets/l2.png";
import image_3 from "../../assets/l3.png";
import image_4 from "../../assets/l4.png";
import image_5 from "../../assets/l5.png";
import image_6 from "../../assets/l6.png";

const HomeClients = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={image_1} alt="Logo 1" />
        </div>
        <div className="slide">
          <img src={image_2} alt="Logo 2" />
        </div>
        <div className="slide">
          <img src={image_3} alt="Logo 3" />
        </div>
        <div className="slide">
          <img src={image_4} alt="Logo 4" />
        </div>
        <div className="slide">
          <img src={image_5} alt="Logo 5" />
        </div>
        <div className="slide">
          <img src={image_6} alt="Logo 6" />
        </div>
        {/* Repeat the images as needed */}
        <div className="slide">
          <img src={image_1} alt="Logo 1" />
        </div>
        <div className="slide">
          <img src={image_2} alt="Logo 2" />
        </div>
        <div className="slide">
          <img src={image_3} alt="Logo 3" />
        </div>
        <div className="slide">
          <img src={image_4} alt="Logo 4" />
        </div>
        <div className="slide">
          <img src={image_5} alt="Logo 5" />
        </div>
        <div className="slide">
          <img src={image_6} alt="Logo 6" />
        </div>
      </div>
    </div>
  );
};

export default HomeClients;
