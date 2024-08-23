import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import About from './pages/AboutPage/About';
import Home from './pages/HomePage/Home';
import Services from './pages/ServicesPage/Services';
import Portfolio from './pages/PortfolioPage/Portfolio';
import License from './pages/LicensePage/License';
import Clients from './pages/ClientsPage/Clients';
import Contact from './pages/ContactPage/Contact';
import Sidebar from './Sidebar/Sidebar';
import Header from './pages/Header';
import logo from './assets/logo-en.jpg';
import SliderDetail from './pages/ServiceSliderDetail/SliderDetail';
import { SlideProvider } from './pages/ServiceSliderDetail/SlideContent';

// Define pages for the sidebar
const pages = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Services', route: '/services' },
  { name: 'Portfolio', route: '/portfolio' },
  { name: 'License', route: '/license' },
  { name: 'Clients', route: '/clients' },
  { name: 'Contact', route: '/contact' }
];

const Logo = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  z-index: 5;
  text-decoration: none;
  cursor: pointer;

  img {
    width: 4rem;
    height: auto;
    margin-right: 0.5rem;
    border-radius: 50%;
  }

  h3 {
    color: #fff;
    margin: 0;
  }
`;

// Memoize functional components
const MemoizedSidebar = React.memo(Sidebar);
const MemoizedHeader = React.memo(Header);

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // Adjust the timeout duration as needed

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust this breakpoint as needed
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    window.addEventListener('load', () => {
      setIsLoaded(true);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', () => {
        setIsLoaded(true);
      });
    };
  }, []);

  const renderRoutes = useMemo(
    () => (
      <SlideProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/license" element={<License />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/slider-detail" element={<SliderDetail/>} />
      </Routes>
      </SlideProvider>
    ),
    []
  );

  if (!isLoaded) {
    return <SplashScreen />;
  }

  return (
    <ParallaxProvider>
      {isMobile ? (
        <Router>
          <div className="app">
            <Logo to="/" className="logo">
              <img src={logo} alt="Engineersnest" />
              <h3>
                Engineersnest
              </h3>
            </Logo>
            <MemoizedSidebar pages={pages} />
            <main className="_content">{renderRoutes}</main>
          </div>
        </Router>
      ) : (
        <Router>
          <div className="app">
            <MemoizedHeader />
            <main className="_content">{renderRoutes}</main>
          </div>
        </Router>
      )}
    </ParallaxProvider>
  );
}
