import React from 'react';
import './MapSection.css'; // Import the CSS file

const MapSection = () => {
  return (
    <section className="map_sec">
      <div className="map_container">
        <div className="map_row">
          <div className="col-md-10 offset-md-1">
            <div className="map_inner">
              <h4>Find Us on Google Map</h4>
              <p>Discover our location on Google Maps to easily find our office. Use the map to get directions and explore nearby landmarks for convenience.</p>
              <div className="map_bind">
              <iframe 
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108953.24103870742!2d74.218417!3d31.419945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901d604e7ac4f%3A0x26b385fd9af8f275!2s942%20LDA%20Ave%20ONE%20Rd%2C%20Block%20C%20Lda%20Avenue%20Phase%201%20Lda%20Avenue%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1724027223247!5m2!1sen!2sus" 
  width="100%" 
  height="450" 
  frameBorder="0" 
  style={{ 
    border: '1px solid grey', 
    borderRadius: '30px', 
    alignItems: 'center' 
  }} 
  allowFullScreen="" 
  aria-hidden="false" 
  tabIndex="0"
/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
