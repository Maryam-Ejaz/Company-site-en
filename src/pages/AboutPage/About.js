// src/pages/About.js
import {React, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import AboutBentoGrid from './AboutBentoGrid';
import FinalHomeFooter from '../HomePage/FinalHomeFooter';
import HomeFooter from '../HomePage/HomeFooter';
import AboutUs from './AboutUs';
import VisionMission from './VisionMission';
import CeoQuote from './CeoQuote';
import HomeTeam from '../HomePage/HomeTeam';
import Values from './Values';

const About = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); 
  return (
    <div className='homeMainDiv'>
      <AboutBentoGrid/>
      <AboutUs/>
      <VisionMission/>
      <Values/>
      <CeoQuote/>
      <HomeTeam/>
      <HomeFooter/>
      <FinalHomeFooter/>
    </div>
  );
};

export default About;
