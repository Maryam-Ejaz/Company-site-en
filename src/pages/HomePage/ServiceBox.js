import React from 'react';
import { Link } from 'react-router-dom';

const ServiceBox = ({ imgSrc, title }) => (
  <div className="service-box">
    <div className="service-content">
      <img src={imgSrc} alt={title} loading="lazy" /> {/* Lazy load images */}
      <h2>{title}</h2>
      <Link to="/services" className="hire-link">Read More</Link>
    </div>
  </div>
);

export default ServiceBox;
