import React, { useState, useEffect, useRef } from 'react';
import './Values.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faE, faN, faG, faI, faR, faS, faT } from '@fortawesome/free-solid-svg-icons';

import efficiency from "../../assets/values/efficiency.jpg";
import environment from "../../assets/values/environment.jpg";
import excellence from "../../assets/values/excellence.jpg";
import growth from "../../assets/values/growth.jpg";
import integrity from "../../assets/values/integrity.jpg";
import network from "../../assets/values/network.jpg";
import novelty from "../../assets/values/novelty.jpg";
import nurture from "../../assets/values/nurture.jpg";
import reliability from "../../assets/values/reliability.jpg";
import safety from "../../assets/values/safety.jpg";
import sustainability from "../../assets/values/sustainability.jpg";
import teamwork from "../../assets/values/teamwork.jpg";
import empowerment from "../../assets/about-images/aboutus.jpg";

const Values = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const optionsData = [
    {
      background: excellence,
      icon: faE,
      main: 'Blonkisoaz',
      sub: 'EXCELLENCE',
      color: '#ff6347' // Tomato
    },
    {
      background: nurture,
      icon: faN,
      main: 'Oretemauw',
      sub: 'NURTURE',
      color: '#4682b4' // SteelBlue
    },
    {
      background: growth,
      icon: faG,
      main: 'Iteresuselle',
      sub: 'GROWTH',
      color: '#32cd32' // LimeGreen
    },
    {
      background: integrity,
      icon: faI,
      main: 'Idiefe',
      sub: 'INTEGRITY',
      color: '#ff4500' // OrangeRed
    },
    {
      background: novelty,
      icon: faN,
      main: 'Inatethi',
      sub: 'NOVELTY',
      color: '#1e90ff' // DodgerBlue
    },
    {
      background: efficiency,
      icon: faE,
      main: 'Oretemauw',
      sub: 'EFFICIENCY',
      color: '#8a2be2' // BlueViolet
    },
    {
      background: empowerment,
      icon: faE,
      main: 'Iteresuselle',
      sub: 'EMPOWERMENT',
      color: '#ff6347' // Tomato
    },
    {
      background: reliability,
      icon: faR,
      main: 'Idiefe',
      sub: 'RELIABILITY',
      color: '#ff4500' // OrangeRed
    },
    {
      background: safety,
      icon: faS,
      main: 'Inatethi',
      sub: 'SAFETY',
      color: '#4682b4' // SteelBlue
    },
    {
      background: network,
      icon: faN,
      main: 'Oretemauw',
      sub: 'NETWORK',
      color: '#1e90ff' // DodgerBlue
    },
    {
      background: environment,
      icon: faE,
      main: 'Iteresuselle',
      sub: 'ENVIRONMENT',
      color: '#8a2be2' // BlueViolet
    },
    {
      background: sustainability,
      icon: faS,
      main: 'Idiefe',
      sub: 'SUSTAINABILITY',
      color: '#32cd32' // LimeGreen
    },
    {
      background: teamwork,
      icon: faT,
      main: 'Inatethi',
      sub: 'TEAM WORK',
      color: '#ff6347' // Tomato
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const screenBottom = window.innerHeight;
      if (containerTop < screenBottom) {
        containerRef.current.classList.add('scrolled-into-view');
        const options = document.querySelectorAll('.our-values-option');
        options.forEach((option, index) => {
          setTimeout(() => {
            option.style.opacity = '1';
            option.style.transform = 'translateX(0)';
          }, index * 150); // Staggered effect with 150ms delay
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="our-values-container" ref={containerRef}>
      <p className="our-values-heading">Our Values</p>
      <p className="our-values-text">Our company's values are the foundation of everything we do. They guide our decisions, inspire our actions, and define the way we interact with our clients, partners, and each other. By upholding these principles, we strive to create an environment that fosters innovation, integrity, and a deep commitment to excellence. Each value reflects our dedication to not only meeting expectations but exceeding them, driving us to continuously evolve and grow as a trusted leader in our industry.</p>
      <div className="our-values-options">
        {optionsData.map((option, index) => (
          <div
          key={index}
          className={`our-values-option ${index === activeIndex ? 'active' : ''}`}
          style={{ 
            backgroundImage: `url(${option.background})`, // Applying the background image correctly
            '--optionBackground': `url(${option.background})` 
          }}
          onClick={() => setActiveIndex(index)}
        >
          <div className="our-values-shadow"></div>
          <div className="our-values-label">
            <div className="our-values-icon">
              <FontAwesomeIcon 
                className="our-values-icon" 
                icon={option.icon} 
                style={{ color: option.color }} // Assigning color
              />
            </div>
            <div className="our-values-info">
              <div className="our-values-main">{option.sub}</div>
            </div>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Values;
