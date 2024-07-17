import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/HomePage/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import License from './pages/License';
import Certification from './pages/Certification';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Sidebar from './Sidebar/Sidebar';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './pages/Header';
import logo from "./assets/logo-en.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SplashScreen from './pages/SplashScreen';



// Define pages for the sidebar
const pages = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Services', route: '/services' },
  { name: 'Portfolio', route: '/portfolio' },
  { name: 'License', route: '/license' },
  { name: 'Certification', route: '/certification' },
  { name: 'Clients', route: '/clients' },
  { name: 'Contact', route: '/contact' }

];

// Main App component
export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  

  const Logo = styled(Link)`
  position: absolute;
  top: 1rem; /* Adjust top position as needed */
  left: 1rem; /* Adjust left position as needed */
  display: flex;
  align-items: center;
  z-index: 5; /* Ensure it's above other content */
  text-decoration: none; /* Ensure no default underline */
  cursor: pointer;

  img {
    width: 4rem;
    height: auto;
    margin-right: 0.5rem;
    border-radius: 50%;
  }

  h3 {
    color: #fff; /* Make text color inherit */
    margin: 0;
  }
`;

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // Adjust the timeout duration as needed
    // Function to check screen size and update isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust this breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Add event listener for window load
    window.addEventListener('load', () => {
      setIsLoaded(true);
    }, 3000);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', () => {
        setIsLoaded(true);
      });
    };
  }, []);

  if (!isLoaded) {
    return <SplashScreen/>
  }

  return (
    
    <ParallaxProvider>
      {isMobile ? (
        <Router>
          <div className="app">
          <Logo to="/" className="logo">
              <img src={logo} alt="Engineers Nest" />
              <h3>Engineers <br/> Nest</h3>
            </Logo>
            <Sidebar pages={pages} />

            <main className="_content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/license" element={<License />} />
                <Route path="/certification" element={<Certification />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </Router>
      ) : (
        <Router>
          <div className="app">
            <Header />
            <main className="_content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/license" element={<License />} />
                <Route path="/certification" element={<Certification />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </Router>
      )}
    </ParallaxProvider>
  );
}
