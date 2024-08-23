import React from 'react';
import './CeoQuote.css'; // Import the CSS file

import ceo from "../../assets/about-images/ceo.jpg";

const CeoQuote = () => {
  return (
    <div className="ceo-quote-container">
      <div className="ceo-quote-card">
              <div className="ceo-quote-textDiv">
                  <p class="ceo-quote-heading">CEO's Message</p>
                  <p class="ceo-quote-text">At ENGINEERSNEST, our
                      mission is to deliver
                      exceptional construction,
                      fabrication, and interior
                      solutions with a focus on
                      quality, innovation, and
                      integrity. We take pride in
                      our diverse range of services,
                      including PEB sheds, dairy
                      sheds, petrol pump
                      canopies, pedestrian bridges,
                      and light poles, all crafted
                      with precision and
                      excellence. Our dedicated
                      team is committed to
                      transforming visions into
                      reality, creating inspiring and
                      enduring spaces.
                  </p>
              </div>
              <div className="ceo-quote-textDivTwo">
                  <p class="ceo-quote-sign">S.M.Aslam Bukhari</p>
                  <p class="ceo-quote-designation">CEO, Engineersnest</p>
              </div>
      <img className = "ceo-quote-img" src={ceo} alt="CEO Message" />
      </div>
    </div>
  );
};

export default CeoQuote;
