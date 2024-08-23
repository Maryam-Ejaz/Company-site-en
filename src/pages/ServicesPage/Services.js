// src/pages/Services.js
import {React, useLayoutEffect} from 'react';
import ServicesBentoGrid from './ServicesBentoGrid';
import FinalHomeFooter from '../HomePage/FinalHomeFooter';
import HomeFooter from '../HomePage/HomeFooter';
import { useLocation } from 'react-router-dom';
import ServiceCardScreen from './ServiceCardScreen';

const Services = () => {
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
      document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <div className='homeMainDiv'>
      <ServicesBentoGrid id="section1"/>
      <ServiceCardScreen/>
      <HomeFooter/>
      <FinalHomeFooter/>
    </div>
  );
};

export default Services;
