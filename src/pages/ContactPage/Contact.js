// src/pages/Contact.js
import {React, useLayoutEffect} from 'react';
import ContactBentoGrid from './ContactBentoGrid';
import FinalHomeFooter from '../HomePage/FinalHomeFooter';
import HomeFooter from '../HomePage/HomeFooter';
import { useLocation } from 'react-router-dom';
import MapSection from './MapSection';
import ContactCards from './ContactCards';

const Contact = () => {
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
      document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <div className='homeMainDiv'>
      <ContactBentoGrid id="section1"/>
      <ContactCards/>
      <MapSection/>
      <HomeFooter/>
      <FinalHomeFooter/>
    </div>
  );
};

export default Contact;
