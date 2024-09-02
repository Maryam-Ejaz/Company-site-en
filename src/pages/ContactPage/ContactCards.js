import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ContactCards.css';

const ContactCards = () => {
  return (
    <>
    <div className="contact-cards-container">
    <p class="montserrat contact-card-heading">Connect with us</p>
      <div className="contact-card-row">
        <div className="contact-card-item">
          <div className="contact-card">
          <a href="https://wa.me/3865555235" target="_blank" rel="noopener noreferrer" className='a-contact-card'>
            <span className="contact-card-icon">
              <FontAwesomeIcon icon={faPhone} size="2x" className='cardicon'/>
            </span>
            <div className="contact-card-content-wrap">
              <span className="contact-card-item-title">Connect on WhatsApp</span>
              <p className="contact-card-text">+92 300 4499989</p>
            </div>
            </a>
          </div>
        </div>
        <div className="contact-card-item">
          <div className="contact-card">
            <span className="contact-card-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className='cardicon' />
            </span>
            <div className="contact-card-content-wrap">
              <span className="contact-card-item-title">Our headquarters</span>
              <p className="contact-card-text">
                942-G LDA AVENUE-I, Lahore
              </p>
            </div>
          </div>
        </div>
        <div className="contact-card-item">
          <div className="contact-card">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@engineernest.com" target="_blank" rel="noopener noreferrer" className='a-contact-card'>
            <span className="contact-card-icon">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className='cardicon'/>
            </span>
            <div className="contact-card-content-wrap">
              <span className="contact-card-item-title">Email us</span>
              <p className="contact-card-text">contact@engineernest.com</p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
};

export default ContactCards;
