import React from 'react';
import HomeAbout from './HomeAbout';
import HomePageSlider from './HomePageSlider';
import { Parallax } from 'react-scroll-parallax';
import './Home.css';
import ExampleOne from '../HomeCompImage/Example01';
import HomeServices from './HomeServices';
import HomeFooter from './HomeFooter';
import FinalHomeFooter from './FinalHomeFooter';
import HomeTeam from './HomeTeam';
import HomeTestimonials from './HomeTestimonials';
import HomeClients from './HomeClients';


const Home = () => {
  return (
      <div className='homeMainDiv'>
        
        {/* <Parallax className="half-screen-parallax" speed={-10}> */}
          <div className='sliderContainer'>
              <HomePageSlider />
          </div>
          {/* </Parallax> */}


          <HomeAbout />


          <HomeServices/>


          {/* Parallax bg */}
          <ExampleOne /> 

          <HomeTestimonials/>

          <HomeTeam/>

          <HomeClients/>

          <HomeFooter/>
          <FinalHomeFooter/>

      </div>
  );
};

export default Home;
