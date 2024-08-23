// import React from 'react';
// import HomeAbout from './HomeAbout';
// import HomePageSlider from './HomePageSlider';
// import { Parallax } from 'react-scroll-parallax';
// import './Home.css';
// import ExampleOne from '../HomeCompImage/Example01';
// import HomeServices from './HomeServices';
// import HomeFooter from './HomeFooter';
// import FinalHomeFooter from './FinalHomeFooter';
// import HomeTeam from './HomeTeam';
// import HomeTestimonials from './HomeTestimonials';
// import HomeClients from './HomeClients';


// const Home = () => {
//   return (
//       <div className='homeMainDiv'>
        
//         {/* <Parallax className="half-screen-parallax" speed={-10}> */}
//           <div className='sliderContainer'>
//               <HomePageSlider />
//           </div>
//           {/* </Parallax> */}


//           <HomeAbout />


//           <HomeServices/>


//           {/* Parallax bg */}
//           <ExampleOne /> 

//           <HomeTestimonials/>

//           <HomeTeam/>

//           <HomeClients/>

//           <HomeFooter/>
//           <FinalHomeFooter/>

//       </div>
//   );
// };

// export default Home;







import React, { useEffect } from 'react';
import HomeAbout from './HomeAbout';
import HomePageSlider from './HomePageSlider';
//import { Parallax } from 'react-scroll-parallax';
import HomeServices from './HomeServices';
import HomeFooter from './HomeFooter';
import FinalHomeFooter from './FinalHomeFooter';
import HomeTeam from './HomeTeam';
import HomeTestimonials from './HomeTestimonials';
import HomeClients from './HomeClients';
import './Home.css';
import HomeParallax from './HomeParallax';
import HomeServiceSlider from './HomeServiceSlider';
import { useLocation } from 'react-router-dom';

// Memoize imported components
const MemoizedHomeSSlider = React.memo(HomeServiceSlider);
const MemoizedHomeAbout = React.memo(HomeAbout);
const MemoizedHomePageSlider = React.memo(HomePageSlider);
const MemoizedHomeParallax = React.memo(HomeParallax);
const MemoizedHomeServices = React.memo(HomeServices);
const MemoizedHomeFooter = React.memo(HomeFooter);
const MemoizedFinalHomeFooter = React.memo(FinalHomeFooter);
const MemoizedHomeTeam = React.memo(HomeTeam);
const MemoizedHomeTestimonials = React.memo(HomeTestimonials);
const MemoizedHomeClients = React.memo(HomeClients);

const Home = React.memo(() => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); 
 
  return (
    <div className='homeMainDiv'>
      <div className='sliderContainer'>
        <MemoizedHomePageSlider />
      </div>
      <MemoizedHomeSSlider/>
      <MemoizedHomeAbout />
      <MemoizedHomeServices />
      <MemoizedHomeParallax />
      {/* <MemoizedExampleOne /> */}
      <MemoizedHomeTestimonials />
      <MemoizedHomeTeam />
      <MemoizedHomeClients />
      <MemoizedHomeFooter />
      <MemoizedFinalHomeFooter />
    </div>
  );
});

export default Home;
