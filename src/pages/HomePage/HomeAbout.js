// //import React, { useEffect } from 'react';
// //import gsap from 'gsap';
// //import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger from gsap
// import ScrollAnimation from 'react-animate-on-scroll';


// import './HomeAbout.css';


// function HomeAbout() {
  
//   return (
//     <div className="page-component">

//       <div className="div-in-component">
//         {/* <ScrollAnimation animateIn="fadein" animateOut='fadeout'
//          duration={5}
//          > */}
          
          
//         {/* </ScrollAnimation> */}
//         <h3 className="page-component-heading">About Us</h3>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//           fermentum felis vitae eros interdum convallis.
//         </p>
//       </div>
//       <div className='component-space'></div>
//       <div className='component-space'></div>
//       <div className='component-space'></div>
      
//     </div>
//   );
// }

// export default HomeAbout;

import React, { useEffect } from 'react';
import './HomeAbout.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function AboutPage() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Setup ScrollTrigger with a custom scrollerProxy
    ScrollTrigger.scrollerProxy("#main_", {
      scrollTop(value) {
        return arguments.length ? window.scrollTo(value, 0) : window.pageYOffset;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
    });

    // // Refresh ScrollTrigger to update the scrollerProxy
    // ScrollTrigger.refresh();

    // Split text content into spans for each character
    const h1Element = document.querySelector("#page2 p");
    const textContent = h1Element.textContent;
    const spans = textContent.split("").map(char => `<span>${char}</span>`);
    h1Element.innerHTML = spans.join(""); // Update innerHTML with spans

    // Animation using GSAP and ScrollTrigger
    gsap.to("#page2 p span", {
      scrollTrigger: {
        trigger: "#page2", // Adjust trigger to the parent container if needed
        start: "top bottom",
        end: "bottom 60%",
        scroller: "#main_",
        scrub: 0.5,
      },
      stagger: 0.2,
      color: "#000",
    });

    // Clean up on unmount
    return () => {
      ScrollTrigger.removeEventListener("#main_");
    };
  }, []);

  return (
    <div id="main_" className="page-component-about">
      <div id="page2" className='div-in-component-about'>
        <span className="page-component-heading-about">
          Pakistan's Premier Builders
        </span>
        <p className="page-component-text pc-text-a">
          ENGINEERSNEST is a leading construction, fabrication, and interior work company 
          based in Lahore, Pakistan. Since our inception, we have established a reputation for delivering exceptional quality 
          and innovation in every project we undertake. From custom designs to government contracts, ENGINEERS NEST is 
          committed to exceeding expectations and building a better tomorrow for our clients nationwide.
        </p>
      </div>
    </div>
  );
}

export default React.memo(AboutPage);
