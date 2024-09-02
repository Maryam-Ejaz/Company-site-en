import React from 'react';
import './FinalHomeFooter.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo-en.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FinalHomeFooter = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-row">
              <div className="footer-column-o">
                <div className="logo-widget footer-widget">
                  <figure className="logo-box">
                    <a href="#"><img src={logo} alt="Logo" /></a>
                  </figure>
                  <div className="text">
                    <p>Engineersnest is a leading construction, fabrication, and interior work company 
          based in Lahore, Pakistan. Since our inception, we have established a reputation for delivering exceptional quality 
          and innovation in every project we undertake.</p>
                    <span className="headerLine"></span>
                  </div>
                  <div className="service-widget footer-widget">
                  <nav className='nav-footer'>
      <ul className="list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
      </ul>
    </nav>
                  </div>
                </div>
              </div>
              <div className="footer-column-o">
                <div className="contact-widget footer-widget">
                  <div className="text">
                    <div className="hf-contact">
                      <p>942-G LDA AVENUE-I, Lahore</p>
                      <div className="footer-icon-div">
                        <FontAwesomeIcon className='footer-icon' icon={faAddressBook}/>
                      </div>
                    </div>
                    <div className="hf-contact">
                      <p>+923004499989</p>
                      <div className="footer-icon-div">
                        <FontAwesomeIcon className='footer-icon' icon={faPhone}/>
                      </div>
                    </div>
                    <div className="hf-contact">
                      <p>contact@engineernest.com</p>
                      <div className="footer-icon-div">
                        <FontAwesomeIcon className='footer-icon' icon={faEnvelope}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        {/* <div className="footer-row">
          <div className="footer-column"> */}
            <div className="copyright">
              <a href="#">Maryam</a> &copy; 2024 All Rights Reserved
            </div>
          </div>
        {/* </div>
      </div> */}
    </>
  );
};

export default FinalHomeFooter;
