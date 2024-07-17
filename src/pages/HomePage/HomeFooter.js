import React from 'react';
import './HomeFooter.css';

const HomeFooter = () => {
  return (
    <>
      <div id="page13">
        <div class="form-container-main">
          <div class="form-container">
            <div class="form-image">
              <p class="montserrat">Get in touch</p>
              <p class="montserrat_">Contact ENGINEERS NEST to discover tailored solutions for your building, design, and renovation needs. </p>
              <model-viewer class="model" alt="laptop" src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/b5f434ae4d45d10fe1664d5606ad28e4d9c739af/images/laptop.glb" shadow-intensity="1" camera-controls touch-action="pan-y" environment-image="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/b5f434ae4d45d10fe1664d5606ad28e4d9c739af/images/dancing_hall_2k.hdr" exposure="1.5" disable-zoom disable-tap camera-orbit="-45deg 60deg 9m" autoplay></model-viewer>
            </div>
            <div class="form">
              <input type="text" id="name" placeholder="Name" autofocus/>
                <input type="email" id="mail" placeholder="Email"/>
                  <textarea name="message" id="message" cols="30" rows="10" placeholder="Say Hello"></textarea>
                  <div class="button-container">
                    <div class="send-button">Send</div>
                    
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div id="page14">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="page14-link">
          <div className="page14-inner">
            <h1>Twitter</h1>
            <i className="ri-arrow-right-up-line"></i>
            <div className="center14"></div>
          </div>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="page14-link">
          <div className="page14-inner">
            <h1>LinkedIn</h1>
            <i className="ri-arrow-right-up-line"></i>
            <div className="center14"></div>
          </div>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="page14-link">
          <div className="page14-inner">
            <h1>Instagram</h1>
            <i className="ri-arrow-right-up-line"></i>
            <div className="center14"></div>
          </div>
        </a>
      </div>
    </>
  );
};

export default HomeFooter;
