
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeServices.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import construction from "../../assets/construction.jpg";
import fabrication from "../../assets/fabrication.jpeg";
import woodwork from "../../assets/woodwork2.jpg";
import electrical from "../../assets/electrical.jpg";

const HomeServices = () => {
    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
    
        // Setup ScrollTrigger with a custom scrollerProxy
        ScrollTrigger.scrollerProxy("#main2", {
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
    
        // Refresh ScrollTrigger to update the scrollerProxy
        ScrollTrigger.refresh();
    
        // Split text content into spans for each character
        const h1Element = document.querySelector("#page3 p");
        const textContent = h1Element.textContent;
        const spans = textContent.split("").map(char => `<span>${char}</span>`);
        h1Element.innerHTML = spans.join(""); // Update innerHTML with spans
    
        // Animation using GSAP and ScrollTrigger
        gsap.to("#page3 p span", {
          scrollTrigger: {
            trigger: "#page3", // Adjust trigger to the parent container if needed
            start: "top bottom",
            end: "top 11%",
            scroller: "#main2",
            scrub: 0.5,
          },
          stagger: 0.2,
          color: "#fff",
        });

    
        // Clean up on unmount
        return () => {
          ScrollTrigger.removeEventListener("#main2");
        };
      }, []);
    return (
        <div id='main2' className="services-section">
            <div id='page3' className='div-in-component'>
                <h3 className="page-component-heading service-heading">Unmatched Service Spectrum</h3>
                <p className="page-component-text">We specialize in a diverse array of services designed to meet
                    every construction, fabrication, and woodwork need. From conceptualization to completion, our
                    team excels in delivering high-quality solutions tailored to exceed expectations across projects
                    of all sizes and complexities.
                </p>
                <div className="service-container">
                    <div className="service-box">
                        <div className="service-content">
                            <img src={construction} alt="Construction" />
                            <h2>Construction Solutions</h2>
                            <Link to="/hire" className="hire-link">Read More</Link>
                        </div>
                    </div>
                    <div className="service-box">
                        <div className="service-content">
                            <img src={fabrication} alt="Fabrication" />
                            <h2>Fabrication Excellence</h2>
                            <Link to="/hire" className="hire-link">Read More</Link>
                        </div>
                    </div>
                    <div className="service-box">
                        <div className="service-content">
                            <img src={woodwork} alt="Wood Work" />
                            <h2>Woodwork Mastery</h2>
                            <Link to="/hire" className="hire-link">Read More</Link>
                        </div>
                    </div>
                    <div className="service-box">
                        <div className="service-content">
                            <img src={electrical} alt="Electrical  Work" />
                            <h2>Electrical <br/> Work</h2>
                            <Link to="/hire" className="hire-link">Read More</Link>
                        </div>
                    </div>
                </div>
                <span className="service-component-text">And much more....
                </span>
            </div>
        </div>
    );
};

export default HomeServices;
