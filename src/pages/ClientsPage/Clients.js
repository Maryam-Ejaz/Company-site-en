// src/pages/Clients.js
import {React, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ClientsBentoGrid from './ClientsBentoGrid';
import FinalHomeFooter from '../HomePage/FinalHomeFooter';
import HomeFooter from '../HomePage/HomeFooter';
import ClientCard from './ClientCard';

const Clients = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); 
  return (
    <div className='homeMainDiv'>
      <ClientsBentoGrid/>
      <ClientCard/>
      <HomeFooter/>
      <FinalHomeFooter/>
      
    </div>
  );
};

export default Clients;
