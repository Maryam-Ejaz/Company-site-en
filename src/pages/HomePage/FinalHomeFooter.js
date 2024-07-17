import React from 'react';
import './FinalHomeFooter.css';
import logo from "../../assets/logo-en.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FinalHomeFooter = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-row">
              <div className="footer-column">
                <div className="logo-widget footer-widget">
                  <figure className="logo-box">
                    <a href="#"><img src={logo} alt="Logo" /></a>
                  </figure>
                  <div className="text">
                    <p>Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure.</p>
                    <span className="headerLine"></span>
                  </div>
                  <div className="service-widget footer-widget">
                    <ul className="list">
                      <li><a href="#">About</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Portfolio</a></li>
                      <li><a href="#">Clients</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-column">
                <div className="contact-widget footer-widget">
                  <div className="text">
                    <div className="hf-contact">
                      <p>Lorem Ipsum, simply dummy text, printing, Lahore</p>
                      <div className="footer-icon-div">
                        <FontAwesomeIcon className='footer-icon' icon={faAddressBook}/>
                      </div>
                    </div>
                    <div className="hf-contact">
                      <p>+92 (784) 1223323</p>
                      <div className="footer-icon-div">
                        <FontAwesomeIcon className='footer-icon' icon={faPhone}/>
                      </div>
                    </div>
                    <div className="hf-contact">
                      <p>info@example.com</p>
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
