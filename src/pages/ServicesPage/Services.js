// src/pages/Services.js
import {React, useEffect} from 'react';
import ServicesBentoGrid from './ServicesBentoGrid';
import FinalHomeFooter from '../HomePage/FinalHomeFooter';
import HomeFooter from '../HomePage/HomeFooter';
import { useLocation } from 'react-router-dom';
import ServiceCardScreen from './ServiceCardScreen';

const Services = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); 
  return (
    <div className='homeMainDiv'>
      <ServicesBentoGrid/>
      <ServiceCardScreen/>
      <HomeFooter/>
      <FinalHomeFooter/>
    </div>
  );
};

export default Services;
