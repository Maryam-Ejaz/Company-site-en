// src/pages/License.js
import {React, useLayoutEffect} from 'react';
import LicenseBento from './LicenseBento';
import FinalHomeFooter from '../HomePage/FinalHomeFooter';
import HomeFooter from '../HomePage/HomeFooter';
import LicenseCard from './LicenseCard';
import { useLocation } from 'react-router-dom';

const License = () => {
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
      document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <div className='homeMainDiv'>
      <LicenseBento id="section1"/>
      <LicenseCard/>
      <HomeFooter/>
      <FinalHomeFooter/>
    </div>
  );
};

export default License;
