// src/pages/Clients.js
import {React, useLayoutEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ClientsBentoGrid from './ClientsBentoGrid';
import FinalHomeFooter from '../HomePage/FinalHomeFooter';
import HomeFooter from '../HomePage/HomeFooter';
import ClientCard from './ClientCard';

const Clients = () => {
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
      document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <div className='homeMainDiv'>
      <ClientsBentoGrid id="section1"/>
      <ClientCard/>
      <HomeFooter/>
      <FinalHomeFooter/>
      
    </div>
  );
};

export default Clients;
