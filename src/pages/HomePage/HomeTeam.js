import React from 'react';
import './HomeTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const HomeTeam = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <p className="team-heading">
          Our Dynamic Team</p>
        <div className="row">

          <div className="col">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=1027" alt="Michele Miller" />
              </div>
              <div className="team-content">
                <h3 className="name">Michele Miller</h3>
                <h4 className="title">CEO</h4>
              </div>
              <ul className="social">
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-facebook" aria-hidden="true"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-twitter" aria-hidden="true"><FontAwesomeIcon icon={faGoogle}/></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-google-plus" aria-hidden="true"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-linkedin" aria-hidden="true"><FontAwesomeIcon icon={faTwitter}/></a></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=839" alt="Patricia Knott" />
              </div>
              <div className="team-content">
                <h3 className="name">Patricia Knott</h3>
                <h4 className="title">CTO</h4>
              </div>
              <ul className="social">
                <li><a href="https://www.linkedin.com/feed/" aria-hidden="true"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-twitter" aria-hidden="true"><FontAwesomeIcon icon={faGoogle}/></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-google-plus" aria-hidden="true"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-linkedin" aria-hidden="true"><FontAwesomeIcon icon={faTwitter}/></a></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=856" alt="Justin Ramos" />
              </div>
              <div className="team-content">
                <h3 className="name">Justin Ramos</h3>
                <h4 className="title">COO</h4>
              </div>
              <ul className="social">
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-facebook" aria-hidden="true"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-twitter" aria-hidden="true"><FontAwesomeIcon icon={faGoogle}/></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-google-plus" aria-hidden="true"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-linkedin" aria-hidden="true"><FontAwesomeIcon icon={faTwitter}/></a></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=836" alt="Mary Huntley" />
              </div>
              <div className="team-content">
                <h3 className="name">Mary Huntley</h3>
                <h4 className="title">CMO</h4>
              </div>
              <ul className="social">
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-facebook" aria-hidden="true"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-twitter" aria-hidden="true"><FontAwesomeIcon icon={faGoogle}/></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-google-plus" aria-hidden="true"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="fa fa-linkedin" aria-hidden="true"><FontAwesomeIcon icon={faTwitter}/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTeam;
