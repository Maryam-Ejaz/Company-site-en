// src/pages/About.js
import {React, useLayoutEffect} from 'react';
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

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
      document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
  }, [location.pathname]);
  
  return (
    <div className='homeMainDiv'>
      <AboutBentoGrid />
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
