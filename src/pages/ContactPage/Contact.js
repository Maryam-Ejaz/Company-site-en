// src/pages/Contact.js
import {React, useEffect} from 'react';
import ContactBentoGrid from './ContactBentoGrid';
import FinalHomeFooter from '../HomePage/FinalHomeFooter';
import HomeFooter from '../HomePage/HomeFooter';
import { useLocation } from 'react-router-dom';
import MapSection from './MapSection';
import ContactCards from './ContactCards';

const Contact = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); 
  return (
    <div className='homeMainDiv'>
      <ContactBentoGrid/>
      <ContactCards/>
      <MapSection/>
      <HomeFooter/>
      <FinalHomeFooter/>
    </div>
  );
};

export default Contact;
