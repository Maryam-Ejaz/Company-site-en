import React from 'react';
import './FinalHomeFooter.css';
import logo from "../../assets/logo-en.jpg";

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
                  </div>
                  <ul className="footer-social">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-column">
                <div className="service-widget footer-widget">
                  <div className="footer-title">Useful Links</div>
                  <ul className="list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">License</a></li>
                    <li><a href="#">Clients</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-column">
                <div className="contact-widget footer-widget">
                  <div className="footer-title">Contact</div>
                  <div className="text">
                    <p>Lorem Ipsum, simply dummy text, printing, Lahore</p>
                    <p>+92 (784) 1223323</p>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">

          <div className="footer-row">
            <div className="footer-column">
              <div className="copyright">
                <a href="#">Maryam</a> &copy; 2024 All Rights Reserved
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default FinalHomeFooter;
