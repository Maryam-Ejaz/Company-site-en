// src/pages/License.js
import {React, useEffect} from 'react';
import LicenseBento from './LicenseBento';
import FinalHomeFooter from '../HomePage/FinalHomeFooter';
import HomeFooter from '../HomePage/HomeFooter';
import LicenseCard from './LicenseCard';
import { useLocation } from 'react-router-dom';

const License = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); 
  return (
    <div className='homeMainDiv'>
      <LicenseBento/>
      <LicenseCard/>
      <HomeFooter/>
      <FinalHomeFooter/>
    </div>
  );
};

export default License;
