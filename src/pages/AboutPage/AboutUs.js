import React from 'react';
import './AboutUs.css'; // Import the CSS file for styles

import aboutus from "../../assets/about-images/aboutus.jpg";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-section__container">
        <div className="about-section__row">
          {/* Content Column */}
          <div className="about-section__content-column">
            <div className="about-section__inner-column">
              <div className="about-section__sec-title">
                <p className = 'about-section-heading'>About us</p>
              </div>
              <div className="about-section__text">
              At ENGINEERSNEST, we invite you to experience a world where your visions are transformed into reality with unmatched craftsmanship and innovation. We are your go-to experts for fabrication, construction, and interior design, equipped with state-of-the-art facilities and a dedicated team committed to excellence. Our approach is simple: we blend advanced technology with creative solutions to deliver exceptional results that not only meet but exceed your expectations. From the initial consultation to the final touches, we handle every detail with precision and care, ensuring a transformative experience for every project. At ENGINEERSNEST, we don’t just build or design spaces; we elevate them, creating environments that are both functional and visually stunning. Choose us to turn your ideas into extraordinary realities and discover the difference that true expertise and passion can make.              </div>
              <div className="about-section__text">
              Founded in 2020, ENGINEERSNEST has been providing reliable fabrication, construction, and interior design services across Pakistan. In a short time, we've built a reputation for delivering quality work on a variety of projects, from residential homes to commercial buildings and interior spaces. Our focus is on meeting our clients' needs with precision and care, ensuring each project reflects our commitment to craftsmanship and service.              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="about-section__image-column">
            <div className="about-section__inner-column">
              <figure className="about-section__image-1">
                <a href="#" className="about-section__lightbox-image" data-fancybox="images">
                  <img title="Rahul Kumar Yadav" src={aboutus} alt="EN" />
                </a>
              </figure>
              <div className="about-section__image-column__image-frame"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
